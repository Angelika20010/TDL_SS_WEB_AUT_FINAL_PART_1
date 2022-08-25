import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/inventory.html";
  }

  static get container(){
    return cy.get('[class="product_sort_container"]')
  }

  static get inventorylist(){
    return cy.get('[class="inventory_item"]')
  }

  static get ValName(){
    return cy.get('#item_5_title_link')
  }
  static get ValName2(){
    return cy.get('#item_2_title_link')
  }
  static get ValName3(){
    return cy.get('#item_3_title_link')
  }

  
  static get Valcosts(){
    return cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price')
  }

  static get AddCard(){
    return cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
  }
  static get AddCard2(){
    return cy.get('#add-to-cart-sauce-labs-bike-light')
  }
  static get AddCard3(){
    return cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
  }
  
  static get Opencard(){
    return cy.get('#item_1_img_link')
  }

  static get ShoppingCard(){
    return cy.get('.shopping_cart_link')
  }

  static get Backtoproducts(){
    return cy.get('#back-to-products')
  }
  static get NewProducts(){
    return cy.get('#item_0_img_link')
  }

  static get RemoveButton(){
    return cy.get('#remove-sauce-labs-bolt-t-shirt')
  }

  static get Stack(){
    return cy.get('#react-burger-menu-btn')
  }

  static get reset(){
    return cy.get('#reset_sidebar_link')
  }

  static get Open2(){
    return cy.get('#item_3_img_link')
  }

  static get ShopBag(){
    return cy.get('#shopping_cart_container')
  }
  static get Checkout(){
    return cy.get('#checkout')
  }
  static get First(){
    return cy.get('#first-name')
  }
  static get Secondname(){
    return cy.get('#last-name')
  }
  static get Pastcode(){
    return cy.get('#postal-code')
  }
  static get Continuebutton(){
    return cy.get('#continue')
  }
  static get Title(){
    return cy.get('#item_3_title_link')
  }
  static get Finish(){
    return cy.get('#finish')
  }
  static get ValidateCongradulation(){
    return cy.get('.complete-header')
  }



  // static get xxx() {
  //   return cy.get("x[y=z]");
  // }
}

export default HomePage;
