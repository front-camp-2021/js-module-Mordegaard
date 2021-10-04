//import Card from '../../module-2/card/index.js';

export default class CardsList {
  element = null

  constructor ({data = [], Component = {}}) {
    this.data = data;
    this.Component = Component;

    this.render();
  }

  render () {
    this.element = document.createElement("section");
    this.element.classList.add("product-list");
    this.data.forEach(product=>{
      let card =  new this.Component(product);
      this.element.append(card.element);
    });
  }

  update (data = []) {
    this.data = data;
    this.render();
  }

  destroy () {
    this.element.remove();
    //this.element = null;
  }
}
