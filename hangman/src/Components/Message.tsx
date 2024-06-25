type MessageProps = {
    endOfTheGame: boolean;
  }
  

function Message (props : MessageProps){
    return <>
            <p>
                {props.endOfTheGame ? `Try another letter` : `End of The Game`}
            </p>
        </>
}

export default Message;
  