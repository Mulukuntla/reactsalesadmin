import React from "react"
const Button=(props)=>{
    const clicked=()=>{
        props.Clicks(props.item)
        

        

    }
    return (
        <button type="button"  onClick={clicked}>click</button>
    )

}
export default Button
