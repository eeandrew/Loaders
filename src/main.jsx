import ReactDom from 'react-dom';
import React from 'react';
import Loaders from './Loaders.jsx';
import './main.css';

document.body.style.background = "#ed5565";

const MyLoaders = (props)=>{
	return (
			<div className='main-content'>
				<Loaders  loadingStyle="ball-pulse"/>
				<Loaders  loadingStyle="ball-grid-pulse"/>
				<Loaders  loadingStyle="ball-clip-rotate"/>
				<Loaders  loadingStyle="ball-clip-rotate-pulse"/>
				<Loaders  loadingStyle="square-spin"/>
				<Loaders  loadingStyle="ball-clip-rotate-multiple"/>
				<Loaders  loadingStyle="ball-rotate"/>
				<Loaders  loadingStyle="cube-transition"/>
				<Loaders  loadingStyle="ball-zig-zag"/>
				<Loaders  loadingStyle="ball-zig-zag-deflect"/>
				<Loaders  loadingStyle="ball-triangle-path"/>
				<Loaders  loadingStyle="ball-scale"/>
				<Loaders  loadingStyle="line-scale"/>
				<Loaders  loadingStyle="line-scale-party"/>
				<Loaders  loadingStyle="ball-scale-multiple"/>
				<Loaders  loadingStyle="ball-pulse-sync"/>            
				<Loaders  loadingStyle="ball-beat"/>
				<Loaders  loadingStyle="line-scale-pulse-out"/>
				<Loaders  loadingStyle="line-scale-pulse-out-rapid"/>
				<Loaders  loadingStyle="ball-scale-ripple"/>
				<Loaders  loadingStyle="ball-scale-ripple-multiple"/>
				<Loaders  loadingStyle="ball-spin-fade-loader"/>
				<Loaders  loadingStyle="ball-spin-fade-loader"/>
				<Loaders  loadingStyle="line-spin-fade-loader"/>
				<Loaders  loadingStyle="line-spin-fade-loader"/>
				<Loaders  loadingStyle="triangle-skew-spin"/>
				<Loaders  loadingStyle="pacman"/>
				<Loaders  loadingStyle="semi-circle-spin"/>
				<Loaders  loadingStyle="ball-grid-beat"/>
				<Loaders  loadingStyle="ball-scale-random"/>
			</div>
	);
}

ReactDom.render(<MyLoaders/>,document.getElementById('app'))