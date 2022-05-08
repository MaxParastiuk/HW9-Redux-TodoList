import { useDispatch } from "react-redux";
import { deleteTodoItem, toogleIsDone } from "../store/actions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PhoneListItem(props) {
	const { item } = props;
	const { title, isDone, id } = item;

	const dispatch = useDispatch();

	function onItemClick(todo) {
		dispatch(toogleIsDone(todo));
	}

	function onDeleteItem(id) {
		dispatch(deleteTodoItem(id));
	}

	return (
		<li
			className='list__item'
			style={{ backgroundColor: getStyle(isDone) }}
			onClick={() => onItemClick(item)}>
			<div className='list__item__col'>{title}</div>
			<div className='col'>
				<Button
					onClick={() => onDeleteItem(id)}
					color='error'
					variant='contained'
					endIcon={<DeleteIcon />}>
					Delete
				</Button>
			</div>
		</li>
	);
}

function getStyle(completed) {
	return completed ? "#198754" : "#ffc107";
}
