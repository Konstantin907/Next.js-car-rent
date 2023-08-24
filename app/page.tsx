import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'
import { fuels, yearsOfProduction } from '@/types';



export default async function Home() {

  const allCars = await fetchCars();

const isDataEmpty = !Array
  .isArray(allCars)  || allCars.length < 1  || !allCars  

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width
      ' id='discover'>
          <div className='home__text-container'>
              <h1 className='text-4xl font-extrabold'>Car and Deals:</h1>
              <p>Search for your ideal car</p>
          </div>
          <div className='home__filters'>
            <SearchBar	 />

            <div className='home__filter-container'>
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options= {yearsOfProduction}  />

            </div>
          </div>

        {!isDataEmpty ?(
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car)=> <CarCard car={car}/>
              )}
            </div>
          </section>
        ): (
          <div className='home__error-container'>
            <h2 className='text-black text-xl
            font-bold'>Oops, no results,sorry</h2>
            <p>{allCars?.message}</p>
          </div>
        ) }




      </div>
    </main>
  )
}

// padding-y and x ce mu dati da bude bukvalno svoja sekcija