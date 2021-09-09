import React from 'react'


export default class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    render() {
        return (
            <div className='cell' onClick={() => {this.setState({ color: '#333'})}} style={{backgroundColor: this.state.color}}>

            </div>
        )
    }
}