import React from 'react';
import { BrowserRouter, Route, Link, Switch, HashRouter } from 'react-router-dom'
import PostIndexContainer from '../post/post_index_container'
import { timingSafeEqual } from 'crypto';
import { connect } from 'react-redux';

import PostModal from '../modal/post_modal'
import SettingsModal from '../modal/settings_modal'



class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {pages: 1}
  }

  componentDidMount() {
    if(document.querySelector('#root').clientHeight - scrollY <= innerHeight && this.state.pages * 9 < this.props.numPosts ){
      this.setState({pages: this.state.pages + 1})
    }
  }
  
  
  getPostIndexes() {
    const postIndexes = []
    for(let i=0; i < this.state.pages; i++){
      postIndexes.push( <PostIndexContainer pages={i+1}/> )
    }
    return postIndexes;
  }
  render() {
    document.addEventListener('scroll',  () => {
      if(document.querySelector('#root').clientHeight - scrollY <= innerHeight && this.state.pages * 9 < this.props.numPosts ){
        this.setState({pages: this.state.pages + 1})
      }
    })
    return (
      <>
        {this.getPostIndexes()}
        <PostModal />
        <SettingsModal /> 
      </>
    )
  }
}

const mSP = state => ({
  numPosts: Object.keys(state.entities.posts).length
})

export default connect(mSP, null)(Feed);