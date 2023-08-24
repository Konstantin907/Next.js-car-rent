import { CarProps } from "@/types";
import { type } from "os";

export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': 'de98802c63msh173eb45098de503p1d6d0ajsn4ef0e015e66e',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch( 
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',{
            headers: headers,
        }
    );
    const result = await response.json();
    return result;
}



// Basic formula that I found online for calculating rent price
// I found online
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


 export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value)

    const newPathname =`${window.location.pathname}?${searchParams.toString()}`
 
    return newPathname
} 