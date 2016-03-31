import ReactDom from 'react-dom';
import React from 'react';
import Loaders from './Loaders.jsx';
import './main.css';

document.body.style.background = "#ed5565";

const MyLoaders = (props)=>{
	return (
			<div className='main-content'>
				<Loaders color="#FFF"  loadingStyle="ball-pulse"/>
				<Loaders color="#FFF"  loadingStyle="ball-grid-pulse"/>
				<Loaders color="#FFF"  loadingStyle="ball-clip-rotate"/>
				<Loaders color="#FFF"  loadingStyle="ball-clip-rotate-pulse"/>
				<Loaders color="#FFF"  loadingStyle="square-spin"/>
				<Loaders color="#FFF"  loadingStyle="ball-clip-rotate-multiple"/>
				<Loaders color="#FFF"  loadingStyle="ball-rotate"/>
				<Loaders color="#FFF"  loadingStyle="cube-transition"/>
				<Loaders color="#FFF"  loadingStyle="ball-zig-zag"/>
				<Loaders color="#FFF"  loadingStyle="ball-zig-zag-deflect"/>
				<Loaders color="#FFF"  loadingStyle="ball-triangle-path"/>
				<Loaders color="#FFF"  loadingStyle="ball-scale"/>
				<Loaders color="#FFF"  loadingStyle="line-scale"/>
				<Loaders color="#FFF"  loadingStyle="line-scale-party"/>
				<Loaders color="#FFF"  loadingStyle="ball-scale-multiple"/>
				<Loaders color="#FFF"  loadingStyle="ball-pulse-sync"/>
				<Loaders color="#FFF"  loadingStyle="ball-beat"/>
				<Loaders color="#FFF"  loadingStyle="line-scale-pulse-out"/>
				<Loaders color="#FFF"  loadingStyle="line-scale-pulse-out-rapid"/>
				<Loaders color="#FFF"  loadingStyle="ball-scale-ripple"/>
				<Loaders color="#FFF"  loadingStyle="ball-scale-ripple-multiple"/>
				<Loaders color="#FFF"  loadingStyle="ball-spin-fade-loader"/>
				<Loaders color="#FFF"  loadingStyle="ball-spin-fade-loader"/>
				<Loaders color="#FFF"  loadingStyle="line-spin-fade-loader"/>
				<Loaders color="#FFF"  loadingStyle="line-spin-fade-loader"/>
				<Loaders color="#FFF"  loadingStyle="triangle-skew-spin"/>
				<Loaders color="#FFF"  loadingStyle="pacman"/>
				<Loaders color="#FFF"  loadingStyle="semi-circle-spin"/>
				<Loaders color="#FFF"  loadingStyle="ball-grid-beat"/>
				<Loaders color="#FFF"  loadingStyle="ball-scale-random"/>
			</div>
	);
}

ReactDom.render(<MyLoaders/>,document.getElementById('app'))