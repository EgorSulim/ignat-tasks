import React from 'react'
import classes from "./Message.module.css";

type AlternativeMessageType = {
    message: string
    avatar: string
    name: string
    time: string
}

function AlternativeMessage(props: AlternativeMessageType) {
    return (
        <div className={classes.chat}>

            <div className={classes.alternativeMessage}>
                <div className={classes.aName}>{props.name}</div>
                <div className={classes.aText}>{props.message}</div>
                <div className={classes.aTime}>{props.time}</div>

            </div>
            <div className={classes.aImg}>
                <img src={props.avatar}/>
            </div>

        </div>
    )
}

export default AlternativeMessage
