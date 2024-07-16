type MessageProps = {
    result: boolean;
  }
  

function Message ({result} : MessageProps){
    return <div style = {{fontSize : "2rem", textAlign: "center"}}>
                {result == true && "Winner ! - Refresh to try again"}
                {result == false && "Nice try ! - Refresh to try again"}
        </div>
}

export default Message;
  