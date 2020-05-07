export const initialState = {
    addItemData: null,
    itemData: null,
    itemDataList: [],
};

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEN_FAILURE';

export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const GET_ONE_ITEM_REQUEST = 'GET_ONE_ITEM_REQUEST';
export const GET_ONE_ITEM_SUCCESS = 'GET_ONE_ITEM_SUCCESS';
export const GET_ONE_ITEM_FAILURE = 'GET_ONE_ITEM_FAILURE';

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
                addItemData: action.data,
            }
        }
        case ADD_ITEM_FAILURE: {
            return {
                ...state,

            }
        }
        case GET_ITEM_REQUEST: {
            return {
                ...state,
                itemDataList: [],
            };
        }
        case GET_ITEM_SUCCESS: {
            return {
                ...state,
                itemDataList: action.data,
            }
        }
        case GET_ITEM_FAILURE: {
            return {
                ...state,
                itemDataList: []
            }
        }
        case GET_ONE_ITEM_REQUEST: {
            return {
                ...state,
                itemData: null,
            };
        }
        case GET_ONE_ITEM_SUCCESS: {
            return {
                ...state,
                itemData: action.data,
            }
        }
        case GET_ONE_ITEM_FAILURE: {
            return {
                ...state,
                itemData: []
            }
        }
        default: {
            return {

            };
        }
    }
};