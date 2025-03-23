import React from "react";
import { Card, Typography, Row, Col, Divider, Table } from "antd";
import { PageHeader } from "@ant-design/pro-components";
import { MedicineBoxOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const columns = [
  {
    title: "Food Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Recommended Foods",
    dataIndex: "recommended",
    key: "recommended",
  },
  {
    title: "Foods to Avoid",
    dataIndex: "avoid",
    key: "avoid",
  },
];

const data = [
  {
    key: "1",
    category: "Proteins",
    recommended: "Skinless poultry, fish, egg whites, tofu, lentils (in moderation)",
    avoid: "Red meat, processed meats (bacon, sausages), organ meats, high-protein diets",
  },
  {
    key: "2",
    category: "Fruits",
    recommended: "Apples, berries, grapes, pineapple, pears, cherries, watermelon",
    avoid: "Bananas, oranges, avocados, kiwi, dried fruits (high potassium)",
  },
  {
    key: "3",
    category: "Vegetables",
    recommended: "Cabbage, cauliflower, bell peppers, onions, carrots, cucumbers",
    avoid: "Potatoes, tomatoes, spinach, mushrooms, pumpkin (high potassium)",
  },
  {
    key: "4",
    category: "Grains",
    recommended: "White rice, pasta, bread, oats, cornflakes, barley",
    avoid: "Whole wheat bread, brown rice, quinoa, bran cereals (high phosphorus)",
  },
  {
    key: "5",
    category: "Dairy",
    recommended: "Unsalted butter, small amounts of milk, rice or almond milk",
    avoid: "Cheese, yogurt, full-fat dairy, ice cream (high phosphorus and potassium)",
  },
  {
    key: "6",
    category: "Beverages",
    recommended: "Water, herbal teas, cranberry juice, lemon water",
    avoid: "Soda, coffee, alcohol, energy drinks, high-phosphorus drinks (colas, chocolate milk)",
  },
  {
    key: "7",
    category: "Sweeteners",
    recommended: "Honey, maple syrup, jam (in moderation)",
    avoid: "Artificial sweeteners, high-sugar foods, molasses (high potassium)",
  },
];

const About = () => {
  return (
    <div className="mainpage" style={{ padding: "24px" }}>
      <PageHeader
        title="Chronic Kidney Disease Prediction"
        subTitle="Using Machine Learning Algorithms"
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "8px",
          marginBottom: "24px",
        }}
      />

      <Card
        style={{
          marginBottom: "24px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title level={4} className="sub-stage">Introduction</Title>
        <Paragraph>
          Chronic Kidney Disease (CKD) is a significant health concern due to its increasing prevalence. 
          This project explores the effectiveness of machine learning algorithms in CKD prediction using 
          a minimal yet informative subset of features.
        </Paragraph>
      </Card>
      <Divider />


      <Title level={4} style={{ marginBottom: "16px" }}>
        Machine Learning Algorithms
      </Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card
            title="Random Forest"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              width: "100%",
              height: "100%",
            }}
          >
            <Paragraph>
              <strong className="sub-stage">Random Forest:</strong>
              <ul>
                <li>Powerful algorithm used for classification and regression.</li>
                <li>Uses multiple decision trees to improve accuracy and reduce overfitting.</li>
                <li>Each tree is trained on a randomly selected subset of data.</li>
                <li>
                  Final predictions are based on:
                  <ul>
                    <li><strong>Majority voting</strong> for classification tasks.</li>
                    <li><strong>Averaging</strong> for regression tasks.</li>
                  </ul>
                </li>
                <li>Effectively handles large datasets and missing values.</li>
                <li>Widely used due to its robustness and reliability.</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

        <Col span={12}>
          <Card
            title="XGBoost"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              width: "100%",
              height: "100%",
            }}
          >
            <Paragraph>
              <strong className="sub-stage">XGBoost (Extreme Gradient Boosting):</strong>
              <ul>
                <li>Highly efficient and powerful algorithm based on gradient boosting.</li>
                <li>Used for classification and regression due to its speed and accuracy.</li>
                <li>Constructs decision trees sequentially, with each new tree correcting previous errors.</li>
                <li>
                  Features include:
                  <ul>
                    <li><strong>Regularization</strong> (L1 & L2) to prevent overfitting.</li>
                    <li><strong>Parallel processing</strong> for faster computation.</li>
                    <li><strong>Built-in handling of missing values</strong> for robustness.</li>
                  </ul>
                </li>
                <li>Popular in data science competitions and real-world applications.</li>
              </ul>
            </Paragraph>
            
          </Card>
          
        </Col>
        <Card
        style={{
          marginBottom: "24px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title level={4}>Our Website's Purpose</Title>
        <Paragraph>
          Our platform aims to provide accurate CKD predictions using advanced machine learning models like 
          <strong className="sub-stage"> XGBoost</strong> and <strong className="sub-stage">Random Forest</strong>. By analyzing crucial health indicators—such as 
          blood test results (creatinine, urea), urine analysis (albumin levels), and patient demographics (age, medical history)—our 
          system helps detect CKD risk in its early stages.
        </Paragraph>
        <Paragraph>
          <strong className="sub-stage">Our Goals:</strong>
          <ul>
            <li>Empower healthcare professionals and individuals with timely risk assessment tools.</li>
            <li>Compare the predictive accuracy of XGBoost and Random Forest models.</li>
            <li>Raise awareness about CKD causes, symptoms, and prevention strategies.</li>
            <li>Ensure user-friendly access to our findings and facilitate potential scalability for mobile apps or clinical software.</li>
            <li>Contribute to research by sharing our methodology and results to support innovation in predictive healthcare.</li>
          </ul>
        </Paragraph>
        <Paragraph>
          By integrating cutting-edge technology with accessible healthcare solutions, we strive to mitigate the global burden of CKD.
        </Paragraph>
      </Card>
      <Divider />
      </Row>

      
    </div>
  );
};

export default About;
