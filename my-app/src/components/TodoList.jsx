import { useDispatch, useSelector } from "react-redux";
import { changeShowForm } from "../store/actions";
import "./TodoList.css";
import Form from "./TodoForm";
import TodoListItem from "./TodoListItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function TodoList() {
	const todos = useSelector((state) => state.todos);
	const showForm = useSelector((state) => state.showForm);

	const dispatch = useDispatch();

	const onChangeShow = () => {
		dispatch(changeShowForm(showForm));
	};

	console.log(todos);
	return (
		<>
			{!showForm ? (
				<>
					<Typography sx={headerStyle} align='center' variant='h1'>
						Todos List
					</Typography>
					<ul className='list'>
						{todos.map((todo) => (
							<TodoListItem key={todo.id} item={todo} />
						))}
					</ul>
				</>
			) : (
				<Form />
			)}
			<div className='footer-btn'>
				<Button
					onClick={onChangeShow}
					color={!showForm ? "primary" : "error"}
					variant='contained'>
					{showForm ? "Hide form" : "Add"}
				</Button>
			</div>
		</>
	);
}

export const headerStyle = {
	color: "#f7d028",
	letterSpacing: ".05em",
	textShadow: "4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2)",
};
