import * as React from "react";
import { TodoListContainer } from "../TodoList/todoList";
import cn from "./todoListStatuses.less";
import { TodoAppState, TodoItem } from "../Domain/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface TodoListStatesProps {
    todos: TodoItem[];
    onDeleteDoneTodos: () => void;
}

interface TodoListStatesState {
    selected: string;
}

class TodoListStatuses extends React.Component<TodoListStatesProps, TodoListStatesState> {
    constructor(props: TodoListStatesProps) {
        super(props);
        this.state = {
            selected: "all",
        };
    }

    chooseState = () => {
        if (this.state.selected === "all") {
            return this.props.todos;
        } else if (this.state.selected === "active") {
            return this.props.todos.filter((todo) => !todo.isDone);
        } else {
            return this.props.todos.filter((todo) => todo.isDone);
        }
    };

    render(): JSX.Element {
        const selectedTodos = this.chooseState();
        const todosNumber = this.props.todos.filter((todo) => !todo.isDone).length;
        const mainDivStyle = cn({
            todoListState: true,
            noTodos: this.props.todos.length === 0,
        });
        const clearButtonStyle = cn({
            clearButton: true,
            noClearButton: this.props.todos.filter((todo) => todo.isDone).length === 0,
        });

        return (
            <div className={mainDivStyle}>
                <TodoListContainer todos={selectedTodos} />
                <div className={cn.states}>
                    <span>
                        {todosNumber} {todosNumber === 1 ? "item" : "items"} left
                    </span>
                    <span className={cn.statesRemote}>
                        <label>
                            <input
                                type="radio"
                                value="all"
                                className={cn.stateButton}
                                checked={this.state.selected === "all"}
                                onChange={(e) => this.setState({ selected: e.target.value })}
                            />
                            <span>All</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="active"
                                className={cn.stateButton}
                                checked={this.state.selected === "active"}
                                onChange={(e) => this.setState({ selected: e.target.value })}
                            />
                            <span>Active</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="completed"
                                className={cn.stateButton}
                                checked={this.state.selected === "completed"}
                                onChange={(e) => this.setState({ selected: e.target.value })}
                            />
                            <span>Completed</span>
                        </label>
                    </span>
                    <button className={clearButtonStyle} onClick={this.props.onDeleteDoneTodos}>
                        Clear completed
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: TodoAppState) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onDeleteDoneTodos: () =>
            dispatch({
                type: "DELETE_DONE_TODOS",
            }),
    };
};

export const TodoListStatusesContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListStatuses);
