import { memo, useEffect, useState } from 'react'
import "./orderAdPage.scss"
import { formatter } from 'utils/format'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IoMdArrowDropdown } from "react-icons/io";

const OrderAdPage = () => {
    const STATUS = {
        ORDERED: {
            key: "ORDERED",
            label: "Ordered",
            className: "order-dropdown__item"
        },
        PREPARING: {
            key: "PREPARING",
            label: "Preparing",
            className: "order-dropdown__item"
        },
        DELIVERED: {
            key: "DELIVERED",
            label: "Delivered",
            className: "order-dropdown__item"
        },
        CANCELLED: {
            key: "CANCELLED",
            label: "Cancelled",
            className: "order-dropdown__item order-dropdown__item--danger"
        }
    }

    const orders = [
        {
            id: 1,
            total: 200000,
            name: "Ben",
            date: "10/2/2023",
            status: "Bought"
        },
        {
            id: 2,
            total: 200000,
            name: "Ben",
            date: "10/2/2023",
            status: "Bought"
        },
    ]

    const [activeDropdown, setActiveDropdown] = useState(null)

    useEffect(() => {
        const handleClickOutSide = (e) => {
            const isDropdown = e.target.closest(".order-dropdown")
            if (!isDropdown) {
                setActiveDropdown(null)
            }
        }

        document.addEventListener("mousedown", handleClickOutSide)
        return () => document.removeEventListener("mousedown", handleClickOutSide)
    }, [])
    return (
        <>
            <div className='container'>
                <div className='order'>
                    <h2>Order Management</h2>

                    <div className='order-content'>
                        <table className='order-table'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Total order</th>
                                    <th>Custom</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{formatter(item.total)}</td>
                                            <td>{item.name}</td>
                                            <td>{new Date(item.date).toLocaleDateString()}</td>
                                            <td>
                                                <div className='order-dropdown'>
                                                    <button
                                                        className={`order-action__btn`}
                                                        onClick={() => setActiveDropdown(item.id)}
                                                    >
                                                        Ordered
                                                        <span className='order-dropdown__arrow'>
                                                            <IoMdArrowDropdown />
                                                        </span>
                                                    </button>
                                                    {
                                                        activeDropdown === item.id && (
                                                            <div className='order-dropdown__list'>
                                                                {
                                                                    Object.values(STATUS).map((status) => (
                                                                        <button
                                                                            key={status.key}
                                                                            className={status.className}
                                                                            onClick={() => setActiveDropdown(null)}
                                                                        >
                                                                            {status.label}
                                                                        </button>
                                                                    ))
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className='order-footer'>
                        <div className='order-pagination'>
                            <div className='order__page-number'>
                                <button className='order__page-btn'>
                                    <FaArrowLeft />
                                </button>
                                {/* <div className='order__page-btn-group'> */}
                                <button className='order__page-btn order__page-btn--active'>1</button>
                                <button className='order__page-btn'>2</button>
                                <button className='order__page-btn'>3</button>
                                <button className='order__page-btn'>4</button>
                                <button className='order__page-btn'>5</button>
                                {/* </div> */}
                                <button className='order__page-btn'>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(OrderAdPage);