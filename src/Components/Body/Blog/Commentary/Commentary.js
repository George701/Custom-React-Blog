import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Commentary extends Component {

    // Dynamic check of types
    static propTypes = {
        commentary: PropTypes.shape({
            id:         PropTypes.string,
            name:       PropTypes.string,
            message:    PropTypes.string
        }).isRequired
    };

    render() {
        const {data} = this.props;
        return (
            <div className="Commentary" key={data.id}>
                    <h5>{data.name}</h5>
                    <span>ID: {data.id}</span>
                    <hr/>
                    <p>{data.message}</p>
            </div>
        );
    }
}

Commentary.propTypes = {

  data: PropTypes.shape({
      name:     PropTypes.string,
      id:       PropTypes.string,
      message:  PropTypes.string

  }).isRequired
    
};

export default Commentary;