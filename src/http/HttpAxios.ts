import axios from "axios";
import { CountriesResponse, CountryData } from "../config/responses/dataCountries";
import { HttpError } from "./HttpError";

export class HttpAxios {
    async getMap(continent: string): Promise<CountriesResponse[]  | HttpError> {
        try {
            const {data} = await axios.get<CountriesResponse[] >(`https://restcountries.com/v3.1/region/${continent}`);
            return data;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}