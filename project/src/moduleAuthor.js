import React from 'react';

class Author extends React.Component {
    render() {
        return (
        <div className="b-footer__copyright">
            <div className="container" onClick = {() => alert(new Date().toLocaleTimeString())}>
                "Copyright © 2018. "  {this.props.authorName}
            </div>
        </div>);
    }
}

export default Author;