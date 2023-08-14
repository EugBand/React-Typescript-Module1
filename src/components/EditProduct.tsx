import React, {useState} from 'react'
import {IProduct} from '../models'
import {ErrorMessage} from './ErrorMessage'

let initialProduct: IProduct;

interface EditProductProps {
    onEdit: (newProduct: IProduct) => void
}

export function InitProduct(product: IProduct) {
    initialProduct = product;
}
export function EditProduct({onEdit} :EditProductProps) {
  const [product , setProduct] = useState(initialProduct)
  const [error, setError] = useState('')

    // if (title.trim().length === 0 || description.trim().length === 0 || price.valueOf() == null) {
    //   setError('Please enter valid data.')
    //   return
    // }

    const changeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event:
        React.ChangeEvent<HTMLInputElement>) => {
      setFunction(event.target.value)
    }

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        onEdit(product)
    }

    return (
        <form onSubmit={submitHandler}>
          <input type="text"
              className="border py-2 px-4 mb-2 w-full outline-0"
              defaultValue={product.title}
              onChange={(e) => product.title = e.target.value}
          />

          <input
              type="text"
              className="border py-2 px-4 mb-2 w-full outline-0"
              defaultValue={product.description}
              onChange={(e) => product.description = e.target.value}
          />

          <input
              type="text"
              className="border py-2 px-4 mb-2 w-full outline-0"
              defaultValue={product.price}
              onChange={(e) => product.price = Number(e.target.value)}
          />

          {error && <ErrorMessage error={error}/>}

          <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Edite</button>
        </form>
    )
}