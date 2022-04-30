import React, { useEffect, useState } from 'react'
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import axios from './components/axios'
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  const [messages, setMessages] = useState([])
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("/messages/sync").then(res => {
      setMessages(res.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher(`${process.env.PUSHER_APIKEY}`, {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      { !user ? <Login /> : (
        <div className="app__body">
          <Sidebar messages={messages} />
          <Chat messages={messages} />
        </div>
      )}
    </div>
  );
}
export default App;
