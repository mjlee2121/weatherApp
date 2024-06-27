import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <ui className='SidebarList'>
        {SidebarData.map((val, key) =>{
            return (
                <li className='row' id={window.location.pathname == val.link ? 'active':''} key={key} onClick={()=> {window.location.pathname = val.link}}>
                    <div id='icon'>{val.icon}</div> 
                    <div id='title'>{val.title}</div>
                </li>
            )
        })}
        </ui>
    </div>
  )
}

export default Sidebar