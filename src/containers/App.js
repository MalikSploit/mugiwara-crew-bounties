import React, {useState} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import { mugiwara } from '../mugiwara';
import './App.css';

function App()
{
	const [robots] = useState(mugiwara);
	const [searchfield, setSearchfield] = useState('');

	const onSearchChange = (event) =>
	{
		setSearchfield(event.target.value);
	}

	const filterRobots = robots.filter(robot =>
	{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	return !robots.length ? <h1>Loading</h1> : (
		<div className='tc'>
			<h1 className='f2'>Mugiwara Crew</h1>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
					<CardList member={filterRobots}/>
				</ErrorBoundry>
			</Scroll>
		</div>
	)
}

export default App;