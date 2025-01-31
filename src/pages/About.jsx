import countryFacts from "../api/countryData.json"
import React from 'react'

const About = () => {
  return (
    
    <section className='section-about container'>
        <h2 className='container-title'>
       Here are the intresting Facts
       <br />
       we're proud of
        </h2>
        <div className='gradient-cards'>
            {
                countryFacts.map((country) => {
                  const {id, countryName,capital,population,interestingFact} = country
                  return(
                    <div className="card" key={id}>
                        <div className="container-card bg-blue-box">
                            <p className="card-title">{countryName}</p>
                            <p>
                                <span className="card-description">Capital:
                                {capital}
                                </span></p>
                                <p>
                                <span className="card-description">Population:
                                {population}
                                </span>
                                </p>
                                <p>
                                <span className="card-description">Intresting-Facts:
                                {interestingFact}
                                </span></p>
                        </div>

                    </div>
                  )
                })
            }
           <div className='card'>

           </div>

        </div>
    </section>
)
}

export default About