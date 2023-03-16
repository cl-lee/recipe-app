import "./App.css";
import "../src/Components/Home";
import "../src/Components/MainPicture";
import "../src/Components/Option1";
import "../src/Components/Option2";
import "../src/Components/Option3";

function App() {
  return (
    <article class="message">
      <div class="message-header">
        <p>test bulma</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">test bulma</div>
    </article>
  );
}

export default App;
