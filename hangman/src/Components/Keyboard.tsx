import alphabet from "../alphabet.json"

const Keyboard =  () => {

    return <>
        {alphabet.map((letter) => {
            return <p>{letter}</p>
        })}
    </>
}

export default Keyboard