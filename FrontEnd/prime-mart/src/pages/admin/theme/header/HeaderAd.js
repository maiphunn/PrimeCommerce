import { memo } from 'react'
import "./headerAd.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTERS } from 'utils';
import { AiOutlineLogout, AiOutlineShoppingCart } from 'react-icons/ai';

const HeaderAd = ({ children, ...props }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const navItems = [
        {
            path: ROUTERS.ADMIN.ORDER,
            onClick: () => navigate(ROUTERS.ADMIN.ORDER),
            label: "Order",
            icon: <AiOutlineShoppingCart />
        },
        {
            path: ROUTERS.ADMIN.LOGOUT,
            onClick: () => navigate(ROUTERS.ADMIN.LOGOUT),
            label: "Logout",
            icon: <AiOutlineLogout />
        }

    ]

    return (
        <div {...props} className='admin-header container'>
            <nav className='admin-header__nav'>
                {
                    navItems.map(({ path, onClick, label, icon }) => (
                        <div
                            key={path}
                            className={`admin-header__nav-item 
                            ${location.pathname.includes(path) ? "admin-header__nav-item--active" : ""}`
                            }
                            onClick={onClick}
                        >
                            <span className='nav-item__icon'>{icon}</span>
                            <span>{label}</span>
                        </div>
                    ))
                }
            </nav>
        </div>
    )
}

export default memo(HeaderAd);