import React , { Component } from 'react';
import DocumentVerify from '../Components/DocumentVerify/DocumentVerify.jsx';


export default class Home extends Component {

    render() {
        return (
            <div className={"home_page"}>
                <DocumentVerify/>
            </div>
        );
    }
}