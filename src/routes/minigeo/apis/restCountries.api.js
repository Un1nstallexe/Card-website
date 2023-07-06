import useHttp from "../hooks/http.hook";

const useRestCountriesApi = () => {
    const prefix = "https://restcountries.com/v3.1/";

    const {clearError, makeRequest, fetchStatus, abortFetch} = useHttp();

    const getAllCountries = () => {
        return makeRequest(prefix + "all?fields=cca2,name,region,translations");
    }

    const getCountryByCca2 = async (cca2) => {
        abortFetch(); // prevent update after country change, e.g. tap on the other country makes new fetch, then country can be updated twice.
        return (await makeRequest(prefix+ "alpha/" + cca2))[0]; // why [{}], not {} like in Marvel API?
    }

    return {clearError, fetchStatus, getAllCountries, getCountryByCca2, abortFetch}; 
}

export default useRestCountriesApi;
