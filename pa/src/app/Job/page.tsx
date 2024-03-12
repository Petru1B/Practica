import Image from "next/image";
"use client";
import React, { useState } from 'react';
import { Layout, Button, theme, Menu, Avatar, Col, Divider, Drawer, List, Row } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, FacebookFilled,
         TwitterOutlined, LaptopOutlined, NotificationOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
const { Header, Sider, Content} = Layout;
import type { MenuProps } from 'antd';
import Cot from "@/app/Job/conts";

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `Option ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `ind${subKey}`,
                };
            }),
        };
    },
);

interface DescriptionItemProps {
    title: string;
    content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

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
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Layout
                        style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
                    >
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            Content
                            <Cot/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        </Layout>
    );
}
