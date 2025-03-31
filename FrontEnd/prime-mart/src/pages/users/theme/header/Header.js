import { memo, useState } from 'react'
import "./header.scss"
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import { formatter } from 'utils/format';
import { AiOutlineShoppingCart, AiOutlineMessage, AiOutlinePhone, AiOutlineMenu, AiFillAlipayCircle, AiOutlineDownCircle, AiOutlineUpCircle, AiOutlineMail } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { ROUTERS } from 'utils';

const Header = () => {
    const [isShowCategories, setIsShowCategories] = useState(false)
    const [isShowNavbar, setIsShowNavbar] = useState(false)
    const [menus, setMenus] = useState([
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
            <div
                className={`header__navbar-overlay ,
                    ${isShowNavbar ? "active" : ""
                    }`}
                onClick={() => setIsShowNavbar(false)}
            ></div>
            {/* header menu reponsive  */}
            <div
                className={`header__navbar ${isShowNavbar ? "show" : ""}`}
            >
                <div className='header__navbar-logo'>
                    <h1>Prime Shop</h1>
                </div>
                <div className='header__navbar-cart'>
                    <ul>
                        <li>
                            <Link to="">
                                <AiOutlineShoppingCart />
                                <span>1</span>
                            </Link>
                        </li>
                    </ul>
                    <div className='navbar__menu-price'>
                        Shopping cart: <span>{formatter(117385)}</span>
                    </div>
                </div>
                <div className='header__navbar-widget'>
                    <div className='header__right-auth'>
                        <Link to="">
                            <FiUser />
                            Login
                        </Link>
                    </div>
                </div>
                <div className='header__navbar-menu'>
                    <ul>
                        {menus.map((menu, index) => (
                            <li key={index} to={menu.path}>
                                <Link to={menu.path}
                                    onClick={() => {
                                        const newMenu = [...menus]
                                        newMenu[index].isShowSubMenu = !newMenu[index].isShowSubMenu
                                        setMenus(newMenu)
                                    }}
                                >
                                    {menu.name}
                                    {menu.subMenu &&
                                        (menu.isShowSubMenu ? (
                                            <AiOutlineDownCircle />
                                        ) : (
                                            <AiOutlineUpCircle />
                                        ))
                                    }
                                </Link>
                                {menu.subMenu &&
                                    <ul className={`
                                        submenu-down 
                                        ${menu.isShowSubMenu ? "submenu-show" : ""}
                                        `}>
                                        {menu.subMenu.map((sub, subKey) => (
                                            <li key={subKey}>
                                                <Link to={sub.path}>{sub.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </li>
                        ))}

                    </ul>
                </div>
                <div className='header__navbar-social'>
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
                    </ul>
                </div>
                <div className='header__navbar-contact'>
                    <ul>
                        <li>
                            <i className='fa fa-envelope'>
                                <AiOutlineMail />
                                mp@gmail.com
                            </i>
                        </li>
                        <li>Free shipping from {formatter(200000)}</li>
                    </ul>
                </div>
            </div >
            {/* header menu reponsive end */}

            <div className='header__top' >
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
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='header__logo'>
                            <h1>PRIME SHOP</h1>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <nav className='header__menu'>
                            <ul>
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? 'active' : ""}>
                                        <Link to={menu.path}>
                                            {menu.name}
                                            {/* {menu.subMenu && menu.isShowSubMenu ? (<AiOutlineDownCircle />) : ""} */}
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
                    <div className='col-lg-3'>
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
                        <div className='menu__open'>
                            <AiOutlineMenu
                                onClick={() => setIsShowNavbar(true)} />
                        </div>
                    </div>
                </div>
            </div >
            <div className='container'>
                <div className='row categories__hero'>
                    <div className='col-lg-3 col-md-12 col-sm-12 col-xs-12 categories__hero-container'>
                        <div className='categories__hero-title' onClick={() => setIsShowCategories(!isShowCategories)}>
                            <RxHamburgerMenu />
                            List Products
                        </div>
                        {isShowCategories && (
                            <ul className={isShowCategories ? "" : "hidden"}>
                                <li><Link to="">TOP</Link></li>
                                <li><Link to="">BOTTOM</Link></li>
                                <li><Link to="">JACKET</Link></li>
                                <li><Link to="">ACCESSORIES</Link></li>
                            </ul>
                        )}

                    </div>
                    <div className='col-lg-9 col-md-12 col-sm-12 col-xs-12 categories__search-container'  >
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