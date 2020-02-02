import React, { useEffect, useState } from 'react';
import './App.css';
import Recipes from './Recipes';

const App = () => {
  const APP_ID = '80d92580';
  const APP_KEY = 'bcf373da6c472b8211873e8a014b4a90';
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('kheer');
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    //console.log(response);
    console.log(data)
    setRecipes(data.hits);
  }
  const submit = (e) => {
    e.preventDefault();
    setQuery(search)
  }
  const updateSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={submit}>
        <input type="text" className="search-bar" placeholder="Kheer..." value={search} onChange={updateSearch} />
        <button type="submit" className="search-button">Search Recipes</button>
      </form>
      {recipes.map(recipe => (
        <Recipes
          title={recipe.recipe.label}
          key={recipe.recipe.label} 
          weight={recipe.recipe.totalWeight}
          calories={recipe.recipe.calories} 
          ingredients={recipe.recipe.ingredients}
          image={recipe.recipe.image}
          healthLabels={recipe.recipe.healthLabels} />
      ))}
    </div>
  );
}

export default App;
