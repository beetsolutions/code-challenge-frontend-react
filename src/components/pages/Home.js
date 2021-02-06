import React, {useEffect, useState} from "react";
import Loading from "./../ui/Loading";
import Weather from "../ui/Weather";
import {useHttp} from '../../hooks/http/useHttp';
import Data from "../../utils/Data";
import {IDENTIFIER_GET_DATA, URL_GET_DATA, METHOD_GET_DATA} from "../../utils/constants";

const Home = () => {
    const [weatherData, setWeatherData] = useState(undefined);
    const {isLoading, data, error, reqIdentifier, sendRequest} = useHttp();

    useEffect(() => {
        if (reqIdentifier === IDENTIFIER_GET_DATA && !isLoading && !error) {
            setWeatherData(Data(data));
        }
    }, [data, reqIdentifier, isLoading, error]);

    useEffect(() => {
        sendRequest(URL_GET_DATA, METHOD_GET_DATA, null, null, IDENTIFIER_GET_DATA);
    }, [sendRequest]);

    const mainContent = (
        <React.Fragment>
            {weatherData === undefined ? <div/> : <Weather weatherData={weatherData} /> }
        </React.Fragment>
    );

    return (
        <React.Fragment>
            {isLoading ? <Loading/> : mainContent}
        </React.Fragment>
    );
}

export default Home;
