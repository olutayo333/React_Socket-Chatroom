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
    <center>
    <div > <h3>GROUP MESSAGING SYSTEM</h3>
          <div>
              {allMessages.map((msg)=>(<div>{msg}</div>  ))}<hr /> <br />
          </div>
        
          <input type="text" id='inputID' value={message} onChange={(e)=>setmessage(e.target.value)} style={{width:"80vw", marginBottom:"8%"}} placeholder='type your message here' /> <br /> <hr /> 
          <button onClick={sendMessage} id='send' className='btn btn-lg btn-secondary'>Send Message </button>
        
      </div>
    </center>
  )
}

export default Chat
