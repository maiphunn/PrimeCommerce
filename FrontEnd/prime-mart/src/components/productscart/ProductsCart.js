import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { formatter } from 'utils/format';
import { Link, generatePath } from 'react-router-dom';
import { memo } from 'react';
import "./productsCart.scss"
import { ROUTERS } from 'utils';

const ProductsCart = ({ img, name, price }) => {
    return (
        <div className='featured__item'>
            <div
                className='featured__item-picture'
                style={{ backgroundImage: `url(${img})` }}
            >
                <ul className='item-picture__hover'>
                    <li>
                        <AiOutlineEye />
                    </li>
                    <li>
                        <AiOutlineShoppingCart />
                    </li>
                </ul>
            </div>
            <div className='featured__item-text'>
                <h6>
                    <Link to={generatePath(ROUTERS.USER.PRODUCT_DETAIL, { id: 1 })}>{name}</Link>
                </h6>
                <h5>
                    {formatter(price)}
                </h5>
            </div>
        </div>
    )
}

export default memo(ProductsCart)