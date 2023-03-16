import './App.css';
fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=901555f1&app_key=42eb9c88a0deb3aae3cef1a802a1283b")
  .then((response) => response.json())
  .then((data) => console.log(data));

function App() {
  return (
   <h1>Hello World!</h1>
  );
}

export default App;
