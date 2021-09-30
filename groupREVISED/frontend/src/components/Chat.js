import { Container, Col, Button } from "react-bootstrap";
import React , { useEffect , useState ,useRef} from "react";
import { db } from "../firebase";
import ChatInput from './ChatInput';

function Chat(){
    const scroll = useRef(null);
    const [messages , setMessages] = useState([]);
    const [chatroom , setChat] = useState(false);

    var loggedUser = JSON.parse(localStorage.getItem("user"))
    
    useEffect(()=> {
       db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot =>{
           setMessages(snapshot.docs.map(doc => doc.data()))
       })
    },[])

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: 'instant' }); //smooth 
      });

    function chatDisplay() {
        if (chatroom){
            setChat(false)
        }else{
            setChat(true)
        }
    }


    return(
        <>
        {loggedUser ? 
        <Button  size="lg" style={{width:"10%",
                                height:"4rem",
                                padding:"0rem",
                                position:"fixed",
                                top:"89rem",
                                right:"3rem",
                                zIndex:"1",
                                backgroundColor:"#66A182"
                            }}
        onClick={chatDisplay}>Chat Room
        </Button>
        :
        ""
        }
        
        {chatroom ?
                <Container style={{ width:"30%",
                                padding:"0rem",
                                position:"fixed",
                                top:"28.5rem",
                                right:"3rem",
                                zIndex:"1",
                                overflowY:"scroll"
                            }}
                            className= "wrapper2">

                <Container style={{position:"relative"}}>
                    <Col className="head-img" style={{fontSize:"18px",textAlign:"center"}} >
                        <h2>Welcome to ChatRoom</h2>
                    </Col> 
                    <Col style={{marginBottom:"6rem",marginTop:"4rem"}}>
                        <div style={{fontSize:"15px"}}>
                            {messages.map(({id,text})=>(
                                <div key={id} className='msg'>
                                
                                    
                                    <strong>{loggedUser.name} texted:</strong>
                                     <p>{text}</p>
                                </div>
                            ))}
                            
                        </div>
                        <ChatInput />
                        <div ref={scroll}></div>
                    </Col>
                </Container>
            </Container>
            :
            ""
            }
        </>
    )
}

export default Chat



