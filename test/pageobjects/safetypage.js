
class safety
{    
    get Video1()
    {
        return $('#Video-1')
    }

    get LearnMoreSafetyLink()
    {        
        return $("a[data-autoid='iconCallouts:cta']")       
    }

    get footerArea()
    {       
        return $('#vcc-site-footer')      
    
    }
    
    get millionmoretext(){
        return $('#TextStatement-1 > section > div')
    }

}

module.exports = new safety()