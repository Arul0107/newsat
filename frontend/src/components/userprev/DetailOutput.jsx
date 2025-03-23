import React, { useState, useEffect } from "react";
import { Collapse, Row, Col, Image, Card, Typography, Spin } from "antd";
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
  const images = [dataImage, random, xboost];

  // Handle responsive sizing
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Simulate image loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Determine card size based on screen width
  const getCardSpan = () => {
    if (screenSize < 576) return 24; // xs - full width
    if (screenSize < 992) return 12; // sm/md - half width
    return 8; // lg and above - one third
  };

  // Technical cards data
  const cardData = [
    {
      src: Data,
      title: "Dataset",
      desc: "We used the Kaggle dataset: Chronic Kidney Disease Prediction.",
    },
    {
      src: AccLogo,
      title: "Accuracy",
      desc: "Random Forest and XGBoost achieved high accuracy in CKD prediction.",
    },
    {
      src: Alg,
      title: "Algorithm Details",
      desc: "Random Forest uses multiple decision trees. XGBoost optimizes performance.",
    },
  ];

  return (
    <div className="app-container" style={{ padding: screenSize < 576 ? "12px" : "16px" }}>
      <Row 
        gutter={[
          screenSize < 576 ? 8 : 16, 
          screenSize < 576 ? 8 : 16
        ]} 
        align="top"
      >
        {/* Main Title - Only visible on small screens */}
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
        
        {/* Order switches based on screen size for better mobile UX */}
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
          
          {/* Additional note for mobile */}
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
    </div>
  );
};

export default DetailOutput;