import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'react-bootstrap';
import { SavedNotesContext } from '../context/SavedNotesContext';

export const NotePagination = (props: { currentNoteTitle: string }): JSX.Element => {
	console.log('rendering note pagination');
	return (
		<SavedNotesContext.Consumer>
			{values =>
				<Pagination>
					{ values.map(e => <Pagination.Item key={e} active={e === props.currentNoteTitle}>{e}</Pagination.Item>) }
				</Pagination>
			}
		</SavedNotesContext.Consumer>);
};
