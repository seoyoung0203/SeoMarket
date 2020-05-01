const dummyUser = {
    id: 1,
    username: 'test',
    point: 1500,
    orderList: [],
    coupon: [],
    board: []
};

const dummyCartItem = {
    itemId: 2,
    imgSrc: 'https://pbs.twimg.com/media/EEZ9VmfVUAAKCSc.jpg',
    itemName: 'item2',
};


export const initialState = {
    userData: null,
    isLoggedIn: false,
    isLogging: false,
    cartItem: [
        {
            itemId: 1,
            imgSrc: 'https://pbs.twimg.com/media/EEZ9VmfVUAAKCSc.jpg',
            itemName: 'item',
        },
    ],
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const ADD_CART = 'ADD_CART';

export default (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                isLogging: true,
            };
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                userData: dummyUser,
                isLogging: false,
            };
        }
        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggedIn: false,
                isLogging: false,
            };
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
            };
        }
        case LOG_OUT_SUCCESS: {
            return {
                ...state,
                userData: null,
            };
        }
        case LOG_OUT_FAILURE: {
            return {
                ...state,
            };
        }
        case ADD_CART: {
            return {
                ...state,
                cartItem: dummyCartItem
            }
        }
        default: {
            return {

            };
        }
    }
};
