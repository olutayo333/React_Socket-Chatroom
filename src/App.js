import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react'
import socketClient from "socket.io-client"
import { Route, Routes } from 'react-router-dom';
// import Chat from './components/Chat'
import Chat from './components/Chat';

function App() {
  let socket = useRef();
  console.log(socket);
  //const[socket, setsocket] = useState("")
  // let endpoint = "http://localhost:5000"
  let endpoint = "https://node-socket-xmqt.onrender.com"
  
  useEffect(()=>{
  socket.current = socketClient(endpoint)
  },[])
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat socket = {socket}/> } />
        <Route path="chat" element={<Chat socket = {socket}/> } />
        <Route path="*" element={<Chat socket = {socket}/> } />
      </Routes>
    </>
  );
}

export default App;
