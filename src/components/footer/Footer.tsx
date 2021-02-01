import React from "react";
import "./FooterStyle.scss";

interface IState {}

export class Footer extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const FooterSupport: Array<Array<string>> = [
            ["乐鱼直播", "加入我们", "广告合作"],
            ["主播招募", "申请主播"],
            ["推手招募", "申请推手"],
            ["关于我们", "乐鱼介绍"],
            ["APP下载"],
        ];
        return (
            <footer className="footer">
                <div className="container site-footer">
                    <div className="flex-space-between support">
                        {FooterSupport.map((item, i) => (
                            <dl key={i} style={{ width: `${100 / FooterSupport.length}%` }}>
                                <dt style={{ color: "rgb(168, 150, 34)" }}>{item[0]}</dt>
                                {item.slice(1).length !== 0 ? item.slice(1).map((x, y) => <dd key={y}>{x}</dd>) : null}
                            </dl>
                        ))}
                    </div>
                    <p>2020-2022版权所有〇</p>
                </div>
            </footer>
        );
    }
}
