import React from 'react';
import './Image.css';

const Image = (props) => {
	const { url } = props;
	return (
		<li className="list-item">
			<img src={url} className="image-item" alt="sample" />
		</li>
	);
};

export default Image;
