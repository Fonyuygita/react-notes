import React from 'react'
import { studentTeam } from '../data'
import "./student.css"

const Student = () => {
    return (
        <div className="team_container">
            <div className="team">
                {studentTeam.map((student) => (
                    <div className="student" key={student.id}>
                        <img src={student.image} alt="" />
                        <h3 className="name">{student.name}</h3>
                        <p>{student.role}</p>
                        <p>{student.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Student
