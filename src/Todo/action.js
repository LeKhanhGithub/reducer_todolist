import {SET_TODO, ADD_TODO, DELETE_TODO} from './constains' 

export const setTodo = value => {
    return {
        type: SET_TODO,
        value
    }
}

export const addTodo = value => {
    return {
        type: ADD_TODO,
        value,
    }
}

export const deleteTodo = value => {
    return {
        type: DELETE_TODO,
        value,
    }
}