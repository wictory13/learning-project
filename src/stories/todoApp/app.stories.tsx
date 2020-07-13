import React from 'react';
import cn from "../../index.less";
import {TodoHeader} from "../../TodoHeader/todoHeader";
import {TodoInput} from "../../TodoInput/todoInput";
import {TodoListStates} from "../../TodoListStates/todoListStates";
import {action} from "@storybook/addon-actions";

export default {title: 'TodoApp'};

export const simple = () => (<div className={cn.app}>
    <TodoHeader/>
    <div className={cn.input}>
        <TodoInput onAddTodo={action('added')}/>
        <TodoListStates onDeleteDoneTodos={action('i delete all todos')} onCheckAllTodos={action('i check all todos')}
                        todos={[{id: 1, value: 'lalal', isDone: false}, {id: 2, value: 'lolol', isDone: true}, {
                            id: 3,
                            value: 'llllll',
                            isDone: false
                        }]} onDeleteTodo={action('deleted')}
                        onCheckTodo={action('checked')}
                        onEditTodo={action('i can edit')}/>
    </div>
</div>);

