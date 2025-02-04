import { useState } from "react"
import words from "./wordList.json"
import { HangManDraw } from "./HangManDraw"
import { HangManWord } from "./HangManWord"
import { Keyboard } from "./Keyboard"

function App() {

const [wordToGuess,setWordToGuess] = useState(() => {
  return words[Math.floor(Math.random() * words.length)]
})

const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
const incorretLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  console.log(wordToGuess)

  return <div 
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>

      <div style={{ fontSize: "3rem", textAlign: "center", fontWeight : "bold" } }>  HangMan Game </div>
      
      <HangManDraw  numberOfGuesses={incorretLetters.length} />
      <HangManWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>

      <div style={{ alignSelf: "stretch"}} >
      <Keyboard />
      </div>


    </div>

  
}



export default App
 