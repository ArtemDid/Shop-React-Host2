import React from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

import Shop from './Shop'
import store from '../store/store';
import Cart from './Cart';

function AppRoot() {
    return (
        <Provider store={store}>
            <div className="container-fluid">
                <BrowserRouter>
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <Switch>
                                <Route exact path="/" component={Shop} />
                                <Route path="/cart" component={Cart} />
                                <Route component={Cart} />
                            </Switch>
                        </div>
                        <div className="col-2">
                            <nav>
                                <NavLink to="/" className="btn btn-primary" activeClassName="active">Home</NavLink>
                                <NavLink to="/cart" className="btn btn-primary" activeClassName="active">Cart</NavLink>
                            </nav>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default AppRoot;