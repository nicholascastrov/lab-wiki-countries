import { useParams, Link } from 'react-router-dom'

import { useState, useEffect } from 'react'; 

// import countries from './countries.json'

const CountryDetails = (props) => {

    
    const [foundCountry, setFoundCountry] = useState(null); // <== ADD
    
    const { alpha3Code } = useParams();
    
    console.log("AQUI", alpha3Code)
    console.log("found", foundCountry)

    useEffect(() => {                                      // <== ADD
        const country = props.countries.find((countryObj) => {
            // console.log("country", country)
          return countryObj.alpha3Code === alpha3Code;
        })
     
        if (country) {
          setFoundCountry(country);
        }
        
      }, [alpha3Code]);

    return(

        <div className="col-7">

            
            {foundCountry && 

            <div>

            <h1>{foundCountry.name.common}</h1>

            
            <table className="table">
                <thead>Country Details</thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {foundCountry.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul> 
                            {foundCountry.borders.map((border) => {
                                return(
                                <li><Link to={`/countries/${border}`}> {`${border}`} </Link></li>
                                )
                                })
                            }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            </div>

            }

      </div>

    )
}

export default CountryDetails