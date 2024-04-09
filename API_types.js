class ContentProcessor extends APIRequester {
    constructor(baseUrl) {
        super(baseUrl);
    }

    async getHomePage() {
        return await this.makeRequest('', 'GET');
    }
}




