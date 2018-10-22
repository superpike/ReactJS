import React from 'react';
import {Link} from 'react-router';
import {getQuickProducts} from '../actions/shoppingActions';
import ProductList from '../components/ProductList';
import {connect} from 'react-redux';

class QuickShoppingList extends React.Component {
    componentDidMount()
    {
        //Action
        this.props.dispatch(getQuickProducts());
    }

    render() {
        if(this.props.is_loading){
            return <div>Данные загружаются...</div>
        }

        return (
            <div>
                <Link className="btn btn-primary" to={`/list/quick`}>
                    Добавить в ежедневные покупки
                </Link>
                <ProductList title="Для быстрого выбора" products={this.props.products}/>
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

export default connect(mapStateToProps)(QuickShoppingList);