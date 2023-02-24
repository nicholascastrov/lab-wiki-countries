import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const CountryList = (props) => {
    // console.log("Here", props)
    // console.log("Countries", props.countries)

    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(props.countries);
      }, [props.countries]);

    return (
        <div className="container">
            <h2>Country List</h2>
            {countries.map((country) => {
                {/* console.log("Hola", country.alpha3Code) */}

                
                return(

            <div key={country.alpha3Code} className="country">
                <div className="col-5">
                    <div className="list-group">
                        <Link to={`/countries/${country.alpha3Code}`} >

                        {country.name.common}
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${(country.alpha2Code).toLowerCase()}.png`} alt="countryIMG"/>

                        </Link>
                    </div>
                </div>
            </div>
            
                )
            })}
        </div>
    )
}

export default CountryList