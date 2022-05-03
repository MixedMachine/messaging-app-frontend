import React from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarChat.css'

const SidebarChat = ({ messages }) => {

    return (
        <div className="sidebarChat">
            <Avatar src={`favicon.ico`} />
            <div className="sidebarChat__info">
                <h2>React Help</h2>
                <p>{messages[messages.length -1]?.message}</p>
            </div>
        </div>
    )
}

export default SidebarChat
