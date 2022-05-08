export const ACTION_TOGGLE_TODO_IS_DONE = "ACTION_TOGGLE_TODO_IS_DONE";
export const ACTION_SHOW_FORM = "ACTION_SHOW_FORM";
export const ACTION_DELETE_TODO_ITEM = "ACTION_DELETE_TODO_ITEM";
export const ACTION_CREATE_TODO_ITEM = "ACTION_CREATE_TODO_ITEM";

export const toogleIsDone = (payload) => ({
	type: ACTION_TOGGLE_TODO_IS_DONE,
	payload,
});

export const changeShowForm = (payload) => ({
	type: ACTION_SHOW_FORM,
	payload,
});

export const deleteTodoItem = (payload) => ({
	type: ACTION_DELETE_TODO_ITEM,
	payload,
});

export const createTodoItem = (payload) => ({
	type: ACTION_CREATE_TODO_ITEM,
	payload,
});
