import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react"
import Store from "./Store"
function Student() {
    const Data = useContext(Store)
    const updateLink = useNavigate()
    return (
        <>
            <div className="head">Student Details</div>
            <button className="Add-btn" onClick={() => updateLink("/UpdateCompo")}>Add new student</button>
            <table className="tab">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
                {Data.rec.map((item, index) => {
                    return (
                        <>
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Course}</td>
                                <td>{item.Batch}</td>
                                <td><NavLink to="/editformcompo" state={{ index }}>edit</NavLink></td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    )
}
export default Student