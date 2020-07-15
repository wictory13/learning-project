import * as React from "react";
import * as ReactDom from "react-dom";
import {todoApp} from "./Domain/todoAppReducer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {App} from "./TodoApp/todoApp";

const store = createStore(todoApp);
ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById("container"));
