
export default class readmeEdit{

    demonstrationDefault =(
`1 - ...
2 - ...
3 - ...
<a href="https://...">Teste a aplicação<a>
<img src="./...web.png">
<img src="./...mob.png" width="300">`
    )
   
    requirementsDefault=(
`Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

${"```bash"}
# Clone este repositório
$ git clone <>

# Acesse a pasta do projeto no terminal/cmd
$ cd ...

# Instale as dependências
$ npm install ...

# Execute a aplicação 
$ npm start

# inciará na porta:3333 - acesse <http://localhost:3333>
${"```"}`)

    stringifild(){
  
        function getValue(el){
            return document.getElementById(el).value
        }
      
       function arrayForString(el){
        let f = document.getElementById(el).getElementsByTagName("input")
        let a = ''
        if(f.length > 0){
            for (let index = 0; index < f.length; index++) { a +="\n"+ f[index].value }
        }
        return a
      
        }

    let feature = arrayForString("features")
    let tecnologias = arrayForString("tecnologias")
      
    let readme= (
`# ${getValue("title")}
<p align="center">${getValue("description")}</p>
<h4 align="center"> Status do projeto: ${getValue("status")}</h4>

### Tabela de conteudo

<p align="center">
<a href="#funcionalidades">funcionalidades</a> • 
<a href="#Demostração-da-Aplicação">Demostração</a> • 
<a href="#Como-executar-o-projeto">como Executar</a> • 
<a href="#Tecnologias-utilizadas">Tecnologias</a> •   
<a href="#autor">Autor</a> •
<a href="#licença">Licença</a> 
</p>

### funcionalidades
${feature}

### Demostração da Aplicação
${getValue("demostração")}

### Como executar o projeto
${getValue("requisitos")}

### Tecnologias utilizadas
${tecnologias}

### Autor
Feito com ❤️ por ${getValue("autor")} 👋🏽 Entre em contato!
\nemail: ${getValue("email")}

### Licença
${getValue("licença")}
`)
    document.querySelector("#modal").style.display = "flex";
    document.querySelector("#readme").innerHTML = readme;

    console.log(readme)
  }
      
}