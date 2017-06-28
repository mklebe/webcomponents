import template from './index.html'
import style from './index.css'


function component () {
  var element = document.createElement('div');
  element.innerHTML = template

  return element;
}
(function() {
    let doc = document.currentScript.ownerDocument;
    let parent = document;

    let Element = Object.create(HTMLElement.prototype);

    let shadowRoot;

    Element.createdCallback = function() {
        shadowRoot = this.createShadowRoot()

        let templateNode = parent.createElement('div')
        templateNode.innerHTML = template;

        let clone = parent.importNode(templateNode, true)

        shadowRoot.appendChild(clone);

        console.log(clone)
    }

    // document.body.appendChild(Element)

})()

let styleTag = document.createElement('style')

styleTag.innerHTML = style

document.body.appendChild(component())
document.head.appendChild(styleTag)