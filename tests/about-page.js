module.exports = {
    'About page contains About NWEA header': function (client) {
        const nweaAbout = client.page.about();
        nweaAbout.navigate();
        nweaAbout.expect.section('@aboutContainer').to.be.visible.before(5000);
        nweaAbout.expect.section('@aboutContainer').text.to.contain('About NWEA');
        client.end();
    },
    'About page contains NWEA mission statement': function (client) {
        const nweaAbout = client.page.about();
        nweaAbout.navigate();
        nweaAbout.expect.section('@aboutMessage').to.be.visible.before(5000);
        const aboutText = nweaAbout.section.aboutMessage;
        aboutText.expect.element('@aboutSubHeader').to.be.visible.before(5000);
        aboutText.expect.element('@aboutSubHeader').text.to.equal('We are mission-driven, student-centric');
        aboutText.expect.element('@aboutText').text.to.contain('NWEA® is a research-based, not-for-profit organization that supports students and educators worldwide by creating assessment solutions that precisely measure growth and proficiency—and provide insights to help tailor instruction');
        client.end();
    }
};
