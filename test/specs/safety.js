
const { assert } = require("chai");
const base= require("../pageobjects/base");
const safety= require("../pageobjects/safetypage")

describe("Main Page Menu Items", function()
{    
    it("Open the page", function()
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
            console.log("Didnot display the Cookie setting popup");
        }    
        base.ShortPause();
     });

     it("Should verify the title of the page", function()
     {
        assert.equal(browser.getTitle(), "A million more | Volvo Cars")        
        base.ShortPause(); 
     })

    it("Should move to Video 1 and verify the video", function()
    {
        safety.Video1.waitForExist();
        safety.Video1.scrollIntoView();
        base.ShortPause();
        base.MoveToElement(safety.Video1);
        base.ShortPause();        
        safety.Video1.click();
        browser.pause(15000);
        safety.Video1.click();
        base.Pause();
    })

    it('should verify the text "A million more. With new and existing safety features, we are determined to save a million more lives."', function(){
        
        safety.millionmoretext.waitForExist();
        safety.millionmoretext.scrollIntoView();
        base.ShortPause();
        base.MoveToElement(safety.millionmoretext);
        assert.equal(safety.millionmoretext.getText(), "A million more. With new and existing safety features, we are determined to save a million more lives.") 
        base.ShortPause();
    })


    it("Should move to footer", function()
    {       
        safety.footerArea.scrollIntoView();
        base.ShortPause();
        base.MoveToElement(safety.footerArea);
        base.MediumPause();        
    })

    it("Should move to Learn More safety", function()
    {
        safety.LearnMoreSafetyLink.scrollIntoView(false);
        base.ShortPause();
        base.MoveToElement(safety.LearnMoreSafetyLink);
        base.MediumPause();  
        safety.LearnMoreSafetyLink.click();
        base.MediumPause();
        assert.equal(browser.getTitle(), "Car safety | Volvo Cars")   
        base.Pause();     
    })


})