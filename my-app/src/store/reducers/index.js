import {
	ACTION_CREATE_TODO_ITEM,
	ACTION_DELETE_TODO_ITEM,
	ACTION_SHOW_FORM,
	ACTION_TOGGLE_TODO_IS_DONE,
} from "../actions";

const INITIAL_STATE = {
	todos: [
		{ id: 1, title: "buy milk", isDone: true },
		{ id: 2, title: "walk to park", isDone: false },
		{ id: 3, title: "buy car", isDone: false },
	],
	showForm: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case ACTION_TOGGLE_TODO_IS_DONE:
			const newTodos = state.todos.map((todo) =>
				todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo
			);
			return { todos: newTodos };
		case ACTION_SHOW_FORM:
			const formIsShow = !payload;
			return { ...state, showForm: formIsShow };
		case ACTION_DELETE_TODO_ITEM:
			const filteredTodos = state.todos.filter((todo) => todo.id !== payload);
			return { todos: filteredTodos };
		case ACTION_CREATE_TODO_ITEM:
			const newItem = {
				id: state.todos.length + 1,
				title: payload,
				isDone: false,
			};
			const addTodos = [...state.todos, newItem];
			return { todos: addTodos };
		default:
			return state;
	}
}
