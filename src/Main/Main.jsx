import React, { useEffect, useState } from 'react'
import "./Main.css"
import Country from "../Component/Country/Country"

function Main() {
    const [jsonData, setJsonData] = useState(null);
    const [initialRegion,setInitialRegion]=useState(null)
    useEffect(() => {
        // Function to fetch the JSON data
        const fetchJsonData = async () => {
          try {
            const response = await fetch('./data.json'); // Replace with the actual path to your JSON file
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setJsonData(data);
            setInitialRegion(data)
            localStorage.setItem("dataCountry",JSON.stringify(data))
          } catch (error) {
            console.error('Error fetching JSON data:', error);
          }
        };
    
        fetchJsonData();
      }, []);
    

      
      //let limitedData = jsonData ? jsonData.slice(0, 40) : [];
      
      const [region,setRegion]=useState('')
      
      const handleSelectChange = (event) => {
        setRegion(event.target.value);
        if (event.target.value==="filter"){
            setJsonData(initialRegion)
        }else{
        setJsonData(initialRegion.filter(country => country.region === event.target.value))
        }
    };
    const [selectCountry,setSelectCountry]=useState('')

    const handSelectCountry=(event)=>{
        setSelectCountry(event.target.value)
       
            setJsonData(initialRegion.filter(
                item=>item.name.toLowerCase().startsWith(event.target.value.toLowerCase()))
            )
    
      
    }
      

  return (
    <div className="main-wrapper">
        <div className="main-container">
            <div className="row1-content">
                    <div className="row1-left">
                        <div className="input-search">
                            <span id="search-light" className="material-symbols-outlined">
                                search
                                </span>
                            <input value={selectCountry} onChange={handSelectCountry}  type="text" placeholder="Search for a country..."/>
                        </div>
                    </div>
                    <div className="row1-right">
                        <div className="Filter-region">
                            <select name="" id="" value={region} onChange={handleSelectChange}>
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
            <div className="row-contrys">
                        {jsonData?.length > 0 ? (
                    jsonData?.map((country) => (
                    <Country
                        key={country.name} // Make sure to set a unique key for each item in the array when using map()
                        flag={country.flags.png}
                        capital={country.capital}
                        popul={country.population}
                        country_name={country.name}
                        region={country.region}
                    />
                    ))
                ) : (
                    <p>Loading JSON data...</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default Main