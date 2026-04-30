import Audiocards from "../components/audio-card";
import { useState } from "react";
import Search from "../components/search";
import audioData from "../data/audioData.json"


function Audio() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const handleFilter = (e) => {
    setCategory(e.target.value)
  };
  const filterAudio = audioData
    .filter((item) => {
      //filter Category
      if (category === "All") return true;
      return item.category === category;
    })
    .filter((item) => {
      //serach filter
      //show cards for search
      return item.en.toLowerCase().includes(search.toLowerCase())
        ||
        item.oj.toLowerCase().includes(search.toLowerCase())
    });


  return (
    <>
      <main>
        <h1 style={{marginTop: "1em"}}>Audio</h1>
        <div className="filter-options row">
          <Search search={search} setSearch={setSearch}></Search>
          <div className="filter-category">
            <h3>Filter by Category</h3>
            <select value={category} onChange={handleFilter}>
              <option value="All">All</option>
              <option value="suit">Suit</option>
              <option value="number">Number</option>
              <option value="card">Card</option>
              <option value="phrase">Phrase</option>

            </select>
          </div>
        </div>


        <div className="audio-filter-section">
          {filterAudio.length > 0 ? (
            filterAudio.map((item) => (
              <Audiocards item={item} key={item.id} ></Audiocards>
            ))
          ) : (
            <p>No cards found</p>
          )}
        </div>

      </main>

    </>
  );
}

export default Audio;