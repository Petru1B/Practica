import Image from "next/image";
"use client";
import React, { useState } from 'react';
import { Layout, Button, theme, Menu, Empty, Avatar, Row, Col } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined,  MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
const { Header, Sider, Content} = Layout;



export default function Job() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        height: '100vh',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <h1>Profile</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                        <Avatar size={164} icon={<UserOutlined />} />
                    </div>
                    <Row gutter={10} style={{margin: 16}}>
                        <Col span={8}>
                            <h2>Username</h2>
                        </Col>
                        <Col span={8}>
                            <h2>First Name</h2>
                        </Col>
                        <Col span={8}>
                            <h2>Last Name</h2>
                        </Col>
                    </Row>
                    <Empty />
                </Content>
            </Layout>
        </Layout>
    );
}
