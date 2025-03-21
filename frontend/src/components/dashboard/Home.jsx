import React from "react";
import { Layout, Row, Col, Card, Typography, Table } from "antd";
import kd1 from "../../assets/Acculer-Logo/kd1.png";
import kd2 from "../../assets/Acculer-Logo/kd2.png";
import ckd from "../../assets/Acculer-Logo/symptomsckd.png";
import risk from "../../assets/Acculer-Logo/risk.png";

const { Title, Paragraph } = Typography;
const { Header, Content } = Layout;

const ckdStages = [
  { stage: "1", description: "Kidney damage with normal GFR", gfr: "≥90" },
  { stage: "2", description: "Mild decrease in GFR", gfr: "60 - 89" },
  { stage: "3A", description: "Moderate decrease in GFR", gfr: "45 - 59" },
  { stage: "3B", description: "Moderate decrease in GFR", gfr: "30 - 44" },
  { stage: "4", description: "Severe reduction in GFR", gfr: "15 - 29" },
  { stage: "5", description: "Kidney failure", gfr: "<15" },
];

const columns = [
  { title: "Stage", dataIndex: "stage", key: "stage" },
  { title: "Description", dataIndex: "description", key: "description" },
  { title: "GFR (mL/min/1.73m²)", dataIndex: "gfr", key: "gfr" },
];

