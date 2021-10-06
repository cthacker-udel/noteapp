import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { SavedNotesContext } from '../context/SavedNotesContext';

export const NoteTab = (): JSX.Element => {
	const [tmpVal, setTmpVal] = useState<number>(0);
	return (
		<>
			<Pagination>
				<></>
			</Pagination>
		</>
	);
};

