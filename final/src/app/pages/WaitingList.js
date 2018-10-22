import React from 'react';
import {showWaitingProducts} from '../actions/shoppingActions';
import ProductList from '../components/ProductList';
import {connect} from 'react-redux';

class WaitingList extends React.Component {
    componentDidMount()
    {
        //Action
        this.props.dispatch(showWaitingProducts());
    }

    render() {
        if(this.props.is_loading){
            return <div>Данные загружаются...</div>
        }

        return (
            <div>
                <ProductList title="Отложено" products={this.props.products}/>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        products: store.products.products,
        is_loading: store.products.is_loading,
    }
}

export default connect(mapStateToProps)(WaitingList);