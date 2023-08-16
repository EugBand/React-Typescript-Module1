import React, {useContext} from 'react'
import {useProducts} from '../hooks/products'
import {ModalContext} from '../context/ModalContext'
import {IProduct} from '../models'
import {Loader} from '../components/Loader'
import {ErrorMessage} from '../components/ErrorMessage'
import {Product} from '../components/Product'
import {Modal} from '../components/Modal'
import {CreateProduct} from '../components/CreateProduct'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faRemove} from "@fortawesome/free-solid-svg-icons";
import {EditProduct, InitProduct} from "../components/EditProduct";

export function ProductsPage() {
  const {loading, error, products, addProduct, deleteProduct} = useProducts()
  const {modalNew, modalEdit, openNew, openEdit, close} = useContext(ModalContext)

  const btnBasedBgClassName = ' py-2 px-4 border'
  const btnDeleteBgClassName = 'bg-red-400 ' + btnBasedBgClassName
  const btnEditBgClassName ='bg-blue-400' + btnBasedBgClassName


  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  const editProduct = (product : IProduct) => {
    InitProduct(product)
    openEdit()
  }
  const editHandler = (product: IProduct) => {
    close()
  }

  return (
    <div className="container border-2 mx-auto max-w-2xl pt-5">
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }
      { products.map(product => <>
            <Product product={product} key={product.id}/>
            <div className="border py-2 px-4 rounded flex items-center mb-2">
              <button className={btnEditBgClassName}
                  onClick={()=>{editProduct(product)}}>
                { <FontAwesomeIcon icon={faEdit} /> }
              </button>

              <button className={btnDeleteBgClassName}
                  onClick={()=>{deleteProduct(product)}}>
                { <FontAwesomeIcon icon={faRemove} /> }
              </button>
            </div>
      </>
      )}

      {modalNew && <Modal title="Create new product" onClose={close}>
        <CreateProduct onCreate={createHandler} />
      </Modal>}

      {modalEdit && <Modal title="Edit product" onClose={close}>
        {<EditProduct onEdit={editHandler}/>}
      </Modal>}

      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={openNew}
      >+</button>
    </div>
  )
}