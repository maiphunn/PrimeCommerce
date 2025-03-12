import { memo } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import topImg1 from "assets/users/tops/topImg1.png";
import topImg2 from "assets/users/tops/topImg2.png";
import bottomImg1 from "assets/users/bottoms/bottomImg1.png";
import jacketImg1 from "assets/users/jackets/jacketImg1.png";
import accesImg1 from "assets/users/accessories/accesImg1.png";
import "./homepage.scss";

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const carouselItem = [
        {
            img: topImg1,
            name: "Black Longsleeve"
        },
        {
            img: jacketImg1,
            name: " Denim Shirts"
        },
        {
            img: bottomImg1,
            name: "Camo Shorts"
        },
        {
            img: topImg2,
            name: "LF T-Shirts"
        },
        {
            img: accesImg1,
            name: "CHROMIUM Keychain"
        },
        {
            img: accesImg1,
            name: "CHROMIUM Keychain"
        },
        {
            img: accesImg1,
            name: "CHROMIUM Keychain"
        },
    ]
    return (
        <>
            {/* carousel begin */}
            <div className="container hero-carousel">
                <Carousel responsive={responsive}
                    className='hero-carousel__list'>
                    {carouselItem.map((item, index) => (
                        <div
                            className='hero-carousel__list-item'
                            style={{ backgroundImage: `url(${item.img})` }}
                            key={index}
                        >
                            <p>{item.name}</p>
                        </div>
                    ))}
                </Carousel >

            </div >
            {/* carousel end */}

            {/* featured begin  */}
            <div className='container'>
                <div className='featured'>
                    <div className='section-title'>
                        <h2>Featured Products</h2>
                        <h3>xin chao</h3>
                    </div>
                </div>
            </div>
            {/* featured end  */}
        </>
    )
}

export default memo(HomePage);