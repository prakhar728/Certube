import React, { ReactNode } from 'react';
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {


  return (
    <div className='layout'>
      <Header/> 
      
      <div className='main'>
        <SideBar />
        {props.children}
      </div>
      
      <style jsx>{`
      .layout {
          height: 100vh;
          width: 100vw;
          color: azure;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
          background-image: url('https://i.ibb.co/swngg4j/Group-237.png');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
      }

      .main {
      display: flex;
      }
      `}
      </style>
    </div>
  )
}

export default Layout