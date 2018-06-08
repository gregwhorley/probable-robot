module.exports = {
    url: function() {
        return this.api.launchUrl + '/about';
    },
    sections: {
        aboutContainer: {
            selector: '#post-32 > header > div > h1',
            elements: {}
        },
        aboutMessage: {
            selector: '#post-32 > div > div:nth-child(1) > div > div',
            elements: {
                aboutSubHeader: 'h2',
                aboutText: 'p:nth-child(2)'
            }
        }
    }
};
