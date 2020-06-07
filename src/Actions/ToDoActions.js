export const getWords = (dispatch) => {
    fetch (
        'http://localhost:8080/words', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
    )
        .then (res => res.json ())
        .then (value => {
            console.log("get",value);
            dispatch (
                {
                    type: 'GET_WORDS',
                    data: value
                }
            )
        })
        .catch(err=>console.log("Fetching words has failed",err));
};

export const addWords = (word,dispatch) => {
    console.log("post",word);
    fetch('http://localhost:8080/words',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify({word})
    })
      .then(res => res.json())
      .then(value => {
          dispatch({
              type:'ADD_WORDS',
              data: value
          })
      })
      .catch(err => console.log("Adding words failed",err));
}

export const updateWords =(word,dispatch) => {
    console.log("Delete", word);
    fetch('http://localhost:8080/words',{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify({word})
    })
        .then(res => res.json())
        .then(value => {
            dispatch({
                type:'UPDATE_WORDS',
                data: value
            })
        })
        .catch(err => console.log("updating words failed", err));
};