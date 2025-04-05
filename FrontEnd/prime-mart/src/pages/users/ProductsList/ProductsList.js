import { memo } from 'react'
import "./productsList.scss"
import { ROUTERS } from 'utils'
import { Link } from 'react-router-dom'
import { categories } from '../theme/header/Header'
import ProductsCart from 'components/productsCart/ProductsCart'
import { featuredProducts } from '../home/HomePage'

const ProductsList = () => {
    const sorts = [
        "Low to High",
        "High to Low",
        "Newest to Oldest",
        "Oldest to Newest",
        "Best Sellers",
        "On Sale",
    ]
    return (
        <>
            <div className='container products-list'>
                <div className='row'>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                        <div className='sidebar'>
                            <div className='sidebar__item'>
                                <h2>Search</h2>
                                <input type='text' />
                            </div>
                            <div className='sidebar__item'>
                                <h2 >Price</h2>
                                <div className='price-range'>
                                    <div>
                                        <p>From: </p>
                                        <input type='number' min={0} />
                                    </div>
                                    <div>
                                        <p>To: </p>
                                        <input type='number' min={0} />
                                    </div>
                                </div>
                            </div>
                            <div className='sidebar__item'>
                                <h2>Sort</h2>
                                <div className='tags'>
                                    {sorts.map((item, index) => (
                                        <div
                                            className={`tag ${index === 0 ? "active" : ""}`}
                                            key={index}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='sidebar__item'>
                                <h2>Other Categories</h2>
                                <ul className='categories-list'>
                                    {
                                        categories.map((category, index) => (
                                            <li key={index}>
                                                <Link to={ROUTERS.USER.PRODUCT}>{category}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-12 col-sm-12 col-xs-12'>
                        <div className="row">
                            {featuredProducts.all.products.map((item, index) => (
                                <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                                    <ProductsCart img={item.img} name={item.name} price={item.price} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default memo(ProductsList);