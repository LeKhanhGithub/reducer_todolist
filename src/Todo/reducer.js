import {SET_TODO, ADD_TODO, DELETE_TODO} from './constains' 

export const initState = {
    todo: '',
    todoList: [],
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todo: action.value,
            }
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.value]
            }
        case DELETE_TODO:
            const newState = { ...state };
            newState.todoList.splice(action.value, 1);
            return newState;
        default:
            throw new Error('invalid action');
    }
}


export default reducer