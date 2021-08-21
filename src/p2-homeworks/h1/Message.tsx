import React from 'react'
import {type} from "os";
import classes from "./Message.module.css";

type MessageDataType = {
    message: string
    avatar: string
    name: string
    time: string
}

export function Message(props: MessageDataType) {
    return (
        <div>
            <img className={classes.img} src={props.avatar}/>
            <div className={classes.message}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.text}>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}


