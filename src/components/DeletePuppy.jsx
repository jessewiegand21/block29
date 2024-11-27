

export default async function DeletePuppy(playerId) {



    
    const cohortName = "2408-FTB-MT-WEB-PT"
    const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

        
        const response = await fetch(`${API_URL}/players/${playerId}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        if (response.status === 200){
            console.log(result)
        }
        
        


}