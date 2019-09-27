import React,{Component} from "react";
import { HomeWrapper } from "./home";

export default class Home extends Component {
    render(){
        return(
            <HomeWrapper>
                <div id="wrapper">
                    <div className="head">
                        
                    </div>
                </div>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        fetch("/users/login",{
            method: "post",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            }
        })
    }
}