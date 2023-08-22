import React, {useState} from 'react'
import {ICource} from '../../models'
import axios from 'axios'
import {ErrorMessage} from '../../common/ErrorMessage'
import {Input} from "../../common/Input";
import {Form} from "../../common/Form";
import {Button} from "../../common/Button";

const courseData: ICource = {
    id: 111,
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateCourseProps {
    onCreate: (cource: ICource) => void
}

export const CreateCource = ({onCreate}: CreateCourseProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        courseData.title = value
        const response = await axios.post<ICource>('https://fakestoreapi.com/products', courseData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <Form onFormSubmit={submitHandler}>
            <Input inputClass={"border py-2 px-4 mb-2 w-full outline-0"} placeholder={"Enter course title..."}
                   value={value} onInputChange={changeHandler}/>

            {error && <ErrorMessage error={error}/>}

            <Button buttonType="submit" buttonClass="py-2 px-4 border bg-yellow-400 hover:text-white">Create</Button>
        </Form>
    )
};