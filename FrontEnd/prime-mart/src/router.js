import HomePage from './pages/users/home/HomePage'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ADMIN_PATH, ROUTERS } from './utils/index'
import MasterLayout from './pages/users/theme/masterLayout/MasterLayout'
import ProfileUser from './pages/users/profileUser/ProfileUser'
import ProductDetail from 'pages/users/productDetail/ProductDetail'
import ShoppingCartPage from 'pages/users/shoppingCart/ShoppingCartPage'
import CheckoutPage from 'pages/users/checkoutPage/CheckoutPage'
import ProductsList from 'pages/users/ProductsList/ProductsList'
import LoginPage from 'pages/admin/loginPage/LoginPage'
import MasterAdLayout from 'pages/admin/theme/masterLayout/MasterAdLayout'
import OrderAdPage from 'pages/admin/orderAdPage/OrderAdPage'



const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfileUser />
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <ProductsList />
        },
        {
            path: ROUTERS.USER.PRODUCT_DETAIL,
            component: <ProductDetail />
        },
        {
            path: ROUTERS.USER.CART,
            component: <ShoppingCartPage />
        },
        {
            path: ROUTERS.USER.CHECKOUT,
            component: <CheckoutPage />
        },
    ]

    const adminRouter = [
        {
            path: ROUTERS.ADMIN.LOGIN,
            component: <LoginPage />
        },
    ]

    return (
        <MasterLayout>
            <Routes>
                {userRouter.map((item, index) => (
                    <Route key={index} path={item.path} element={item.component} />
                )
                )}
            </Routes>
        </MasterLayout>
    )
}

const renderAdminRouter = () => {
    const adminRouter = [
        {
            path: ROUTERS.ADMIN.LOGIN,
            component: <LoginPage />
        },
        {
            path: ROUTERS.ADMIN.ORDER,
            component: <OrderAdPage />
        },
    ]

    return (
        <MasterAdLayout>
            <Routes>
                {adminRouter.map((item, index) => (
                    <Route key={index} path={item.path} element={item.component} />
                )
                )}
            </Routes>
        </MasterAdLayout>
    )
}

const RouterCustom = () => {
    const location = useLocation()
    const isAdminRouters = location.pathname.startsWith(ADMIN_PATH)

    return isAdminRouters ? renderAdminRouter() : renderUserRouter()
}

export default RouterCustom;