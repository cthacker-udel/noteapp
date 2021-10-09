import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const CreateNoteModal = (props: { editModal: React.Dispatch<React.SetStateAction<boolean>>}): JSX.Element => {
	const [show, setShow] = useState<boolean>(true);
	const [currText, setCurrText] = useState<string>('');

	const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrText(e.target.value);
	};

	return (
		<Modal show={ show } >
			<Form>
				<Form.Label>
					Enter the name of the new note
				</Form.Label>
				<Form.Control type="text" placeholder="enter name here" onChange={changeFunc}/>
				<Form.Text>
					Note Viewer Version 1.0.0
				</Form.Text>
			</Form>
			<Button variant="primary" onClick={ () => { setShow(false); props.editModal(false); } }>
				Save New Note
			</Button>
		</Modal>
	);
};

