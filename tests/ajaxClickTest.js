describe('Click on AJAX object and wait', function(){
    it.only('wait for load to finish', function(done){
        browser.url('/Ajax-Loader/index.html');
        //browser.waitForExist('#button1', 10000)
        browser.pause(10000);
        browser.click('#button1');
        var alertMessage = browser.getText('.modal-body');
        console.log(alertMessage);
        //browser.click('#button1 > p');
        //browser.click("#button1 > p");
    })
})