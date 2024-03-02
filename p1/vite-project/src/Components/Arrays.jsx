import React from 'react'
function Arrays() {
    const students = [
        {
            id: 1,
            name: "mark"
        },
        {
            id: 2,
            name: "henry"
        },
        {
            id: 3,
            name: "bill"
        },
        {
            id: 4,
            name: "gates"
        },
    ];
    return (
        <div>
            <h1>arrays in react</h1>
            {students.map((stud) => (
                <div key={stud.id}>
                    <h1>Name: {stud.name}</h1>
                    <h2>ID: {stud.id}</h2>
                </div>
            ))}
        </div>
    )
}

export default Arrays
