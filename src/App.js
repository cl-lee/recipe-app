import "./App.css";
import "../src/Components/Home";
import "../src/Components/MainPicture";
import "./Components/SearchPage";
import "../src/Components/Option2";
import "../src/Components/Option3";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <article class="message">
      <div class="message-header">
        <p>test bulma</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">test bulma</div>
    <SearchPage/>
    </article>
  );
}

export default App;
