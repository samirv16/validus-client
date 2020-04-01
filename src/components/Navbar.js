import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

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
        <nav className="indigo darken-3">
            <div>
                <NavLink to="/" className="brand-logo" exact style={link} activeStyle={{ background: 'pink' }}>Home</NavLink>
                    <ul className="right">
                        <NavLink to="/workouts" exact style={link} activeStyle={{background: 'pink'}}>Workouts</NavLink>
                        <NavLink to="/workouts/new" exact style={link} activeStyle={{ background: 'pink' }}>New Workout</NavLink>
                        <NavLink to="/about" exact style={link} activeStyle={{ background: 'pink' }}>About</NavLink>
                    </ul>
            </div>
        </nav>
        )
    }
}

export default Navbar