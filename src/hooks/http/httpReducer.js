import * as types from "./types";

const httpReducer = (httpState, action) => {
    switch (action.type) {
        case types.SEND:
            return {
                isLoading: true,
                error: null,
                data: null,
                extra: null,
                identifier: action.identifier
            };
        case types.RESPONSE:
            return {
                ...httpState,
                isLoading: false,
                data: action.data,
                extra: action.extra
            };
        case types.ERROR:
            return {
                isLoading: false,
                error: action.error
            };
        case types.CLEAR:
            return {
                ...httpState,
                error: null
            };
        default:
            throw new Error('Failed to handle specified type.');
    }
};

export default httpReducer;