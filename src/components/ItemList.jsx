import React from 'react'
import { Item } from './Item'
import '../itemList.css'

export const ItemList = ({items}) => {

  return (
    <div className='container d-flex justify-content-center h-100 align-items-center my-4'>
        <div className='row'>
            {
                items.map(({id, prodName, subtitle, descripcion, img, stock, initial, price}) => {
                    return <div className='col-md-4' key={id}>
                                <Item prodName={prodName} subtitle={subtitle} descripcion={descripcion} img={img} stock={stock} initial={initial} price={price}/>
                            </div>
                })
            }
        </div>
    </div>
  )
}