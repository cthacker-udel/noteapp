import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, ButtonGroup } from 'react-bootstrap';
import { CreateNoteButton } from './CreateNoteButton';
import { DeleteNoteButton } from './DeleteNoteButton';
import { EditNoteButton } from './EditNoteButton';
import { NoteViewer } from './NoteViewer';

export const ControlPanel = (): JSX.Element =>
	<>
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
			</Col>
		</Row>
	</>;
