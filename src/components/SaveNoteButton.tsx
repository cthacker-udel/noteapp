import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { savenoteevent } from '../util/savenoteevent';

export const SaveNoteButton = (props: { fileName: string, fileContent: string }): JSX.Element =>
	<Button variant="primary" onClick={ () => { savenoteevent(props.fileName, props.fileContent); }}>Save Note</Button>;
