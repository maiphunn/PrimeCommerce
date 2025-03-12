import { memo } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import topImg1 from "assets/users/tops/topImg1.png";
import topImg2 from "assets/users/tops/topImg2.png";
import topImg3 from "assets/users/tops/topImg3.png";
import bottomImg1 from "assets/users/bottoms/bottomImg1.png";
import bottomImg2 from "assets/users/bottoms/bottomImg2.png";
import bottomImg3 from "assets/users/bottoms/bottomImg3.png";
import jacketImg1 from "assets/users/jackets/jacketImg1.png";
import jacketImg3 from "assets/users/jackets/jacketImg3.png";
import jacketImg2 from "assets/users/jackets/jacketImg2.png";
import accesImg1 from "assets/users/accessories/accesImg1.png";
import accesImg2 from "assets/users/accessories/accesImg2.png";
import accesImg3 from "assets/users/accessories/accesImg3.png";
import accesImg4 from "assets/users/accessories/accesImg4.png";
import accesImg5 from "assets/users/accessories/accesImg5.png";
import accesImg6 from "assets/users/accessories/accesImg6.png";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
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

    const featuredProducts = {
        all: {
            title: "All",
            products: [
                {
                    img: accesImg5,
                    name: "Canvas Tote Bag",
                    price: 860000
                },
                {
                    img: accesImg1,
                    name: "CHROMIUM Keychain",
                    price: 180000
                },
                {
                    img: jacketImg1,
                    name: "Denim Jackets",
                    price: 850000
                },
                {
                    img: jacketImg3,
                    name: "Gray Denim Jackets",
                    price: 860000
                },
                {
                    img: jacketImg2,
                    name: "Asymmetric Cross-Collar Jackets",
                    price: 950000
                },
                {
                    img: topImg1,
                    name: " Black Longsleeve",
                    price: 630000
                },
                {
                    img: topImg2,
                    name: "LF T-Shirts",
                    price: 630000
                },
                {
                    img: topImg3,
                    name: "Washed Olive NNTS T-Shirts",
                    price: 500000
                },
                {
                    img: accesImg2,
                    name: "Scarf",
                    price: 580
                },
                {
                    img: accesImg3,
                    name: "LoadMaster Hauler Bag",
                    price: 860
                },
                {
                    img: accesImg6,
                    name: "R-Hood",
                    price: 860
                },
                {
                    img: accesImg4,
                    name: "CRUX Keychain",
                    price: 860
                },
                {
                    img: bottomImg2,
                    name: "Canvas Tote Bag",
                    price: 860
                },
                {
                    img: bottomImg3,
                    name: "Canvas Tote Bag",
                    price: 860
                },
                {
                    img: accesImg2,
                    name: "Canvas Tote Bag",
                    price: 860
                },
                {
                    img: accesImg2,
                    name: "Canvas Tote Bag",
                    price: 860
                },
            ]
        },
        top: {
            title: "Top",
            products: [
                {
                    img: topImg1,
                    name: " Black Longsleeve",
                    price: 630000
                },
                {
                    img: topImg2,
                    name: "LF T-Shirts",
                    price: 630000
                },
                {
                    img: topImg3,
                    name: "Washed Olive NNTS T-Shirts",
                    price: 500000
                }
            ]
        },
        bottom: {
            title: "Bottom",
            products: [
                {
                    img: bottomImg1,
                    name: "Camo Shorts",
                    price: 860000
                },
                {
                    img: bottomImg1,
                    name: "Camo Shorts",
                    price: 860000
                },

                {
                    img: bottomImg1,
                    name: "Camo Shorts",
                    price: 860000
                }
            ]
        }

    }

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(
                <Tab key={index}>
                    {data[key].title}
                </Tab>
            );

            tabPanels.push(
                <TabPanel key={index}>
                    <div className="row">
                        {data[key].products.map((item, j) => (
                            <div key={j}>{item.name}</div>
                        ))}
                    </div>
                </TabPanel>
            );
        });

        return (
            <Tabs>
                <TabList>
                    {tabList}
                </TabList>

                {tabPanels}
            </Tabs>
        );
    };
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
                    </div>
                    {renderFeaturedProducts(featuredProducts)}
                </div>
            </div>
            {/* featured end  */}
        </>
    )
}

export default memo(HomePage);