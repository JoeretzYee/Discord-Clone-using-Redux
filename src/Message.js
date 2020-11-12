import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className='message'>
      <Avatar src='https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/101823290_1428555110688113_6611589122643460096_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_eui2=AeFtHPE5LZ7UzRiLY5bHIAFVEwgPJqBBuioTCA8moEG6KsRIBY5VgW2RkdGurM2O4SULL76GuCczwhL-lU_HkLAX&_nc_ohc=PWYMgKv810EAX-xVViE&_nc_ht=scontent.fmnl3-2.fna&oh=35d3fe327559c80db2a1aff6aad7fbdc&oe=5FB4F9F6' />
      <div className='message__info'>
        <h4>
          Joeretz Galendez{" "}
          <span className='message__timestamp'>this is a timestamp</span>
        </h4>
        <p>Yow</p>
      </div>
    </div>
  );
}

export default Message;
