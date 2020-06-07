import React from 'react';

function ListAvailableWords({word,index,deleteWords}){
    console.log("list",word);
    return(
        <div>
            {word}
            <div>
                <button onClick={deleteWords}>Delete Word</button>
            </div>
        </div>

    )
}
export default ListAvailableWords