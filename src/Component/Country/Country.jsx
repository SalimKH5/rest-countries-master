import React from 'react'
import './Country.css'
import { Link } from 'react-router-dom'
function Country({flag,country_name,popul,region,capital}) {
  return (
    <Link className="contry-container" to={`/country/${country_name}`}>
                <div className="flag-container">
                    <img src={flag} alt="" />
                </div>
                    <div className="contry-detail-container">
                        <div className="contry-detail">
                                <p className="country-name">{country_name}</p>
                                <div className="stat-detail">
                                <li><p>Poplutaion:</p><span>{popul}</span></li>
                                <li><p>Region:</p><span>{region}</span></li>
                                <li><p>Capital:</p><span>{capital}</span></li>
                                </div>
                        </div>
                    </div>
    </Link>
  )
}

export default Country