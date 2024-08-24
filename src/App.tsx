
import './App.css'
import { CiSearch } from "react-icons/ci";
import data from "./assets/data.json"
import CountryTag from './Components/CountryTag'
import { useState } from 'react';
function App() {


  const Countries: ICountry[] | undefined = data;
  
  const [region, setRegion] = useState<string | number | readonly string[]>("");
  const [filter, setFilter] = useState<ICountry[] | undefined>(data);
  const [searchCountry, setSearchCountry] = useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(event.target.value);
    if(event.target.value==="filter"){
      setFilter(Countries)
    }else{
      setFilter(Countries.filter((country: ICountry) => country.region === event.target.value))
    }
    
  }

  const handleSearchCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchCountry(searchValue)
    const regex = new RegExp(searchValue, 'i'); // 'i' for case-insensitive matching
    
      setFilter(Countries.filter((country: ICountry) => country?.name && regex.test(country?.name) && country.region===region));

   
  }

  return (
    <div className='w-full  h-auto min-h-screen  flex items-center justify-center py-16'>
      <div className="w-full h-full flex flex-col gap-3 max-w-xs sm:max-w-xl lg:max-w-5xl xl:max-w-6xl ">
        <div className="w-full flex items-center  justify-between flex-col sm:flex-row gap-8 py-2 sm:py-5">
          <div className="w-full sm:flex-[0.3] flex items-center min-w-24 gap-5 bg-white dark:bg-[#2b3945] rounded-md ">
            <span id="search-light" className="p-2 cursor-pointer flex items-center justify-center">
              <CiSearch />
            </span>
            <input value={searchCountry} onChange={handleSearchCountry} type="text" className='dark:text-white light bg-transparent outline-none py-2 text-sm' placeholder="Search for a country..." />

          </div>
          <div className="w-full sm:flex-[0.3] flex">
            <div className="w-full  flex ">
              <select value={region} onChange={handleSelectChange} className='p-1 w-full min-w-40 cursor-pointer rounded-xl' name="" id="" >
                <option value="filter">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full h-auto   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16  ">

          {
            filter && filter.map((country: ICountry) => (
              <CountryTag country={country} />
            ))
          }
        </div>
      </div>




    </div>
  )
}

export default App
