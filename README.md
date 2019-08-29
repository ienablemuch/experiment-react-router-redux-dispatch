Followed these:

https://github.com/supasate/connected-react-router

https://daveceddia.com/redux-mapdispatchtoprops-object-form/

To avoid mapDispatchToProps boilerplate for react-redux's connect parameter, just pass the action creators to connect. In this example, we just pass the connected-react-router's push action creator to connect, and then we destructured it back in component's props parameter.

```javascript
import { push } from "connected-react-router";

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
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/qwerty">
                Qwerty
            </Link>
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

const actionCreators = {
    push
};

export default connect(
    mapStateToProps,
    actionCreators
)(App);
```
