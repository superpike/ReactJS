import React from 'react';
import {Link} from 'react-router';
import {getProducts, deleteProduct} from '../actions/shoppingActions';
import ProductList from '../components/ProductList';
import {connect} from 'react-redux';

class ShoppingList extends React.Component {
    componentDidMount()
    {
        //Action
        this.props.dispatch(getProducts());

        //Удаление
        $('body').on('click', 'button.btn-del', (event) => {
            event.preventDefault();
            let idPost = $(event.currentTarget).attr('data-id');
            this.props.dispatch(deleteProduct(idPost));
        });
    }

    render() {
        if(this.props.is_loading){
            return <div>Данные загружаются...</div>
        }

        return (
            <div>
                <Link className="btn btn-primary" to={`/list/new`}>
                    Добавить покупки
                </Link>
                <ProductList title="Купить" products={this.props.products}/>
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

export default connect(mapStateToProps)(ShoppingList);