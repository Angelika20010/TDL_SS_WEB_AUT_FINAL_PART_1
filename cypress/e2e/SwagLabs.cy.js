import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
  })

  beforeEach(() => {
    LoginPage.visit();
  });

  it("Scenario 1", () => {
    LoginPage.username.type("locked_out_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginbutton.click();
    LoginPage.loginmessage.should("have.text", "Epic sadface: Sorry, this user has been locked out.");
  });

  it("Scenario 2", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("1234512345");
    LoginPage.loginbutton.click();
    LoginPage.loginmessage.should("have.text", "Epic sadface: Username and password do not match any user in this service");
  });

  it("Scenario 3", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginbutton.click();
    HomePage.inventorylist.should("have.length",6);

    
  });

  it("Scenario 4", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginbutton.click();
    HomePage.container.select("Price (high to low)");
    HomePage.ValName.should("have.text", "Sauce Labs Fleece Jacket");
    HomePage.Valcosts.should("have.text", "$49.99");
    
  });

  it("Scenario 5", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginbutton.click();
    HomePage.container.select("Price (low to high)");
    HomePage.ValName2.should("have.text", "Sauce Labs Onesie");
    HomePage.Valcosts.should("have.text", "$7.99");
  });

  it("Scenario 6", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginbutton.click();
    HomePage.container.select("Name (Z to A)");
    HomePage.ValName3.should("have.text", "Test.allTheThings() T-Shirt (Red)");
  });

  it("Scenario 7", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginbutton.click();
    HomePage.Opencard.click();
    HomePage.AddCard.click();
    HomePage.ShoppingCard.should("have.text", "1");
    HomePage.Backtoproducts.click();
    HomePage.NewProducts.click();
    HomePage.AddCard2.click();
    HomePage.ShoppingCard.should("have.text", "2");

  
  });
  it("Scenario 9", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginbutton.click();
    HomePage.Opencard.click();
    HomePage.AddCard.click();
    HomePage.ShoppingCard.should("have.text", "1");
    HomePage.RemoveButton.click();
    HomePage.ShoppingCard.should("have.text", '');

  });

  it("Scenario 8", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginbutton.click();
    HomePage.Opencard.click();
    HomePage.AddCard.click();
    HomePage.ShoppingCard.should("have.text", "1");
    HomePage.Stack.click();
    HomePage.reset.click();
    HomePage.ShoppingCard.should("have.text", '');


  });

  it("Scenario 10", () => {
    LoginPage.username.type("standard_user");
    LoginPage.password.type("secret_sauce");
    LoginPage.loginbutton.click();
    HomePage.Open2.click();
    HomePage.AddCard3.click();
    HomePage.ShopBag.click();
    HomePage.Checkout.click();
    HomePage.First.type("Anzelika");
    HomePage.Secondname.type("Bureka");
    HomePage.Pastcode.type("LV-1024");
    HomePage.Continuebutton.click();
    HomePage.Title.should("have.text", "Test.allTheThings() T-Shirt (Red)");
    HomePage.Finish.click();
    HomePage.ValidateCongradulation.should('have.text', 'THANK YOU FOR YOUR ORDER')

  });







});
