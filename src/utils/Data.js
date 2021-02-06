
const Data = (response) => {

    const {sol_keys, validity_checks, ...solData} = response;

    return Object.entries(solData).map(([sol, data]) => {
        const pressure = data?.PRE
        const temperature = data?.AT
        const wind = data?.WD

        return {
            key: sol,
            name: "Sol " + sol,
            pressure: {
                min: pressure?.mn,
                max: pressure?.mx,
                average: pressure?.av
            },
            temperature: {
                min: temperature?.mn,
                max: temperature?.mx,
                average: temperature?.av
            },
            wind: {
                min: wind?.mn,
                max: wind?.mx,
                average: wind?.av
            },
            firstDate: new Date(data.First_UTC).toLocaleDateString(undefined, { month: "short", day: "numeric"}),
            lastDate: new Date(data.Last_UTC).toLocaleDateString(undefined, { month: "short", day: "numeric"}),
        }
    })
}

export default Data;