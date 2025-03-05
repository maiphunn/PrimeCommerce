import { memo } from 'react'
import "./header.scss"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import { formatter } from 'utils/format';

const Header = () => {
    return (
        <div className='header__top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 header__top-left'>
                        <ul>
                            <li>
                                <GoMail />
                                <span>mp@gmail.com</span>
                            </li>
                            <li>Miễn phí đơn ship từ {formatter(200000)}</li>
                        </ul>
                    </div>
                    <div className='col-6 header__top-right'>
                        <ul>
                            <li>
                                <Link to={""}>
                                    <FaFacebookSquare />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaGoogle />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FaXTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to={""}>
                                    <FiUser />
                                </Link>
                                <span>Login</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default memo(Header);