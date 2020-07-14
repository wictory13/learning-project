import * as React from "react";
import * as ReactDom from "react-dom";
import {TodoApp} from "./TodoApp/todoApp";
import { createStore } from 'redux'

// const store = createStore(TodoApp);
ReactDom.render(<TodoApp/>, document.getElementById("container"));
