import { Config } from "../config/Config";
import { HttpAxios } from "./http/HttpAxios";
import { countriesMapper } from "../config/mapper/countryMapper";
import { HttpError } from "./http/HttpError";
import { Country } from "../config/entities/Country";

export class CountriesAdapter {
    static async getCountries(): Promise<Country[] | null> {
        const http = new HttpAxios(Config.countriesAPI);
    
        try {
          // Obtener datos de países
          const countriesList = await http.getCountries("asia");
    
          // Manejo de errores
          if (countriesList instanceof HttpError) {
            console.error("Error fetching countries:");
            return [];
          }
    
          // Mapeo de países
          const mappedCountries = countriesList.map(countriesMapper);
    
          console.log(mappedCountries);
          return mappedCountries; // Devuelve la lista mapeada si es necesario
        } catch (error) {
          console.error("Unexpected error:", error);
          return [];
        }
    }
    
}