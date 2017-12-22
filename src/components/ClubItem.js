import React from 'react';

export default function ClubItem(props) {
	return <li className="club-item">{props.data.item} - {props.data.name}</li>
}