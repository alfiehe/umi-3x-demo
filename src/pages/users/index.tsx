import React from 'react';
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi';

const Index = (props) => {
  console.log('props', props);
  const { users } = props;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  return (
    <div className='user-list'>
      <Table columns={columns} dataSource={users} />
    </div>
  )
}

const mapStateToProps = (state) => {
  // console.log('mapStateToProps', state);
  const { users } = state;
  return {
    users
  };
}

export default connect(mapStateToProps)(Index);