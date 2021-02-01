import React from "react";
import "./HeaderStyle.scss";

interface IState {}

export class Header extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const ItemArr = ["首页", "体育", "电竞", "娱乐", "鱼料", "赛程", "APP下载"];
        return (
            <header className="container header">
                <nav className="flex-start nav">
                    <div className="nav-logo"></div>
                    <ul className="flex-start nav-list">
                        {ItemArr.map((x, k) => (
                            <li className="nav-list-item" key={k}>
                                <span>{x}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex-end nav-login">
                        <div className="avatar"></div>
                        <div>
                            <p>注册</p>
                            <p>登录</p>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
