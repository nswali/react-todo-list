import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { removeTodo, completeTodo } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <>
        <h2>Todo List</h2>
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem key={todo.text} todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed} />)}
        </div>
    </>
)

 const mapStateToProps = state => ({
     todos: state.todos
 });

 const mapDispatchToProps = dispatch => ({
     onRemovePressed: text => dispatch(removeTodo(text)),
     onCompletedPressed: text => dispatch(completeTodo(text))
 });

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
