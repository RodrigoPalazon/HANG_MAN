import alphabet from "../alphabet.json"
import styles from  "../Keyboard.module.css"

// const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
//     const spanElement = event.currentTarget;
//     const innerText = spanElement.innerText;
//     console.log(innerText);
//     // Perform any additional actions with the innerText
//   };

type KeyboardProps = {
    disabled?: boolean,
    activeLetters: string[], 
    inactiveLetters: string[], 
    addGuessedLetter: (letter: string) => void
}

const Keyboard =  ({disabled = false, activeLetters, inactiveLetters, addGuessedLetter} : KeyboardProps) => {

    return <div style={{display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                        gap: ".5rem",
                        
    }}>
        {alphabet.map((key) => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return <button className= {`${styles.btn} ${isActive ? styles.active : ""} ${isInactive ? styles.inactive : ""}`} 
                            onClick={() => addGuessedLetter(key)} 
                            disabled= {isInactive || isActive || disabled}
                            key={key}>
                                {key}
                    </button>
        })}
    </div>
}

export default Keyboard