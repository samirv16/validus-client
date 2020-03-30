import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    backgroud: 'white',
    textDecoration: 'none',
    color: 'black',
}

class Navbar extends React.Component {
    render() {
        return(
        <div>
            <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
                background: 'pink'
            }}
            >Home</NavLink>
            <NavLink
            to="/workouts"
            exact
            style={link}
            activeStyle={{
                background: 'pink'
            }}
            >Workouts</NavLink>
            <NavLink
            to="/workouts/new"
            exact
            style={link}
            activeStyle={{
                background: 'pink'
            }}
            >New Workout</NavLink>
            <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
                background: 'pink'
            }}
            >About</NavLink>
        </div>
        )
    }
}

export default Navbar