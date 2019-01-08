import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry' ;
import './App.css';
import { setSearchField, requestRobots } from '../actions';

const mapStateToPrpos = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
		}
}

class App extends Component {
	componentDidMount() {
			this.props.onRequestRobots()
	}


	
	// onSearchChange = (event) => {
	// 	this.setState({searchfield: event.target.value});

	// }


	render() {
	
		const { searchField, onSearchChange , robots , isPending, error} =this.props;
		const filterRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		return  isPending ?
			<h1>Loading</h1> :
			 (
				<div className='tc'>
					<h1 className =  'f1 ' >RobotFriends</h1>	
					<SearchBox  searchChange={onSearchChange} />
			 		<div className = 'bb bw2 custBorder '>
     				</div>
     				<Scroll>
     					<ErrorBoundry>
     					<CardList robots={filterRobots}/>
     					</ErrorBoundry>
     				</Scroll>
     			</div>
			);
			
		}
	
}

export default connect(mapStateToPrpos, mapDispatchToProps)(App);