import React from "react";
import { Card, Typography, Row, Col, Divider } from "antd";
import { PageHeader } from "@ant-design/pro-components";

// Import images correctly
import AccLogo from "/src/assets/Acculer-Logo/acc.png"; // Ensure correct path & lowercase
import Data from "/src/assets/Acculer-Logo/data.png";
import Alg from "/src/assets/Acculer-Logo/alg.png";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: "24px" }}>
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
        <Title level={4}>Introduction</Title>
        <Paragraph>
          Chronic Kidney Disease (CKD) is one of the most critical health
          problems due to its increasing prevalence. This project aims to test
          the ability of machine learning algorithms for CKD prediction using a
          minimal subset of features.
        </Paragraph>
      </Card>

      <Title level={4} style={{ marginBottom: "16px" }}>
        Machine Learning Algorithms
      </Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Random Forest" style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <Paragraph>
              Random Forest builds multiple decision trees and merges them to
              get a more accurate and stable prediction.
            </Paragraph>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="XGBoost" style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <Paragraph>
              XGBoost is a gradient boosting algorithm designed for speed and
              performance, widely used in structured data problems.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Divider />

      <Title level={4} style={{ marginBottom: "16px" }}>Technical</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ textAlign: "center" }}>
              <img src={Data} alt="Dataset" style={{ width: "80px", height: "80px" }} />
              <Title level={4} style={{ marginTop: "8px" }}>Dataset</Title>
            </div>
            <Paragraph>
              We used the Kaggle dataset: <strong>Chronic Kidney Disease Prediction</strong>.
              After preprocessing and Exploratory Data Analysis (EDA), this dataset was used for training.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ textAlign: "center" }}>
              <img src={AccLogo} alt="Accuracy" style={{ width: "80px", height: "80px" }} />
              <Title level={4} style={{ marginTop: "8px" }}>Accuracy</Title>
            </div>
            <Paragraph>
              Random Forest and XGBoost achieved high accuracy in CKD prediction,
              outperforming traditional methods in structured data classification.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8}>
          <Card style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ textAlign: "center" }}>
              <img src={Alg} alt="Algorithm" style={{ width: "80px", height: "80px" }} />
              <Title level={4} style={{ marginTop: "8px" }}>Algorithm Details</Title>
            </div>
            <Paragraph>
              <strong>Random Forest:</strong> Uses multiple decision trees to improve prediction accuracy.
            </Paragraph>
            <Paragraph>
              <strong>XGBoost:</strong> A gradient-boosted decision tree algorithm optimized for performance.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
