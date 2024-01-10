import React from 'react'
import { ProductDetail } from '../features/product/components/ProductDetail'
import { Navbar } from '../features/navbar/Navbar'

export const ProductDetailPage = () => {
    return (
        <div>
            <Navbar />
            <ProductDetail />
        </div>
    )
}
