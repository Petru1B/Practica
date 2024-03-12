"use client";
import React, { useState } from "react";
import { Layout, theme, Breadcrumb, Menu } from 'antd';
const { Header, Content, Footer} = Layout;
import Image from "next/image";
import { Carousel } from 'antd';
import { Button, Flex } from 'antd';

const items = new Array(1).fill(null).map((_, index) => ({
    key: 1,
    label: (
        <a href="/" style={{color: '#fff'}}>
            Work
        </a>
    ),
}));


const contentStyle: React.CSSProperties = {
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: "url('/ert.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
};

const SecondcontentStyle: React.CSSProperties = {
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: "url('/main-bg.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
};

const ContactForm = () => {
    return (
        <body style={{ padding: '0', margin: '0' }}>
        <Layout >
            <Content style={{ padding: '0', margin: '0' }}>
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        height: '100%',

                        display: 'flex',
                        justifyContent: 'between',
                        alignItems: 'center',
                        color: '#fff',

                    }}
                >
                    <div className="demo-logo-vertical" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            src="/mld.png"
                            alt="logo"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain rounded-full"
                        />
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{ flex: 1, minWidth: 0, background: 'transparent', color: '#fff' }}
                    />
                </Header>
                <Carousel autoplay style={{ height: '100%'}}>
                    <div>
                        <h3 style={contentStyle}>Făcut prin Ant Design
                        </h3>
                    </div>
                    <div>
                        <h3 style={SecondcontentStyle}>
                            <Button ghost  style={{ marginTop: '16px' }}>Work</Button>
                        </h3>
                    </div>
                </Carousel>
            </Content>
        </Layout>
        </body>
    );
};

export default ContactForm;
