import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'react-bootstrap';
import { useState } from 'react';
import { SavedNotesContext } from '../context/SavedNotesContext';

export const NotePagination = (props: { currentNoteTitle: string }): JSX.Element => {
	const [tmpVal, setTmpVal] = useState<number>(0);
	const [names, setNames] = useState<string[]>([]);
	const [items, setItems] = useState<JSX.Element[]>([]);

	return (
		<SavedNotesContext.Consumer>
			{values =>
				<Pagination>
					{values.map(e => <Pagination.Item key={e} active={e === props.currentNoteTitle }>{ e }</Pagination.Item>)}
				</Pagination>
			}
		</SavedNotesContext.Consumer>
	);
};
