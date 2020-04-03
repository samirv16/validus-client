import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    backgroud: 'white',
    textDecoration: 'none',
    color: 'black',
}

export class Navbar extends Component {
    render() {
        return(
        <Nav variant="tabs" className="justify-content-center" style={{fontSize: 12}}>
                <NavLink to="/" exact style={link} activeStyle={{ background: 'pink' }}>Home</NavLink>
                <NavLink to="/workouts" exact style={link} activeStyle={{background: 'pink'}}>Workouts</NavLink>
                <NavLink to="/workouts/new" exact style={link} activeStyle={{ background: 'pink' }}>New Workout</NavLink>
                <NavLink to="/about" exact style={link} activeStyle={{ background: 'pink' }}>About</NavLink>
        </Nav>
        )
    }
}

export default Navbar