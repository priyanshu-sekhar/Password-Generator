import React,{useState} from 'react';

function ToDoForm({addWords}){
    const [word,setWord] = useState();
    const handleWordSubmit  = e => {
        e.preventDefault();
        if (word)
            addWords(word);
        setWord('');
        console.log("submitted");
    };
    return(
        <div>
            <input
                type={"text"}
                placeholder={"Add a new word"}
                value={word}
                onChange={e => setWord(e.target.value)}
            />
            <button onClick={handleWordSubmit}>Submit Words</button>
            <button>Generate Password</button>
        </div>

    )
}
export default ToDoForm