import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Typography,
  Table,
  Button,
  Drawer,
} from "antd";
import { MedicineBoxOutlined } from "@ant-design/icons";
import kd1 from "../../assets/Acculer-Logo/kd1.png"; // Ensure this path is correct
import kd2 from "../../assets/Acculer-Logo/kd2.png"; // Ensure this path is correct
import ckd from "../../assets/Acculer-Logo/symptomsckd.png"; // Ensure this path is correct
import risk from "../../assets/Acculer-Logo/risk.png"; // Ensure this path is correct
import diet from "../../assets/Acculer-Logo/dietplan.jpg"; // Ensure this path is correct
import ckdVideo from "../../assets/Acculer-Logo/Ckd.mp4"; // Import the video
import "./home.css";

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

const Home = () => {
  const [visible, setVisible] = useState(false);

  // Responsive table columns
  const getColumns = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      return [
        {
          title: "Stage",
          dataIndex: "stage",
          key: "stage",
          width: "20%",
        },
        {
          title: "Description/GFR",
          key: "combined",
          render: (text, record) => (
            <>
              <div>{record.description}</div>
              <div>
                <strong>GFR:</strong> {record.gfr}
              </div>
            </>
          ),
          width: "80%",
        },
      ];
    }

    return [
      { title: "Stage", dataIndex: "stage", key: "stage" },
      { title: "Description", dataIndex: "description", key: "description" },
      { title: "GFR (mL/min/1.73m²)", dataIndex: "gfr", key: "gfr" },
    ];
  };

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

  return (
    <div className="mainpage">
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            background: "#001529",
            color: "white",
            textAlign: "center",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "auto",
            minHeight: "64px",
            marginBottom: "10px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, fontSize: "18px", fontWeight: "bold" }}>
            Chronic Kidney Disease (CKD) Awareness
          </div>
          <Button
            type="primary"
            onClick={() => setVisible(true)}
            style={{
              display: window.innerWidth < 768 ? "block" : "none",
              marginLeft: "auto",
            }}
          >
            Menu
          </Button>
        </Header>

        <Content>
          <Row gutter={[16, 16]}>
            {/* Main content column - always visible */}
            <Col
              xs={24}
              md={12}
              style={{ order: window.innerWidth < 768 ? 2 : 1 }}
            >
              <Card
                bordered={false}
                style={{
                  width: "100%",
                  overflowX: "auto",
                  boxShadow:
                    "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                }}
              >
                <Title className="title">Chronic Kidney Disease (CKD)</Title>

                <Paragraph style={{ fontSize: "14px" }}>
                  <strong className="sub-stage">Overview:</strong>
                  <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
                    <li>
                      CKD is a long-term, progressive condition where kidneys
                      gradually lose function.
                    </li>
                    <li>
                      Key kidney functions:
                      <ul style={{ paddingLeft: "20px", margin: "4px 0" }}>
                        <li>
                          Filtering waste, excess fluids, and toxins from the
                          bloodstream.
                        </li>
                        <li>Maintaining electrolyte balance.</li>
                        <li>Regulating blood pressure.</li>
                        <li>
                          Producing hormones for red blood cell production.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Progresses silently over years, with mild or no symptoms
                      in early stages.
                    </li>
                    <li>
                      Early detection is difficult but crucial for management.
                    </li>
                  </ul>
                </Paragraph>

                <Paragraph style={{ fontSize: "14px" }}>
                  <strong className="sub-stage">Progression & Stages:</strong>
                  <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
                    <li>
                      Progression depends on factors like lifestyle, genetics,
                      and medical management.
                    </li>
                    <li>
                      Common causes include diabetes, hypertension, chronic
                      infections, and genetic disorders.
                    </li>
                    <li>
                      CKD is classified into five stages based on Glomerular
                      Filtration Rate (GFR):
                      <ul style={{ paddingLeft: "20px", margin: "4px 0" }}>
                        <li>
                          <strong className="sub-stage">Stage 1 & 2:</strong>{" "}
                          Minimal functional loss.
                        </li>
                        <li>
                          <strong className="sub-stage">Stage 3:</strong>{" "}
                          Moderate impairment with symptoms.
                        </li>
                        <li>
                          <strong className="sub-stage">Stage 4:</strong> Severe
                          kidney function loss.
                        </li>
                        <li>
                          <strong className="sub-stage">Stage 5 (ESRD):</strong>{" "}
                          End-stage requiring dialysis or transplant.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Paragraph>

                <Title
                  className="title"
                  level={3}
                  style={{ fontSize: "20px", margin: "24px 0 12px 0" }}
                >
                  CKD Symptoms
                </Title>
                <Paragraph style={{ fontSize: "14px" }}>
                  Many CKD patients remain asymptomatic and are often diagnosed
                  incidentally through routine medical exams. However, as CKD
                  advances, kidney function declines, leading to toxin
                  accumulation and various symptoms.
                </Paragraph>

                <Paragraph style={{ fontSize: "14px" }}>
                  These toxins contribute to disease progression and impact
                  biochemical and physiological processes, causing complications
                  such as immune dysfunction, vascular issues, platelet
                  abnormalities, and altered drug metabolism.
                </Paragraph>

                <Paragraph style={{ fontSize: "14px" }}>
                  Common symptoms of CKD include:
                  <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
                    <li>
                      <strong className="sub-stage">Pallor:</strong> An
                      unhealthy pale appearance, often due to anemia.
                    </li>
                    <li>
                      <strong className="sub-stage">
                        Shortness of breath:
                      </strong>{" "}
                      Caused by fluid retention, anemia, or heart issues.
                    </li>
                    <li>
                      <strong className="sub-stage">Itching:</strong> Resulting
                      from toxin buildup and immune system disturbances.
                    </li>
                    <li>
                      <strong className="sub-stage">Muscle cramps:</strong>{" "}
                      Often occurring at night due to biochemical imbalances.
                    </li>
                    <li>
                      <strong className="sub-stage">
                        Cognitive impairment:
                      </strong>{" "}
                      Affecting memory, attention, and language skills.
                    </li>
                    <li>
                      <strong className="sub-stage">
                        Gastrointestinal symptoms:
                      </strong>{" "}
                      Includes loss of appetite, vomiting, and taste changes.
                    </li>
                    <li>
                      <strong className="sub-stage">Uraemic breath:</strong> A
                      noticeable odor caused by urea breakdown in saliva.
                    </li>
                    <li>
                      <strong className="sub-stage">
                        Changes in urine output:
                      </strong>
                      <ul style={{ paddingLeft: "20px", margin: "4px 0" }}>
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
                      <strong className="sub-stage">Peripheral edema:</strong>{" "}
                      Swelling in the legs or hands due to fluid retention.
                    </li>
                  </ul>
                </Paragraph>

                <Title
                  className="title"
                  level={3}
                  style={{ fontSize: "20px", margin: "24px 0 12px 0" }}
                >
                  Chronic Kidney Disease (CKD) Definition
                </Title>
                <Paragraph style={{ fontSize: "14px" }}>
                  <strong className="sub-stage">Meaning:</strong> CKD, also
                  known as Chronic Renal Failure, is a progressive and
                  irreversible deterioration of kidney function. The kidneys
                  gradually lose their ability to filter blood, leading to waste
                  buildup, which can cause severe health problems and eventually
                  lead to kidney failure.
                </Paragraph>

                <Title level={3}>
                  <MedicineBoxOutlined /> Recommended Diet
                </Title>
                <Table columns={columns} dataSource={data} pagination={false} bordered />
                <Paragraph style={{ fontSize: "14px" }}>
                  <strong className="sub-stage">Stages of CKD:</strong>
                </Paragraph>

                <div style={{ overflowX: "auto", width: "100%" }}>
                  <Table
                    columns={getColumns()}
                    dataSource={ckdStages}
                    pagination={false}
                    bordered
                    size="small"
                    style={{
                      minWidth: "100%",
                      fontSize: "14px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      backgroundColor: "black",
                    }}
                    scroll={{ x: "max-content" }}
                  />
                </div>

                <Title
                  className="title"
                  level={3}
                  style={{ fontSize: "20px", margin: "24px 0 12px 0" }}
                >
                  Global Prevalence of Chronic Kidney Disease (CKD)
                </Title>
                <Paragraph style={{ fontSize: "14px" }}>
                  More than 10% of the world's population (80 crores
                  individuals, especially with older and diabetic populations
                  and hypertension) in the world are suffering from the
                  progressive condition of chronic kidney disease or CKD. As CKD
                  is emerging as one of the leading causes of mortality, with
                  its increasing death rate in the last two decades, its heavy
                  burden is mostly seen in low- and middle-income countries.
                </Paragraph>

                <Title
                  className="title"
                  level={3}
                  style={{ fontSize: "20px", margin: "24px 0 12px 0" }}
                >
                  Prevalence of CKD in India
                </Title>
                <Paragraph style={{ fontSize: "14px" }}>
                  Chronic Kidney Disease (CKD) patients pose a significant
                  public health problem due to its high morbidity, prevalence,
                  and mortality. Hosting around 17% of the Earth's population
                  with a little over 3% of global land mass, India faces
                  challenges in providing access to healthcare. While the
                  International Society of Nephrology's Kidney Disease Data
                  Centre Study demonstrated a 17% prevalence of CKD among
                  Indians, the majority of the patients approach the healthcare
                  personnel when their estimated glomerular filtration rate
                  (eGFR) is 15 ml/min per 1.73m². High levels of prevalence are
                  seen in parts of Andhra Pradesh, Goa, and Odisha.
                </Paragraph>

                <Title
                  className="title"
                  level={3}
                  style={{ fontSize: "20px", margin: "24px 0 12px 0" }}
                >
                  Risk Factors for Chronic Kidney Disease (CKD)
                </Title>

                <div style={{ fontSize: "14px" }}>
                  <Title
                    className="title"
                    level={4}
                    style={{ fontSize: "16px", margin: "16px 0 8px 0" }}
                  >
                    1. Chronic Nonrenal (Systemic) Diseases
                  </Title>
                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">
                      Diabetes, Hypertension, and Metabolic Syndrome
                    </strong>
                    <br />
                    Contribute to CKD through obesity, dyslipidemia, insulin
                    resistance, and oxidative stress.
                  </Paragraph>

                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">
                      Autoimmune and Autoinflammatory Diseases
                    </strong>
                    <br />
                    CKD can develop due to immune responses that target the
                    kidneys.
                  </Paragraph>

                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">
                      Infections (e.g., HIV, HBV, HCV)
                    </strong>
                    <ul style={{ paddingLeft: "20px", margin: "4px 0" }}>
                      <li>Direct infection of renal parenchyma.</li>
                      <li>Kidney complications due to liver disease.</li>
                      <li>Drug-induced CKD.</li>
                      <li>Glomerular immune complex deposition.</li>
                    </ul>
                  </Paragraph>

                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">Nephrotoxic Exposure</strong>
                    <br />
                    Certain chemotherapy drugs and other nephrotoxic agents can
                    lead to CKD with long-term use.
                  </Paragraph>

                  <Title
                    className="title"
                    level={4}
                    style={{ fontSize: "16px", margin: "16px 0 8px 0" }}
                  >
                    2. Demographic and Genetic Factors
                  </Title>
                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">Age and Gender</strong>
                    <br />
                    CKD is more prevalent in women, but men are more likely to
                    require kidney replacement therapy.
                    <br />
                    Elderly individuals are at a higher risk due to declining
                    kidney function.
                  </Paragraph>

                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">
                      Family History and Genetics
                    </strong>
                    <br />
                    DNA sequence variations at specific genetic loci have been
                    linked to CKD predisposition.
                  </Paragraph>

                  <Title
                    className="title"
                    level={4}
                    style={{ fontSize: "16px", margin: "16px 0 8px 0" }}
                  >
                    3. Childhood and Adolescent Risk Factors
                  </Title>
                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">Premature Birth</strong>
                    <br />
                    Premature infants have fewer nephrons and are more
                    vulnerable to CKD due to postnatal nephrotoxin exposure.
                  </Paragraph>

                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">
                      Treated Childhood Cancer
                    </strong>
                    <br />
                    Survivors of childhood cancer have an increased risk of
                    developing CKD, though the reasons are not fully understood.
                  </Paragraph>

                  <Title
                    className="title"
                    level={4}
                    style={{ fontSize: "16px", margin: "16px 0 8px 0" }}
                  >
                    4. Lifestyle and Behavioral Factors
                  </Title>
                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">
                      Smoking and Alcohol Consumption
                    </strong>
                    <br />
                    Increase the risk of hypertension, metabolic diseases, and
                    CKD.
                  </Paragraph>

                  <Paragraph style={{ fontSize: "14px", margin: "4px 0" }}>
                    <strong className="sub-stage">Low Physical Activity</strong>
                    <br />
                    Can lead to obesity, high BMI, and increased risk of CKD.
                  </Paragraph>
                </div>
              </Card>
            </Col>

            {/* Images and media column - visible on desktop, hidden on mobile */}
            <Col
              xs={24}
              md={12}
              style={{
                order: window.innerWidth < 768 ? 1 : 2,
                display: window.innerWidth < 768 ? "none" : "block",
              }}
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <img
                    src={kd2}
                    alt="Kidney Disease"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow:
                        "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    }}
                  />
                </Col>
                <Col xs={24} sm={12}>
                  <img
                    src={kd1}
                    alt="Kidney Disease"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow:
                        "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    }}
                  />
                </Col>
                <Col xs={24}>
                  <Card
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow:
                        "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    }}
                  >
                    <video
                      width="100%"
                      height="250px"
                      controls
                      style={{ borderRadius: "10px" }}
                    >
                      <source src={ckdVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Card>
                </Col>
                <Col xs={24}>
                  <img
                    src={risk}
                    alt="Kidney Disease Risk Factors"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "700px",
                      objectFit: "contain",
                      borderRadius: "10px",
                      boxShadow:
                        "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    }}
                  />
                </Col>
                <Col xs={24}>
                  <img
                    src={diet}
                    alt="Kidney Disease Symptoms"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "700px",
                      objectFit: "contain",
                      borderRadius: "10px",
                      boxShadow:
                        "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>

        {/* Mobile Drawer for Images and Video */}
        <Drawer
          title="CKD Resources"
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
          width="100%"
          bodyStyle={{ padding: "12px" }}
        >
          <Row gutter={[16, 16]}>
            <Col lg={12} md={12} sm={24}>
              <img
                src={kd2}
                alt="Kidney Disease Awareness"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                }}
              />
            </Col>
            <Col lg={12} md={12} sm={24}>
              <img
                src={kd1}
                alt="Kidney Disease Information"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                }}
              />
            </Col>
            <Col xs={24}>
              <Card style={{ borderRadius: "8px", overflow: "hidden" }}>
                <video
                  width="100%"
                  height="200px"
                  controls
                  style={{ borderRadius: "8px" }}
                >
                  <source src={ckdVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Card>
            </Col>
            {[ckd, diet, risk].map((image, index) => (
              <Col xs={24} key={index}>
                <img
                  src={image}
                  alt={`CKD Info ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                  }}
                />
              </Col>
            ))}
          </Row>
        </Drawer>
      </Layout>
    </div>
  );
};

export default Home;