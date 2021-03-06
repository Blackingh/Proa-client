
const localHost = 'http://localhost:8080';

export const postObject = async function(url,data){
    try {
        let response = await fetch(`${localHost}${url}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        var objectJson = await response.json();
        return objectJson;
    } catch (error) {
        console.log(error);
    }
}

export const getIdObject = async function(url){ //Se espera una url con 
    try {
        let response = await fetch(`${localHost}${url.url}${url.id}`, {
            method: 'GET'
        });
        let objectJson = await response.json();
        return objectJson;
    } catch (error) {
        console.log(error);
    }
}

export const getAllObjects = async function(url){
    try {
        let response = await fetch(`${localHost}${url.url}`, {
            method: 'GET'
        });
        let objectJsonList = await response.json();
        return objectJsonList;
    } catch (error) {
        console.log(error);
    }
}

export const putObject = async function(url,data){
    try {
        let response = await fetch(`${localHost}${url.url}${url.id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let objectJsonList = await response.json();
        return objectJsonList;
    } catch (error) {
        console.log(error);
    }
}

export const deleteObject = async function(url){
    try {
        let response = await fetch(`${localHost}${url.url}${url.id}`, {
            method: 'DELETE',
        });
        let menssageJson = await response.statusText;
        console.log(menssageJson);
    } catch (error) {
        console.log(error);
    }
}

export const deleteListObject = async function(url,data){
    try {
        let response = await fetch(`${localHost}${url.url}${url.id}`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let menssageJson = await response.statusText;
        console.log(menssageJson);
    } catch (error) {
        console.log(error);
    }
}