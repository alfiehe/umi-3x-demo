import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';

const UserModal = ({ visible, record, handleOk, handleCancel }) => {
  const [form] = Form.useForm();
  console.log('record', record);

  React.useEffect(() => {
    form.setFieldsValue({
      name: record.name,
      email: record.email,
      createTime: record.create_time,
    });
  }, [record]);

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
     <Form
      name="basic"
      form={form}
      labelCol={{ span: 5 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: '请输入邮箱地址' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Create Time"
        name="createTime"
      >
        <Input />
      </Form.Item>
    </Form>
    </Modal>
  )
}

export default UserModal;