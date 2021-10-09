import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ButtonGroup } from 'react-bootstrap';
import { CreateNoteButton } from './CreateNoteButton';
import { DeleteNoteButton } from './DeleteNoteButton';
import { EditNameButton } from './EditNameButton';
import { SaveNoteButton } from './SaveNoteButton';
import { NoteViewer } from './NoteViewer';
import { useState, useEffect } from 'react';
import { EditNameModal } from './EditNameModal';
import { NoteTab } from './NoteTab';
import { NotePagination } from './NotePagination';
import { SavedNotesContext } from '../context/SavedNotesContext';

export const ControlPanel = (): JSX.Element => {
	const [currentNoteTitle, setCurrentNoteTitle] = useState<string>('untitled');
	const [currentNoteText, setCurrentNoteText] = useState<string>('');
	const [showModal, setShowModal] = useState<boolean>(false);
	const [noteNames, setNoteNames] = useState<string[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	const appendName = () => {
		const tmpNoteNames = [...noteNames];
		tmpNoteNames[currentIndex] = currentNoteTitle;
		setNoteNames(tmpNoteNames);
	};

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
			<SavedNotesContext.Provider value = {noteNames}>
			</SavedNotesContext.Provider>
			<Row>
				<Col>
					<p>Note Viewer Version 1.0.0</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<NotePagination currentNoteTitle={currentNoteTitle} />
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
					<NoteViewer onChange={ setCurrentNoteText } />
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
						<SaveNoteButton fileName={currentNoteTitle} fileContent={currentNoteText} />
					</ButtonGroup>
				</Col>
			</Row>
			<Row>
				<Col>
					{showModal && <EditNameModal editName={setCurrentNoteTitle} editModal={setShowModal} addNoteName={appendName} />}
				</Col>
			</Row>
		</>
	);
};
