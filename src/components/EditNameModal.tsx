import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const EditNameModal = (props: { editName: React.Dispatch<React.SetStateAction<string>>}): JSX.Element => {
	const [show, setShow] = useState<boolean>(true);
	const [currText, setCurrText] = useState<string>('');

	const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrText(e.target.value);
	};

	useEffect(() => {
		props.editName(currText);
	}, [currText]);

	return (
		<Modal show={ show } >
			<Form>
				<Form.Label>
					Enter the new name of the note
				</Form.Label>
				<Form.Control type="text" placeholder="enter name here" onChange={changeFunc}/>
				<Form.Text>
					Note Viewer Version 1.0.0
				</Form.Text>
			</Form>
			<Button variant="primary" onClick={() => setShow(false)}>
				Save Name Change
			</Button>
		</Modal>
	);
};

