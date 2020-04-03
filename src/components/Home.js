import React from 'react'
const link = {
    color: 'pink',
}


class Home extends React.Component {
    render() {
        return (
        <div style={link} >
            <h1 style={{fontSize: 50}}>Welcome to Validus!</h1>
        </div>

        )
    }
}

export default Home