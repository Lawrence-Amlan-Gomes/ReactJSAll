/* eslint-disable react/prop-types */
// /////////////////////// react class component ////////////////////////////////////////////
import React from "react";
import classes from "../style.module.css";
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date()};   
    }
    tick(){
        this.setState(function () {
            return{
                date: new Date()
            }
        })}

    componentDidMount(){
        this.clockTimer = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }
    render(){
        return (
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            <div className={classes.mainclock}>
                {new Date().toLocaleTimeString(this.props.locale)}<br></br>
            </div>
        )
    }
}

export default Clock;