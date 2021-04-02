function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function exibirPost(index){  
    let titulo_1 = document.getElementById("titulo_1");
    titulo_1.style.display = "none";
    let tabela = document.getElementById("tabela")
    tabela.style.display= "none";
    let titulo_2 = document.getElementById("titulo_2");
    titulo_2.innerText = "valores de id " + usuarios[index].id;
  
    let tabela2 = document.getElementById("tabela2")
    linha2 = document.createElement("tr");

    tdTitle2 = document.createElement("td");
    tdBody2 = document.createElement("td");

    tdTitle2.innerHTML = 'Titulo: ' + usuarios[index].title;
    tdBody2.innerHTML = 'Corpo: ' + usuarios[index].body;

    linha2.appendChild(tdTitle2);
    linha2.appendChild(tdBody2);
    tabela2.appendChild(linha2)
  
}


function criaLinha(usuario, index) {
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdId2 = document.createElement("td");
    tdTitle = document.createElement("td");
    tdBody = document.createElement("td");
    var button = document.createElement("button");
    button.setAttribute('type','button')
    button.appendChild(document.createTextNode('Saiba mais'));
    
    console.log(index)

    tdId.innerHTML = 'ID usuário: ' + usuario.userId
    tdId2.innerHTML = 'ID: ' + usuario.id
    tdTitle.innerHTML = 'Titulo: ' + usuario.title
    tdBody.innerHTML = 'Corpo: ' + usuario.body.substring(0, 20);

    linha.appendChild(tdId);
    linha.appendChild(tdId2);
    linha.appendChild(tdTitle);
    linha.appendChild(tdBody);
    linha.appendChild(button);

    button.addEventListener('click',function() {exibirPost(index) });

    return linha
}

function main() {
    data = fazGet("https://jsonplaceholder.typicode.com/posts")
    usuarios = JSON.parse(data);
    usuarios.forEach((element, index) => {
        let linha = criaLinha(element, index)
        tabela.appendChild(linha);
    });
}