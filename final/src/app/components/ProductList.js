import React from 'react';
import ProductItem from './ProductItem';

export default class ProductList extends React.Component
{
    render()
    {
        if(!this.props.products.length){
            return null; //Если данные еще загружаются
        }

        let products = this.props.products.map((product, index) => {
            return <ProductItem key={index} {...product} />
        });

        return (
            <div>
                <h1>{this.props.title}</h1>
                <div className="panel panel-default">
                    {products}
                </div>

            </div>
        );
    }
}