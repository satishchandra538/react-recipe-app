import React from 'react';

const Recipes = ({title, calories, image, healthLabels, weight, ingredients}) => {
    const style = {
        backgroundColor: "rgb(206, 90, 36)",
        color: "white",
        borderRadius: "2px",
        padding: "10px",
        marginBottom:"5px",
        marginTop : "5px"
    }
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <p><span>Total weight:</span>{weight}gm  <span>Calories:</span>{calories}</p>
            <img src={image} alt={title} />
            <ul className="healthlabel"><span>Health label</span>{healthLabels.map(heathLabel => {
                return(
                    <li>{heathLabel}</li>
                )
            })}</ul>
            <ol className="ingredient"><span style={style}>Ingredients</span>{ingredients.map(ingredient => {
                return(
                    <li>
                        <span> {ingredient.text} ,</span>
                        <span>{ingredient.weight}gm</span>
                    </li>
                )
            }) }</ol>
        </div>
    )
}
export default Recipes;