import React from "react";
import Avatar from '@mui/material/Avatar';

import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
  <div className="sidebar">
    <div className="sidebar__header">
     <Avatar /> 
     <div className="sidebar__headerRight">
      <IconButton>
        <DonutLarge />
      </IconButton>
      <IconButton> 
        <Chat />
      </IconButton>
      <IconButton> 
        <MoreVert />
      </IconButton> 
     </div>
    </div>

    <div className="sidebar__search">
      <div
       className="sidebar__searchContainer">
        <SearchOutlined />
        <input placeholder="Search or start new chat" type="text" />
      </div>
      
    </div>

    <div className="sidebar__chats">
    <SidebarChat />
    </div>
  </div>
  );
}

export default Sidebar;