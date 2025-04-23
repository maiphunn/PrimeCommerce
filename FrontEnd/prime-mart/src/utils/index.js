export const ADMIN_PATH = "/admin"

export const ROUTERS = {
    USER: {
        HOME: "",
        PROFILE: "/user-profile",
        PRODUCT: "/products",
        PRODUCT_DETAIL: "/product-detail/:id",
        CART: "/cart",
        CHECKOUT: "/checkout",
    },
    ADMIN: {
        LOGIN: `${ADMIN_PATH}/login`,
        ORDER: `${ADMIN_PATH}/order`,
        LOGOUT: `${ADMIN_PATH}/logout`,
    }
}