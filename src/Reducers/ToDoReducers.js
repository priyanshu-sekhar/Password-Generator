const INITIAL_STATE={
    wordList:[]
};
export default(state = INITIAL_STATE, action)=>{
    switch(action.type)
    {
        case 'GET_WORDS':
        return{
            ...state, wordList:action.data
        };
        case 'POST_WORDS':
            return{
               ...state, wordList:action.data
            }
        default:
            return state;
    }
}