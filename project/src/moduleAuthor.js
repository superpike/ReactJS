import React from 'react';

export class Author {
    constructor(name) {
        this.name = name;
    }
    render() {
        return React.createElement('div', {
            className: "copyright",
            style: {
                cursor: "pointer"
            },
            onClick: () => alert(new Date().toLocaleTimeString())
            },
            "Copyright © 2018. " + this.name);
            // + ", datetime: " + new Date().toLocaleTimeString());
    }
}