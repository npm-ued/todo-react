import React,{ Component } from 'react';
import PropTypes from 'prop-types';


class Footer extends Component {
  filterAll(){
    this.props.filterList('SHOW_ALL');
  }
  filterActive(){
    this.props.filterList('SHOW_ACTIVE');
  }
  filterCompleted(){
    this.props.filterList('SHOW_COMPLETED')
  }
  render(){
    return (
      <p>
        Show:
        {'  '}
        <span onClick={e=>{this.filterAll()}}>ALL</span>
        {', '}
        <span onClick={e=>{this.filterActive()}}>Active</span>
        {', '}
        <span onClick={e=>{this.filterCompleted()}}>Completed</span>
      </p>
    );
  }
}


export default Footer;
