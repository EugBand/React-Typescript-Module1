import React, {useEffect, useState} from 'react'
import {IProduct} from '../models'
import axios, {AxiosError} from 'axios'

export function useProducts() {
  const [products, setProduct] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function addProduct(product: IProduct) {
    setProduct(prev => [...prev, product])
  }

  function deleteProduct(product: IProduct) {
    setProduct(prev => prev.filter(item => item.title != product.title))
  }

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
      setProduct(response.data)
      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, error, loading, addProduct, deleteProduct }
}