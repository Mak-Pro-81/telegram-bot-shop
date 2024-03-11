import { useEffect } from "react";
import { Button, Form, Input } from "antd";

const tg = window.Telegram.WebApp;

export const Subscribe = () => {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  const onFinish = (values) => {};

  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => {
        // tg.MainButton.show();
        // tg.MainButton.onClick(() => {
        //   tg.sendData(JSON.stringify(values));
        // });
      })
      .catch(() => {
        // tg.MainButton.hide();
      });
  }, [form, values]);

  return (
    <>
      <h3>Subscribe</h3>
      <Form
        form={form}
        name="subscribe"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your valid Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
