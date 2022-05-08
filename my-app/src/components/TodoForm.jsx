import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodoItem } from "../store/actions";
import TextField from "@mui/material/TextField";
import { headerStyle } from "./TodoList";
import Typography from "@mui/material/Typography";

export default function Form() {
	const [value, setValue] = useState("");

	const dispatch = useDispatch();

	function onValueChange(e) {
		setValue(e.target.value);
	}

	function onCreateItem() {
		dispatch(createTodoItem(value));
	}

	return (
		<>
			<Typography sx={headerStyle} align='center' variant='h2'>
				Create Todo
			</Typography>
			<form action='' className='form_todo'>
				<TextField label='task' value={value || ""} onChange={onValueChange} />
				<Button
					onClick={() => onCreateItem()}
					color='primary'
					variant='contained'>
					Add
				</Button>
			</form>
		</>
	);
}
