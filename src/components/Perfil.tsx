import {useEffect, useState} from 'react'

interface perfilProps {
    repository: {
        avatar_url: string;
        name: string;
    }
}

export function Perfil (props: perfilProps){

    const [perfil, setPerfil] = useState();

    useEffect(() => {
        fetch('https://api.github.com/users/ocaique72')
        .then(response => response.json())
        .then(data => setPerfil(data))
    }, [])

    return (
        <div>
            <img src={props.repository.avatar_url} />
            <p>{props.repository.name}</p>
        </div>
    )
}