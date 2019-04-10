import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class LoadingModal
 extends React.Component {

    render () {
        const { loading } = this.props
        return (
            loading ? (
                <div id="loading-modal" className="loading-modal-background">
                    <div className="loading-modal-child">
                        <div className="loader"> 
                            <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>               
                    </div>
                </div>
            ) : ("")
        );
    }
  
}

const mapStateToProps = state => {
  return {
    // loading: state.ui.modal.loading,
  };
};


export default withRouter(connect(mapStateToProps, null)(LoadingModal));