export const initialState = {
    userData: null,
    isLoggedIn: false,
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export default (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN_REQUEST: {
            return {

            };
        }
        case LOG_IN_SUCCESS: {
            return {

            };
        }
        case LOG_IN_FAILURE: {
            return {

            };
        }
        case LOG_OUT_REQUEST: {
            return {

            };
        }
        case LOG_OUT_SUCCESS: {
            return {

            };
        }
        case LOG_OUT_FAILURE: {
            return {

            };
        }
        default: {
            return {

            };
        }
    }
};
