import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "https://www.saucedemo.com/";
  }

  static get username(){
    return cy.get("#user-name")
  }
  static get password(){
    return cy.get("#password")
  }
  static get loginbutton(){
    return cy.get("#login-button")
  }

  static get loginmessage(){
    return cy.get('[class="error-message-container error"]')
  }

  static get ValidateAmount(){
    return cy.get('[class="inventory_list"]')

  }


  // static get xxx() {
  //   return cy.get("x[y=z]");
  // }
}

export default LoginPage;
