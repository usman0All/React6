import React from "react";
import "./Style.css"
import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Store from "./Store";
function EditFormCompo() {
    const Data = useContext(Store);
    const changeLink = useNavigate();
    const stIndex = useLocation().state.index
    console.log(stIndex)
    const onObj = {
        Name: Data.rec[stIndex].Name,
        Age: Data.rec[stIndex].Age,
        Course: Data.rec[stIndex].Course,
        Batch: Data.rec[stIndex].Batch
    }
    function handleChange(e) {
        onObj[e.target.name] = e.target.value
    }
    function handleUpadate() {
        Data.rec[stIndex] = onObj
        changeLink('/student')
    }
    return (
        <div className="editForm">
            <form>
                <input type="text" name="Name" placeholder={Data.rec[stIndex].Name} onChange={handleChange} />
                <input type="number" name="Age" placeholder={Data.rec[stIndex].Age} onChange={handleChange} /><br />
                <input type="text" name="Course" placeholder={Data.rec[stIndex].Course} onChange={handleChange} />
                <input type="text" name="Batch" placeholder={Data.rec[stIndex].Batch} onChange={handleChange} /><br />
                <button className="Add-btn" onClick={() => changeLink('/student')}>Cancel</button>
                <button className="Add-btn" onClick={handleUpadate}>Update</button>
            </form>
        </div>
    )
}
export default EditFormCompo