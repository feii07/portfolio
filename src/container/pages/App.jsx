import React, { Component } from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Content from "../../component/content/Content";
import './App.css';

class App extends Component {
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <Content/>
                </div>
            </div>
        )
    }
}

export default App;