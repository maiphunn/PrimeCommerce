import { memo } from 'react'
import Footer from '../../../common/footer/Footer';
import Header from '../header/Header';

const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default memo(MasterLayout);