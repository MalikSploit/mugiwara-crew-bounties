import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll.js';
import { robots } from '../robots';

class App extends Component 
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) =>
	{
		this.setState({ searchfield: event.target.value });
	}

	render()
	{
		const { robots, searchfield } = this.state;
		const filterRobots = this.state.robots.filter(robot =>
		{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return !robots.length ?
		<h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f2'>Mugiwara Crew</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList member={filterRobots}/>
				</Scroll>
			</div>
		)
	}
}

export default App;