import CardsContainer from "../components/cards-container";
import { useState } from "react";
import cardsData from "../data/cardsData.json";
import Search from "../components/search";

function Cards() {
  //  CHange category
  const [category, setCategory] = useState("All");
  // Search variable and setter
  const [search, setSearch] = useState("");

  const handleFilter = (e) => {
    setCategory(e.target.value)
  };
  const filteredCards = cardsData
    .filter((card) => {
      // filter category
      if (category === "All") return true;
      return card.category === category;
    })
    .filter((card) => {
      //search filter
      // show cards for search
      return card.en.toLowerCase().includes(search.toLowerCase())
        ||
        card.oj.toLowerCase().includes(search.toLowerCase())

    });

  return (
    <>
      <main>
        <h1>Cards</h1>
        <div className="filter-options row">
          <Search search={search} setSearch={setSearch}></Search>
          <div className="filter-category">
            <h3>Filter by Category</h3>
            <select value={category} onChange={handleFilter}>
              <option value="All">All</option>
              <option value="number">Number</option>
              <option value="action">Action</option>
            </select>
          </div>
        </div>


        <div className="cards-filter-section">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <CardsContainer card={card} key={card.id} ></CardsContainer>
            ))
          ) : (
            <p>No cards found</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Cards;