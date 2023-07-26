import { Route, Routes, useNavigate, useParams } from "react-router-dom"
import styles from './Filme.module.scss'
import filmes from '../../data/filmes.json'
import seta_direita from '../../assets/Icons/setadireita.svg'
import seta_esquerda from '../../assets/Icons/setaesquerda.svg'
import Inicio from "../Inicio"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Filme() {
    const { id } = useParams();
    const filme = filmes.find(item => item.id === Number(id));
    const [imagem, setImagem] = useState(0);
    const { register, handleSubmit } = useForm();
    const [nomeFilme,setNomeFilme] = useState('')
    const onSubmit = (data:any) => console.log(data.value)

    if (!filme) {
        return <Inicio />
    }

    const proximaImagem = () => {
        setImagem((index) => (index + 1) % 5);
    }

    const imagemAnterior = () => {
        setImagem((index) => (index - 1) % 5);
    }

    const verificaFilme = () => {
        if (nomeFilme.toLowerCase() == filme.title.toLowerCase()){
            alert('acertou')
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
                        <button className={styles.botao_seta} onClick={() => imagemAnterior()}>
                            <img src={seta_esquerda} alt="" />
                        </button>
                        {filme.imagens?.map((_, index) => (
                            <button
                                key={index}
                                className={styles.numero_imagem}
                                onClick={() => setImagem(index)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button className={styles.botao_seta} onClick={() => proximaImagem()}>
                            <img src={seta_direita} alt="" />
                        </button>
                    </div>
                    <form className={styles.container_input} onSubmit = {handleSubmit(onSubmit)}>
                        <input type="text" className={styles.input} placeholder='Digite o nome do filme' onChange={(evento) => {
                            setNomeFilme(evento.target.value)
                        }}/>
                        
                        <button className={styles.botao_submit} onClick={() => verificaFilme()}>Submit</button>
                    </form>
                </>
            } />
        </Routes>
    )
}