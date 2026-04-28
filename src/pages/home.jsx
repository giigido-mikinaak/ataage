import '../index.css'
import CardsHome from '../components/cards-home';

function Home() {
  return (
    <>
      <main>
        <div className="intro-text">
          <h1 className="title">Welcome to the Ataage Agindaasonan Game Digital Resource</h1>
          <p>Click an option below to get started</p>
          <p className='accent'>Don’t forget to bookmark this page</p>
        </div>

        <div className="home-card-section">
          <CardsHome
            title="Learn the Game"
            text="Quickly understand how to play. This section holds the: overview, rules, set up, and how to win. Also includes different game difficulty modifiers to match the game to your skill level."
            buttontxt="Start Learning"
            link="learn"
          />

          <CardsHome
            title="Explore the Cards"
            text="Browse all cards and meanings. Explore, search, and filter through the different cards. Here you will find: translations, audio, phonetics, and card rules. The different suits will also be listed here."
            buttontxt="View Cards"
            link="cards"
          />

          <CardsHome
            title="Full Audio List"
            text="The complete Ataage Agindaasonan audio list with: the name of the game, cards, suits, and even additional game phrases more immersive play."
            buttontxt="Listen to Audio"
            link="Audio"
          />

          <CardsHome
            title="Supporters"
            text="This game couldn’t be possible with the help of our supporters. Thank you for making this happen. View this page to learn more about how this game was funded."
            buttontxt="View Supporters"
            link="Supporters"
          />
        </div>
      </main>
    </>
  );
}

export default Home;