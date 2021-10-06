import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export const NoteViewer = (): JSX.Element => (
	<Form>
		<Form.Group className="mb-3" controlId="noteviewerform">
			<Form.Label>Note Viewer Version 1.0.0</Form.Label>
			<Form.Control as="textarea" placeholder="Enter text here" rows={3}/>
			<Form.Text style={{ textAlign: 'center', display: 'block' }}>The buttons to create, edit, and delete notes are below</Form.Text>
		</Form.Group>
	</Form>
);
