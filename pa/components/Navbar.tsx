"use client";
import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import Image from "next/image";

const { Sider } = Layout;

interface NavbarProps {
    collapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ collapsed }) => {
    return (

        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/*<Image*/}
                {/*    src="/mld.png"*/}
                {/*    alt="logo"*/}
                {/*    width={40}*/}
                {/*    height={40}*/}
                {/*    className="w-full h-full object-contain rounded-full"*/}
                {/*/>*/}
            </div>
            <Menu
                theme="dark"
                mode="inline"

                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Profile',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: <a href="/">News</a>,
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: <a href="/Job">Job</a>,
                    },
                ]}
            />
        </Sider>


    );
};

export default Navbar;