import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id: '1',
      name: 'César',
      age: 18,
      email: 'bugmaer2006@gmail.com',
    },
    {
      id: '2',
      name: 'Yasmim',
      age: 18,
      email: 'yasmimoshchelski2005@gmail.com'
    }
  ]


  return (

    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" type="text" name="" id="" />
        <input placeholder='Idade' type="number" name="" id="" />
        <input placeholder='Email' type="email" name="" id="" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map(user => (
        <div className='card' key={user.id}>
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>
          <button className='trash'>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>

  )
}

export default Home
