import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import { SavedNotesContext } from '../context/SavedNotesContext';

export const NotePagination = (props: { currentNoteTitle: string }): JSX.Element => {
	const names: string[] = useContext(SavedNotesContext);
	console.log(`names = ${names}`);
	useEffect(() => {
		console.log('names ', names);
	}, [names]);
	return (
		<SavedNotesContext.Consumer>
			{value =>
				<Pagination>
					{ value.map((e, i) => <Pagination.Item key={i} active={e === props.currentNoteTitle}>{e}</Pagination.Item>) }
				</Pagination>
			}
		</SavedNotesContext.Consumer>);
};
