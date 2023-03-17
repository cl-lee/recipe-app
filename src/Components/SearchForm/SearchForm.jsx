import { useState } from "react"


export default function SearchForm() {

const [ingredientList, setIngredientList] = useState('');

    return (
        <>
        <form >

            <h2>List your ingredients</h2>
            <input 
            type="text"
            name="ingredient"
            id="ingredient" 
            required
            value={ingredientList}
            onChange={(e) =>setIngredientList(e.target.value) }/>
            <button onClick={(e) =>{
                e.preventDefault();
                // ingredientArray.push(ingredientList)
                console.log(ingredientList)
            }} id="add">Add</button>
            <ul>

            </ul>
            
        </form>
       
        </>
    )
}