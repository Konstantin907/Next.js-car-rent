import {MouseEventHandler} from "react"

export interface CustomButtonProps {
    title: string;
    containerStyles?: string //opcionalno je i string je
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string,
    isDisabled?:boolean,
}

//ovo pravimo zbog button-a u hero sekciji da 
//bi mogao imati title u typescriptu
//handleClick je isto opcionalan

export interface SearchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void;
}

//void znaci da nece vracati nista

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model:string;
    transmission: string;
    year: number;
}



export interface optionProps {
  title: string;
  value: string;
}


export  interface customFilterProps {
  title: string;
  options: optionProps[];
}

// Napravili smo props custom prvo i onda smo 
// novi napravili u kome im a title and value




export const manufacturers = [

        "Toyota",
        "Ford",
        "Chevrolet",
        "Honda",
        "Volkswagen",
        "Nissan",
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Hyundai",
        "Kia",
        "Subaru",
        "Porsche",
        "Tesla",
        "Mazda",
        "Jaguar",
        "Land Rover",
        "Volvo",
        "Fiat",
        "Peugeot",
        "Citroën",
        "Renault",
        "Mitsubishi",
        "Mini",
        "Chrysler",
        "Dodge",
        "Jeep",
        "Ram",
        "Buick",
        "Cadillac",
        "GMC",
        "Acura",
        "Infiniti",
        "Lexus",
        "Genesis",
        "Alfa Romeo",
        "Aston Martin",
        "Bentley",
        "Bugatti",
        "Ferrari",
        "Lamborghini",
        "Maserati",
        "McLaren",
        "Pagani",
        "Rolls-Royce",
        "Saab",
        "Suzuki",
        "Geely",
        "Great Wall Motors",
        "BYD",
        "Changan Automobile",
        "Chery",
        "Dongfeng Motor Corporation",
        "FAW Group",
        "GAC Group",
        "Haval",
        "JAC Motors",
        "Lifan Motors",
        "MG Motor",
        "NIO",
        "Zotye Auto",
      ];


    //   example years
      export const yearsOfProduction = [
        { title: "Year", value: "" },
        { title: "2015", value: "2015" },
        { title: "2016", value: "2016" },
        { title: "2017", value: "2017" },
        { title: "2018", value: "2018" },
        { title: "2019", value: "2019" },
        { title: "2020", value: "2020" },
        { title: "2021", value: "2021" },
        { title: "2022", value: "2022" },
        { title: "2023", value: "2023" },
      ];
      
      export const fuels = [
        {
          title: "Fuel",
          value: "",
        },
        {
          title: "Gas",
          value: "Gas",
        },
        {
          title: "Electricity",
          value: "Electricity",
        },
    ]
