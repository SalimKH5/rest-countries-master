
const CountryTag = ({country}:{country:ICountry}) => {
  return (
    <a href={`details/${country.name}`} className='w-full h-full shadow-xl cursor-pointer dark:bg-[#2b3945] dark:text-white'>
            <div className="w-full h-[150px] rounded-2xl">
                { country.flags?.svg && <img src={country.flags?.svg} alt="" className='h-full w-full object-cover' />}
            </div>
            <div className="w-full  py-6 px-3">
                    <div className="w-fullh-full flex flex-col gap-2">
                        <h1 className='text-sm'>{country.name}</h1>
                        <p className='text-sm'>population :<span>{country.population}</span></p>
                        <p className='text-sm'>Capital :<span>{country.capital}</span></p>
                    </div>
            </div>
    </a>
  )
}

export default CountryTag