import React, { useState } from 'react';
import { Modal, Button } from 'antd';

// interface IUserModal = {
//   visible: boolean;
//   record?: object;
//   handleOk?: () => void;
//   handleCancel?: () => void;
// };

const UserModal = ({ visible, record, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
     {JSON.stringify(record)}
    </Modal>
  )
}

export default UserModal;