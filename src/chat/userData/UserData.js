import './UserData.css'
import React from "react";
import users from "../../DB/DB";


function UserData(props) {

    const profilePic = require("../../DB/profilePictures/".concat("", users[props.id].profilePic));

    var nickname = users[props.id].nickName;

    function addUser(){
         var contactName = document.getElementById("inputAddUser").value;
        // var contactPic = "ron.jpg"
        users[props.id].chats.push({contact:contactName, img:"ron.jpg", lastMessage:"", lastTime:"", text:[]})
        console.log(users[props.id].chats)
        props.setContacts(users[props.id].chats.concat([]))


    }

    return (
        <div className="userData">
            <img src={profilePic} style={{width: "17%", borderRadius: "50%", clipPath: "circle()"}}/>

            <span className="position-absolute top-50 start-50 translate-middle">{nickname}</span>

            <button id="addConversation" type="button" className="btn btn-outline-light" data-toggle="modal"
                    data-target="#myModal" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fillRule="evenodd"
                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </button>


            {/*modal*/}
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h3 className="modal-title">Add user</h3>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input id = "inputAddUser" type="text" className="form-control" placeholder="username"
                                       aria-label="username" aria-describedby="button-addon2"/>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={()=>{addUser()}} >Add</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserData