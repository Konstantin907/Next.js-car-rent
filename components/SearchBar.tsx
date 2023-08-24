"use client"

import { SearchManufacturer } from "."
import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"


const SearchButton = ({otherClasses}:{otherClasses:string})  =>(   
  <button type="submit" className={`-ml-3
   z-10 ${otherClasses}`}>
      <Image 
        src="/magnifying-glass.svg"
        alt="img"
        width={40}
        height={40}
        className="object-contain"
      />
  </button>
)

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState("")
    const router = useRouter()

    const handleSearch  = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          if(manufacturer==="" && model === "") {
            return alert ("Fill in the search bar")
          }

        UpdateSearchParams(model,manufacturer)
    }



    const UpdateSearchParams = (model: string,
      manufacturer : string ) =>{
          const searchParams = new URLSearchParams(window.location.search)

          if(model) {
            searchParams.set("model", model)
          }else{
            searchParams.delete('model')
          }

          if(manufacturer) {
            searchParams.set("manufacturer", manufacturer)
          }else{
            searchParams.delete("manufacturer")
          }

          const pathname = `${window.location.pathname}?${searchParams.toString()}`
          router.push(pathname)
      }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}
            />
            <SearchButton otherClasses="sm-hidden" />
        </div>

      <div className="searchbar__item">
          <Image 
          src="/model-icon.png"
          alt="small-car-icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"/>

          <input
            type="text"
            name="model"
            value={model} 
            onChange={(e) => setModel(e.target.value)}
            placeholder="Car model"
            className="searchbar__input"/>

            <SearchButton otherClasses="sm:hidden"/>
      </div>
           <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar
