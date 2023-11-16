import React from "react";

export default function Arun(props){
    return(
        <>
        <h1>hi {props.data} welcome to my page</h1>
        <button onClick={props.A}>Click the activate page</button>
        </>
    )
}