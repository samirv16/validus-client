import React, { Component } from 'react'
import WorkoutItem from '../components/WorkoutItem'
import {connect} from 'react-redux'
import {fetchWorkouts} from '../actions/index'


export class Workouts extends Component {

    componentDidMount(){
        this.props.fetchWorkouts()
    }

    render() {
        const workouts = this.props.workouts.map(( workout, i) => <WorkoutItem key={i} workout={workout} />)
        return (
            <div>
                <h2>Workout List</h2>
                <ol className="collection">
                    {workouts}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      workouts: state.workouts
    }
  }

  export default connect(mapStateToProps, {fetchWorkouts})(Workouts)