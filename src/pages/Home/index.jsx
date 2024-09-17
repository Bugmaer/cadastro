import { useEffect, useState, useRef} from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'



function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const [users, setUsers] = useState([])

  async function getUsers(){
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }

  async function createUsers(){
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUser(id){
    await api.delete(`/users/${id}`)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])




  return (

    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" type="text" name="" id="" ref={inputName}/>
        <input placeholder='Idade' type="number" name="" id="" ref={inputAge}/>
        <input placeholder='Email' type="email" name="" id="" ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (
        <div className='card' key={user.id}>
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>
          <button className='trash' onClick={() => deleteUser(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>

  )
}

export default Home
