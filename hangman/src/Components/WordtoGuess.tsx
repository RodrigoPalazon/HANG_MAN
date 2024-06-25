type WordtoGuessType = {
    word: string
}

const WordtoGuess = (props : WordtoGuessType) => {

    return <>
        <p>WordtoGuess: {props.word}</p>
    </>
}

export default WordtoGuess;