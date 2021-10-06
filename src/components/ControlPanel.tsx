import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ButtonGroup, Badge } from 'react-bootstrap';
import { CreateNoteButton } from './CreateNoteButton';
import { DeleteNoteButton } from './DeleteNoteButton';
import { EditNoteButton } from './EditNoteButton';
import { SaveNoteButton } from './SaveNoteButton';
import { NoteViewer } from './NoteViewer';
import { useState } from 'react';
import { SavedNotesContext } from '../context/SavedNotesContext';

export const ControlPanel = (): JSX.Element => {
	const [currentNotes, setCurrentNotes] = useState<string[]>([]);
	const [currentNoteTitle, setCurrentNoteTitle] = useState<string>('untitled');
	return (
		<>
			<Row>
				<Col>
					<p>Note Viewer Version 1.0.0</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<h4 style={{ textAlign: 'center' }}>{currentNoteTitle}</h4>
				</Col>
			</Row>
			<Row>
				<Col>
					<NoteViewer />
				</Col>
			</Row>
			<Row style={{ textAlign: 'center', display: 'block' }}>
				<Col>
					<ButtonGroup className="me-2">
						<CreateNoteButton />
					</ButtonGroup>
					<ButtonGroup className="me-2">
						<DeleteNoteButton />
					</ButtonGroup>
					<ButtonGroup className="me-2">
						<EditNoteButton />
					</ButtonGroup>
					<ButtonGroup>
						<SaveNoteButton />
					</ButtonGroup>
				</Col>
			</Row>
		</>
	);
};
