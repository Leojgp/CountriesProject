import { useEffect, useState } from "react";
import { CountriesAdapter } from "../adapter/CountriesAdapter";
import { Country } from "../config/entities/Country";

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [loading, setLoading] = useState(false);

  const loadCountries = async () => {
    setLoading(true); 
    const response = await CountriesAdapter.getCountries(); 

    if (response) {
      console.log(response);
      setCountries(response); 
    }
    setLoading(false); 
  };

  useEffect(() => {
    loadCountries(); 
  }, []);

  return {
    countries,
    loading,
  };
};
