import React from 'react';
import { Row, Col, Form, Input, Button, Typography, Image } from 'antd';
import contactImage from '../../assets/Acculer-Logo/contact.png'; // Replace with your image path

const { Title, Paragraph } = Typography;

const Contact = () => {
  const [form] = Form.useForm(); // z z Form instance

  const onFinish = (values) => {
    console.log('Form values:', values); // Handle form submission
    alert('Thank you for contacting us!');
    form.resetFields(); // Reset form fields after submission
  };

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
        Contact Us
      </Title>
      <Row gutter={[24, 24]}>
        {/* Left Side: Contact Form */}
        <Col xs={24} md={12}>
          <Form
            form={form}
            name="contact-form"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: 'Please enter your message!' }]}
            >
              <Input.TextArea rows={6} placeholder="Enter your message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>

        {/* Right Side: Contact Image */}
        <Col xs={24} md={12}>
          <Image
            src={contactImage} // Replace with your image path
            alt="Contact Us"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            preview={false} // Disable image preview
          />
          <Paragraph style={{ marginTop: '16px', textAlign: 'center' }}>
            We'd love to hear from you! Reach out to us for any questions or feedback.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;