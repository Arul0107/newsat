import React from "react";
import { Row, Col, Card, Typography } from "antd";
import kd1 from "../../assets/Acculer-Logo/kd1.png";
import kd2 from "../../assets/Acculer-Logo/kd2.png";
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={[16, 16]}>
        {/* Text Section */}
        <Col xs={24} md={12}>
          <Card bordered={false} style={{ minHeight: "100%" }}>
            <Title level={2} style={{ marginBottom: "24px" }}>
              Chronic Kidney Disease (CKD)
            </Title>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              <strong>Overview:</strong> Chronic Kidney Disease (CKD) is a
              progressive condition marked by the gradual decline of kidney
              function, impairing the body's ability to filter waste, excess
              fluids, and toxins from the blood. The kidneys—two bean-shaped
              organs located below the ribcage—play a critical role in
              maintaining homeostasis by regulating electrolytes (e.g., sodium,
              potassium, calcium), balancing acid-base levels, controlling blood
              pressure via the renin-angiotensin system, and producing
              erythropoietin to stimulate red blood cell production.
            </Paragraph>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              CKD affects approximately 13-15% of the global population, with
              over 850 million people impacted worldwide, according to the
              International Society of Nephrology. In the United States alone,
              the CDC estimates that 37 million adults have CKD, though 9 in 10
              remain undiagnosed due to its insidious onset.
            </Paragraph>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              <strong>Common Causes:</strong> Diabetes, high blood pressure,
              glomerulonephritis, and genetic conditions.
            </Paragraph>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              <strong>Symptoms:</strong> Fatigue, swelling in legs, changes in
              urination, nausea, and shortness of breath.
            </Paragraph>
          </Card>
        </Col>

        {/* Image & Video Section */}
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <img
                src={kd1}
                alt="Kidney Disease"
                style={{
                  width: "100%",
                  height: "200px",
                  padding: "0px",
                  borderRadius: "10px",
                }}
              />
            </Col>
            <Col xs={24} sm={12}>
              <img
                src={kd2}
                alt="Kidney Disease"
                style={{
                  width: "100%",
                  height: "200px",
                  padding: "0px",
                  borderRadius: "10px",
                }}
              />
            </Col>
            <Col xs={24}>
              <Card
                style={{
                  borderRadius: "10px", // Only one borderRadius is needed
                  padding: "0 !important", // Strictly remove padding
                  overflow: "hidden", // Ensure no overflow issues
                }}
              >
                <iframe
                  width="100%"
                  height="250px"
                  src="https://www.youtube.com/embed/fv53QZRk4hs?si=N0yay9S7VWkbi-0Z"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ borderRadius: "10px" }}
                ></iframe>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
