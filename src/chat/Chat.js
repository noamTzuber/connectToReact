import './Chat.css'
import Conversation from './conversation/Conversation';
import SummaryConversation from './summaryConversation/SummaryConversation';
import UserData from "./userData/UserData";

import users from "../DB/DB";
import {useState} from "react";
import RightSide from "./rightSide/RightSide";
import ImgPic from "./Btn/ImgPic";

import {useLocation} from 'react-router-dom'


function Chat() {
    const {state} = useLocation();
    const { id2, dataBase } = state; 

    function getIndex(){
        const findIdEqualNum = /id=[\d]+/;
        const findNum = /[\d]+/;
        let semiResult = document.URL.match(findIdEqualNum)[0];
        return semiResult.match(findNum)[0];
    }
    console.log(id2)

    // if(id2 == '' || id2 == null){
    //     window.location.replace('/')
    // }
    var id = id2
    console.log(id2)


    const [currentTalk, setCurrentTalk]= useState({contact:'',lastMessage:'',lastTime:'',text:[], img:''})
    const [currentMessages, setCurrentMessages]= useState([])
    const [contacts, setContacts]= useState(users[id].chats)


    const userList = contacts.map((users, key) => {
        return < SummaryConversation{...users}  setCurrentConversation={setCurrentTalk} id = {id} num ={key} key={key}/>
    });

    return (
        <div className='chatbox'>

            <div className="col-3">
                <div className="container">
                    <div className="section" id="left-section">
                        <div className="content">

                            <UserData id={id} setContacts={setContacts}/>
                        </div>
                        <div className="scrollable-content" id="summary-conversation"
                             style={{marginTop: "1%", backgroundColor: "rgb(194 190 190 / 42%)"}}>
                            {userList}

                        </div>
                    </div>
                </div>
            </div>

            <div className="col-9">

                <RightSide setContact={setContacts} currentConversation = {currentTalk} setMessages ={setCurrentMessages} id = {id}/>
            </div>

        </div>


    );
}

export default Chat