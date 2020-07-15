import React from "react";
import { TodoInput } from "../TodoInput/todoInput";
import { action } from "@storybook/addon-actions";

export default { title: "Input" };

export const simple = () => <TodoInput onAddTodo={action("todo added")} />;
