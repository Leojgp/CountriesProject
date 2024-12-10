import { Country } from "../entities/Country";
import { CountriesResponse } from "../Responses/dataCountries";

export const countriesMapper = (item : CountriesResponse) : Country => {
    return {
        name: item.name.common,
        continent: item.region,
        flag: item.flags.png
    };
}