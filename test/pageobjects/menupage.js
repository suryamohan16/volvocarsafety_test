
const { default: $$ } = require("webdriverio/build/commands/browser/$$");

class MenuOption 
{    
    get CarsMenu()
    {        
        return $("#site-nav-topbar-wrapper>nav>button")       
    }   
    

    get GetAllCarMenuOptions()
    {
        return browser.$$('//*[@id="site-nav-cars-menu-section-panel-1"]/div/a/div/div/div/picture/img');       
    }
    get NavMenu(){
        return $('//*[@id="site-nav-topbar-wrapper"]/nav/div[3]/button/div')
    }

    get NavMenuItems()
    {       
        return browser.$$("button[data-autoid='nav:sideNavLinksMenuDrawer']");
    }

    get closeNavMenu(){
        return $('/html/body/div[6]/div/nav/div[2]/div[2]/button/div/span')
    }
    
}

module.exports = new MenuOption()