import React from "react";
import { Card, Typography, Row, Col, Divider } from "antd";
import { PageHeader } from "@ant-design/pro-components";
import { DatabaseOutlined, LineChartOutlined, CodeOutlined } from "@ant-design/icons"; // Import icons
import AccLogo from "../../assets/Acculer-Logo/acc.png";
import Data from "../../assets/Acculer-Logo/data.png";
import Alg from "../../assets/Acculer-Logo/alg.png";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: "24px", }}>
      {/* Page Header */}
      <PageHeader
        title="Chronic Kidney Disease Prediction"
        subTitle="Using Machine Learning Algorithms"
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "8px",
          color: "#fff",
          marginBottom: "24px",
        }}
      />

      <Card
        style={{
          marginBottom: "24px",
          background: "#white",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Title level={4} style={{ color: "#333" }}>
          Introduction
        </Title>
        <Paragraph>
          Chronic Kidney Disease (CKD) is one of the most critical health
          problems due to its increasing prevalence. In this paper, we aim to
          test the ability of machine learning algorithms for the prediction of
          chronic kidney disease using the smallest subset of features.
        </Paragraph>
      </Card>

      <Title level={4} style={{ marginBottom: "16px", color: "#333" }}>
        Machine Learning Algorithms
      </Title>
      <Row gutter={[16, 16]} style={{ display: "flex", flexWrap: "nowrap" }}>
      {/* Random Forest */}
      <Col flex={1}> {/* flex={1} ensures equal width */}
        <Card
          title="Random Forest"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            height: "100%", // Ensure equal height
          }}
        >
          <Paragraph>
            Random Forest builds multiple decision trees and merges them together
            to get a more accurate and stable prediction.
          </Paragraph>
        </Card>
      </Col>

      {/* XGBoost */}
      <Col flex={1}> {/* flex={1} ensures equal width */}
        <Card
          title="XGBoost"
          style={{
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            height: "100%", // Ensure equal height
          }}
        >
          <Paragraph>
            XGBoost is a gradient boosting algorithm designed for speed and
            performance, widely used in structured data problems.
          </Paragraph>
        </Card>
      </Col>
    </Row>
<Divider/>
    <Title level={4} style={{ marginBottom: "16px", color: "#333" }}>
       Technical 
      </Title>
    
      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              height: "100%", // Ensure all cards have the same height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Center content vertically
            }}
          >
            <div style={{ textAlign: "center" }}>
            <img
               src={Data}
               alt="Kidney Disease"
               style={{ width: "80px", height: "80px", padding: "0px", borderRadius: "10px" }}
             />{/* Icon */}              <Title level={4} style={{ color: '#333', marginTop: "8px" }}>
                Dataset
              </Title>
            </div>
            <Paragraph>
              We have used the dataset available on Kaggle -{' '}
              <strong>Chronic Kidney Disease Prediction</strong>. After classifying
              the data, preprocessing, and performing Exploratory Data Analysis
              (EDA), this dataset was used for training and testing our models.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              height: "100%", // Ensure all cards have the same height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Center content vertically
            }}
          >
            <div style={{ textAlign: "center" }}>
               <img
               src={AccLogo}
               alt="Kidney Disease"
               style={{ width: "80px", height: "80px", padding: "0px", borderRadius: "10px" }}
             />{/* Icon */}
              <Title level={4} style={{ color: '#333', marginTop: "8px" }}>
                Accuracy
              </Title>
            </div>
            <Paragraph>
              Random Forest and XGBoost have shown high accuracy in predicting
              CKD. These models outperform traditional methods in structured data
              prediction.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              height: "100%", // Ensure all cards have the same height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", // Center content vertically
            }}
          >
            <div style={{ textAlign: "center" }}>

            <img
               src={Alg}
               alt="Kidney Disease"
               style={{ width: "80px", height: "80px", padding: "0px", borderRadius: "10px" }}
             />
              <Title level={4} style={{ color: '#333', marginTop: "8px" }}>
                Algorithm Details
              </Title>
            </div>
            <Paragraph>
              <strong>Random Forest</strong>: A supervised learning algorithm
              that builds multiple decision trees and merges them for accurate
              predictions.
            </Paragraph>
            <Paragraph>
              <strong>XGBoost</strong>: A gradient-boosted decision tree
              algorithm designed for speed and performance, widely used in
              structured data prediction.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;