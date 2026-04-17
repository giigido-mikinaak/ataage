import Accordion from "../components/accordion";
import '../index.css'


function Learn() {

  const instructionData = [
    {
      id: 0,
      label: "The Set Up",
      renderContent: () => (
        <>
          <p>This game is intended for 3-5 players.</p>
          <ol>
            <li>Shuffle the deck</li>
            <li>Deal 7 cards to each player</li>
            <li>Place remaining cards face-down (this is the draw pile)</li>
            <li>Flip the top card face-up to start the discard pile</li>
            <li>If the first card is an action card, ignore the action</li>
            <li>If the first card is a black card, the first player can play any card.</li>
            <li>The game starts clockwise. The player next to the dealer goes first.</li>
          </ol>
        </>
      ),
    }, {
      id: 1,
      label: "How to play",
      renderContent: () => (
        <>
          <p>On your turn, play a card that matches the top of the discard pile by:</p>
          <ul>
            <li>Suit</li>
            <li>Ojibwe number</li>
            <li>Or, a wild/black card</li>
          </ul>
          <p>If you can’t play anything, draw a card. You may play a card if the drawn card is playable. If the drawn card isn’t playable, your turn ends. The card must be said in Ojibwe when it’s played.</p>
        </>

      ),
    },
    {
      id: 2,
      label: "No Cards in Draw Pile",
      renderContent: () => (
        <p>If the draw pile runs out, set aside the top card of the discard pile. Shuffle all remaining discard cards to create a new draw pile. Place the card you set aside back on top of the new discard pile. Continue playing.</p>
      ),
    },
    {
      id: 3,
      label: "Card Stacking",
      renderContent: () => (
        <p>You can play multiple cards at once if they match the top card by number OR action type. Cannot stack Agindaasonan or Wild +4.When cards are stacked, the effects combine.</p>
      ),
    },
    {
      id: 4,
      label: "Ending the Game",
      renderContent: () => (
        <>
          <p>The first player to play their last card wins the game!</p>
          <p>When you play your second-to-last card, you MUST say:</p>
          <ul>
            <li>Aazha ishkawaach!- Last card</li>
            <li className="italic">Pronounced: Aa-zha i-shka-waatch!</li>
          </ul>
          <p>Say this IMMEDIATELY after playing your card, before the next player starts their turn.</p>
          <p>If you forget to say it, another player can call you out by saying "Odaapin Bezhig”. </p>
          <p>The call-out must happen BEFORE the next player plays a card. If you're caught, you must draw 1</p>
        </>

      ),
    }
  ]


  const difficultyData = [
    {
      id: 0,
      label: "Beginner (First time players)",
      renderContent: () => (
        <>
          <p>Recommended for: Complete beginners, first game, young learners</p>
          <h4>Setup:</h4>
          <ul>
            <li>Keep the instruction booklet visible during play</li>
            <li>Keep the number page handy and suit reference where everyone can see them</li>
            <li>Take your time - there's no rush!</li>
          </ul>
          <h4>Language Rules:</h4>
          <ul>
            <li>Try to say cards in Anishinaabemowin, but English is okay</li>
            <li>No penalties for mispronunciation or wrong words</li>
            <li>Reference guides can be checked anytime</li>
            <li>Audio QR code can be used freely</li>
          </ul>
          <h4>Special cards:</h4>
          <ul>
            <li>Azheshkaan/Reverse (Direction Check): Players can take extra time to think of a number</li>
            <li>Agindaasonan/Counting Card: Count to 5 instead of 9. Group can help if someone forgets</li>
            <li>Aaniganoo Tamagen/Wild cards: Suit names can be said in English</li>
          </ul>
          <p className="italic">Goal: Get familiar with the game and start hearing Anishinaabemowin words. Have fun!</p>

        </>
      ),
    },
    {
      id: 1,
      label: "Easy Mode (Learning Focus)",
      renderContent: () => (
        <>
          <p>Recommended for: New speakers, mixed skill groups, relaxed play</p>
          <h4>Language Rules:</h4>
          <ul>
            <li>Numbers (1-9) should be said in Anishinaabemowin when playing number cards</li>
            <li>Changing suit can be said in English without penalty</li>
            <li>Saying an Anishinaabemowin word wrong will not be penalized</li>
            <li>Gentle corrections are encouraged! Help each other learn pronunciation</li>
            <li>Reference guides can be checked anytime</li>
            <li>Audio QR code can be used freely</li>
          </ul>
          <h4>Special Cards:</h4>
          <ul>
            <li>Azheshkaan/Reverse (Direction Check): Take your time saying a number</li>
            <li>Agindaasonan/Counting Card: Count to 5 instead of 9</li>
            <li>Aaniganoo Tamagen/Wild cards: Suit names can be said in English</li>
            <li>Action cards: Can be said in English OR Anishinaabemowin (your choice)</li>
          </ul>
          <h4>Pronunciation Help:</h4>
          <ul>
            <li>Players can gently correct each other: "It sounds more like 'nee-shuh' - try it!"</li>
            <li>Celebrate when someone tries a new word!</li>
          </ul>
          <p className="italic">Goal: Build confidence speaking Anishinaabemowin in a supportive, low-pressure environment.</p>
        </>
      ),
    },
    {
      id: 2,
      label: "Normal Mode",
      renderContent: () => (
        <>
          <p>Play as written in the instruction guide</p>
          <p>Recommended for: Groups with some Anishinaabemowin exposure</p>
          <h4>Language Rules:</h4>
          <ul>
            <li>All cards must be said in Anishinaabemowin(Ojibwe) when played</li>
            <li>Numbers, suits, and action card names are said in Anishinaabemowin(Ojibwe)</li>
            <li>Mispronunciation is okay as long as you tried</li>
            <li>Gentle corrections are encouraged! Help each other learn pronunciation</li>
          </ul>
          <h4>Special Cards:</h4>
          <ul>
            <li>Azheshkaan/Reverse (Direction Check): All players say any number (1-9) in Anishinaabemowin(Ojibwe). Last person draws 1 card</li>
            <li>Agindaasonan/Counting Card: Count to 9 as a group</li>
            <li>Aaniganoo Tamagen/Wild cards: Say suit name in Anishinaabemowin(Ojibwe)</li>
            <li>Aaniganoo Tamagen Odaapin Niiwin/Wild +4: Say card name and suit in Anishinaabemowin(Ojibwe)</li>
          </ul>
          <h4>Reference Materials:</h4>
          <ul>
            <li>Reference guides can be visible if needed</li>
            <li>Audio QR code available</li>
          </ul>
          <h4>Callouts & Penalties:</h4>
          <ul>
            <li>Last card rule: Must say "Aazha Ishkawaach(Last card)".</li>
            <li>If you're caught not declaring the last card, another player can call you out by saying "Odaapin bezhig (Pick up 1)" then you must draw 1 card</li>
            <li>As long as you're trying to speak Anishinaabemowin, no other penalties</li>
          </ul>

          <p className="italic">Goal: Actively practice Anishinaabemowin while playing competitively</p>
        </>
      ),
    }, {
      id: 3,
      label: "Challenge Mode (Advanced Learning)",
      renderContent: () => (
        <>
          <p>Play as written in the instruction guide</p>
          <p>Recommended for: Confident learners, groups wanting more accountability</p>
          <h4>Language Rules:</h4>
          <ul>
            <li>All cards must be said in Anishinaabemowin(Ojibwe) when played</li>
            <li>Pronunciation must be recognizable (doesn't have to be perfect)</li>
            <li>No reference guides visible during play (can check between rounds)</li>
          </ul>
          <h4>Special Cards:</h4>
          <ul>
            <li>Azheshkaan/Reverse (Direction Check): Must respond quickly, within 3-5 seconds</li>
            <li>Agindaasonan/Counting Card: Count to 9. Hesitation or wrong number = draw penalty and ends the count</li>
            <li>Aaniganoo Tamagen/Wild cards: Say suit name in Anishinaabemowin(Ojibwe)</li>
            <li>Aaniganoo Tamagen Odaapin Niiwin/Wild +4: Say card name and suit in Anishinaabemowin(Ojibwe)</li>
          </ul>
          <h4>Callouts:</h4>
          <ul>
            <li>If you forget to say a card in Anishinaabemowin, or say it in English, another player can call it out by saying "Odapin Bezhig", you must pick up 1 card</li>
            <li>Callout must happen before the next player starts their turn </li>
            <li>If pronunciation was attempted (even if wrong): No callout - effort counts!</li>
          </ul>
          <h4>Penalties:</h4>
          <ul>
            <li>Forgot to say card name in Anishinaabemowin: Draw 1 card (if called out)</li>
            <li>Last card rule: Draw 2 cards if you forget</li>
            <li>Very off pronunciation that sounds like a different word entirely: Can be called out (draw 1)</li>
          </ul>
          <h4>Fairness:</h4>
          <ul>
            <li>Group decides together if pronunciation was "close enough". Majority rules</li>
            <li>Be encouraging, not harsh! The goal is still learning</li>
          </ul>

          <p className="italic">Goal: Push your fluency and build confidence speaking quickly in Anishinaabemowin.</p>
        </>
      ),
    }
  ]
  return (
    <>
      <main>
        <h1>Ataage Agindaasonan Instruction Overview</h1>
        <p>Click an option below to learn more</p>
        <div className="info-section">
          <h2>Learn the Game Rules</h2>
          <div className="accordion-section">
            <Accordion items={instructionData} keepOthersOpen={true} />
          </div>
        </div>
        <div className="info-section">
          <h2>Difficulty Modifiers</h2>
          <div className="accordion-section">
            <Accordion items={difficultyData} keepOthersOpen={true} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Learn;