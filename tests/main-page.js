module.exports = {
    'Main page contains welcome header': function (client) {
        const nweaMain = client.page.main();
        nweaMain.navigate()
            .waitForElementPresent('@mainWidget', 5000)
            .assert.containsText('@welcomeText', 'Welcome');
        client.end();
    },

    'Main page contains NWEA product overview': function (client) {
        const nweaMain = client.page.main();
        nweaMain.navigate()
            .waitForElementPresent('@mainWidget', 5000)
            .assert.containsText('@welcomeText', 'NWEA delivers the insights that help students learn, teachers teach, and leaders lead.')
            .assert.containsText('@welcomeText', 'Our proven assessment solutions, customized professional learning, and industry-leading research keep you ahead of the curve as times and standards change.');
        client.end();
    }
};
