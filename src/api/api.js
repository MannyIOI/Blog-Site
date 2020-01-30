const DNS_API_ADDRESS = "http://localhost:1235"
var API_ADDRESS = "http://localhost:1238"
export async function getAllBlogsAPI(){
    const config = {
        method: 'GET',
        mode: 'no-cors'
    }
    console.log(API_ADDRESS + "/blogs/")
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
                        const x = response.text().then(res=>{
                            console.log(res)
                        }).catch(err => {
                            console.log(err)
                        })
                        // return response.text()
                    })
                    // .catch(err => {
                    //     getAvailableServer()
                    // })
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
                        response.json()
                            .then(res => {
                                API_ADDRESS = "http://"+res.Address + ":" + res.Port
                                console.log(API_ADDRESS)
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    })
}