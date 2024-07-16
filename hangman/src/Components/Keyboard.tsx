import alphabet from "../alphabet.json"
import styles from  "../Keyboard.module.css"

const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const spanElement = event.currentTarget;
    const innerText = spanElement.innerText;
    console.log(innerText);
    // Perform any additional actions with the innerText
  };

type KeyboardProps = {
    activeLetter: string[], 
    inactiveLetters: string[], 
    addGuessedLetter: (letter: string) => void
}

const Keyboard =  ({activeLetter, inactiveLetters, addGuessedLetter} : KeyboardProps) => {

    return <div style={{display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                        gap: ".5rem",
                        
    }}>
        {alphabet.map((key) => {
            return <button className= {`${styles.btn}`} 
                            onClick={() => addGuessedLetter(key)} 
                            key={key}>
                                {key}
                    </button>
        })}
    </div>
}

export default Keyboard