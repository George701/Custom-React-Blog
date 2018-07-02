import React, { Component } from 'react';

class PostChart extends Component{

    componentDidMount(){
        //.. works with this.refs.chart
    }

    componentWillRecieveProps(nextProps){
        //update chart for new article
    }

    render(){
        return (
            <div ref = 'container'/>
        )
    }

    componentWillUnmount(){
        //do some cleanup
    }
}

export default PostChart;