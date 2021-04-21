import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import InstitutionCard from './InstitutionCard'

function InstitutionIndex() {

  const [ institutions, setInstitutions ] = useState(null)

  useEffect(() => {
    const getData = async() => {
      const { data } = await axios.get('api/institutions')
      setInstitutions(data)
    }
    getData()
  },[])

  console.log(institutions)
  

  return (
    <div className='container is-max-desktop'>
      <div className='columns is-mobile is-vcentered'>
        { institutions && 
        <div className="column is three-fifths is-offset-one-fifth">
          { institutions.map(institution => (

            <Link to={`/explore/${institution.institution_name.replace(' ','')}`} key={institution.id} {...institution}>
              <InstitutionCard props={institution}/>
            </Link>

          ))}
        </div>
        }
      </div>
    </div>

  )

}

export default InstitutionIndex
