const API_ADDRESS = "http://localhost:1238"
export async function getAllBlogsAPI(){
    const config = {
        mode: 'no-cors'
    }
    return await fetch(API_ADDRESS + '/blogs/', config)
                    .then(function(response){
                        return response.json()})
}

export async function createBlogAPI(data){
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'no-cors'
    }
    return await fetch(API_ADDRESS + '/blog/', config)
                    .then(function (response){
                        return response.text()})
}

export async function updateBlogAPI(data){
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'no-cors'
    }
    console.log("UPDATEBAPI", data)
    return await fetch(API_ADDRESS + '/updateBlog/', config)
                    .then(function (response){
                        return response.text()})
}

export async function getBlogAPI(id){
    return await fetch(API_ADDRESS + '/blog/' + id, {})
                    .then(function(response) {
                        return response.json()})
}