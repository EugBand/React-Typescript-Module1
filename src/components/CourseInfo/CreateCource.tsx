import React, {useState} from 'react'
import {ICourse} from '../../models/ICourse'
import {ErrorMessage} from '../../common/ErrorMessage'
import {Input} from "../../common/Input";
import {Form} from "../../common/Form";
import {Button} from "../../common/Button";
import {DEFAULT_IMAGE} from "../../constants";
import {baseCrudService} from "../../service/baseCrudService"
import {v4 as uuidv4} from 'uuid';

const courseData: ICourse = {
    id: '',
    title: '',
    creationDate: '',
    duration: 100,
    authors: [],
    price: 10,
    description: '',
    image: DEFAULT_IMAGE,
    category: 'IT',
    rating: {
        rate: 5,
        count: 5
    }
}

interface CreateCourseProps {
    onCreate: (course: ICourse) => void
}

export const CreateCource = ({onCreate}: CreateCourseProps) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [authors, setAuthors] = useState(Array<string>)
    const [error, setError] = useState('')
    const {createResource} = baseCrudService()

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (title.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        if (description.trim().length === 0) {
            setError('Please enter valid description.')
            return
        }

        if (!Number(duration) && Number(duration) < 1) {
            setError('Please enter valid duration.')
            return
        }

        if (!authors || authors.length === 0) {
            authors[0] = '0'
        }

        courseData.id = uuidv4()
        courseData.title = title
        courseData.description = description
        courseData.duration = Number(duration)
        courseData.creationDate = (new Date()).toDateString()
        courseData.authors = authors

        const response = await createResource<ICourse>("/courses/add", courseData)

        onCreate(response.data)
    }

    const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const durationChangeHandler = (event: React.ChangeEvent<HTMLInputElement>,
                                   setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter(event.target.value)
    }

    return (
        <Form onFormSubmit={submitHandler}>
            <Input inputClass={"border py-2 px-4 mb-2 w-full outline-0"} placeholder={"Enter course title..."}
                   value={title} onInputChange={titleChangeHandler}/>

            <Input inputClass={"border py-2 px-4 mb-2 w-full outline-0"} placeholder={"Enter course description..."}
                   value={description} onInputChange={descriptionChangeHandler}/>

            <Input inputClass={"border py-2 px-4 mb-2 w-full outline-0"} placeholder={"Enter course duration..."}
                   value={duration} onInputChange={(e) => durationChangeHandler(e, setDuration)}/>

            {error && <ErrorMessage error={error}/>}

            <Button buttonType="submit" buttonClass="py-2 px-4 border bg-yellow-400 hover:text-white">Create</Button>
        </Form>
    )
};