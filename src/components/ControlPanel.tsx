import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ButtonGroup, Badge } from 'react-bootstrap';
import { CreateNoteButton } from './CreateNoteButton';
import { DeleteNoteButton } from './DeleteNoteButton';
import { EditNameButton } from './EditNameButton';
import { SaveNoteButton } from './SaveNoteButton';
import { NoteViewer } from './NoteViewer';
import { useState, useEffect } from 'react';
import { SavedNotesContext } from '../context/SavedNotesContext';
import { EditNameModal } from './EditNameModal';
import { NoteTab } from './NoteTab';

export const ControlPanel = (): JSX.Element => {
	const [currentNotes, setCurrentNotes] = useState<string[]>([]);
	const [currentNoteTitle, setCurrentNoteTitle] = useState<string>('untitled');
	const [showModal, setShowModal] = useState<boolean>(false);

	useEffect(() => {
		if (currentNoteTitle !== 'untitled') {
			console.log(`name changed`);
		}
	}, [currentNoteTitle]);

	useEffect(() => {
		console.log(`curr val : ${showModal}`);
	}, [showModal]);

	return (
		<>
			<Row>
				<Col>
					<p>Note Viewer Version 1.0.0</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<NoteTab />
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
						<EditNameButton clickFunc={setShowModal} currValue={showModal} />
					</ButtonGroup>
					<ButtonGroup>
						<SaveNoteButton />
					</ButtonGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					{showModal && <EditNameModal editName={setCurrentNoteTitle} editModal={setShowModal} />}
				</Col>
			</Row>
		</>
	);
};
