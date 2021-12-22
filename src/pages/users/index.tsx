import React from 'react';
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';
import UserModal from './components/UserModal';

const Index = (props) => {
  console.log('props', props);

  const [isUserModalShow, setUserModalShow] = React.useState(false);
  const [record, setRecord] = React.useState(null);

  const { users } = props;
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Emial',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div>
          <a onClick={() => handleEdit(record)}>Edit</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a>Delete</a>
        </div>
      )
    }
  ];
  
  const handleEdit = (record) => {
    setRecord(record);
    setUserModalShow(true);
  }
  const handleOk = () => {
    setUserModalShow(false);
  }
  const handleClose = () => {
    setUserModalShow(false);
  }
  
  return (
    <div className='user-list'>
      <Table columns={columns} dataSource={users.list} />
      <UserModal
        visible={isUserModalShow}
        record={record}
        handleOk={handleOk}
        handleCancel={handleClose}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  const { users } = state;
  return {
    users
  };
}

export default connect(mapStateToProps)(Index);