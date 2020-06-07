import React, {useEffect} from 'react';
import ListAvailableWords from "./ListAvailableWords";
import ToDoForm from "../Forms/ToDoForm";
import './wordList.css';
import {useDispatch, useSelector} from 'react-redux';
import {addWords,getWords,updateWords} from "../Actions/ToDoActions";

function WordList(){
    const wordList = useSelector(({pwdGen})=> pwdGen.wordList);
    const dispatch = useDispatch();
    console.log("comp",wordList);
    useEffect(()=>
    {
        getWords(dispatch)
    },[]);


    return(
       <div className = "wl-body">
           <header>
               Password Generation Using Words
           </header>
           <div>
               {wordList.map((word,index) =>
                   (<ListAvailableWords
                   word = {word}
                   index = {index}
                   key = {index}
                   deleteWords={()=>updateWords(word,dispatch)}
                   />))}
           </div>
            <div>
                <ToDoForm
                    addWords={(word)=>addWords(word,dispatch)}
                    />
            </div>

       </div>
    );
}
export default WordList