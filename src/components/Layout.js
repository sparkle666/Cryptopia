import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import { HomeOutlined, MoneyCollectOutlined, ProfileOutlined, DollarOutlined } 
from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import Home from "./Home";
import Cryptocurrencies from "./Cryptocurrencies";
import Exchanges from "./Exchanges";
import News from "./News";
import {Empty, Image} from "antd"



const { Header, Sider, Content, Footer } = Layout;

export const LayoutMain = () => {
  // get the location
  const location = useLocation();
  const path = location.pathname;
  
  // Set up the deafult selected keys

  // const [selectedKey, setSelectedKey] = useState([])

  // const [collapsed, setCollapsed] = useState(false);
  // const toggle = () => {
  //   setCollapsed = true;
  // };
  var compo;
  // menu items for dropdown
  const menu = (
    <Menu>
      <Menu.Item>
        <a>Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a>Sign Out</a>
      </Menu.Item>
    </Menu>
  )

  if (path === "/home" || path === "/") {
    compo = <Home />;
    // setSelectedKey([1])
  } else if (path === "/cryptocurrencies") {
    compo = <Cryptocurrencies simplified />
    // setSelectedKey([3])
  }
  else if (path === "/news") {
    compo = <News />
    // setSelectedKey([4])
  }
  else if (path === "/exchanges") {
    compo = <Exchanges />
    // setSelectedKey([2])
  }
  else {
    compo =  <Empty />
  }

  return (
    <Layout>
      <Sider
        className = "side-bar"
        breakpoint="lg"
        collapsedWidth="0"
        style={{ width: 500 }}
      >
        <div className="logo"> 
          {/* <img src="./ethbtc.png" style = {{width: 16, height: 32, textAlign: "center"}}/> */}
          <Image src="./CryptoLogo.png" className = 'logo-img' preview = {false} />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="home"># home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MoneyCollectOutlined />}>
            <Link to="exchanges"># exchanges</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DollarOutlined />}>
            <Link to="cryptocurrencies"># cryptocurrencies</Link> 
          </Menu.Item>
          <Menu.Item key="4" icon={<ProfileOutlined />}>
            <Link to="news"># news</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        > 
          <div className="flex-container-nav">
            <div>
              <Dropdown overlay = {menu} placeholder = 'bottomCenter'>
                <Avatar src="https://joeschmoe.io/api/v1/random" className = 'layout-avatar'/>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0",  }} className = "content-area">
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {/* {{path === "/home"} && <Home /> } */}
            {compo}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Cryptopia ©2021 Created by Sparkle
        </Footer>
      </Layout>
    </Layout>
  );
};
