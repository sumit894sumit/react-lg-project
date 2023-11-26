import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Button, Checkbox, Form, Input, Select, Option } from 'antd';
const FormModal = ({ clicked }) => {
    useEffect(() => {
        setIsModalOpen(clicked);
    }, [clicked]);
    const { Option } = Select;
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onFinish = (values) => {
        console.log(values);
      };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
                defaultValue={"91"}
            >
                <Option value="91">+91</Option>
                <Option value="99">+99</Option>

            </Select>
        </Form.Item>
    );
    return <>
        <Modal title="" className="py-5" open={isModalOpen} onCancel={() => setIsModalOpen(!isModalOpen)} footer={(_, { OkBtn, CancelBtn }) => (
            <>
                <CancelBtn />

            </>
        )} >
            <Form
                onFinish={onFinish}
                name="basic"
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
                className="py-5 pr-10"
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
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
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>I accept the terms and conditions</Checkbox>
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" className="bg-[#EF7123]">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>

    </>

};
export default FormModal;