import { useState } from "react";
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

const [guessedLettersList, setGuessedLetters] = useState<string[]>([]);

const incorrectLetters = guessedLettersList.filter((letter) => (!wordToGuess.includes(letter)));

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
            <WordtoGuess word={wordToGuess}/>
            <div style = {{alignSelf: "stretch"}}>
                <Keyboard/>
            </div>
      </div>
    )
}

export default App
