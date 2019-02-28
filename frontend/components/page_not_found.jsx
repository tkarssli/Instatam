import React from 'react';
import { withRouter, Route, Link, Switch } from 'react-router-dom';


class PageNotFound extends React.Component {

    render() {
        const { currentUser } = this.props;
        return (
            <>
                <section className="pnf-section">
                    <h2>Sorry, this page isn't available.</h2>
                    <p> The link you followed may be broken, or the page may have been removed. <Link to="/">Go back to Instatam</Link></p>
                </section>
            </>
        );
    }
}

export default withRouter(PageNotFound);