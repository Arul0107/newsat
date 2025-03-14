import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.metrics import accuracy_score, confusion_matrix
import xgboost as xgb  

# Suppress warnings
import warnings
warnings.filterwarnings("ignore")

# Light theme with custom CSS
st.markdown(
    """
    <style>
        body {
            background-color: #ffffff !important;
            color: #000000 !important;
        }
        .stApp {
            background-color: #f8f9fa;
        }
    </style>
    """,
    unsafe_allow_html=True,
)

# Streamlit app title

# File uploader for dataset upload
data_file = st.file_uploader(" Upload a CSV dataset", type=["csv"])

if data_file is not None:
    # Read the uploaded dataset
    df = pd.read_csv(data_file)
    st.write("### 📜 Uploaded Dataset:")
    st.dataframe(df.head())

    # Preprocessing steps
    if 'id' in df.columns:
        df.drop('id', axis=1, inplace=True)

    # Handle missing values
    df.fillna(df.median(numeric_only=True), inplace=True)
    for col in df.select_dtypes(include='object').columns:
        df[col].fillna(df[col].mode()[0], inplace=True)

        # Encode categorical variables
        label_encoder = LabelEncoder()
    for col in df.select_dtypes(include='object').columns:
        df[col] = label_encoder.fit_transform(df[col])

    # Split dataset
    X = df.drop('classification', axis=1)
    y = df['classification']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Feature selection
    selector = SelectKBest(score_func=f_classif, k=10)
    X_train_selected = selector.fit_transform(X_train, y_train)
    X_test_selected = selector.transform(X_test)
    selected_features = X.columns[selector.get_support()]

    # Standardize numerical features
    scaler = StandardScaler()
    X_train_selected = scaler.fit_transform(X_train_selected)
    X_test_selected = scaler.transform(X_test_selected)

    # Train models
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_model.fit(X_train_selected, y_train)
    xgb_model = xgb.XGBClassifier(n_estimators=100, use_label_encoder=False, eval_metric='logloss', random_state=42)
    xgb_model.fit(X_train_selected, y_train)

    # Predictions
    rf_predictions = rf_model.predict(X_test_selected)
    xgb_predictions = xgb_model.predict(X_test_selected)

    # Model evaluation
    rf_accuracy = accuracy_score(y_test, rf_predictions)
    xgb_accuracy = accuracy_score(y_test, xgb_predictions)

    # Display accuracy comparison
    st.write("### 📊 Model Accuracy Comparison")
    fig, ax = plt.subplots()
    ax.bar(["Random Forest", "XGBoost"], [rf_accuracy, xgb_accuracy], color=['blue', 'red'])
    ax.set_ylabel("Accuracy")
    ax.set_title("Model Accuracy Comparison")
    st.pyplot(fig)

    # Confusion Matrices
    st.write("### 📌 Confusion Matrices")
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))
    sns.heatmap(confusion_matrix(y_test, rf_predictions), annot=True, fmt='d', cmap='Blues', ax=axes[0])
    axes[0].set_title("Random Forest Confusion Matrix")
    sns.heatmap(confusion_matrix(y_test, xgb_predictions), annot=True, fmt='d', cmap='Reds', ax=axes[1])
    axes[1].set_title("XGBoost Confusion Matrix")
    st.pyplot(fig)

    # Model selection for prediction
    model_choice = st.selectbox("🛠️ Select Model for Prediction", ["Random Forest", "XGBoost"])

    # Individual Record Entry
    st.write("### 🧪 Predict CKD for an Individual Record")
    individual_data = {}
    for col in X.columns:
        if col in df.select_dtypes(include=['object']).columns:
            unique_values = df[col].unique()
            individual_data[col] = st.selectbox(f"{col}", options=unique_values)
        else:
            individual_data[col] = st.number_input(f"{col}", value=float(df[col].median()))


 