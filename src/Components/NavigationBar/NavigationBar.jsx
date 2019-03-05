import React , { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavigationBar extends Component {
    state = {
        current: 'home',
        viewMode: 'horizontal',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        const { viewMode} = this.state;
        return (
            <div className={"nav_bar"}>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode={viewMode}
                    theme="dark"
                >
                    <Menu.Item key="home">
                        <Link to={"/home"}>
                            <Icon type="mail" />Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Link to={"/about"}>
                            <Icon type="appstore" />About Us
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="github">
                        <Icon type="github" />Git Hub
                    </Menu.Item>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Settings</span>}>
                        <MenuItemGroup title="Login">
                            <Menu.Item key="adminLogin">
                                <Link to={"/login"}>
                                    <Icon type="login" />Admin Login
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="userLogin">
                                <Link to={"/login"}>
                                    <Icon type="login" />User Login
                                </Link>
                            </Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="info">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            <Icon type="info" /> Information </a>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}