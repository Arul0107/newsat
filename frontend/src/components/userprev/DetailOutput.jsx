import React, { useState } from 'react';
import { Collapse, Row, Col, Image, Card, Typography, Steps } from 'antd';
import { InfoCircleOutlined, WarningOutlined, MedicineBoxOutlined, HeartOutlined } from '@ant-design/icons'; // Import icons
import './DetailOutput.css'; // Custom CSS for additional styling

// Import images directly
import dataImage from '../../assets/Acculer-Logo/bar.png'; // Adjust the path as per your folder structure
import random from '../../assets/Acculer-Logo/random.png'; // Adjust the path as per your folder structure
import xboost from '../../assets/Acculer-Logo/xboost.png'; // Adjust the path as per your folder structure

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;
const { Step } = Steps;

const DetailOutput = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0); // State to track active image

  const images = [
    dataImage, // Use the imported image
    random,
    xboost, // Use the imported image
  ];

  const handleAccordionChange = (key) => {
    setActiveImageIndex(Number(key)); // Update the active image index based on the accordion key
  };

  return (
    <div className="app-container">
      <Row gutter={[16, 16]}>
        {/* Left Column: Content Section */}
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

            {/* Cautions Section with Icon */}
            <Title level={3} style={{ marginTop: "24px" }}>
              <WarningOutlined /> Cautions
            </Title>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              <ul>
                <li>Avoid over-the-counter painkillers like ibuprofen and naproxen, as they can worsen kidney function.</li>
                <li>Limit salt intake to prevent fluid retention and high blood pressure.</li>
                <li>Monitor blood sugar levels regularly if you have diabetes.</li>
                <li>Avoid smoking and excessive alcohol consumption.</li>
              </ul>
            </Paragraph>

            {/* Precautions Section with Icon */}
            <Title level={3} style={{ marginTop: "24px" }}>
              <InfoCircleOutlined /> Precautions
            </Title>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              <ul>
                <li>Regularly monitor kidney function through blood and urine tests.</li>
                <li>Maintain a healthy weight to reduce strain on the kidneys.</li>
                <li>Stay hydrated, but avoid excessive fluid intake if advised by your doctor.</li>
                <li>Follow a kidney-friendly diet as recommended by a dietitian.</li>
              </ul>
            </Paragraph>

            {/* Diet Plan Section with Icon */}
            <Title level={3} style={{ marginTop: "24px" }}>
              <MedicineBoxOutlined /> Diet Plan
            </Title>
            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              <strong>Recommended Foods:</strong>
              <ul>
                <li>Low-sodium foods like fresh fruits and vegetables.</li>
                <li>Lean proteins such as chicken, fish, and egg whites.</li>
                <li>Whole grains like brown rice and oats.</li>
                <li>Healthy fats from sources like olive oil and avocados.</li>
              </ul>
              <strong>Foods to Avoid:</strong>
              <ul>
                <li>High-sodium foods like processed meats and canned soups.</li>
                <li>High-potassium foods like bananas, oranges, and potatoes.</li>
                <li>High-phosphorus foods like dairy products and nuts.</li>
                <li>Sugary and carbonated beverages.</li>
              </ul>
            </Paragraph>

            {/* Stepper Section */}
            <Title level={3} style={{ marginTop: "24px" }}>
              <HeartOutlined /> Steps to Manage CKD
            </Title>
            <Steps direction="vertical" current={1}>
              <Step title="Diagnosis" description="Get regular checkups and blood tests to monitor kidney function." />
              <Step title="Medication" description="Take prescribed medications to control blood pressure and diabetes." />
              <Step title="Diet" description="Follow a kidney-friendly diet plan." />
              <Step title="Lifestyle" description="Maintain a healthy lifestyle with regular exercise and no smoking." />
            </Steps>
          </Card>
        </Col>

        {/* Right Column: Accordion Section */}
        <Col xs={24} md={12}>
          <Collapse accordion defaultActiveKey={['0','1','2']} onChange={handleAccordionChange}>
            <Panel header="Model Accuracy Comparison" key="0">
              <p>Model Accuracy Comparison</p>
              <Image
                src={images[0]} // Use the imported image
                alt="Image 1"
                className="accordion-image"
              />
            </Panel>
            <Panel header="Random-forest confusion matrix" key="1">
              <p>Random-forest confusion matrix</p>
              <Image
                src={images[1]} // Use the imported image
                alt="Image 2"
                className="accordion-image"
              />
            </Panel>
            <Panel header="X-boost confusion matrix" key="2">
              <p>X-boost confusion matrix</p>
              <Image
                src={images[2]} // Use the imported image
                alt="Image 3"
                className="accordion-image"
              />
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default DetailOutput;