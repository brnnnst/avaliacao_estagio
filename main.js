function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function main() {
    data = fazGet("https://jsonplaceholder.typicode.com/posts")
    usuarios = JSON.parse(data);
}