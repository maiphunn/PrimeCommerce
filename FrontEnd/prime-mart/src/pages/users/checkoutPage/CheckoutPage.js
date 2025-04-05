import { memo } from 'react'
import "./checkoutPage.scss"
import { formatter } from 'utils/format';

const CheckoutPage = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div className='checkout-input'>
                            <label>
                                Your Name: <span className='required'>*</span>
                            </label>
                            <input type='text' placeholder='Enter your name' />
                        </div>
                        <div className='checkout-input'>
                            <label>
                                Address: <span className='required'>*</span>
                            </label>
                            <input type='text' placeholder='Enter your address' />
                            <div className='checkout-input__group'>
                                <div className='checkout-input'>
                                    <label>
                                        Phone: <span className='required'>*</span>
                                    </label>
                                    <input type='text' placeholder='Phone number' />
                                </div>

                                <div className='checkout-input'>
                                    <label>
                                        Email: <span className='required'>*</span>
                                    </label>
                                    <input type='text' placeholder='Enter your email' />
                                </div>
                            </div>
                            <div className='checkout-input'>
                                <label>
                                    Note:
                                </label>
                                <textarea rows={15} placeholder='Enter your note' />
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div className='checkout-order'>
                            <h3 className='order-text'>Order</h3>

                            <ul>
                                <li>
                                    <span>San pham 1</span>
                                    <b>{formatter(687687)}</b>
                                </li>
                                <li>
                                    <span>San pham 1</span>
                                    <b>{formatter(687687)}</b>
                                </li><li>
                                    <span>San pham 1</span>
                                    <b>{formatter(687687)}</b>
                                </li><li>
                                    <span>San pham 1</span>
                                    <b>{formatter(687687)}</b>
                                </li><li>
                                    <span>San pham 1</span>
                                    <b>{formatter(687687)}</b>
                                </li><li>
                                    <span>San pham 1</span>
                                    <b>{formatter(687687)}</b>
                                </li>
                                <li>
                                    <h4>Coupon code</h4>
                                    <b>NMP158</b>
                                </li>
                                <li className='checkout-order__subtotal'>
                                    <h3>Total</h3>
                                    <b>{formatter(277777)}</b>
                                </li>
                            </ul>
                            <button className='button-submit'>Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(CheckoutPage);