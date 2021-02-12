
const { assert } = require("chai");
const base= require("../pageobjects/base");
const menu= require("../pageobjects/menupage")

describe("Describe all menu options", function()
{    
    it("should open the page", function()
    {
        base.BaseUrl();  
    })

    it("should click on Cookie Accept button", function() {        
         
        base.cookieBtnAccept.waitForExist();
        if(base.cookieBtnAccept.isExisting())
        { 
            base.cookieBtnAccept.click();
        }
        else
        {
            console.log("Cookie setting popup is not displaying");
        }          
        base.ShortPause();
     });

  
    it("Should click Car Icon and open", function()    {
        menu.CarsMenu.waitForExist();
        console.log("Car Icon Existing : ", menu.CarsMenu.isExisting());   
        if(menu.CarsMenu.isExisting()) 
        {
            base.MoveToElement(menu.CarsMenu);  
            base.ShortPause();
            menu.CarsMenu.click();
            base.ShortPause();
        }
        else{
            console.log("Car Icon menu is not displaying")
        }
    })

    
    it("Should Move to all car menu options", function()
    {
        if( menu.GetAllCarMenuOptions)
        {
            const menuItems = menu.GetAllCarMenuOptions;

            const menuoptions = [
                'XC90 Recharge',
                'XC60 Recharge',
                'XC40 Recharge',
                'V90 Recharge',
                'V60 Recharge',
                'S90 Recharge',
                'S60 Recharge'
                ]
            
            for(let i = 0; i < menuItems.length; i++) {
                menuItems[i].waitForExist();
                menuItems[i].scrollIntoView();
                base.ShortPause();
                const model= menuItems[i].getAttribute('alt')                
                base.MoveToElement(menuItems[i]);               
                assert.equal(model, menuoptions[i]);
                base.ShortPause();          
            }
        }
        else
        {
            console.log("Car menu options are not displaying")
        }

        base.ShortPause();
    });
        
        
  

    it("Should close the Car Icon panel", function()    {
        if(menu.CarsMenu.isExisting()) 
        {   
            base.ShortPause();
            menu.CarsMenu.click();
            base.ShortPause();
        }
        else
        {
            console.log("Car Icon menu is not displaying")
        }
    })

   
    it('should open the top right Navigation icon and open', function(){
        menu.NavMenu.waitForExist();
        base.MoveToElement(menu.NavMenu); 
        base.MediumPause();
        menu.NavMenu.click()
        base.Pause();
     });

   

    it('should verify the menu options', function () {
        
        const menuoptions = [
          'Buy',
          'Own',
          'Why Volvo',
          'Explore',
          'More'
        ]

        const menuItems= menu.NavMenuItems;
        
        for(let i = 0; i < menuItems.length; i++) {
            menuItems[i].waitForExist();
            text = menuItems[i].getText()
            base.MoveToElement(menuItems[i]);            
            assert.equal(text, menuoptions[i]);
            base.ShortPause();
        }
        
      })

      it('should close navigation panel', function() {
        menu.closeNavMenu.waitForExist();
        base.MoveToElement(menu.closeNavMenu);
        base.ShortPause();
        menu.closeNavMenu.click();
        base.Pause();
    });
      

})