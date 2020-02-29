describe('Verify that webdriveruniversity links work as expected', function(){
	it("verify that Contact Us button opens contact page", function(done){
		browser.url('/');
		var title =	browser.getTitle()
		//console.log('Title is: ' + title);
		browser.click("#contact-us")
		assert.equal('WebDriverUniversity.com', title)
	});

	it("check that login button open login page", function(done){
		browser.url('/');
		browser.click('#login-portal');
		var title = browser.getTitle();
		//console.log('Title is: ' + title);
		expect(title).to.be.a('string');
	});
});