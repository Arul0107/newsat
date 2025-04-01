import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Typography,
  Image,
  message,
} from "antd";
import emailjs from "@emailjs/browser";
import contactImage from "../../assets/Acculer-Logo/contact.png";
import "./contact.css";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
      to_email: "sathiyasiva412@gmail.com",
    };

    emailjs
      .send(
        "service_pmy3ceb",
        "template_evtOn1h",
        templateParams,
        "gVBGlmmshRCuWnwav"
      )
      .then(() => {
        message.success(
          "Thank you for contacting us! We will get back to you soon."
        );
        form.resetFields();
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        message.error("Failed to send your message. Please try again later.");
      });
  };

  return (
    <div
      className="mainpage"
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
        <Col xs={24} md={12}>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "24px" }}
          >
            Contact Us
          </Title>
          <Form
            form={form}
            name="contact-form"
            onFinish={onFinish}
            layout="vertical"
          >
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
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[
                { required: true, message: "Please enter your message!" },
              ]}
            >
              <Input.TextArea rows={6} placeholder="Enter your message" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ transition: "0.3s" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col
          xs={24}
          md={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src={contactImage}
            alt="Contact Us"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            preview={false}
          />
          <Paragraph style={{ marginTop: "16px", textAlign: "center" }}>
            We'd love to hear from you! Reach out to us for any questions or
            feedback.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
