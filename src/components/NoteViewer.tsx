import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import React from 'react';

export const NoteViewer = (props: { onChange: React.Dispatch<React.SetStateAction<string>> }): JSX.Element => {
	const [tmpValue] = [0];
	return (
		<Form>
			<Form.Group className="mb-3" controlId="noteviewerform">
				<Form.Control as="textarea" placeholder="Enter text here" rows={3} onChange={(e) => {
					const htmlElement = e.target as HTMLInputElement;
					props.onChange(htmlElement.value);
				}}/>
				<Form.Text style={{ textAlign: 'center', display: 'block' }}>The buttons to create, edit, and delete notes are below</Form.Text>
			</Form.Group>
		</Form>);
};

