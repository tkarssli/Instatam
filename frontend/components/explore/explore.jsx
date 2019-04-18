import React from 'react';
import { BrowserRouter, Route, Link, Switch, HashRouter } from 'react-router-dom'
import PostIndexContainer from '../post/post_index_container'
import { timingSafeEqual } from 'crypto';
import { connect } from 'react-redux';

import PostModal from '../modal/post_modal';
import SettingsModal from '../modal/settings_modal';
import Feed from '../feed/feed';
import ExplorePostIndexContainer from '../post/explore_post_index_container'



class Explore extends React.Component {
  constructor(props) {
    super(props)
    this.state = {pages: 1}
  }
  
  render() {

    return (
      <>
        <h2 className="title-break">Explore</h2>
        {this.props.numFollows ? (
          <Feed component={ExplorePostIndexContainer} />
        ):(null)}
        <PostModal />
        <SettingsModal /> 
      </>
    )
  }
}

const mSP = state => ({
  numPosts: Object.keys(state.entities.posts).length,
  numFollows: state.entities.users[state.session.id].followIds.length
})

export default connect(mSP, null)(Explore);