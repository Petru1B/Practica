import Image from "next/image";
"use client";
import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { Card, Col, Row } from 'antd';
import {FacebookFilled, TwitterOutlined} from "@ant-design/icons";
const { Content } = Layout;


const Cont = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (

                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Row gutter={16} style={{margin: 10}}>
                        <Col span={8}>
                            <Card title="Evenimente" actions={[<FacebookFilled style={{color:"blue"}} />,<TwitterOutlined style={{color:"skyblue"}} />]}>
                                Scale Up with Wolves, and European CVC Awards
                                February is here, and it's time to seize the moment and invest in your future success!
                                Join Wolves Summit at Scale Up with Wolves and European CVC Awards, and grow through 1:1 matchmaking and knowledge from industry leaders!
                                Scale Up with Wolves and European CVC Awards.<br/>
                                📅 When: 26 March 2024 <br/>
                                🐺 Where: Berlin, Germany + online <br/>
                                GET YOUR EARLY BIRD TICKET TODAY<br/>
                                Experience the synergy of innovation and investment at the exclusive 2-in-1 event in Berlin!
                                Immerse yourself in a world of potential as you connect with high-potential ScaleUps, innovative startups, and industry leaders. Witness the future unfold before your eyes at Scale Up with Wolves, where investment opportunities abound and partnerships flourish.
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Noutăți" actions={[<FacebookFilled style={{color:"blue"}} />,<TwitterOutlined style={{color:"skyblue"}} />]}>
                                Anunț de modificare a Documentului de Achiziție nr. MD-HASDEUUNI-352240-GO-RFB din 04.01.2024
                                1. Documentul de achiziție nr. MD-HASDEUUNI-352240-GO-RFB, privind achiziționarea Echipamentelor de rețea și a tehnicii de calcul, emis la data de 04.01.2024 se modifică prin emiterea Amendamentului nr. 1 din 16.02.2024, care poate fi accesat urmând link-ul: https://proiecte.usch.md/achizitii-publice-subproiectul-edforce/

                                2. Pentru detalii contactați Autoritatea Contractantă: Instituția Publică Universitatea de Stat „Bogdan Petriceicu Hasdeu” din Cahul, Republica Moldova, or. Cahul, str. Piața Independenței nr. 1, MD-3909, etajul 3, biroul 327, pintilii.alina@usch.md, tel.: +373 79172213, Pintilii Alina, manager de subproiect.
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Joburi" actions={[<FacebookFilled style={{color:"blue"}} />,<TwitterOutlined style={{color:"skyblue"}} />]}>
                                Specialist în Comunicare și PR, Moldova Innovation Technology Park<br/>
                                Moldova Innovation Technology Park (MITP) este în căutarea unui Specialist în Comunicare pentru a se alătura unei echipe dinamice, ambițioase și dedicate dezvoltării sectorului IT și ecosistemului de inovare digitală din țara noastră.
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{margin: 10}}>
                        <Col span={8}>
                            <Card title="Evenimente" actions={[<FacebookFilled style={{color:"blue"}} />,<TwitterOutlined style={{color:"skyblue"}} />]}>
                                Scale Up with Wolves, and European CVC Awards<br/>
                                February is here, and it's time to seize the moment and invest in your future success!
                                Join Wolves Summit at Scale Up with Wolves and European CVC Awards, and grow through 1:1 matchmaking and knowledge from industry leaders!
                                Scale Up with Wolves and European CVC Awards.<br/>
                                📅 When: 26 March 2024<br/>
                                🐺 Where: Berlin, Germany + online<br/>
                                GET YOUR EARLY BIRD TICKET TODAY<br/>
                                Experience the synergy of innovation and investment at the exclusive 2-in-1 event in Berlin!
                                Immerse yourself in a world of potential as you connect with high-potential ScaleUps, innovative startups, and industry leaders. Witness the future unfold before your eyes at Scale Up with Wolves, where investment opportunities abound and partnerships flourish.
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Noutăți" actions={[<FacebookFilled style={{color:"blue"}} />,<TwitterOutlined style={{color:"skyblue"}} />]}>
                                Anunț de modificare a Documentului de Achiziție nr. MD-HASDEUUNI-352240-GO-RFB din 04.01.2024<br/>
                                1. Documentul de achiziție nr. MD-HASDEUUNI-352240-GO-RFB, privind achiziționarea Echipamentelor de rețea și a tehnicii de calcul, emis la data de 04.01.2024 se modifică prin emiterea Amendamentului nr. 1 din 16.02.2024, care poate fi accesat urmând link-ul: https://proiecte.usch.md/achizitii-publice-subproiectul-edforce/
                                <br/>
                                2. Pentru detalii contactați Autoritatea Contractantă: Instituția Publică Universitatea de Stat „Bogdan Petriceicu Hasdeu” din Cahul, Republica Moldova, or. Cahul, str. Piața Independenței nr. 1, MD-3909, etajul 3, biroul 327, pintilii.alina@usch.md, tel.: +373 79172213, Pintilii Alina, manager de subproiect.
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Joburi" actions={[<FacebookFilled style={{color:"blue"}} />,<TwitterOutlined style={{color:"skyblue"}} />]}>
                                Specialist în Comunicare și PR, Moldova Innovation Technology Park<br/>
                                Moldova Innovation Technology Park (MITP) este în căutarea unui Specialist în Comunicare pentru a se alătura unei echipe dinamice, ambițioase și dedicate dezvoltării sectorului IT și ecosistemului de inovare digitală din țara noastră.
                            </Card>
                        </Col>
                    </Row>
                </Content>

    );
}
export default Cont;