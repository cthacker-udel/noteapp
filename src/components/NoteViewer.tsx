import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { CurrentNoteText } from '../context/CurrentNoteTextContext';
import React, { useState } from 'react';

export const NoteViewer = (): JSX.Element => {
	const [currText, setCurrText] = useState<string>('');
	return (
		<CurrentNoteText.Provider value={currText}>
			<Form>
				<Form.Group className="mb-3" controlId="noteviewerform">
					<Form.Control as="textarea" placeholder="Enter text here" rows={3} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrText(e.target.value)}/>
					<Form.Text style={{ textAlign: 'center', display: 'block' }}>The buttons to create, edit, and delete notes are below</Form.Text>
				</Form.Group>
			</Form>
		</CurrentNoteText.Provider>
	);
};
