export const initialState = [
    {
        item: 'Sleep',
        completed: false,
        id: Date.now()
      }
]


export const ReducerList = (state, action) => {
  
        case 'CLEAR_COMPLETED': {
            let newState = [...state];
            let filtered = newState.filter(todo => {
                return todo.completed === true
            })
            return filtered;
        }
        default: {
            return state;
        }
    }
} 