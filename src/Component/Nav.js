import React, { useState } from "react"
import logo from "./images/logo.jpeg"
import "./Nav.css"
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const Nav=()=>{
    let nav=useNavigate()
    const goto=()=>{
        nav(`/gsd`)
    }
    const gotocontact=()=>{
        nav(`/contact`)
    }
    const gotohome=()=>{
        nav(`/`)
    }
    const gototax=()=>{
        nav(`/tax`)
    }
    let [bool,setBool]=useState(false)
    const meanudetails=()=>{
        setBool(true)
    }
    const hiddedetails=()=>{
        setBool(false)
    }
    return(
        <div >
            <div className="nav-row">
            <div className="logo-image">
                <img src={logo} onClick={gotohome}/>
            </div>
            <div className="nav-details">
                <ul className="nav-list">
                    <li onClick={goto}>GST Registration</li>
                    <li onClick={gototax}>Income Tax Filing</li>
                    <li onClick={gotohome}>FSSAI</li>
                    <li onClick={gotohome}>Registration</li>
                    <li onClick={gotocontact}>Contact</li>
                </ul>
            </div>
            <div className="meanu-bar">
                {
                    bool===false?<IoMenu className="meanu" onClick={meanudetails}/>:<IoMdClose className="meanu" onClick={hiddedetails}/>
                }
                
            </div>
            </div>
             {
                bool?<div className="meanu-bar-info">
                    
                <div className="meanu-bar-list">
                    <ul className="list">
                        <li onClick={goto} className="li-list">GST Registration</li>
                        <li onClick={gototax} className="li-list">Income Tax Filing</li>
                        <li onClick={gotohome}className="li-list">FSSAI</li>
                        <li onClick={gotohome} className="li-list">Registration</li>
                        <li onClick={gotocontact} className="li-list">Contact</li>
                    </ul>
                    </div> 
                </div>:""
                
             }
                
            
            
        </div>
    )
}
export default Nav