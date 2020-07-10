import React from 'react';
import {TodoList} from "../TodoList/todoList";
import { action } from '@storybook/addon-actions';

export default {title: 'List'};

export const simple = () => <TodoList onCheckTodo={action('checked')} onDeleteTodo={action('button-click')} onEditTodo={() => {
}} todos={[{id: 1, value: 'lalal', isDone: false}, {id: 2, value: 'lolol', isDone: true}, {id: 3, value: 'llllll', isDone: false}]}/>;