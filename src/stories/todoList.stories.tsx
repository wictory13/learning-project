import React from "react";
import { TodoList } from "../TodoList/todoList";
import { action } from "@storybook/addon-actions";

export default { title: "List" };

export const simple = () => (
    <TodoList
        todos={[
            { id: 1, value: "lalal", isDone: true },
            { id: 2, value: "lolol", isDone: true },
            { id: 3, value: "llllll", isDone: true },
        ]}
        onCheckAllTodos={action("i check all todos")}
    />
);
