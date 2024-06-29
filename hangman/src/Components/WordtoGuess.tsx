type WordtoGuessType = {
    word: string;
    guessedLetter: Array<string>; // or you can use guessedLetter: string[];
};

const WordtoGuess = ({word, guessedLetter} : WordtoGuessType) => {
    return <div style={{display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        
            {word.split("").map((letter, index) => (
                <span style={{borderBottom: ".1em solid black"}} key={index}>
                    <span style={{visibility: guessedLetter.includes(letter) ? "visible" : "hidden"}}>
                        {letter}
                    </span>
                </span>
            ))}
        
    </div>
}

export default WordtoGuess;