const Home = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#001529",
          color: "white",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        Chronic Kidney Disease (CKD) Awareness
      </Header>

      <Content style={{ padding: "24px" }}>
        <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
            <Card bordered={false} style={{ minHeight: "100%" }}>
              <Title level={2}>Chronic Kidney Disease (CKD)</Title>
              <Paragraph>
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

              <Paragraph>
                <strong>Progression & Stages:</strong>
                <ul>
                  <li>
                    Progression depends on factors like lifestyle, genetics, and
                    medical management.
                  </li>
                  <li>
                    Common causes include diabetes, hypertension, chronic
                    infections, and genetic disorders.
                  </li>
                  <li>
                    CKD is classified into five stages based on Glomerular
                    Filtration Rate (GFR):
                    <ul>
                      <li>
                        <strong>Stage 1 & 2:</strong> Minimal functional loss.
                      </li>
                      <li>
                        <strong>Stage 3:</strong> Moderate impairment with
                        symptoms.
                      </li>
                      <li>
                        <strong>Stage 4:</strong> Severe kidney function loss.
                      </li>
                      <li>
                        <strong>Stage 5 (ESRD):</strong> End-stage requiring
                        dialysis or transplant.
                      </li>
                    </ul>
                  </li>
                </ul>
              </Paragraph>
              <Title level={3}>CKD Symptoms</Title>
                <Paragraph>
                  Many CKD patients remain asymptomatic and are often diagnosed
                  incidentally through routine medical exams. However, as CKD
                  advances, kidney function declines, leading to toxin
                  accumulation and various symptoms.
                </Paragraph>

                <Paragraph>
                  These toxins contribute to disease progression and impact
                  biochemical and physiological processes, causing complications
                  such as immune dysfunction, vascular issues, platelet
                  abnormalities, and altered drug metabolism.
                </Paragraph>

                <Paragraph>
                  Common symptoms of CKD include:
                  <ul>
                    <li>
                      <strong>Pallor:</strong> An unhealthy pale appearance,
                      often due to anemia.
                    </li>
                    <li>
                      <strong>Shortness of breath:</strong> Caused by fluid
                      retention, anemia, or heart issues.
                    </li>
                    <li>
                      <strong>Itching:</strong> Resulting from toxin buildup and
                      immune system disturbances.
                    </li>
                    <li>
                      <strong>Muscle cramps:</strong> Often occurring at night
                      due to biochemical imbalances.
                    </li>
                    <li>
                      <strong>Cognitive impairment:</strong> Affecting memory,
                      attention, and language skills.
                    </li>
                    <li>
                      <strong>Gastrointestinal symptoms:</strong> Includes loss
                      of appetite, vomiting, and taste changes.
                    </li>
                    <li>
                      <strong>Uraemic breath:</strong> A noticeable odor caused
                      by urea breakdown in saliva.
                    </li>
                    <li>
                      <strong>Changes in urine output:</strong>
                      <ul>
                        <li>
                          Polyuria: Increased urination due to impaired
                          concentration ability.
                        </li>
                        <li>Oliguria: Decreased urine production.</li>
                        <li>Nocturia: Frequent nighttime urination.</li>
                        <li>Proteinuria: Presence of protein in urine.</li>
                        <li>Haematuria: Blood in urine.</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Peripheral edema:</strong> Swelling in the legs or
                      hands due to fluid retention.
                    </li>
                  </ul>
                </Paragraph>
              <Title level={3}>Chronic Kidney Disease (CKD) Definition</Title>
              <Paragraph>
                <strong>Meaning:</strong> CKD, also known as Chronic Renal
                Failure, is a progressive and irreversible deterioration of
                kidney function. The kidneys gradually lose their ability to
                filter blood, leading to waste buildup, which can cause severe
                health problems and eventually lead to kidney failure.
              </Paragraph>
              <Paragraph>
                <strong>Stages of CKD:</strong>
              </Paragraph>
              <Table
                columns={columns}
                dataSource={ckdStages}
                pagination={false}
                bordered
                size="small"
              />

              <Title level={3}>
                Global Prevalence of Chronic Kidney Disease (CKD)
              </Title>
              <Paragraph>
                More than 10% of the world's population ( 80 crores individuals,
                especially with older and diabetic populations and hypertension)
                in the world are suffering from the progressive condition of
                chronic kidney disease or CKD. As CKD is emerging as one of the
                leading causes of mortality, with its increasing death rate in
                the last two decades, its heavy burden is mostly seen in low-
                and middle-income countries.
              </Paragraph>

              <Title level={3}>Prevalence of CKD in India</Title>
              <Paragraph>
                Chronic Kidney Disease (CKD) patients pose a significant public
                health problem due to its high morbidity, prevalence, and
                mortality. Hosting around 17% of the Earth’s population with a
                little over 3% of global land mass, India faces challenges in
                providing access to healthcare. While the International Society
                of Nephrology’s Kidney Disease Data Centre Study demonstrated a
                17% prevalence of CKD among Indians, the majority of the
                patients approach the healthcare personnel when their estimated
                glomerular filtration rate (eGFR) is 15 ml/min per 1.73m². High
                levels of prevalence are seen in parts of Andhra Pradesh, Goa,
                and Odisha.
              </Paragraph>

              <article>
  <h2>Risk Factors for Chronic Kidney Disease (CKD)</h2>

  <section>
    <h3>1. Chronic Nonrenal (Systemic) Diseases</h3>
    <h4>Diabetes, Hypertension, and Metabolic Syndrome</h4>
    <p>Contribute to CKD through obesity, dyslipidemia, insulin resistance, and oxidative stress.</p>

    <h4>Autoimmune and Autoinflammatory Diseases</h4>
    <p>CKD can develop due to immune responses that target the kidneys.</p>

    <h4>Infections (e.g., HIV, HBV, HCV)</h4>
    <ul>
      <li>Direct infection of renal parenchyma.</li>
      <li>Kidney complications due to liver disease.</li>
      <li>Drug-induced CKD.</li>
      <li>Glomerular immune complex deposition.</li>
    </ul>

    <h4>Nephrotoxic Exposure</h4>
    <p>Certain chemotherapy drugs and other nephrotoxic agents can lead to CKD with long-term use.</p>
  </section>

  <section>
    <h3>2. Demographic and Genetic Factors</h3>
    <h4>Age and Gender</h4>
    <p>CKD is more prevalent in women, but men are more likely to require kidney replacement therapy.</p>
    <p>Elderly individuals are at a higher risk due to declining kidney function.</p>

    <h4>Family History and Genetics</h4>
    <p>DNA sequence variations at specific genetic loci have been linked to CKD predisposition.</p>
  </section>

  <section>
    <h3>3. Childhood and Adolescent Risk Factors</h3>
    <h4>Premature Birth</h4>
    <p>Premature infants have fewer nephrons and are more vulnerable to CKD due to postnatal nephrotoxin exposure.</p>

    <h4>Treated Childhood Cancer</h4>
    <p>Survivors of childhood cancer have an increased risk of developing CKD, though the reasons are not fully understood.</p>
  </section>

  <section>
    <h3>4. Lifestyle and Behavioral Factors</h3>
    <h4>Smoking and Alcohol Consumption</h4>
    <p>Increase the risk of hypertension, metabolic diseases, and CKD.</p>

    <h4>Low Physical Activity</h4>
    <p>Can lead to obesity, high BMI, and increased risk of CKD.</p>
  </section>
</article>


                
               
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <img src={kd2} alt="Kidney Disease" style={{ width: "100%", height: "300px", borderRadius: "10px" }} />
              </Col>
              <Col xs={24} sm={12}>
                <img src={kd1} alt="Kidney Disease" style={{ width: "100%", height: "300px", borderRadius: "10px" }} />
              </Col>
              <Col xs={24}>
                <Card style={{ borderRadius: "10px", overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    height="250px"
                    src="https://www.youtube.com/embed/fv53QZRk4hs"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ borderRadius: "10px" }}
                  ></iframe>
                </Card>
              </Col>
              <Col xs={24}>
                <img src={ckd} alt="Kidney Disease" style={{ width: "100%", height: "700px", borderRadius: "10px" }} />
              </Col>
              <Col xs={24}>
                <img src={risk} alt="Kidney Disease" style={{ width: "100%", height: "700px", borderRadius: "10px" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;