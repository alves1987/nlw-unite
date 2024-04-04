//array 
let participantes = [
  {
    nome: "Ana Paula",
    email: "anasc_sc@hotmail.com",
    dataInscricao: new Date(2024, 1, 25, 19, 18),
    dataCheckIn: null
  },
  {
    nome: "Thiago Machado Alves",
    email: "thiagoalves87@hotmail.com",
    dataInscricao: new Date(2024, 5, 25, 19, 23),
    dataCheckIn: new Date(2024, 3, 01, 20, 20)
  },
  {
    nome: "Carla Oliveira",
    email: "carlaoliveira@gmail.com",
    dataInscricao: new Date(2024, 3, 20, 10, 15),
    dataCheckIn: new Date(2024, 3, 20, 12, 30)
  },
  {
    nome: "Mariana Silva",
    email: "marianasilva@hotmail.com",
    dataInscricao: new Date(2024, 2, 10, 14, 45),
    dataCheckIn: new Date(2024, 2, 10, 18, 00)
  },
  {
    nome: "Pedro Santos",
    email: "pedrosantos@yahoo.com",
    dataInscricao: new Date(2024, 2, 5, 8, 30),
    dataCheckIn: null
  },
  {
    nome: "Fernanda Oliveira",
    email: "fernanda_oliveira@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 17, 10),
    dataCheckIn: new Date(2024, 2, 1, 21, 30)
  },
  {
    nome: "Lucas Almeida",
    email: "lucas.almeida@hotmail.com",
    dataInscricao: new Date(2024, 2, 15, 20, 40),
    dataCheckIn: null
  },
  {
    nome: "Amanda Oliveira",
    email: "amanda.oliveira@gmail.com",
    dataInscricao: new Date(2024, 1, 8, 11, 20),
    dataCheckIn: new Date(2024, 2, 8, 15, 45)
  },
  {
    nome: "Rafaela Souza",
    email: "rafaela.souza@yahoo.com",
    dataInscricao: new Date(2024, 2, 12, 9, 55),
    dataCheckIn: null
  },
  {
    nome: "Bruno Ferreira",
    email: "brunoferreira@gmail.com",
    dataInscricao: new Date(2024, 2, 28, 16, 30),
    dataCheckIn: null
  }
]

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to
  (participante.dataInscricao) 

  let dataCheckIn = dayjs(Date.now()).to
  (participante.dataCheckIn) 

  //condicional
  if(participante.dataCheckIn == null) {
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }

  return `
   <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
        </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
   `
}

const atualizarLista = (participantes) => {
  let = output = ""
 //estrutura de repetição - loop
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }

 //substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao:new Date(),
    dataCheckIn: null
  }

  //verificar se o participante está cadastrado
  const participanteExiste = participantes.find(
    (p) => {
      return p.email == participante.email
    }
  )
  if(participanteExiste){
    alert('Email já cadastrado!')
    return
  }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  //limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //confirmar se realmente a pessoa quer fazer check-in
  const mensagemConfirmacao = 'Tem certeza que deseja fazer o check-in? '
    if(confirm(mensagemConfirmacao) == false){
      return
    }

  //encontrar o participante na lista
  const participante = participantes.find((p) => {
    return p.email ==event.target.dataset.email
  })
  //atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  //atualizar a lista de participante
  atualizarLista(participantes)

}
