import React from "react";
import { Form, Button ,Col } from 'react-bootstrap'
import { useState } from "react";
import firebase from 'firebase'
import { db } from "../firebase";

function ChatInput() {
 
        const [msg , setMsg]= useState("");

        async function sendMessage(e){
            e.preventDefault()
    
            await db.collection('messages').add({
                text : msg ,
                createdAt : firebase.firestore.FieldValue.serverTimestamp()
            })
            setMsg("")
           
        }
       
        return (

            <Col className="msg-box">
                <Col className="wrap">
                    <Form onSubmit={sendMessage}>
                        <Form.Control style={{ width: '80%', fontSize: '15px', fontWeight: '550' }}
                            id="message-txt"   
                            placeholder="Message..." 
                            value={msg}
                            onChange={({target})=> setMsg(target.value)}>        
                        </Form.Control>    
                        <Button className="button" variant="danger" id="button-addon2" type='submit'
                                style={{width:"20%"}}>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </Button>
                    </Form>
                </Col>
            </Col> 
    )
}
export default ChatInput




