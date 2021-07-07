import apiBaseUrl from "./apiBaseUrl";


export let fetch = async (endpoint, body) => {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    return await fetch(apiBaseUrl + endpoint, {
        method: 'POST',
        headers: headers,
        body: body
    });


}

