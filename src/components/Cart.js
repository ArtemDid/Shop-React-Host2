import React from 'react';
import store from '../store/store';

class Cart extends React.Component {

    render() {

        let masBanana = store.getState().buyProd.filter(item => item === store.getState().type[0]);
        let masApple = store.getState().buyProd.filter(item => item === store.getState().type[1]);
        let masPapaya = store.getState().buyProd.filter(item => item === store.getState().type[2]);

        let countBanana = masBanana.length;
        let countApple = masApple.length;
        let countPapaya = masPapaya.length;

        let costBanana = countBanana * store.getState().cost[0];
        let costApple = countApple * store.getState().cost[1];
        let costPapaya;

        if (countPapaya >= 3) {
            if (countPapaya % 3 === 0) {
                costPapaya = countPapaya * store.getState().cost[2] - (countPapaya / 3) * store.getState().discount;
            }
            else if (countPapaya % 3 === 1) {
                costPapaya = countPapaya * store.getState().cost[2] - ((countPapaya - 1) / 3) * store.getState().discount;
            }
            else {
                costPapaya = countPapaya * store.getState().cost[2] - ((countPapaya - 2) / 3) * store.getState().discount;
            }
        }
        else {
            costPapaya = countPapaya * store.getState().cost[2];
        }

        return (
            <div className="container-fluid">
                <div className="row justify-content-evenly">
                    <div className="col text-primary">
                        {countBanana > 0 &&
                            <h5>
                                {store.getState().type[0]} - ({countBanana})pcs. - Summa = ${costBanana}
                            </h5>
                        }
                        {countApple > 0 &&
                            <h5>
                                {store.getState().type[1]} - ({countApple})pcs. - Summa = ${costApple}
                            </h5>
                        }
                        {countPapaya > 0 &&
                            <h5>
                                {store.getState().type[2]} - ({countPapaya})pcs. - Summa = ${costPapaya}
                            </h5>
                        }
                    </div>
                    <div className="col-auto ">
                        <input type="button" className="btn btn-success" value="Buy" onClick={() => {

                            if (countBanana > 0 || countApple > 0 || countPapaya > 0)
                                alert("Bought!")
                                window.location.reload();
                        }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;