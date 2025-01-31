import React from 'react'
import { NavLink } from 'react-router-dom'

const CountryCard = ({country}) => {
    const {flags , name , population , region , capital} = country
  return (
    <li className='country-card card'>
        <div className='container-card bg-white-box'>
            <img src={flags.svg} alt={flags.alt} />
            <div className='country-info'>
              <p className='card-title'>{ name.common.length > 10 ? name.common.slice(0,10) + "...":name.common}</p>
              <p className='card-description'>Population:
                 <span>{population.toLocaleString()}
                    </span>
                    </p>
                    <p className='card-description'>Region: 
                 <span>{region}
                    </span>
                    </p>
                    <p className='card-description'>Capital:
                 <span>{capital[0]}
                    </span>
                    </p>
                    <NavLink to={`/country/${name.common}`}>

                    <button>Read More</button>
                    </NavLink>
            </div>

        </div>
        </li>
  )
}

export default CountryCard