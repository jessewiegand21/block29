import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


export default function FetchSinglePlayer() {
    
const [puppy, setPuppy] = useState([])

    const cohortName = "2408-FTB-MT-WEB-PT"
    const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

   
  const {id} = useParams()
    useEffect(() => {
        const FetchSinglePlayer = async (puppyId) => {
            try {
                const response = await fetch(`${API_URL}/players/${puppyId}`);
                const data = await response.json();
                setPuppy(data.data.player)
                console.log(data.data.player);
                return data.data;
              } catch (err) {
                console.error(`Oh no, trouble fetching player !`, err);
              }
            }
            FetchSinglePlayer(id);
        },[])
        return (
          <>
          <div>
        <Link id="homeLink" to={'/'}>Home</Link>
          </div>
          
            <h2>{puppy.name}</h2>
            <h2>{puppy.id}</h2>
            <img src={puppy.imageUrl} alt="" />
          
   
          </>
        )
    }