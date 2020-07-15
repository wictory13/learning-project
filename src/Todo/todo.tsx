import * as React from "react";
import {TodoContentContainer} from "../TodoContent/todoContent";
import cn from "./todo.less";
import {TodoItem} from "../Domain/types";
import {Dispatch} from "redux";
import {connect} from "react-redux";

interface TodoProps {
    todo: TodoItem,
    onCheckTodo: (id: number) => void,
}

class Todo extends React.Component<TodoProps, {}> {
    render() {
        return (
            <div className={cn.todo}>
                <span className={cn.todoField}>
                    <input type="checkbox" onChange={() => this.props.onCheckTodo(this.props.todo.id)} checked={this.props.todo.isDone}
                           className={cn.checkBox}/>
                    <TodoContentContainer
                        isChecked={this.props.todo.isDone}
                        id={this.props.todo.id}
                        value={this.props.todo.value}
                    />
                </span>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onCheckTodo: (id: number) => dispatch({
            type: 'CHECK_TODO',
            payload: {
                id: id
            }
        }),

    };
}

export const TodoContainer = connect(undefined, mapDispatchToProps)(Todo);