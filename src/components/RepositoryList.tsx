import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'
import {useState, useEffect} from 'react'
import { Perfil } from './Perfil'

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/ocaique72/repos')
        //pega a resposta e converte pra json
        .then(response => response.json())
        //quando for covnertida tera os dados ou DATA
        .then(data => setRepositories(data))
        //e salver na variavel de repositorios

    }, [])

    return (

        <section className='repository-list'>
            <h1>Lista de repositorios</h1>
            <ul>
                {repositories.map(repository =>{
                    return <RepositoryItem 
                     repository={repository}
                     key={repository.name}
                    />
                } )}
                
            </ul>
        </section>
    )
}