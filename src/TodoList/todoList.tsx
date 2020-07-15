import * as React from "react";
import { TodoContainer } from "../Todo/todo";
import cn from "./todoList.less";
import { TodoItem } from "../Domain/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface TodoListProps {
    todos: TodoItem[];
    onCheckAllTodos: () => void;
}

export class TodoList extends React.Component<TodoListProps> {
    render(): JSX.Element {
        return (
            <div className={cn.todoList}>
                <input
                    type="checkbox"
                    onChange={this.props.onCheckAllTodos}
                    checked={
                        this.props.todos.filter((todo) => todo.isDone).length === this.props.todos.length &&
                        this.props.todos.length > 0
                    }
                    className={cn.commonCheckbox}
                />
                {this.props.todos.map((todo) => (
                    <TodoContainer todo={todo} key={todo.id} />
                ))}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onCheckAllTodos: () =>
            dispatch({
                type: "CHECK_ALL_TODOS",
            }),
    };
};

export const TodoListContainer = connect(undefined, mapDispatchToProps)(TodoList);
