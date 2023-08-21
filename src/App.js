
import Categories from "./components/Categories";
import Extra from "./components/Extra";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Popular from "./components/Popular";
import QuickMeal from "./components/QuickMeal";
import Vegan from "./components/Vegan";
import "./index.css"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Popular />
      <Categories />
      <Latest />
      <Vegan />
      <QuickMeal />
      <Extra />
    </>
  );
}

export default App;
