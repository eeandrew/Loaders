import React from 'react';
import './loaders.min.css';

export default class Loaders extends React.Component {
	constructor(props) {
		super(props);
	}

	getPlaceholderDiv(divCount) {
		if(divCount<=0) return null;
		const children = [];
		const childStyle = {
			backgroundColor : this.props.color
		}
		for(let i=0;i<divCount;i++) {
			children.push(<div style={childStyle}/>)
		}
		return children;
	}

	render() {
		return (
			<div className="loader"> 
				<div className="loader-inner ball-pulse">
         {this.getPlaceholderDiv(3)}
        </div>
			</div>
		);
	}
}

Loaders.propTypes = {
	color:React.PropTypes.string
}

Loaders.defaultProps = {
	color:'#FFF'
}
