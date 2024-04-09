
class APIRequester {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async makeRequest(endpoint, method, payload = {}) {
        try {
            const url = `${this.baseUrl}/${endpoint}`;
            let response;

            switch (method.toLowerCase()) {
                case 'get':
                    response = await axios.get(url);
                    break;
                case 'post':
                    response = await axios.post(url, payload);
                    break;
                // Add support for other HTTP methods as needed
                default:
                    throw new Error(`Unsupported HTTP method: ${method}`);
            }

            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    handleError(error) {
        if (error.response) {
            console.log('Server responded with error:', error.response.data);
        } else if (error.request) {
            console.log('No response received from server:', error.request);
        } else {
            console.log('Error setting up request:', error.message);
        }
    }
}

