import { memo } from 'react'
import "./productDetail.scss"
import topImg1 from "assets/users/tops/topImg1.png";
import topImg2 from "assets/users/tops/topImg2.png";
import topImg3 from "assets/users/tops/topImg3.png";
import { AiOutlineEye } from 'react-icons/ai';
import { formatter } from 'utils/format';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { featuredProducts } from '../home/HomePage';
import ProductsCart from 'components/productsCart/ProductsCart';
import Quantity from 'components/quantity/Quantity';

const ProductDetail = () => {
    const imgs = [topImg1, topImg2, topImg3]
    return (
        <>
            <div className='container'>
                <div className='row product-detail'>
                    <div className='col-lg-6 col-sm-12 col-xs-12 product-detail__picture'>
                        <img src={topImg1} alt='' />
                        <div className='detail__picture-main'>
                            {
                                imgs.map((item, index) => (
                                    <img src={item} alt="product-picture" key={index} />
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-xs-12 product-detail__text'>
                        <h2>DIMOIR LF Black Longsleeve</h2>
                        <div className='seen-eye'>
                            <AiOutlineEye />
                            {`10`}
                        </div>
                        <h3>{formatter(860000)}</h3>
                        <ul>
                            <li>
                                <b>Color:</b>
                                <span>Black</span>
                            </li>
                            <li>
                                <b>Quantity:</b>
                                <span>100</span>
                            </li>
                            <li>
                                <b>Share:</b>
                                <span>
                                    <FaFacebookSquare />
                                    <FaLinkedin />
                                    <FaXTwitter />
                                </span>
                            </li>
                        </ul>
                        <Quantity />
                    </div>
                </div>
                <div className='product-content'>
                    <h4>Product Details</h4>
                    <div>
                        <ul>
                            <li>The DIMOIR LF Black Longsleeve is a stylish and comfortable shirt made from 100% premium cotton. Designed with a unisex fit, it is perfect for both men and women who love a modern, minimal look. The soft and breathable fabric makes it ideal for everyday wear, whether you're going out or staying in. With its classic black color and high-quality stitching, this longsleeve offers both durability and elegance in one piece.</li>
                            <li>The DIMOIR LF Black Longsleeve is a stylish and comfortable shirt made from 100% premium cotton. Designed with a unisex fit, it is perfect for both men and women who love a modern, minimal look. The soft and breathable fabric makes it ideal for everyday wear, whether you're going out or staying in. With its classic black color and high-quality stitching, this longsleeve offers both durability and elegance in one piece.</li>
                        </ul>
                    </div>
                </div>
                <div className='section-title'>
                    <h2>Related Products</h2>
                    <div className="row">
                        {featuredProducts.all.products.map((item, index) => (
                            <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
                                <ProductsCart img={item.img} name={item.name} price={item.price} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ProductDetail)