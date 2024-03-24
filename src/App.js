import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
