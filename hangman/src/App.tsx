import { KeyboardEvent, useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import Hangman from "./Components/Hangman";
import Keyboard from "./Components/Keyboard";
import WordtoGuess from "./Components/WordtoGuess";
import Message from "./Components/Message"; 

function getWord(){
    return words[Math.floor(Math.random() * words.length)]
}

const App = () => {
const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
});

const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

const incorrectLetters = guessedLetters.filter((letter) => (!wordToGuess.includes(letter)));

const isLoser = incorrectLetters.length >= 6
const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
},[guessedLetters, isLoser, isWinner])


useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])


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
            
            <Message result ={!isLoser || isWinner}/>
            <Hangman numberOfGuesses = {incorrectLetters.length}/>
            <WordtoGuess reveal={isLoser} word={wordToGuess} guessedLetter={guessedLetters}/>
            <div style = {{alignSelf: "stretch"}}>
                <Keyboard 
                    disabled = {isWinner || isLoser}
                    activeLetters = {guessedLetters.filter(letter => wordToGuess.includes(letter))}
                    inactiveLetters = {incorrectLetters}
                    addGuessedLetter = {addGuessedLetter}
                />
            </div>
      </div>
    )
}

export default App
