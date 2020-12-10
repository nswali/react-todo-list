import { COMPLETE_TODO, CREATE_TODO, REMOVE_TODO } from './actions';

function updateItem(index, items, updateFn) {
    
    if (index !== -1) {
        const item = items[index];
        updateFn(item);
        
        if (index === 0) {
            return items.length === 1 ? [item] : [item, ...items.slice(1, items.length)];
        } else {
            return [...items.slice(0, index), item, ...items.slice(index + 1, items.length)];
        }                
    }

    return items;
}

export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            };
            return state.concat(newTodo);
        }

        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }

        case COMPLETE_TODO: {
            const { text } = payload;
            const index = state.findIndex(todo => todo.text === text);
            return updateItem(index, state, todo => todo.isCompleted = true)
        }

        default: {
            return state;
        }
    }
};