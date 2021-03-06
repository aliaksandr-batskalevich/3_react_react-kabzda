import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {appDataType} from "./redux/state";


type AppPropsType = {
    appData: appDataType
    addPostCallBack: (postMessage: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavBar sideBarData={props.appData.friendsPage}/>
                <Content appData={props.appData} addPostCallBack={props.addPostCallBack}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
