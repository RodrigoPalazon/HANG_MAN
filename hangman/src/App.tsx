import { useEffect, useState } from "react";
import words from "./wordList.json";
import Hangman from "./Components/Hangman";
import Keyboard from "./Components/Keyboard";
import WordtoGuess from "./Components/WordtoGuess";
import Message from "./Components/Message"; 

const App = () => {
const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
});

const [endOfTheGame, setEndOfTheGame] = useState<boolean>(false)

const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

const incorrectLetters = guessedLetters.filter((letter) => (!wordToGuess.includes(letter)));

function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
}


useEffect(()=>{
    const handler = (event: KeyboardEvent) => {
        const key = event.key

        if (!key.match(/^[a-z]$/)) return

        event.preventDefault()
        addGuessedLetter(key)
    }
    document.addEventListener("keypress",handler)

    return () => {
        document.removeEventListener("keypress",handler)
    }
}, [guessedLetters]);


    return (
        <div style={{
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            gap: "2em",
            margin: "0 auto",
            alignItems: "center"
        }}
        >
            
            <Message endOfTheGame = {endOfTheGame}/>
            <Hangman numberOfGuesses = {incorrectLetters.length}/>
            <WordtoGuess word={wordToGuess} guessedLetter={guessedLetters}/>
            <div style = {{alignSelf: "stretch"}}>
                <Keyboard/>
            </div>
      </div>
    )
}

export default App
