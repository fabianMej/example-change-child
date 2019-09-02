import React from 'react';

export default class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    componentDidUpdate(prevProps, prevState, next) {
        if (prevProps.show !== this.props.show) {
            this.setState({ show: this.props.show })
        }
    }

    showAlert = () => {
        alert('child')
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}