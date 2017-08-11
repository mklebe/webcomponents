import bel from 'bel'
let subheadline = 'Its really cool!!'
let myMarkup = bel([`
    <div>
        <h1>bel in web components ROCKS!!</h1>
        <h2>${subheadline}</h2>
    </div>
`])

let myStyling = bel([`
    <style>
        h1 {
            color: red !important;
        }

        h2 {
            color: blue !important;
        }
    </style>
`]);

myMarkup.appendChild(myStyling)

let template = document.createDocumentFragment();

template.content = myMarkup;

class GOPLotus extends HTMLElement {
    constructor() {
        super();
    }

    createdCallback() {
        let shadow = this.createShadowRoot();
        window.console.log( template, template.content )
        let instance = document.importNode(template.content, true);
        shadow.appendChild(instance);
    }

    attachedCallback() {
        window.console.log('GOPLotus is attached')
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        subheadline = newValue;
    }

    connectedCallback() {
        window.console.log('GOPLotus connected')
    }
}

document.registerElement('gop-lotus', GOPLotus)