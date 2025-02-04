export function HangManWord() {
    const word = "test"
const guessedLetters = ["t", "e", "i", "o", "s"]

    return (
    <div style={{ display : "flex",
        gap: "0.25rem",
        fontSize: "6rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        fontFamily: "monospace"
        }}
    >

        {word.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid black" }} key={index}>
                <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden",}}> 
                {letter}
                </span>
            </span>
        ))}


    </div>
    )

}