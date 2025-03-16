import React from "react";
import { Card, Typography, Row, Col, Divider, Table } from "antd";
import { PageHeader } from "@ant-design/pro-components";
import { MedicineBoxOutlined } from "@ant-design/icons";



const { Title, Paragraph } = Typography;

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
        <Col span={12} style={{ display: "flex" }}>
          <Card
            title="Random Forest"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Paragraph>
              <strong>Random Forest:</strong>
              <ul>
                <li>A powerful machine learning algorithm used for classification and regression.</li>
                <li>Utilizes multiple decision trees to enhance accuracy and reduce overfitting.</li>
                <li>Each tree is trained on a randomly selected subset of data.</li>
                <li>
                  Final predictions are based on:
                  <ul>
                    <li><strong>Majority voting</strong> for classification tasks.</li>
                    <li><strong>Averaging</strong> for regression tasks.</li>
                  </ul>
                </li>
                <li>Effectively handles large datasets and missing values.</li>
                <li>Widely used in various applications due to its robustness and reliability.</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>

        <Col span={12} style={{ display: "flex" }}>
          <Card
            title="XGBoost"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Paragraph>
              <strong>XGBoost (Extreme Gradient Boosting):</strong>
              <ul>
                <li>A highly efficient and powerful machine learning algorithm based on gradient boosting.</li>
                <li>Widely used for classification and regression due to its speed and high performance.</li>
                <li>Constructs decision trees sequentially, with each new tree correcting the errors of the previous ones.</li>
                <li>
                  Incorporates advanced features such as:
                  <ul>
                    <li><strong>Regularization</strong> (L1 & L2) to prevent overfitting.</li>
                    <li><strong>Parallel processing</strong> for faster computations.</li>
                    <li><strong>Built-in handling of missing values</strong> for robustness.</li>
                  </ul>
                </li>
                <li>Commonly used in data science competitions and real-world applications due to its effectiveness.</li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Divider />

      <Title level={3}>
        <MedicineBoxOutlined /> Recommended Diet
      </Title>
      <Table columns={columns} dataSource={data} pagination={false} bordered />

      <Divider />

    </div>
  );
};

export default About;
