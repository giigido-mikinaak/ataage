import Cardscards from "../components/cards-cards";
import { useState } from "react";
import cardsData from "../data/cardsData.json"


function Cards() {
  const [category, setCategory] = useState("All");
  const [filteredCards, setFilteredCards] = useState(cardsData);

  // When click button, select category
  const handleFilter = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    // filter the cards by all or category name
    const filtered = cardsData.filter(
      (c) =>
        (setCategory === "All" || c.category === selectedCategory)
    );
    // Only show filtered cards
    setFilteredCards(filtered);
  };
  return (
    <>
      <main>
        <h1>Cards</h1>
        <h2>Filter by Category</h2>
        <select value={category} onChange={handleFilter}>
          <option value="All">All</option>
          <option value="number">Number</option>
          <option value="action">Action</option>

        </select>

        <div className="cards-filter-section">
          {filteredCards.length > 0 ? (
            filteredCards.map((cardsData) => (
              <Cardscards key={cardsData.id}></Cardscards>
            )
          ))
           :
            <p>No cads found</p>}
        </div>
        
      </main>
    </>
  );
}

export default Cards;