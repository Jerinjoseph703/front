import React, { useState, useEffect } from 'react';
import { Tabs, Modal, Button } from 'antd';
import axios from 'axios';


const { TabPane } = Tabs;

function Adminscreen() {
  const admin = JSON.parse(localStorage.getItem('currentadmin'));
//   if(!admin)
//   {
//     window.location.href='/signin'
//   }
  const [visible, setVisible] = useState(false);
  const [roomId, setRoomId] = useState('');
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleRoomIdChange = (e) => {
    setRoomId(e.target.value);
  };

  const renderWelcomeMessage = () => {
    return (
      <div className='welcome-container'>
        <h1 className='welcome-message'>Welcome to Emirates Hotel</h1>
        <p className='welcome-message'>
          Manage rooms, bookings, and user profiles to ensure a seamless experience for our guests.
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className='ml-5 mt-3 mr-5 mb-5 bsx'>
        <h2 className='text-center' style={{ fontSize: '30px' }}>
          <b>Admin Panel</b>
        </h2>
        <Tabs defaultActiveKey='1' tabPosition='left'>
        <TabPane tab='Admin' key='1'>
            
        {renderWelcomeMessage()}
         </TabPane>
          <TabPane tab='Bookings' key='2'>
            <h1>Bookings</h1>
             
          </TabPane>
          <TabPane tab='Add property' key='3'>
            
          <h1>Add property</h1>
          </TabPane>
          <TabPane tab='properties' key='4'>

          <h1>Properties</h1>         
          </TabPane>
          <TabPane tab='users' key='5'>
          <h1>Users</h1>
             
          </TabPane>
          
         
         
        </Tabs>
      </div>
    </div>
  );
}

export default Adminscreen;