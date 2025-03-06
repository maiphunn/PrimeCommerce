import { memo, useState } from 'react'
import "./header.scss"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import { formatter } from 'utils/format';
import { AiOutlineShoppingCart, AiOutlineMessage } from "react-icons/ai";
import { ROUTERS } from 'utils';

const Header = () => {
    const [memus, setMenus] = useState([
        {
            name: "Trang Chủ",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCT
        },
        {
            name: "Sản Phẩm",
            path: "",
            isShowSubMenu: false,
            subMenu: [
                {
                    name: "MEN",
                    path: ""
                },
                {
                    name: "WOMEN",
                    path: ""
                },
                {
                    name: "SHOE",
                    path: ""
                }
            ]
        },
        {
            name: "Bài viết",
            path: ""
        },
        {
            name: "Liên hệ",
            path: ""
        }
    ])

    return (
        <>
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
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3'>
                        <div className='header__logo'>
                            <h1>PRIME SHOP</h1>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <nav className='header__menu'>
                            <ul>
                                {memus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? 'active' : ""}>
                                        <Link to={menu.path}>
                                            {menu.name}
                                        </Link>

                                        {
                                            menu.subMenu && (
                                                <ul className='header__submenu'>
                                                    {
                                                        menu.subMenu.map((childItem, index) => (
                                                            <li key={`${menuKey}-${index}`}>
                                                                <Link to={childItem.path}>{childItem.name}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className='col-xl-3'>
                        <div className='header__cart'>
                            <div className='header__cart-price'>
                                <span>{formatter(111111111)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="">
                                        <AiOutlineShoppingCart />
                                        <span>99+</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <AiOutlineMessage />
                                        <span>99+</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default memo(Header);