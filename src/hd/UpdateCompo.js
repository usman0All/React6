import React from "react"
import "./Style.css"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Store from "./Store"
function UpdateCompo(){
const Data=useContext(Store)
    const Navi= useNavigate()
    const upData={
        Name:"",
        Age:"",
        Course:"",
        Batch:""
    }
    const changeHandle=(e)=>{
        upData[e.target.name]= e.target.value
    }
    const handleClick=()=>{
        Data.rec.push(upData)
        Navi('/student')
    }
    return(
        <div className="updateForm">
        <form>
           <input className="input1" type="text" name="Name" placeholder="Enter Name" onChange={changeHandle}/>
            <input className="input1" type="text" name="Age" placeholder="Enter Age" onChange={changeHandle}/><br/>
            <input className="input1" type="text" name="Course" placeholder="Enter Course" onChange={changeHandle}/>
            <input className="input1" type="text" name="Batch" placeholder="Enter batch" onChange={changeHandle}/><br/>
            <button className="Add-btn"  onClick={()=> Navi("/student")}>Back</button>
            <button className="Add-btn" onClick={handleClick}> Submit</button>
            </form>
        </div>
    )
}
export default UpdateCompo;