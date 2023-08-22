import {useEffect, useState} from 'react'
import axios, {AxiosError} from 'axios'
import {ICource} from "../models";

export const useProducts = () => {
    const [products, setProduct] = useState<ICource[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const addProduct = (product: ICource) => {
        setProduct(prev => [...prev, product])
    };

    const deleteProduct = (product: ICource) => {
        setProduct(prev => prev.filter(item => item.title != product.title))
    };

    const fetchProducts = async () => {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<ICource[]>('https://fakestoreapi.com/products?limit=5')
            setProduct(response.data)
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

    return {products, error, loading, addCourse: addProduct, deleteProduct}
};