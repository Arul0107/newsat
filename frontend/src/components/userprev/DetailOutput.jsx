import React, { useState, useEffect } from "react";
import { Collapse, Row, Col, Image, Card, Typography, Spin, Modal, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./DetailOutput.css";

import dataImage from "../../assets/Acculer-Logo/bar.png";
import random from "../../assets/Acculer-Logo/random.png";
import xboost from "../../assets/Acculer-Logo/xboost.png";
import Data from "../../assets/Acculer-Logo/data.png";
import AccLogo from "../../assets/Acculer-Logo/acc.png";
import Alg from "../../assets/Acculer-Logo/alg.png";

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const DetailOutput = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const images = [dataImage, random, xboost];

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const getCardSpan = () => {
    if (screenSize < 576) return 24;
    if (screenSize < 992) return 12;
    return 8;
  };

  const cardData = [
    {
      "src": Data,
      "title": "Dataset",
      "desc": "We used the Kaggle dataset: Chronic Kidney Disease Prediction.",
      "details": "More details about the dataset...",
      "content": {
        "understanding_dataset": {
          "title": "Understanding the Dataset for Chronic Kidney Disease Prediction",
          "sections": [
            {
              "title": "What Kind of Dataset is Used?",
              "description": "To predict Chronic Kidney Disease (CKD), we use a structured dataset that contains various medical parameters related to kidney function. The dataset should have patient medical reports with numerical and categorical values representing health indicators."
            },
            {
              "title": "Why Use a CSV File?",
              "description": "A CSV (Comma-Separated Values) file is the preferred format for uploading data because:",
              "points": [
                "It is a simple text-based format that stores data in tabular form.",
                "It is lightweight and can be easily processed by machine learning models.",
                "It is widely supported by data analysis tools like Python, Excel, and databases.",
                "It ensures structured data representation with rows (records) and columns (attributes)."
              ]
            },
            {
              "title": "What Should the CSV File Contain?",
              "description": "Your CSV file should contain patient medical records with specific columns representing health indicators."
            },
            {
              "title": "How Should the CSV File Be Structured?",
              "description": "The CSV file should be structured as follows:",
              "points": [
                "Each row in the file should represent a single patient's data.",
                "Each column should be correctly labeled as mentioned above.",
                "Missing values should be handled properly before uploading (empty values can affect predictions).",
                "The last column, CLASS, should contain 1 (CKD Present) or 0 (No CKD) for supervised learning models."
              ]
            }
          ]
        }
      }
    },
    {
      "src": AccLogo,
      "title": "Accuracy in CKD Prediction",
      "desc": "Learn about accuracy, its importance, and how to improve it.",
      "details": "Understanding accuracy in CKD prediction is crucial for evaluating model performance.",
      "content": {
        "understanding_accuracy": {
          "title": "Understanding Accuracy in CKD Prediction",
          "sections": [
            {
              "title": "What is Accuracy?",
              "description": "Accuracy is a measure of how well a machine learning model correctly predicts Chronic Kidney Disease (CKD) or No CKD. It represents the percentage of correct predictions out of the total cases tested."
            },
            {
              "title": "How is Accuracy Calculated?",
              "description": "Accuracy is calculated as the ratio of correct predictions to the total number of predictions. For example, if the model analyzes 100 patient records and correctly predicts 90, the accuracy is 90%."
            },
            {
              "title": "Why is Accuracy Important?",
              "description": "Accuracy is critical for reliable CKD detection because:",
              "points": [
                "It ensures reliable CKD detection.",
                "It reduces misclassification, helping doctors make better decisions.",
                "Higher accuracy indicates better model performance."
              ]
            },
            {
              "title": "Accuracy in Random Forest vs. XGBoost",
              "description": "Different models have varying accuracy levels:",
              "points": [
                "Random Forest (RF): Works well with small to medium datasets, handling missing values effectively.",
                "XGBoost: More advanced, improving accuracy by learning from mistakes, especially with large datasets."
              ]
            },
            {
              "title": "How to Improve Accuracy?",
              "description": "To improve accuracy, consider the following:",
              "points": [
                "Use high-quality, clean, and well-structured datasets.",
                "Perform feature engineering to select relevant features.",
                "Tune hyperparameters for better model performance.",
                "Use advanced algorithms like XGBoost for large datasets.",
                "Regularly validate the model using cross-validation techniques."
              ]
            }
          ]
        }
      }
    },
    {
      "src": Alg,
      "title": "Algorithm",
      "desc": "Learn about the algorithms used for CKD prediction.",
      "details": "Details about the algorithms used in CKD prediction.",
      "content": {
        "understanding_algorithms": {
          "title": "Understanding Algorithms for CKD Prediction",
          "sections": [
            {
              "title": "Random Forest (RF)",
              "description": "Random Forest is an ensemble learning method that uses multiple decision trees to improve prediction accuracy and reduce overfitting.",
              "points": [
                "Works well with small to medium datasets.",
                "Handles missing values effectively.",
                "Provides feature importance scores to identify key predictors.",
                "Less prone to overfitting compared to individual decision trees."
              ]
            },
            {
              "title": "XGBoost",
              "description": "XGBoost is an advanced gradient boosting algorithm that improves accuracy by learning from mistakes and optimizing performance.",
              "points": [
                "Ideal for large datasets with complex patterns.",
                "Uses gradient boosting to minimize errors iteratively.",
                "Supports parallel processing for faster training.",
                "Provides better accuracy compared to traditional algorithms."
              ]
            },
            {
              "title": "Why Use These Algorithms?",
              "description": "Both Random Forest and XGBoost are widely used for CKD prediction because:",
              "points": [
                "They handle both numerical and categorical data effectively.",
                "They provide interpretable results, such as feature importance.",
                "They are robust to noise and outliers in the data.",
                "They can be fine-tuned for better performance."
              ]
            },
            {
              "title": "How to Choose the Right Algorithm?",
              "description": "The choice of algorithm depends on the dataset and problem requirements:",
              "points": [
                "Use Random Forest for smaller datasets or when interpretability is important.",
                "Use XGBoost for larger datasets or when higher accuracy is required.",
                "Experiment with both algorithms and compare their performance."
              ]
            }
          ]
        }
      }
    }
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleRedirect = () => {
    navigate('/prediction');
  };

  return (
    <div className="app-container" style={{ padding: screenSize < 576 ? "12px" : "16px" }}>
      <Row
        gutter={[
          screenSize < 576 ? 8 : 16,
          screenSize < 576 ? 8 : 16
        ]}
        align="top"
      >
        {screenSize < 768 && (
          <Col xs={24}>
            <Title
              level={3}
              style={{
                textAlign: "center",
                margin: "0 0 16px 0",
                fontSize: screenSize < 576 ? "20px" : "24px"
              }}
            >
              CKD Prediction Technical Details
            </Title>
          </Col>
        )}

        <Col
          xs={24}
          md={12}
          order={screenSize < 768 ? 2 : 1}
          style={{ marginBottom: screenSize < 768 ? "16px" : 0 }}
        >
          <Title
            level={4}
            style={{
              marginBottom: "16px",
              fontSize: screenSize < 576 ? "18px" : "20px"
            }}
          >
            Technical Details
          </Title>
          <Row gutter={[screenSize < 576 ? 8 : 16, screenSize < 576 ? 8 : 16]}>
            {cardData.map((item, index) => (
              <Col xs={getCardSpan()} key={index}>
                <Card
                  hoverable
                  onClick={() => handleCardClick(item)}
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                  }}
                  bodyStyle={{
                    padding: screenSize < 576 ? "12px" : "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%"
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: screenSize < 576 ? "60px" : "80px",
                        height: screenSize < 576 ? "60px" : "80px",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                  <div>
                    <Title
                      level={4}
                      style={{
                        fontSize: screenSize < 576 ? "16px" : "18px",
                        margin: "8px 0"
                      }}
                    >
                      {item.title}
                    </Title>
                    <Paragraph
                      style={{
                        fontSize: screenSize < 576 ? "12px" : "14px",
                        margin: 0
                      }}
                    >
                      {item.desc}
                    </Paragraph>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col
          xs={24}
          md={12}
          order={screenSize < 768 ? 1 : 2}
          style={{ marginBottom: screenSize < 768 ? "16px" : 0 }}
        >
          <Title
            level={4}
            style={{
              marginBottom: "16px",
              fontSize: screenSize < 576 ? "18px" : "20px"
            }}
          >
            Model Performance Analysis
          </Title>
          <Collapse
            accordion
            defaultActiveKey={["0"]}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
            }}
          >
            <Panel
              header={
                <span style={{ fontSize: screenSize < 576 ? "14px" : "16px" }}>
                  Model Accuracy Comparison
                </span>
              }
              key="0"
            >
              {loading ? (
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px"
                }}>
                  <Spin tip="Loading image..." />
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={images[0]}
                    alt="Model Accuracy Comparison"
                    className="accordion-image"
                    preview={true}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain"
                    }}
                  />
                </div>
              )}
            </Panel>
            <Panel
              header={
                <span style={{ fontSize: screenSize < 576 ? "14px" : "16px" }}>
                  Random Forest Confusion Matrix
                </span>
              }
              key="1"
            >
              {loading ? (
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px"
                }}>
                  <Spin tip="Loading image..." />
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={images[1]}
                    alt="Random Forest Confusion Matrix"
                    className="accordion-image"
                    preview={true}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain"
                    }}
                  />
                </div>
              )}
            </Panel>
            <Panel
              header={
                <span style={{ fontSize: screenSize < 576 ? "14px" : "16px" }}>
                  XGBoost Confusion Matrix
                </span>
              }
              key="2"
            >
              {loading ? (
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "20px"
                }}>
                  <Spin tip="Loading image..." />
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <Image
                    src={images[2]}
                    alt="XGBoost Confusion Matrix"
                    className="accordion-image"
                    preview={true}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      objectFit: "contain"
                    }}
                  />
                </div>
              )}
            </Panel>

          </Collapse>

          {screenSize < 576 && (
            <Paragraph
              style={{
                fontSize: "12px",
                textAlign: "center",
                marginTop: "8px",
                color: "#666"
              }}
            >
              Tap on images to enlarge for better viewing
            </Paragraph>
          )}
        </Col>
      </Row>

      <Modal
        title={selectedCard?.title}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="back" onClick={handleModalClose}>
            Close
          </Button>,
          <Button key="submit" type="primary" onClick={handleRedirect}>
            Go to Prediction
          </Button>,
        ]}
        style={{ maxWidth: "100%" }}
      >
        <p>{selectedCard?.details}</p>
        {selectedCard?.content && (
          <Collapse accordion>
            {Object.entries(selectedCard.content).map(([key, value]) => (
              <Panel header={value.title} key={key}>
                {value.sections.map((section, index) => (
                  <div key={index}>
                    <Title level={5}>{section.title}</Title>
                    <Paragraph>{section.description}</Paragraph>
                    {section.points && (
                      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                        {section.points.map((point, i) => (
                          <li key={i} style={{ marginBottom: "8px" }}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </Panel>
            ))}
          </Collapse>
        )}
      </Modal>
    </div>
  );
};

export default DetailOutput;