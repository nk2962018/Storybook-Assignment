
Feature('Dashboard Component');

    Scenario('Check if  Food App text is present', async ({ I }) => {
        I.amOnPage('/');
        locate('span')
        .withText('Food App')
    });

    Scenario('Check if  Logo Image is present', async ({ I }) => {
        I.amOnPage('/');
        locate('img')
        .withAttr({ alt:'logo' })
    });
  

Feature('Form Component')

    Scenario('Check if  User Input is present', async ({ I }) => {
        I.amOnPage('/');
        locate('input')
        .withAttr({ type:'text' })
        .inside(locate('label').withText('Enter Username'));
    });

    Scenario('Check if  Password Input is present', async ({ I }) => {
        I.amOnPage('/');
        locate('input')
        .withAttr({ type:'password' })
        .inside(locate('label').withText('Enter Password'));
    });

    Scenario('Check if  login button is present on screen', async ({ I }) => {
        I.amOnPage('/');
        I.see('Login')
    });

    Scenario('Check if  login button is clicked', async ({ I }) => {
        I.amOnPage('/');
        I.click('Login')
    });

Feature('Card Component')

    Scenario('Check if Body Text description is present in card component', async ({ I }) => {
        I.amOnPage('/');
        locate('div.card p.description-text--greyish')
        .withText('Lorem Ipsum is simply dummy text of the printing and typesetting industry .');
    });
    Scenario('Check if  Know More link is present in card component', async ({ I }) => {
        I.amOnPage('/');
        locate('a')
        .withAttr({ href: '#' })
        .inside(locate('label').withText('Know more...'));
    });

Feature('Footer Component')

    Scenario('Check if  Footer is present', async ({ I }) => {
        I.amOnPage('/');
        locate('div.footer-body p.footer')
    });




