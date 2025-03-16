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
              <strong>Overview:</strong>
              <ul>
                <li>
                  CKD is a long-term, progressive condition where kidneys
                  gradually lose function.
                </li>
                <li>
                  Key kidney functions:
                  <ul>
                    <li>
                      Filtering waste, excess fluids, and toxins from the
                      bloodstream.
                    </li>
                    <li>Maintaining electrolyte balance.</li>
                    <li>Regulating blood pressure.</li>
                    <li>Producing hormones for red blood cell production.</li>
                  </ul>
                </li>
                <li>
                  Progresses silently over years, with mild or no symptoms in
                  early stages.
                </li>
                <li>
                  Early detection is difficult but crucial for management.
                </li>
              </ul>
            </Paragraph>

            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              <strong>Progression & Stages:</strong>
              <ul>
                <li>
                  Progression depends on factors like:
                  <ul>
                    <li>Underlying causes.</li>
                    <li>Lifestyle and genetics.</li>
                    <li>Medical management.</li>
                  </ul>
                </li>
                <li>
                  Common causes:
                  <ul>
                    <li>Diabetes.</li>
                    <li>Hypertension.</li>
                    <li>Chronic infections.</li>
                    <li>
                      Genetic disorders (e.g., polycystic kidney disease).
                    </li>
                  </ul>
                </li>
                <li>
                  CKD is classified into five stages based on Glomerular
                  Filtration Rate (GFR):
                  <ul>
                    <li>
                      <strong>Stage 1 & 2:</strong> Kidney damage with minimal
                      functional loss.
                    </li>
                    <li>
                      <strong>Stage 3:</strong> Moderate impairment; symptoms
                      like fatigue, swelling, urinary changes.
                    </li>
                    <li>
                      <strong>Stage 4:</strong> Severe kidney function loss.
                    </li>
                    <li>
                      <strong>Stage 5 (ESRD):</strong> End-stage renal disease
                      requiring dialysis or transplant.
                    </li>
                  </ul>
                </li>
              </ul>
            </Paragraph>

            <Paragraph style={{ fontSize: "16px", lineHeight: "1.6" }}>
              <strong>Progression Rate & Management:</strong>
              <ul>
                <li>
                  Progression varies:
                  <ul>
                    <li>
                      Some individuals maintain stable kidney function for years
                      with proper treatment.
                    </li>
                    <li>
                      Others experience rapid decline if risk factors are
                      uncontrolled.
                    </li>
                  </ul>
                </li>
                <li>
                  Key risk factors for rapid progression:
                  <ul>
                    <li>High blood pressure.</li>
                    <li>Diabetes.</li>
                    <li>Smoking.</li>
                    <li>Obesity.</li>
                  </ul>
                </li>
                <li>
                  Average progression to ESRD takes years or decades, but can be
                  faster in unmanaged cases.
                </li>
                <li>
                  Early diagnosis and intervention help slow progression:
                  <ul>
                    <li>Routine blood and urine tests.</li>
                    <li>Lifestyle modifications.</li>
                    <li>Medications.</li>
                  </ul>
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

        {/* Image & Video Section */}
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <img
                src={kd2}
                alt="Kidney Disease"
                style={{
                  width: "100%",
                  height: "300px",
                  padding: "0px",
                  borderRadius: "10px",
                }}
              />
            </Col>
            <Col xs={24} sm={12}>
              <img
                src={kd1}
                alt="Kidney Disease"
                style={{
                  width: "100%",
                  height: "300px",
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
