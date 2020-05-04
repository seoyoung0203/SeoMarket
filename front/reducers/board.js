export const initialState = {
    boardDataList: [],
    addBoard: false,
    boardData: null,
};

export const GET_BOARD_REQUEST = 'GET_BOARD_REQUEST';
export const GET_BOARD_SUCCESS = 'GET_BOARD_SUCCESS';
export const GET_BOARD_FAILURE = 'GET_BOARD_FAILURE';

export const ADD_BOARD_REQUEST = 'ADD_BOARD_REQUEST';
export const ADD_BOARD_SUCCESS = 'ADD_BOARD_SUCCESS';
export const ADD_BOARD_FAILURE = 'ADD_BOARD_FAILURE';

export const GET_ONE_BOARD_REQUEST = 'GET_ONE_BOARD_REQUEST';
export const GET_ONE_BOARD_SUCCESS = 'GET_ONE_BOARD_SUCCESS';
export const GET_ONE_BOARD_FAILURE = 'GET_ONE_BOARD_FAILURE';


export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_BOARD_REQUEST: {
            return {
                ...state,
                addBoard: false,
            };
        }
        case ADD_BOARD_SUCCESS: {
            return {
                ...state,
                addBoard: true,
                boardDataList: [...state.boardDataList, action.data],
            };
        }
        case ADD_BOARD_FAILURE: {
            return {
                ...state,
                addBoard: false,
            };
        }
        case GET_BOARD_REQUEST: {
            return {
                ...state,
            };
        }
        case GET_BOARD_SUCCESS: {
            return {
                ...state,
                boardDataList: action.data
            };
        }
        case GET_BOARD_FAILURE: {
            return {
                ...state,

            };
        }
        case GET_ONE_BOARD_REQUEST: {
            return {
                ...state,
            };
        }
        case GET_ONE_BOARD_SUCCESS: {
            return {
                ...state,
                boardData: action.data
            };
        }
        case GET_ONE_BOARD_FAILURE: {
            return {
                ...state,

            };
        }
        default: {
            return {

            };
        }
    }
};