import React from "react";
import "./BodyStyle.scss";

interface IState {}

interface IData {
    url: string;
}

interface IListItemsData {
    videoUrl: string;
    avartarUrl: string;
    streamerName: string;
    title: string;
    view: string;
}

export class Body extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        const LiveStreamDataArr: Array<IData> = [{ url: "/assets/12.png" }, { url: "/assets/12.png" }, { url: "/assets/12.png" }, { url: "/assets/12.png" }];
        const HotItemListArr: Array<IData> = [{ url: "/assets/13.png" }, { url: "/assets/13.png" }, { url: "/assets/13.png" }, { url: "/assets/13.png" }];
        const StreamerItemListArr: Array<IListItemsData> = [
            { videoUrl: "/assets/14.png", avartarUrl: "/assets/15.png", streamerName: "老王侃球", title: "欧冠：巴萨VS尤文 世纪之战", view: "99万" },
            { videoUrl: "/assets/14.png", avartarUrl: "/assets/15.png", streamerName: "老王侃球", title: "欧冠：巴萨VS尤文 世纪之战", view: "99万" },
            { videoUrl: "/assets/14.png", avartarUrl: "/assets/15.png", streamerName: "老王侃球", title: "欧冠：巴萨VS尤文 世纪之战", view: "99万" },
            { videoUrl: "/assets/14.png", avartarUrl: "/assets/15.png", streamerName: "老王侃球", title: "欧冠：巴萨VS尤文 世纪之战", view: "99万" },
            { videoUrl: "/assets/14.png", avartarUrl: "/assets/15.png", streamerName: "老王侃球", title: "欧冠：巴萨VS尤文 世纪之战", view: "99万" },
            { videoUrl: "/assets/14.png", avartarUrl: "/assets/15.png", streamerName: "老王侃球", title: "欧冠：巴萨VS尤文 世纪之战", view: "99万" },
            { videoUrl: "/assets/14.png", avartarUrl: "/assets/15.png", streamerName: "老王侃球", title: "欧冠：巴萨VS尤文 世纪之战", view: "99万" },
            { videoUrl: "/assets/14.png", avartarUrl: "/assets/15.png", streamerName: "老王侃球", title: "欧冠：巴萨VS尤文 世纪之战", view: "99万" },
        ];
        return (
            <div className="body">
                <div className="container">
                    <div className="live-stream">
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="banner">
                            <div className="flex-start banner-title">
                                <h3 style={{ fontSize: 28 }} className="flex-space-between">
                                    <span>尤文图斯</span>
                                    <span>VS</span>
                                    <span>巴塞罗那</span>
                                </h3>
                                <p className="flex-space-between">
                                    <span>主播：老王侃球</span>
                                    <span>人气：99999</span>
                                    <span>最近10次命中率：80%</span>
                                    <span>推荐指数：★★★★★</span>
                                </p>
                            </div>
                            <div className="flex-start carousel">
                                <div className="left"></div>
                                <div className="flex-space-between right">
                                    {LiveStreamDataArr.map((x, k) => (
                                        <div key={k} className="translate">
                                            <img src={x.url} width="100%" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hot">
                        <div className="flex-space-between title">
                            <div>
                                <h3 data-hover="热门赛事">热门赛事</h3>
                            </div>
                            <input type="text" placeholder="搜索更多热门赛事" className="input" />
                        </div>
                        <div className="flex-start items">
                            <div className="flex-space-between list">
                                {HotItemListArr.map((x, k) => (
                                    <div key={k} className="translate flex-center">
                                        <img src={x.url} width="95%" />
                                    </div>
                                ))}
                            </div>
                            <div className="translate detail">赛事</div>
                        </div>
                    </div>
                    <div className="streamer">
                        <div className="flex-space-between title">
                            <div>
                                <h3 data-hover="人气主播">人气主播</h3>
                            </div>
                            <input type="text" placeholder="搜索更多主播" className="input" />
                        </div>
                        <div className="list-items">
                            {StreamerItemListArr.map((x, k) => (
                                <div key={k} className="item">
                                    <img src={x.videoUrl} alt={x.title} width="100%" />
                                    <div className="flex-start">
                                        <img src={x.avartarUrl} alt={x.streamerName} />
                                        <div>
                                            <h4>{x.title}</h4>
                                            <p className="flex-space-between">
                                                <span>{x.streamerName}</span>
                                                <span>{x.view}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
