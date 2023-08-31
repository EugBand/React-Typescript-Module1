import React, {useState} from 'react'
import {ICourse} from '../../models/ICourse'
import {ErrorMessage} from '../../common/ErrorMessage'
import {Input} from "../../common/Input";
import {Form} from "../../common/Form";
import {Button} from "../../common/Button";

let initialCourse: ICourse;

interface EditCourseProps {
    onEdit: (newCourse: ICourse) => void
}

export const InitCourse = (cource: ICourse) => {
    initialCourse = cource;
};

export const EditCourse = ({onEdit}: EditCourseProps) => {
    const [title, setTitle] = useState(initialCourse.title)
    const [description, setDescription] = useState(initialCourse.description)
    const [price, setPrice] = useState(initialCourse.price)
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        initialCourse.title = title
        initialCourse.description = description
        initialCourse.price = price
        onEdit(initialCourse)
    }

    return (
        <Form onFormSubmit={submitHandler}>
            <Input inputClass={"border py-2 px-4 mb-2 w-full outline-0"} defaultValue={title}
                   onInputChange={(e) => setTitle(e.target.value)}/>

            <Input inputClass={"border py-2 px-4 mb-2 w-full outline-0"} defaultValue={description}
                   onInputChange={(e) => setDescription(description)}/>

            <Input inputClass={"border py-2 px-4 mb-2 w-full outline-0"} defaultValue={price}
                   onInputChange={(e) => setPrice(Number(e.target.value))}/>

            {error && <ErrorMessage error={error}/>}

            <Button buttonType="submit" buttonClass="py-2 px-4 border bg-yellow-400 hover:text-white">Edit</Button>
        </Form>
    )
};