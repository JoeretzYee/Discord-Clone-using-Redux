import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <h3>Joeretz Galendez</h3>
                <ExpandMoreIcon />
            </div>

            <div className='sidebar__channels'>
                <div className='sidebar__channelsHeader'>
                    <div className='sidebar__header'>
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className='sidebar__addChannel' />
                </div>
                <div className='sidebar__channelsList'>
                    <SidebarChannel />
                </div>
            </div>

            <div className='sidebar__voice'>
                <SignalCellularAltIcon
                    className='sidebar__voiceIcon'
                    fontSize='large'
                />
                <div className='sidebar__voiceInfo'>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className='sidebar__voiceIcons'>
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className='sidebar__profile'>
                <Avatar src='https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/101823290_1428555110688113_6611589122643460096_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeFtHPE5LZ7UzRiLY5bHIAFVEwgPJqBBuioTCA8moEG6KsRIBY5VgW2RkdGurM2O4SULL76GuCczwhL-lU_HkLAX&_nc_ohc=PWYMgKv810EAX-xVViE&_nc_ht=scontent.fmnl3-2.fna&oh=35d3fe327559c80db2a1aff6aad7fbdc&oe=5FB4F9F6' />
                <div className='sidebar__profileInfo'>
                    <h3>Joeretz Galendez</h3>
                    <p>#1232234</p>
                </div>
                <div className='sidebar__profileIcons'>
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
