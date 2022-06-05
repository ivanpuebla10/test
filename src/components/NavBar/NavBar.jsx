import React from 'react'
import './NavBar.scss';
import { MessageOutlined,UserOutlined,CloudOutlined,CalendarOutlined } from "@ant-design/icons";


const NavBar = () => {  
      return <div className='footer_container'>
      <nav className="nav_item">
            <CalendarOutlined style={{ margin: '0.2em'}}/>
            <p>PROGRAM</p>
      </nav>
      <nav className="nav_item">
            <MessageOutlined style={{ margin: '0.2em'}}/>
            <p>MESSAGES</p>
      </nav>
      <nav className="nav_item">
            <CloudOutlined style={{ margin: '0.2em'}}/>
            <p>THOUGHTS</p>
      </nav>
      <nav className="nav_item">
            <UserOutlined style={{ margin: '0.2em'}}/>
            <p>ME</p>
      </nav>
      </div>;
}

export default NavBar