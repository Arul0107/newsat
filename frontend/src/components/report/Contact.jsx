import React from "react";
import { Row, Col, Form, Input, Button, Typography, Image, message } from "antd";
import contactImage from "../../assets/Acculer-Logo/contact.png"; // Replace with your image path

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
    message.success("Thank you for contacting us!");
    form.resetFields();
  };

  // Custom email validation to block a specific email
  const validateEmail = (_, value) => {
    if (value && value.toLowerCase() === "sathiyasivaprakasan@gmail.com") {
      return Promise.reject(new Error("This email is already in use. Please use a different one."));
    }
    return Promise.resolve();
  };

  return (
    <div className="mainpage"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Row
        gutter={[24, 24]}
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "#fff",
          padding: "32px",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Left Side: Contact Form */}
        <Col xs={24} md={12}>
          <Title level={2} style={{ textAlign: "center", marginBottom: "24px" }}>
            Contact Us
          </Title>
          <Form form={form} name="contact-form" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
                { validator: validateEmail }, // Custom email validator
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message!" }]}
            >
              <Input.TextArea rows={6} placeholder="Enter your message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block style={{ transition: "0.3s" }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>

        {/* Right Side: Contact Image */}
        <Col xs={24} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Image
            src={contactImage}
            alt="Contact Us"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            preview={false}
          />
          <Paragraph style={{ marginTop: "16px", textAlign: "center" }}>
            We'd love to hear from you! Reach out to us for any questions or feedback.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
