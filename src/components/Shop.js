import React from 'react';
import { connect } from 'react-redux'

import { CreateActionSetBuyProd, CreateActionSetSumma } from '../actions/actions'
import store from '../store/store';

class Shop extends React.Component {

    getProd(prod) {

        this.props.dispatch(CreateActionSetBuyProd(prod));
        this.props.dispatch(CreateActionSetSumma(store.getState().cost[store.getState().type.indexOf(prod)]));
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row justify-content-evenly">
                    <div className="col text-info">
                        <div className="row justify-content-evenly">
                            {
                                store.getState().type.map((prod) => {
                                    return (
                                        <div className="col-auto ">
                                            {prod}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="row justify-content-evenly">
                            {
                                store.getState().cost.map((cost) => {
                                    return (
                                        <div className="col-auto ">
                                            {cost}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="row justify-content-evenly">
                            {
                                store.getState().type.map((prod) => {
                                    return (
                                        <div className="col-auto ">
                                            <input type="button" className="btn btn-success" value="Add to cart"  onClick={() => this.getProd(prod)} /> 
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
        buyProd: state.buyProd,
        summaProd: state.summaProd
    }
}

export default connect(mapStateToProps)(Shop);
