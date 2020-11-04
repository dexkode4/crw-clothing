const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            imageUrl: "/images/aman-jakhar.jpg",
            id: 1,
            linkUrl: "shop/hats",
        },
        {
            title: "jackets",
            imageUrl: "/images/hana-brannigan.jpg",
            id: 2,
            linkUrl: "shop/jackets",
        },
        {
            title: "sneakers",
            imageUrl: "/images/aj-nakasone.jpg",
            id: 3,
            linkUrl: "shop/sneakers",
        },
        {
            title: "womens",
            imageUrl: "/images/ali-pazani.jpg",
            size: "large",
            id: 4,
            linkUrl: "shop/womens",
        },
        {
            title: "mens",
            imageUrl: "/images/wallace-chuck.jpg",
            size: "large",
            id: 5,
            linkUrl: "shop/mens",
        },
    ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default directoryReducer;