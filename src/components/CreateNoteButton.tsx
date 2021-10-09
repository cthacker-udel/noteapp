import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'react-bootstrap';

export const CreateNoteButton = (props: { clickFunc: React.Dispatch<React.SetStateAction<boolean>>, value: boolean }): JSX.Element =>
	<Button variant="primary" onClick={ () => { props.clickFunc(!props.value); }}>Create Note</Button>;
