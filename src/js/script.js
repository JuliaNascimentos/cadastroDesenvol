const button= document.getElementById('add_technologies')
const form = document.getElementById('FullName')
const cadastro = document.getElementById('register')

let input1 = 0

button_technologies.addEventListener('click', (ev) =>{

    ev.preventDefault()

    input1++

    const section_bloco = document.getElementById('section_element')

    const div_remove = document.createElement('div')

    const area_de_cadastro = document.createElement('div')
    area_de_cadastro.id = "area_de_cadastro"

    const br = document.createElement('br')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')
    const br4 = document.createElement('br')
    const br5 = document.createElement('br')

    const label_Technologies = document.createElement('label')

    label_Technologies.innerText = 'Nome da Tecnologia'
    label_Technologies.setAttribute('for', 'tecnologias')

    const input_technologies = document.createElement('input')
    input_Technologies.type = 'text'
    input_Technologies.name = 'tecnologias'
    input_tecnologies.id = 'tecnologias'
    input_Technologies.placeholder = 'Digite o nome da tecnologia'
    input_Technologies.className = 'input_text_tecnologias'

    const sub_titulo = document.createElement('label')
    sub_titulo.innerText = 'Ano(s) de experiência'
    sub_titulo.setAttribute('for', 'input_time' + input1)

    const input_time1 = document.createElement('input')
    input_time1.type = 'radio'
    input_time1.name = 'input_time' + input1
    input_time1.id ='input_time1-' + input1
    input_time1.value = '0-2 anos'
    input_time1.className = input1

    const label_time1 = document.createElement('label')
    label_time1.innerText = '0-2 anos'
    label_time1.setAttribute('for', 'input_time1-' + input1)

    const input_time2 = document.createElement('input')
    input_time2.type = 'radio'
    input_time2.name = 'input_time' + input1
    input_time2.id ='input_time2-' + input1
    input_time2.value = '3-4 anos'
    input_time2.className = input1

    const label_time2 = document.createElement('label')
    label_time2.innerText = '3-4 anos'
    label_time2.setAttribute('for', 'input_time2-' + input1)

    const input_time3 = document.createElement('input')
    input_time3.type = 'radio'
    input_time3.name = 'input_time' + input1
    input_time3.id ='input_time3-' + input1
    input_time3.value = '5+ anos'
    input_time3.className = input1

    const label_time3 = document.createElement('label')
    label_time3.innerText = '5+ anos'
    label_time3.setAttribute('for', 'input_time3-' + input1)

    const remove = document.createElement('button')
    remove.innerText = 'Clique aqui para remover'
    remove.id = 'remove_button'

    div_remove.appendChild(remove)
    area_de_cadastro.append(label_Technologies, br, input_technologies,br1,sub_titulo,br2,input_time1,label_time1,br4,input_time2,label_time2,br5,input_time3,label_time3,br3,div_remove)
    section_bloco.appendChild(area_de_cadastro)
    form.appendChild(section_bloco)

    remove.addEventListener('click', (ev) =>{
        ev.preventDefault()
        section_bloco.removeChild(area_de_cadastro)
        input1--
    })

})

button_cadastro.addEventListener('click', (ev) =>{
    
    const name =  document.getElementById('name').value
    const tecnologia_name = document.querySelectorAll(`input[id = 'tecnologias']`)
    const time_tecnologias = document.querySelectorAll(`input[type = 'radio']:checked`)

    if((name.length > 0) && (tecnologia_name.length == 0) && time_tecnologias.length == 0){
        alert("Cadastro concluído!" +
            "\nApenas o nome do Desenvolvedor foi inserido" +
            "\nNome do dev: " + name);
    }
    else if(name.length == 0 || tecnologia_name.length == 0|| time_tecnologias.length == 0){
        alert("Verifique se todos os espaços estão preenchidos!");
    }
    else if(name.length > 0 && tecnologia_name.length > 0 && time_tecnologias.length > 0){
        for(var i = 0; i < input1; i++ ){
            alert(
                "Cadastro concluido" +
                "\nNome do Usuário: " + name +
                "\nNome da tecnologia: " + tecnologia_name[i].value +
                "\nTempo de uso das tecnologias: " + time_tecnologias[i].value
            )
        
        }}

        console.log({name, tecnologia_name, time_tecnologias})

})

form.addEventListener('submit', (ev) =>{
    ev.preventDefault
})
