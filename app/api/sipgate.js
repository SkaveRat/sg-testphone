import fetch from 'isomorphic-fetch';

class Sipgate {

    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }


    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }


    getContacts() {
        return fetch(this.apiUrl + '/contacts', {
            method: 'get',
            headers: this._headers()
        })
            .then(extractBody)
            .then(parseJSON)
    }

    _headers() {
        return {
            Authorization: 'Bearer ' + this.accessToken,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
    }
}

export default Sipgate;


function parseJSON(text) {
    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}

function extractBody(res) {
    return res.text();
}