import { useEffect } from "react"
import { useState } from "react"

export default function AddPuppyForm() {

// const [newPuppy, setNewPuppy] = useState({name: '', breed: '', status: '', imageUrl: ''})
const [name, setName] = useState('')
const [breed, setBreed] = useState('')
// const [status, setStatus] = useState('')
const [imageUrl, setimageUrl] = useState('')
    return (
        <>
        <h1>Add Puppy</h1>
        <form>
        <label>Name</label>
        <input type="text" onChange={(e) => {
            // let name = e.target.value
            // setNewPuppy({name})
            setName(e.target.value)
            console.log(e.target.value)
            // console.log(newPuppy)
         
        }}/>
        <label>Breed</label>
    <input type="text" name="breed" onChange={(e) => {
        // let breed = e.target.value
        setBreed(e.target.value)
        // setNewPuppy((pstate) => ({...pstate, breed}))
        // console.log(newPuppy)
   
    }}/>

    {/* <label>Status</label>
    <input type="text" name="status" onChange={(e) => {
        // let status = e.target.value
        // setNewPuppy((pstate) => ({...pstate, status}))
        setStatus(e.target.value)
        // console.log(newPuppy) */}

    {/* }}/> */}
    <label>imageUrl</label>
    <input type="text" name="photo" onChange={(e) => {
        // let imageUrl = e.target.value
        // setNewPuppy((pstate) => ({...pstate, imageUrl}))
        setimageUrl(e.target.value)
        // console.log(newPuppy)
    }}/>
    <br/>
    
    <button id="submitButton" type="submit" onClick={(e) => {
        e.preventDefault();
        
            async function AddPuppy() {
                
                const cohortName = "2408-FTB-MT-WEB-PT"
                const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`
                
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify({
                            name,
                           breed,
                          imageUrl,
                    })        
                })
                // console.log(newPuppy)
                console.log(response);
                return response;
            }
   
            AddPuppy();
    }}>Submit</button>
        </form>
        
        </>
    ) 
}