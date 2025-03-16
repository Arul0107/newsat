  import React from "react";
  import { Collapse, Row, Col, Image, Card, Typography } from "antd";
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
    const images = [dataImage, random, xboost];

    return (
      <div className="app-container">
        <Row gutter={[16, 16]} align="top">
          
          {/* Left Side: Technical Details (Cards) */}
          <Col xs={24} md={12}>
            <Title level={4} style={{ marginBottom: "16px" }}>Technical</Title>
            <Row gutter={[16, 16]}>
              {[
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
              ].map((item, index) => (
                <Col xs={24} sm={12} key={index}>
                  <Card
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{ width: "80px", height: "80px", marginBottom: "10px" }}
                    />
                    <Title level={4}>{item.title}</Title>
                    <Paragraph>{item.desc}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right Side: Accordion (Collapse) */}
          <Col xs={24} md={12}>
            <Collapse accordion defaultActiveKey={["0"]}>
              <Panel header="Model Accuracy Comparison" key="0">
                <Image src={images[0]} alt="Model Accuracy Comparison" className="accordion-image" />
              </Panel>
              <Panel header="Random Forest Confusion Matrix" key="1">
                <Image src={images[1]} alt="Random Forest Confusion Matrix" className="accordion-image" />
              </Panel>
              <Panel header="XGBoost Confusion Matrix" key="2">
                <Image src={images[2]} alt="XGBoost Confusion Matrix" className="accordion-image" />
              </Panel>
            </Collapse>
          </Col>

        </Row>
      </div>
    );
  };

  export default DetailOutput;
