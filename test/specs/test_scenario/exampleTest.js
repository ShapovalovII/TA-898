const ta = require('trueautomation-helper').ta;

describe('Validation methods.', () => {
    it('Using the "linkText(ta)" method.', () => {
        browser.url('https://app.trueautomation.io/auth/signin');
        const link = $(ta("TA:ForgotPassword:Link_Text_Initial",'=Forgot your password?'));
        link.click();
    });
});
