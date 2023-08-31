import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import {ICourse} from "../models/ICourse";
import {baseCrudService} from "../service/baseCrudService";
import {DEFAULT_IMAGE} from "../constants";

export const useProducts = () => {
    const [products, setCourse] = useState<ICourse[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const {getAllResources} = baseCrudService()

    const addCourse = (product: ICourse) => {
        setCourse(prev => [...prev, product])
    };

    const deleteProduct = (product: ICourse) => {
        setCourse(prev => prev.filter(item => item.title != product.title))
    };

    const fetchProducts = async () => {
        try {
            setError('')
            setLoading(true)
            const response = await getAllResources<ICourse>("/courses/all")
            if (response && response.data && !response.data.image) {
                response.data.image = DEFAULT_IMAGE
            }
            setCourse(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    };

    useEffect(() => {
        fetchProducts()
    }, [])

    return {courses: products, error, loading, addCourse, deleteProduct}
};