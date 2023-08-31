import React, {useState} from 'react'
import {ICourse} from '../../models/ICourse'
import {Button} from "../../common/Button";


interface CourseProps {
    course: ICourse
}

export const CourseInfo = ({course}: CourseProps) => {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={course.image} className="w-1/6" alt={course.title}/>
            <p>{course.title}</p>
            <p className="font-bold">{course.price}</p>
            <Button buttonClass={btnClasses.join(' ')} buttonName={details ? 'Hide Details' : 'Show Details'}
                    onButtonClick={() => setDetails(prev => !prev)}/>
            {details && <div>
                <p>{course.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{course?.rating?.rate}</span></p>
            </div>}
        </div>
    )
};