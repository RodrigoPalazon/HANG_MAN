type WordtoGuessType = {
    reveal?: boolean,
    word: string;
    guessedLetter: Array<string>; // or you can use guessedLetter: string[];
};

const WordtoGuess = ({reveal = true, word, guessedLetter} : WordtoGuessType) => {
    return <div style={{display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
    }}>
        
            {word.split("").map((letter, index) => (
                <span style={{borderBottom: ".1em solid black"}} key={index}>
                    <span style={{visibility: guessedLetter.includes(letter) || reveal ? "visible" : "hidden", 
                                    color: !guessedLetter.includes(letter) && reveal ? "red" : "black"}}>
                        {letter}
                    </span>
                </span>
            ))}
        
    </div>
}

export default WordtoGuess;