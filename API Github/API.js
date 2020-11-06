var user = document.getElementById('usuario')
var envio = document.getElementById('enviar')
var lista = document.getElementById('list')



function requis(){
    var usuario = user.value
    var link = 'https://api.github.com/users/'+ usuario +'/repos'
    
    axios.get(link)
        .then(function(response){
            var resposta = response.data
            for(repo of resposta){
                var repoElement = document.createElement('li')
                var repoText = document.createTextNode(repo['name'])

                repoElement.appendChild(repoText)
                lista.appendChild(repoElement)
                
            }
        })
        .catch(function(error){
            console.log(error)
        })
}
