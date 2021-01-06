//state


const initialstate={
    todos:[],
    id:0
    }
    
    //reducer
    function rootreducer(state=initialstate,action)
    {
        switch(action.type)
        {
            case 'ADD_TODO':
            var newstate={...state}
            newstate.id++
            console.log(newstate)
            return {
            ...newstate,todos:[...newstate.todos,{task:action.task,id:newstate.id}]
            }
            break;
            case 'REMOVE_TODO':
            let todos=state.todos.filter((val)=>{val.id!==+action.id})
            return {...state,todos}
          
       break;
            default:
                return state;
        }
       
        
    }
    //store
    // eslint-disable-next-line no-undef
    const store=Redux.createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
    
    