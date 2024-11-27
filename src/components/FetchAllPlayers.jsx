
import { useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import DeletePuppy from "./DeletePuppy";
import AddPuppyForm from "./AddPuppyForm";
import SearchPlayers from "./searchPlayer";

export default function FetchAllPlayers() {
  
  const [puppies, setPuppies] = useState([])

  useEffect(() => { 
    
    const cohortName = "2408-FTB-MT-WEB-PT"
    const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

  const fetchAllPlayers = async () => {
    try {
      const response = await fetch(`${API_URL}/players`);
      const data = await response.json();
      if (response.status === 200) {
        
        console.log(data.data.players)
        
        setPuppies(data.data.players)
        
      } else {
        console.log("Server Error", data.error.message);
      }
    } catch (err) {
      console.error("Uh oh, trouble fetching players!", err);
    }
  };
  fetchAllPlayers();

},[])

return (
    <>
  
<Link id="homeLink" to={'/'}>Home</Link>

{puppies.map((puppy) => {
  return (
    
<div key={puppy.id} className="puppyCard">
    <h2>{puppy.name}</h2>
    
   <img src={puppy.imageUrl} alt="" />
  
    <div>

   <Link id="viewPlayer" to={`/FetchSinglePlayer/${puppy.id}`}>View Player</Link>
    </div>

   <br />
   <br />

  <button id="remove" onClick={() => {DeletePuppy(puppy.id)}}>Delete</button>

</div>

  )})}

{<SearchPlayers puppies={puppies}/>}
{<AddPuppyForm/>}

  </>
)
}
