import React from 'react';
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';

const Index = (props) => {
  console.log('props', props);
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
  ];
  
  return (
    <div className='user-list'>
      <Table columns={columns} dataSource={users.list} />
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