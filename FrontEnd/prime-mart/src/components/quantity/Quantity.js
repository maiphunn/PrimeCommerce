import { formatter } from 'utils/format';
import { memo } from 'react';
import "./quantity.scss"
import { ROUTERS } from 'utils';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Quantity = ({ hasAddToCart = true }) => {
    return (
        <>
            <div className='quantity-container'>
                <div className='quantity'>
                    <span className='qtyBtn'><FaMinus /></span>
                    <input type='number' defaultValue={1} />
                    <span className='qtyBtn'><FaPlus /></span>
                </div>
                {hasAddToCart && (
                    <button type='submit' className='button-submit'>
                        Add To Cart
                    </button>
                )}
            </div>
        </>
    )
}

export default memo(Quantity)