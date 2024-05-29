import React from "react";
import cont from "../images/cont.jpg"
import "./Contact.css"
const Contact=()=>{
    return(
        <div>
            <div>
                <div className="cont-back">
                    <h1>Contact Us</h1>
                </div>
                <div className="cont-detail">
                    <div className="cont-image">
                        <img src={cont}/>
                    </div>
                    <div className="cont-form">
                        <div className="cont-form-detail">
                            <h1>Feel free to contact us.We'll be glad to hear from you, buddy.</h1>
                            <form>
                                <label>Name :</label><br/>
                                <input type="text" placeholder="Enteryour name"/>
                                <div>
                                    <label>Email :</label><br/>
                                    <input type="email" placeholder="Enter your email"/>
                                </div>
                                <div>
                                    <label>Message :</label><br/>
                                    <textarea placeholder="Enter the Message" rows={3}></textarea>
                                </div>
                                <div className="cont-form-btn">
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact