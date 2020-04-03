import React, { Component } from 'react'
import WorkoutItem from '../components/WorkoutItem'
import {connect} from 'react-redux'
import {fetchWorkouts} from '../actions/index'
import Card from 'react-bootstrap/Card'


export class Workouts extends Component {

    componentDidMount(){
        this.props.fetchWorkouts()
    }

    render() {
        const workouts = this.props.workouts.map(( workout, i) => <WorkoutItem key={i} workout={workout} />)
        return (
            <Card className="text-center" style={{ opacity: 0.5 }}>
                <Card.Header><h1>Workout List</h1></Card.Header>
                <Card.Body style={{fontSize: 15}}>{workouts}</Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
      workouts: state.workouts
    }
  }

  export default connect(mapStateToProps, {fetchWorkouts})(Workouts)