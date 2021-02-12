class Base
{    
    ShortPause()
    {
        browser.pause(1000);
    }
    MediumPause()
    {
        browser.pause(3000);
    }
    Pause()
    {
        browser.pause(5000);
    }
    LongPause()
    {
        browser.pause(10000);
    }
    get ApplicationURL()
    {
        return 'https://www.volvocars.com/intl/v/car-safety/a-million-more';
    }
    
    BaseUrl()
    {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');        
        browser.maximizeWindow();
        this.Pause();
    }

    get cookieBtnAccept()
    {
        return $('.optanon-allow-all.accept-cookies-button')
    }

    MoveToElement(element)
    {
        element.waitForDisplayed();
        element.moveTo();
    }



}

module.exports = new Base();