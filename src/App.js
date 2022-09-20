import readmeEdit from './components/ReadmeEdit';
import './style/style.css'
import { Fragment } from 'react';

function App() {

  const readme = new readmeEdit()

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


  return(
    <Fragment>
      <div className="container-sm mt-5">

          <label htmlFor="title">Titulo:<span>(Obrigatório)</span></label>
          <input id="title" type="text" />
          

          <label htmlFor="description">Breve descrição:<span>(Obrigatório)</span></label>
          
          <textarea id="description" cols="60" rows="5"></textarea>
          

          <label htmlFor="status">Status dos projeto:<span>(Obrigatório)</span></label>
          <input id ="status" type="text" />
          

          <label htmlFor="features">Features</label>
          <button onClick={()=>{createInput("features", true)}}>+</button>
          
          <div id="features"></div>
          

          <label htmlFor="demostração">Demonstração da Aplicação:<span>(Obrigatório)</span></label>
          
          <textarea 
            id="demostração" 
            cols="60" 
            rows="5"
            defaultValue={readme.demonstrationDefault}
          ></textarea>
          

          <label htmlFor="requisitos">Pré-requisitos e como rodar a aplicação/testes:<span>(Obrigatório)</span></label>
          
          <textarea 
          id="requisitos" 
          cols="60" rows="5"
          defaultValue={readme.requirementsDefault}
          ></textarea>
          
          
          <label htmlFor="tecnologias">Tecnologias utilizadas:<span>(Obrigatório)</span></label>
          <button onClick={()=>{createInput("tecnologias")}}>+</button>
          
          <div id="tecnologias"></div>
          

          <label htmlFor="autor">Autor:<span>(Obrigatório)</span></label>
          <input id="autor" type="text" />
          <label htmlFor="autor">Email Contato:<span>(Obrigatório)</span></label>
          <input id="email" type="text" />
          

          <label htmlFor="licença">Licença:<span>(Obrigatório)</span></label>
          <input id="licença" type="text" defaultValue="MIT License"/>
          
          <button onClick={
            readme.stringifild
          }>submit</button>
      </div>
      <div id="modal" style={{display:"none"}}>
        <div>
          <textarea id="readme"></textarea>
          <div style={{display:"flex", width:"100%", flexDirection:"row-reverse"}}>
            <button
              onClick={()=>{
                document.querySelector("#modal").style.display = "none";
              }}
              >back</button>
          </div>
          
        </div>
      </div>
    </Fragment>
)
}

export default App;
