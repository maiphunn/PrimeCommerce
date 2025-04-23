import { memo, use } from 'react'
import "./shoppingCartPage.scss"
import { formatter } from './../../../utils/format';
import Quantity from 'components/quantity/Quantity';
import { BsTrash } from "react-icons/bs";
import topImg1 from 'assets/users/tops/topImg1.png';
import { useNavigate } from 'react-router-dom';
import { ROUTERS } from 'utils';

const ShoppingCartPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='container'>
                <div className='table__cart'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='shopping_cart-item'>
                                    <img
                                        src={topImg1}
                                        alt=''
                                    />
                                    <h4>Ten sp 1</h4>
                                </td>
                                <td>{formatter(200000)}</td>
                                <td><Quantity quantity={2} hasAddToCart={false} /></td>
                                <td>{formatter(400000)}</td>
                                <td className='icon-close'><BsTrash /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div className='shopping-continue'>
                            <h3>Coupon code</h3>
                            <div className='shopping-coupon'>
                                <input type='text' placeholder='Apply coupon code' />
                                <button className='button-submit'>Apply</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div className='shopping-checkout'>
                            <h2>Total</h2>
                            <ul>
                                <li>Quantity: <span>{2}</span></li>
                                <li>Your total: <span>{formatter(632648)}</span> </li>
                            </ul>
                            <button className='button-submit' onClick={() => { navigate(ROUTERS.USER.CHECKOUT) }}>Pay Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default memo(ShoppingCartPage);