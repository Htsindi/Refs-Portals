import {useState, useRef} from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
 
  function handleClick(){
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} placeholder='Enter Player Name' />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
      //<h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      //or
      //<h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2> same as 