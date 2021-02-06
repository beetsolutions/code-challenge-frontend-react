// Custom React Hook implementation to handle all Http request and process the responses.
import { useReducer, useCallback } from 'react';
import logger from 'use-reducer-logger';
import * as types from './types';
import httpReducer from "./httpReducer";
import axiosInstance from "./axiosInstance";

const initialState = {
    isLoading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
};

export const useHttp = () => {
    const [httpState, dispatch] = useReducer(logger(httpReducer), initialState);

    const sendRequest = useCallback((url, method, data, reqExtra, reqIdentifier) => {
        dispatch({ type: types.SEND, identifier: reqIdentifier });
        axiosInstance.request({ url: url, method: method, data: data, params: reqExtra })
            .then(response => {
                dispatch({ type: types.RESPONSE, data: response.data });
            })
            .catch(err => {
                dispatch({ type: types.ERROR, error: err.message });
            });
    }, []);

    return {
        isLoading: httpState.isLoading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        reqExtra: httpState.extra,
        reqIdentifier: httpState.identifier
    };
};
