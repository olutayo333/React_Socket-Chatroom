import React, { useEffect, useState } from 'react'


const Chat = ({socket}) => {
  const [message, setmessage] = useState("")
  const[ allMessages, setallMessages] = useState([]) 
  
  useEffect(()=>{
    if (socket.current)
    {socket.current.on("broadcastMSG", (recievedMessage)=>{ //recieving message from the bakend
      console.log(recievedMessage); setallMessages([...allMessages, recievedMessage])} )  
    }
  })

    const sendMessage = ()=>{
    socket.current.emit("sendMSG", message)  // sending message to the backend
    setmessage("")
    }
    
  return (
    <div className='container-fluid'>
      <div className='row d-block mx-auto shadow  py-5 text-center' style={{marginTop:"10%", width:"50vw"}}>
          <div className='col-lg-7 ' > <h3>GROUP MESSAGING SYSTEM</h3>
                <div>
                    {allMessages.map((msg)=>(<div>{msg}</div>  ))}<hr /> <br />
                </div>
              
                <input type="text" id='inputID' className='form-control' value={message} onChange={(e)=>setmessage(e.target.value)} style={{width:"", marginBottom:"8%"}} placeholder='type your message here' /> <br /> <hr /> 
                <button onClick={sendMessage} id='send' className='btn btn-lg btn-outline-danger'>Send Message </button>
              
            </div>
          </div>
    </div>
  )
}

export default Chat
