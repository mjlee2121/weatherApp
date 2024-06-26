import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <ui className='SidebarList'>
        {SidebarData.map((val, key) =>{
            return (
                <li className='row' key={key} onClick={()=> {window.location.pathname = val.link}}>
                    <div>{val.icon}</div> 
                    <div>{val.title}</div>
                </li>
            )
        })}
        </ui>
    </div>
  )
}

export default Sidebar