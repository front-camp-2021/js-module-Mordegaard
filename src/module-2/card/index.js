export default class Card {
  element;

  constructor ({
    id = '',
    images = [],
    title = '',
    rating = 0,
    price = 0,
    category = '',
    brand = ''
  } = {}) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.brand = brand;

    this.render();
  }

  render () {
    let card = document.createElement("div");
    card.classList.add("product-card");
    card.setAttribute("data-element", "body");
    card.innerHTML = `
      <div class="product-card">
        <div class="product-card__top">
          <div class="product-card__image-container flexed">
            <img class="product-card__image" src="${this.images[0]}">
          </div>
          <div class="product-card__rating-price-row">
            <div class="product-card__rating">
              <span>${this.rating}</span>
              <svg viewBox="0 0 576 512" fill="currentColor">
                <use xlink:href="materials/icons.svg#star"></use>
              </svg>
            </div>
            <span class="product-card__price">$${this.price}</span>
          </div>
          <div class="product-card__description-container">
            <h3 class="product-card__title">${this.title}</h3>
            <span class="product-card__description">${this.category} ${this.brand}</span>
          </div>
        </div>
        <div class="product-card__buttons">
          <button class="wishlist-btn flexed">
            <svg viewBox="0 0 512 512" fill="currentColor">
              <use xlink:href="materials/icons.svg#heart"></use>
            </svg>
            <span>Wishlist</span>
          </button>
          <button class="cart-btn flexed">
            <svg viewBox="0 0 448 512" fill="currentColor">
              <use xlink:href="materials/icons.svg#cart"></use>
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    `;
    this.element = card;
  }

  destroy () {
    this.element.remove();
    this.element = null;
  }
}
