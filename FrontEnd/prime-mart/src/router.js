import HomePage from './pages/users/home/HomePage'
import { Routes, Route } from 'react-router-dom'
import { ROUTERS } from './utils/index'
import MasterLayout from './pages/users/theme/masterLayout/MasterLayout'
import ProfileUser from './pages/users/profileUser/ProfileUser'
import ProductsList from './pages/users/productsList/ProductsList'
import ProductDetail from 'pages/users/productDetail/ProductDetail'


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
        }
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

const RouterCustom = () => {
    return renderUserRouter()
}

export default RouterCustom;