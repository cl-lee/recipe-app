import { useState } from "react"


export default function SearchForm() {

    const [ingredients, setIngredient] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');

    // console.log(ingredient)

    function addIngredient() {
        setIngredient([
            ...ingredients,
            newIngredient
        ])
        setNewIngredient('')
    }
    return (
        <>
            <form >

                <h2>List your ingredients</h2>

                <input
                    type="text"
                    name="ingredient"
                    id="ingredient"
                    required
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)} />
                <button onClick={(e) => {
                    e.preventDefault()
                    addIngredient()
                    console.log(ingredients, newIngredient)
                }}
                    id="add">Add</button>
                <ul>
                    { ingredients.map(ingredient=>(
                        <li>{ingredient}</li>
                    )) }
                </ul>

            </form>

        </>
    )
}