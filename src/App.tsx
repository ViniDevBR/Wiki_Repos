//REACT
import { ChangeEvent, useEffect, useState } from 'react'
//COMPONENTE
import { Button } from './components/Button'
import { Input } from './components/Input'
import { ItemRepo } from './components/ItemRepo'
import { UserInfo } from './components/UserInfo'
//API
import { API } from './services/api'
//STYLES
import { Container } from './styles/styles'
//IMG
import githubLogo from './assets/github.png'

interface RepoProps {
  id: number
  name: string
  full_name: string
  html_url: string
  language: string
  owner: {
    html_url: string
    login: string
    avatar_url: string
  }
}


function App() {
  const [textInput, setTextInput] = useState<string>('')
  const [repos, setRepos] = useState<RepoProps[]>([])

  async function handleSearchRepos() {
    const { data } = await API.get(`/repos/${textInput}`)
    
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
      
      if(!isExist){
        setRepos(prev => [...prev, data])
        setTextInput('')
        return
      }
    }
    alert('Repositorio privado ou não disponivel')
  }

  function handleTextInput(event: ChangeEvent<HTMLInputElement>) {
    setTextInput(event.target.value)
  }
  function handleRemove(id: number){
    const newRepos = repos.filter((repo) => repo.id !== id);

    setRepos(newRepos)
  }

  return (
    <Container className="App">
      <img src={githubLogo} width={72} height={72} alt="" />
      <div className='infos'>
        {repos.map(repo => {  
          return (
            <UserInfo
              key={repo.id} 
              img={repo.owner.avatar_url} 
              name={repo.owner.login}
              onClick={repo.owner.html_url}
            />
          )
        })}
      </div>
      <Input 
        value={textInput} 
        onChange={handleTextInput}
      />
      <Button onClick={handleSearchRepos}/>
      {repos.map(repo => {
        return (
          <ItemRepo 
            key={repo.id}
            name={repo.name}
            full_name={repo.full_name}
            url={repo.html_url}
            tech={repo.language}
            onClick={() => handleRemove(repo.id)}
          />
      )})}
      
    </Container>
  )
}

export default App