import { useState } from "react"


export default function SearchForm() {

    const [ingredients, setIngredient] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');

    // console.log(ingredient)

    function addIngredient() {
        if (newIngredient !== '') {

            setIngredient([
                newIngredient,
                ...ingredients
            ])
            setNewIngredient('')
        }
    }

    function handleRemove(id) {
       
        const newList = ingredients.filter((item) => ingredients.indexOf(item) !== id)
      setIngredient(newList)
        console.log(id)
        console.log('new list',newList)
        console.log('ingredients list',ingredients)
    }
    return (
        <>
            <form >

                <h2>List your ingredients</h2>

                <input
                    type="text"
                    name="ingredient"
                    id="ingredient"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)} />
                <button onClick={(e) => {
                    e.preventDefault()
                    addIngredient()
                    // console.log(ingredients, newIngredient)
                }}
                    id="add">Add</button>
                <ul>
                    {ingredients.map(ingredient => (
                        <li key={ingredients.indexOf(ingredient)}>{ingredient}
                            
                            <button onClick={(e) => {
                                e.preventDefault();
                                handleRemove(ingredients.indexOf(ingredient))
                            }}>Remove</button>
                        </li>

                    ))}
                </ul>

            </form>

        </>
    )
}