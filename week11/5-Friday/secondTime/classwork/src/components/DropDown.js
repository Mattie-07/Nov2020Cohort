import React from 'react'

const componentName = () => {
    let days = ['Monday', 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday",
    "Sunday" ]

    let daysArr = days.map(day =>{
        return <option>{day}</option>
    })

    

    return (
        <>
            <select>
                {daysArr}
            </select>
        </>
    )
}

export default componentName
