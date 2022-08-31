import React from "react"


function createInput(father, feature = false){
    let f = document.getElementById(father);

    let s = document.createElement("span")
        s.innerText = f.getElementsByTagName("input").length + " - ";
    let i = document.createElement("input");
        if(feature){ i.value = "- [ ] "} else {i.value = "* "}
    let b = document.createElement("br");

    f.appendChild(s)
    f.appendChild(i)
    f.appendChild(b)
}

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

function stringifild(){

    let feature = arrayForString("features")
    let tecnologias = arrayForString("tecnologias")

    let readme= (
        `
# ${getValue("title")}
<p align="center">${getValue("description")}</p>
<h4 align="center"> Status do projeto: ${getValue("status")}</h4>

### Tabela de conteudo

<p align="center">
<a href="#funcionalidades">funcionalidades</a> • 
<a href="#Demostração-da-Aplicação">Demostração</a> • 
<a href="#Como-executar-o-projeto">como Executar</a> • 
<a href="#Tecnologias-utilizadas">Tecnologias</a> •   
<a href="#autor">Autor</a> •
<a href="#licenc-a">Licença</a> 
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
`
    )
    console.log(readme)
}

export default function readmeEdit(){

    return(
        <div className="container my-5">

            <label htmlFor="title">Titulo:<strong>(Obrigatório)</strong></label>
            <input id="title" type="text" />
            <br/>

            <label htmlFor="description">Breve descrição:<strong>(Obrigatório)</strong></label>
            <br/>
            <textarea id="description" cols="60" rows="5"></textarea>
            <br/>

            <label htmlFor="status">Status dos projeto:<strong>(Obrigatório)</strong></label>
            <input id ="status" type="text" />
            <br/>

            <label htmlFor="features">Features</label>
            <button onClick={()=>{createInput("features", true)}}>+</button>
            <br/>
            <div id="features"></div>
            <br/>

            <label htmlFor="demostração">Demonstração da Aplicação:<strong>(Obrigatório)</strong></label>
            <br/>
            <textarea id="demostração" cols="60" rows="5"></textarea>
            <br/>

            <label htmlFor="requisitos">Pré-requisitos e como rodar a aplicação/testes:<strong>(Obrigatório)</strong></label>
            <br/>
            <textarea 
            id="requisitos" 
            cols="60" rows="5"
            defaultValue={`
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

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
${"```"}
            `}
            ></textarea>
            <br/>
            
            <label htmlFor="tecnologias">Tecnologias utilizadas:<strong>(Obrigatório)</strong></label>
            <button onClick={()=>{createInput("tecnologias")}}>+</button>
            <br/>
            <div id="tecnologias"></div>
            <br/>

            <label htmlFor="autor">Autor:<strong>(Obrigatório)</strong></label>
            <input id="autor" type="text" />
            <label htmlFor="autor">Email Contato:<strong>(Obrigatório)</strong></label>
            <input id="email" type="text" />
            <br/>

            <label htmlFor="licença">Licença:<strong>(Obrigatório)</strong></label>
            <input id="licença" type="text" defaultValue="MIT License"/>
            <br/>
            <button onClick={()=>{
                stringifild()
            }}>submit</button>
        </div>
    )
}