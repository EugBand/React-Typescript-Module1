import React, {useState} from 'react'
import {ICource} from '../../models'
import {Button} from "../../common/Button";


interface CourseProps {
    cource: ICource
}

export const CourseInfo = ({cource}: CourseProps) => {
    const [details, setDetails] = useState(false)

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassName]

    return (
        <div
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={cource.image} className="w-1/6" alt={cource.title}/>
            <p>{cource.title}</p>
            <p className="font-bold">{cource.price}</p>
            <Button buttonClass={btnClasses.join(' ')} buttonName={details ? 'Hide Details' : 'Show Details'}
                    onButtonClick={() => setDetails(prev => !prev)}/>
            {details && <div>
                <p>{cource.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{cource?.rating?.rate}</span></p>
            </div>}
        </div>
    )
};