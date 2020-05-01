const dummyItem = {
    itemName: '남방',
    price: '25,000',
    imgSrc: 'https://i.pinimg.com/originals/8c/48/ac/8c48ac164b67a1bcf2e0c373ee1f68e4.jpg',
    content: '이쁜데 비싼 옷ㅠ'
}

export const initialState = {
    itemData: null,
};

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEN_FAILURE';

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_REQUEST: {
            return {
                ...state,
            };
        }
        case ADD_ITEM_SUCCESS: {
            return {
                ...state,
                itemData: dummyItem,
            }
        }
        case ADD_ITEM_FAILURE: {
            return {
                ...state,

            }
        }
        default: {
            return {

            };
        }
    }
};