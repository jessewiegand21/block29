import { useState } from "react";


export default function SearchPlayers({puppies}) {
    
  
    const [searchQuery, setSearchQuery] = useState('');


    const filteredItems = puppies.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) )

    const handleSearchChange = (event) => {
            setSearchQuery(event.target.value);

        }
        const handleSubmit = (e) => {
            e.preventDefault()
            filteredItems.map((item) => {
                return (<div>{item.name}</div>)
            })
        }
        
      console.log(filteredItems)

        return (
            <>
            <form onSubmit={(e) =>{
                handleSubmit(e)
            }
        }>
            <label>Search</label>
            <input type="text" onChange={handleSearchChange}/>
            <button type="submit">Submit</button>
            </form>
            {filteredItems.map((item) => {
                return (<div>{item.name}</div>)
            })}
            </>
        )
}