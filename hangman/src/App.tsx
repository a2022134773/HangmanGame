import { useCallback, useEffect, useState } from "react"
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

const isLoser = incorretLetters.length >= 6
const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  console.log(wordToGuess)


const addGuessedLetter = useCallback((letter: string) => {

    if(guessedLetters.includes(letter) ) return

    setGuessedLetters(currentLetters => [...currentLetters,letter])

},[guessedLetters])


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)

    }
    
    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  
    },[guessedLetters])


    //useEffect(() => {},[])

  return <div 
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>

      <div style={{ fontSize: "3rem", textAlign: "center", fontWeight : "bold" } } >
        HangMan Game
         
         </div>
      
      <HangManDraw  numberOfGuesses={incorretLetters.length} />
      <HangManWord  reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>

      <div style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "10px", color: isWinner ? "green" : isLoser ? "red" : "black" }}>
        {isWinner && "🎉 Winner - Refresh to try again "}
        {isLoser && "❌ Loser - Refresh to try again"}
      </div>

      <div style={{ alignSelf: "stretch"}} >
      <Keyboard 
        disabled={isWinner || isLoser}
        activeLetter={guessedLetters.filter(letter => wordToGuess.includes(letter))}
        inactiveLetters={incorretLetters} 
        addGuessedLetter={addGuessedLetter}/>
      </div>


    </div>

  
}



export default App
 