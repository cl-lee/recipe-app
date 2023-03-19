import { useState } from "react"
import "./search-form.css"

export default function SearchForm() {
    // states to store list of ingredients and new ingredient written in the input field
    const [ingredients, setIngredient] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');



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
        console.log('new list', newList)
        console.log('ingredients list', ingredients)
    }
    return (
        <>
            <form >

                <label>List your ingredients</label>
                <div className="field has-addons">
                    <div className="control">

                        <input
                            type="text"
                            name="ingredient"
                            id="ingredient"
                            className="input"
                            value={newIngredient}
                            onChange={(e) => setNewIngredient(e.target.value)} />
                            </div>
                        <button
                            id="add-button"
                            className="button "
                            onClick={(e) => {
                                e.preventDefault()
                                addIngredient()

                            }}>
                            +
                        </button>
                </div>
                <ul>
                    
                    {ingredients.map(ingredient => (
                        
                        <li className="li" key={ingredients.indexOf(ingredient)}>{ingredient}

                            <button
                                id="remove-button"
                                className="button is-small"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRemove(ingredients.indexOf(ingredient))
                                }}>
                                -
                            </button>
                        </li>

                    ))}
                </ul>
                <button className="button" id="search-button">SEARCH</button>

            </form>

        </>
    )
}