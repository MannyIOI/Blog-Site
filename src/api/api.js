const DNS_API_ADDRESS = "http://localhost:1235"
var API_ADDRESS = "http://localhost:1238"
export async function getAllBlogsAPI(){
    // const config = {
    //     method: 'GET',
    //     mode: 'no-cors'
    // }
    console.log(API_ADDRESS)
    if (API_ADDRESS == null) {
        await getAvailableServer().then(res => {
            console.log(API_ADDRESS)
            fetch(API_ADDRESS + '/blogs/', {})
                    .then(function(response){
                        // console.log(response)
                        return response.json()
                                .then(res => {
                                    return res   
                                })
                                .catch(err => {
                                    console.log(err)})
                    })
        })
    }
    else {
        return await fetch(API_ADDRESS + '/blogs/', {})
                    .then(function(response){
                        // console.log(response)
                        return response.json()
                                .then(res => {
                                    return res   
                                })
                                .catch(err => {
                                    console.log(err)})
                    })
    }   
    
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
                        return response.text().then(res=>{
                            console.log(res)
                        }).catch(err => {
                            console.log(err)
                        })
                        // return response.text()
                    })
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
                    // .catch(err => {
                    //     getAvailableServer()
                    // })
}

export async function getBlogAPI(id){
    return await fetch(API_ADDRESS + '/blog/' + id, {})
                    .then(function(response) {
                        return response.json()})
                    // .catch(err => {
                    //     getAvailableServer()
                    // })
}

export async function getAvailableServer() {
    return await fetch(DNS_API_ADDRESS + '/getAvailableServer/')
                    .then(function(response) {
                        return response.json()
                            .then(res => {
                                console.log(DNS_API_ADDRESS + '/getAvailableServer/')
                                API_ADDRESS = "http://"+res.Address + ":" + res.Port
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    })
}