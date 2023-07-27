import { Route, Routes, useNavigate, useParams } from "react-router-dom"
import styles from './Filme.module.scss'
import filmes from '../../data/filmes.json'
import Inicio from "../Inicio"
import { useState } from "react"


export default function Filme() {
    const { id } = useParams()
    const filme = filmes.find(item => item.id === Number(id))
    const [imagem, setImagem] = useState(0)
    const [nomeFilme, setNomeFilme] = useState('')
    const [contador, setContador] = useState(0)
    const [respostaErrada,setRespostaErrada] = useState(false)

    if (!filme) {
        return <Inicio />
    }

    const verificaFilme = () => {
        if (nomeFilme.toLowerCase() == filme.title.toLowerCase()) {
            alert('acertou')
            setContador(prevContador => prevContador + 1)
            setRespostaErrada(false)
        }
        else {
            if (imagem != 4) {
                setImagem(prevImagem => prevImagem + 1)
                setRespostaErrada(true)
            }
            setContador(prevContador => prevContador + 1)
            if (contador == 4) {
                alert('voce perdeu')
            }
        }
    }

    return (
        <Routes>
            <Route index element={
                <>
                    <p className={styles.titulo}> Qual é o filme?</p>
                    <div className={styles.container_filme}>
                        <img src={filme.imagens?.[imagem]} alt="" className={styles.imagem_filme} />
                    </div>
                    <div className={styles.centraliza_icones}>
                        {filme.imagens?.map((_, index) => (
                            <button
                                key={index}
                                className={index + 1 === contador ? (respostaErrada ? styles.numero_imagem_errado : styles.numero_imagem_certo) : styles.numero_imagem}
                                onClick={() => setImagem(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <form className={styles.container_input}>
                        <input type="text" className={styles.input} placeholder='Digite o nome do filme' onChange={(evento) => {
                            setNomeFilme(evento.target.value)
                        }} />

                        <button className={styles.botao_submit} onClick={(event) => {
                            event.preventDefault()
                            verificaFilme()
                        }}>
                            Submit
                        </button>
                    </form>
                </>
            } />
        </Routes>
    )
}
