import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import React from 'react';

export const EditNameButton = (props: { clickFunc: React.Dispatch<React.SetStateAction<boolean>>, currValue: boolean}): JSX.Element =>
	<Button variant="primary" onClick={() => { console.log(`current value : ${props.currValue}`); props.clickFunc(!props.currValue); }}>Edit Name</Button>;
