import { memo, useState } from 'react'
import "./header.scss"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import { formatter } from 'utils/format';
import { AiOutlineShoppingCart, AiOutlineMessage, AiOutlinePhone } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { ROUTERS } from 'utils';

const Header = () => {
    const [isShowCategories, setIsShowCategories] = useState(true)
    const [memus, setMenus] = useState([
        {
            name: "Home",
            path: ROUTERS.USER.HOME
        },
        {
            name: "Store",
            path: ROUTERS.USER.PRODUCT
        },
        {
            name: "Products",
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
            name: "About",
            path: ""
        },
        {
            name: "Contact",
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
                                <li>Free shipping from {formatter(200000)}</li>
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
            <div className='container'>
                <div className='row categories__hero'>
                    <div className='col-lg-3 categories__hero-container'>
                        <div className='categories__hero-title' onClick={() => setIsShowCategories(!isShowCategories)}>
                            <RxHamburgerMenu />
                            List Products
                        </div>
                        {isShowCategories && (
                            <ul className={isShowCategories ? "" : "hidden"}>
                                <li><Link to="">Set</Link></li>
                                <li><Link to="">Top</Link></li>
                                <li><Link to="">Pants</Link></li>
                                <li><Link to="">Dress</Link></li>
                                <li><Link to="">Jacket</Link></li>
                                <li><Link to="">Shoe</Link></li>
                            </ul>
                        )}

                    </div>
                    <div className='col-lg-9 categories__search-container'  >
                        <div className='categories__search'>
                            <div className="categories__search-form">
                                <form>
                                    <input
                                        type="text"
                                        name='' value=""
                                        placeholder='What are you looking for?' />
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                            <div className='categories__search-phone'>
                                <div className='search__phone-icon'>
                                    <AiOutlinePhone />
                                </div>
                                <div className='search__phone-text'>
                                    <p>0763.201.335</p>
                                    <span>24/7 Support</span>

                                </div>
                            </div>
                        </div>

                        <div className='categories__item'>
                            <div className='categories__item-text'>
                                <span>  Slay in every way</span>
                                <h2> Fashion made <br /> just for you</h2>
                                <p>Your fashion, your rules</p>
                                <button onClick={() => {
                                    alert("hihihi")
                                }} type='submit' className='button-submit'>
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default memo(Header);