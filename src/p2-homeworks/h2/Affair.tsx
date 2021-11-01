import React from 'react'
import {AffairType} from "./HW2";


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
    name:string
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(affair._id)}// need to fix
    let affair=props.affair
    return (
        <div>
            <button onClick={deleteCallback}>X</button>
            <span>{affair.priority} {affair.name}</span>

        </div>
    )
}

export default Affair
