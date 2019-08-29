import React from "react";
import "./App.css";

import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { push } from "connected-react-router";

const actionCreators = {
    push
};

function App({ pathname, search, hash, push }) {
    function goAbout() {
        push("/about");
    }

    return (
        <div className="App">
            <table>
                <tbody>
                    <tr>
                        <td>Pathname</td>
                        <td>{pathname}</td>
                    </tr>
                    <tr>
                        <td>Search</td>
                        <td>{search}</td>
                    </tr>
                    <tr>
                        <td>Hash</td>
                        <td>{hash}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
            <Link to="/qwerty">Qwerty</Link>
            <br />
            <button onClick={goAbout}>Go to About</button>
            <Switch>
                <Route exact path="/" render={() => <div>Home</div>} />
                <Route exact path="/about" render={() => <div>About</div>} />
                <Route render={() => <div>Miss</div>} />
            </Switch>
        </div>
    );
}

const mapStateToProps = state => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash
});

export default connect(
    mapStateToProps,
    actionCreators
)(App);
