import * as React from "react";
import cn from "./todoApp.less";
import { TodoHeader } from "../TodoHeader/todoHeader";
import { TodoInputContainer } from "../TodoInput/todoInput";
import { TodoListStatusesContainer } from "../TodoListStatuses/todoListStatuses";

export class App extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <div className={cn.app}>
                <TodoHeader />
                <div className={cn.form}>
                    <TodoInputContainer />
                    <TodoListStatusesContainer />
                </div>
            </div>
        );
    }
}
