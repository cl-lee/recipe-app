import { useState } from "react"
import "./search-form.css"
import { NavLink } from 'react-router-dom';



export default function SearchForm() {
    // states to store list of ingredients and new ingredient written in the input field
    const [ingredients, setIngredient] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');


    // ************ FUNCTIONS ****************
    // add new ingredient to the list
    function addIngredient() {
        if (newIngredient !== '') {

            setIngredient([
                newIngredient,
                ...ingredients
            ])
            setNewIngredient('')
        }
    }

    // remove ingredient from list
    function handleRemove(id) {
        // filters ingredients array and only returns the elements with different index numbers
        const newList = ingredients.filter((item) => ingredients.indexOf(item) !== id)
        // update the ingredient state with the filtered array
        setIngredient(newList)
    
        
    }
localStorage.setItem("test", ingredients)
let ingredientArray = ingredients

console.log(ingredientArray)
    //*************** JSX RETURN ***************
    return (
        <>
            <form >

                <label>List your ingredients</label>
                {/* div for search input and button */}
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
                            //adds the new ingredient to the ingredients state array
                            addIngredient()

                        }}>
                        +
                    </button>
                </div>

                {/* list of added ingredients */}
                <ul>

                    {ingredients.map(ingredient => (
                        // map the ingredients array and create a list item for each element
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
                <NavLink to="/search-results"><button className="button" id="search-button">SEARCH</button></NavLink>

            </form>

        </>
    )
}