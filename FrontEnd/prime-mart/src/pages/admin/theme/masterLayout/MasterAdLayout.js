import { memo } from 'react'
import Footer from "../../../common/footer/Footer";
import { useLocation } from 'react-router-dom';
import { ROUTERS } from 'utils';
import HeaderAd from '../header/HeaderAd';

const MasterAdLayout = ({ children, ...props }) => {
    const location = useLocation()
    const isLoginPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN)

    return (
        <div {...props}>
            {!isLoginPage && <HeaderAd />}
            {children}
            {!isLoginPage && <Footer />}
        </div>
    )
}

export default memo(MasterAdLayout);