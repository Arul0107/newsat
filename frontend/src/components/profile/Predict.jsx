import React from "react";
import { Card } from "antd";

const Predict = () => {
  return (
    <div style={{padding:"none"}}>
      <Card title="Chronic Kidney Disease Prediction" style={{ width: "100%", padding:"none" }}>
    <iframe
      src="http://localhost:8501"
      title="CKD Prediction"
      width="100%"
      height="800px"
      style={{ border: "none" }}
    ></iframe>
  </Card></div>
    
  );
};

export default Predict;
