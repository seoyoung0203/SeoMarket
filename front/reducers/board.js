export const initialState = {
    boardData: [
        {
            key: '1',
            no: '1',
            name: '정서영',
            age: 32,
            subject: '문의합니다 :)'
        },
        {
            key: '2',
            no: '2',
            name: '김우진',
            age: 42,
            subject: '문의합니다 :)'
        },
    ],
};

export const ADD_BOARD_REQUEST = 'ADD_BOARD_REQUEST';
export const ADD_BOARD_SUCCESS = 'ADD_BOARD_SUCCESS';
export const ADD_BOARD_FAILURE = 'ADD_BOARD_FAILURE';

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_BOARD_REQUEST: {
            return {
                ...state,
            };
        }
        case ADD_BOARD_SUCCESS: {
            return {
                ...state,

            };
        }
        case ADD_BOARD_FAILURE: {
            return {

            };
        }
        default: {
            return {

            };
        }
    }
};