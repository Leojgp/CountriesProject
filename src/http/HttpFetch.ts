import { ContinentResponse } from "../config/responses/dataCountries";
import { HttpError } from "./HttpError";

export class HttpFetch {
    async getMap(continent: string): Promise<ContinentResponse | HttpError> {
        try {
            const data = await fetch(`https://restcountries.com/v3.1/region/${continent}`);
            const jsonData: ContinentResponse = await data.json();
            return jsonData;
        } catch(error) {
            return new HttpError(`${error}`);
        }
    }
}