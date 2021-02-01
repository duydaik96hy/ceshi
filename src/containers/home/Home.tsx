import React from "react";
import { Body } from "./body/Body";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <Body />
                <Footer />
            </>
        );
    }
}
