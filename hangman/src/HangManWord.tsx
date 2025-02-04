type HangManWordProps = {
    guessedLetters: string[],
    wordToGuess: string,
    reveal: boolean
}

export function HangManWord({reveal = false ,guessedLetters,wordToGuess}: HangManWordProps) {
   

    return (
        
       
    <div style={{ display : "flex",
        gap: "0.25rem",
        fontSize: "6rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontFamily: "monospace"
        }}
    >

        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid black" }} key={index}>
                <span style={{ visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", color : !guessedLetters.includes(letter) && reveal ? "red" : "black" }}> 
                {letter}
                </span>
            </span>
        ))}



    </div>
    )

}