import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Component/Navbar/Navbar';
import "./CountryD.css"
import { Link, useParams } from 'react-router-dom';
function CountryD() {


  const countryName = useParams()
  const storedDataString = localStorage.getItem('dataCountry');

  const storedDataArray = JSON.parse(storedDataString);
  const [countryData,SetcountryData]=useState(null)

  useEffect(() => {
    // Find the country that matches the countryname parameter
    const foundCountry = storedDataArray.find(country => country.name === countryName.countryname);

    if (foundCountry) {
      // Update the state with the found country data
      SetcountryData(foundCountry);
    } else {
      // Country not found, handle accordingly (e.g., show an error message)
      SetcountryData(null);
    }
  }, []);;

  console.log(countryData?.population)
  const containerApp = useRef(null);
  return (
    <div className='CountryDetail-wrapper' ref={containerApp}>
      <Navbar containerApp={containerApp}/>
      <div className="main-countryDetail-wrapper" >
          <div className="main-countrydetail-content">
            <div className="Back-wrapper">
              <div className="back">
                  <Link to="/" className='btn-link'>
                      <span className="material-symbols-outlined">
                          arrow_back
                      </span>
                     Back
                  </Link>
                  
              </div>
            </div>
            <div className="main-wrapper">
              <div className="main-left">
                  <div className="flag-containerD">
                      <img src={countryData?.flags.svg} alt="" />
                  </div>
              </div>
              <div className="main-right">
                  <div className="main-details">
                      <h1>{countryData?.name}</h1>
                      <div className="main-detail-content">
                        <div className="main-detail-left">
                          <li><p>Native Name:</p><span>{countryData?.name}</span></li>
                          <li><p>Population:</p><span>{countryData?.population}</span></li>
                          <li><p>Region:</p><span>{countryData?.region}</span></li>
                          <li><p>Sub Region:</p><span>{countryData?.subregion}</span></li>
                          <li><p>Capital:</p><span>{countryData?.capital}</span></li>
                        </div>
                        <div className="main-detail-right">
                          <li><p>Top Level Domain:</p><span>{countryData?.topLevelDomain[0]}</span></li>
                          <li><p>Currencies:</p><span>{countryData?.currencies[0]?.code}</span></li>
                          <li><p>Languages:</p>
                              {
                               countryData?.languages.map((lan) => (
                                <span key={lan.code}>{lan.name},</span>
                              ))
                              }
                          
                          </li>
                        </div>
                      </div>
                      <div className="Border-countries">
                        <p>Border Countries</p>
                        <div className="border">
                        {
                               countryData?.borders?.map((lan) => (
                                <span>{lan}</span>
                              ))
                          }
                        </div>
                        
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
        
    </div>
  )
}

export default CountryD