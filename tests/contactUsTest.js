describe('Testing the contact us page of the qa uni', function() {

    beforeEach(function() {
      // runs before each test in this block
      browser.url('/Contact-Us/contactus.html');
    });


    it('Should be able to submit contuct us form as all fields are correct', function(){
      browser.setValue('input[name="first_name"]', 'guga');
      browser.setValue('input[name="last_name"]', 'kusmuk');
      browser.setValue('input[name="email"]', 'guga@test.com');
      browser.setValue('textarea[name="message"]', 'leave some random comment');
      browser.click('input.contact_button');
    });
    it('Should not be able to submit contuct us form as all fields are required - no message', function(){
      browser.setValue('input[name="first_name"]', 'goga');
      browser.setValue('input[name="last_name"]', 'kusmuk');
      browser.setValue('input[name="email"]', 'guga@test.com');
      browser.click('input.contact_button');

      let messageValue = browser.getText('//body'[0])
      let expectedMessage = 'Error: all fields are required'
      expect(messageValue).to.equal(expectedMessage);
    });
    it('Should not be able to submit contuct us form as all fields are required - no last name', function(){
      browser.setValue('input[name="first_name"]', 'gaga');
      browser.setValue('input[name="email"]', 'guga@test.com');
      browser.setValue('textarea[name="message"]', 'leave some random comment');
      browser.click('input.contact_button');
    });
    it('Should not be able to submit contuct us form as all fields are required - no email', function(){
      browser.setValue('input[name="first_name"]', 'guga');
      browser.setValue('input[name="last_name"]', 'kusmuk');
      browser.setValue('textarea[name="message"]', 'leave some random comment');
      browser.click('input.contact_button');
    });
  });