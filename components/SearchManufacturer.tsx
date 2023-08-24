"use client";
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { manufacturers } from '@/types';
import { relative } from 'path';

const SearchManufacturer = ({manufacturer, 
    setManufacturer}: SearchManufacturerProps) => {

      const [query, setQuery] = useState("")

      const filteredManufacturers =
        query === "" ?
      manufacturers : manufacturers.filter((item)=>(
        item.toLowerCase()
        .includes(query.toLowerCase())
      ))

      //ovdje gore kayemo ako je querry prazan vracas sve
      //manufacturers a ako nije onda ides filter item koji
      //mi damno


  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
            <Combobox.Button className="absolute top-[14px]">
                <Image 
                src="/car-logo.svg"
                width={20}
                height={20}
                className="ml-4"
                alt="Car-logo"
                />
            </Combobox.Button>


            <Combobox.Input 
            className="search-manufacturer__input"
            placeholder='Car Brand'
            displayValue={(manufacturer:string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
            />

{/* transition je za onaj skrol koji se pojavlkuje u kucanju 
ali i za odredjenu animaciju */}
            <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={()=>setQuery("")} //ovo je sve
                //animacija zadnje samo cisti query odnosno 
                //ono polje dje se upisuju stvari
            > 

            <Combobox.Options>

                {/* ovo je samo u slucaju da nemamo nista */}
                {
                    filteredManufacturers.map((item)=>(
                        <Combobox.Option
                            key={item}
                            className={({active})=> `
                            relative search-manufacturer__option
                            ${active ? `bg-primary-blue
                            text-white`: `text-gray-900`}
                            `
                       
                        }
                        value={item}
                        >
                        {item}
                        </Combobox.Option>
                    ))
                 }

    {/* ovo je znaci da ako je length jednak nuli i ako je querry
    nije jednak praznom stringu */}

            </Combobox.Options>

            </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer

//koristim headless ui autocomplete
