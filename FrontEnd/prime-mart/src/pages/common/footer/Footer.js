import { memo } from 'react'
import "./footer.scss"
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12'>
                        <div className='footer__about'>
                            <h1 className='footer__about-logo'>
                                Prime Logo
                            </h1>
                            <ul>
                                <li>Address: 37 Ha Huy Giap, DN</li>
                                <li>Phone: 0763201335</li>
                                <li>Email: mp@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className="footer__widget">
                            <h6>Store</h6>
                            <ul>
                                <li>
                                    <Link to="">Contact</Link>
                                </li>
                                <li>
                                    <Link to="">Information about us</Link>
                                </li>
                                <li>
                                    <Link to="">Product</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="">Account Information</Link>
                                </li>
                                <li>
                                    <Link to="">Shopping cart</Link>
                                </li>
                                <li>
                                    <Link to="">Favorites List</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12'>
                        <div className='footer__widget'>
                            <h6>Promotins and Offers</h6>
                            <p>Sign up and receive information here</p>
                            <form action="">
                                <div className='input-group'>
                                    <input type='text' placeholder='Enter' />
                                    <button type='button' className='button-submit'>Submit</button>
                                </div>
                                <div className='footer__widget-social' >
                                    <div><BsFacebook /></div>
                                    <div><BsInstagram /></div>
                                    <div><BsLinkedin /></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </footer >
    )
}

export default memo(Footer);