import alphabet from "../alphabet.json"
import styles from  "../Keyboard.module.css"

const handleClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const spanElement = event.currentTarget;
    const innerText = spanElement.innerText;
    console.log(innerText);
    // Perform any additional actions with the innerText
  };

const Keyboard =  () => {

    return <div style={{display: "flex",
                        flexWrap: "wrap",
                        gap: ".2em",
                        fontSize: "2em"
    }}>
        {alphabet.map((letter) => {
            return <button className= {styles.btn} onClick={(handleClick)} >{letter}</button>
        })}
    </div>
}

export default Keyboard