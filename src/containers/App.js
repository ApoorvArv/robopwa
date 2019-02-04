import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField , requestRobots} from '../actions';

const mapStateToProps = state => {
  return {
    searchField : state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
 return {
   
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots : ()  => dispatch(requestRobots())

}
}

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: [],
     
  //   }
  // }


  componentDidMount() {
    //console.log(this.props.store.getState());
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response=> response.json())
    //   .then(users => {this.setState({ robots: users})});
    this.props.onRequestRobots();
  }

  // onSearchChange = (event) => {
  //   this.setState(
  //     {
  //       searchField: event.target.value
  //     }
  //   )
  // }

  render() {
    // const { robots } = this.state;
    const {searchField,onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
            <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

//Higher Order Function returns another function
//app should connect itself to the store and listen to changes.. either in state or dispatch(matlab actions)
export default connect(mapStateToProps,mapDispatchToProps)(App);