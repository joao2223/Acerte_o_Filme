import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import styles from './Filme.module.scss';
import filmes from '../../data/filmes.json';
import Inicio from "../Inicio";

export default function Filme() {
    const { id } = useParams();
    const filme = filmes.find(item => item.id === Number(id));
    const [imagem, setImagem] = useState<number>(0);
    const [nomeFilme, setNomeFilme] = useState<string>('');
    const [contador, setContador] = useState<number>(0);
    const [respostaErrada, setRespostaErrada] = useState<boolean>(false);
    const [terminou, setTerminou] = useState<boolean>(false);
    const navigate = useNavigate();
    

    useEffect(() => {
        const estadoFilmeArmazenado = localStorage.getItem(`estadoFilme_${id}`)
        if (estadoFilmeArmazenado) {
            const estadoFilmeParseado = JSON.parse(estadoFilmeArmazenado)
            setContador(estadoFilmeParseado.contador)
            setRespostaErrada(estadoFilmeParseado.respostaErrada)
            setTerminou(estadoFilmeParseado.terminou)
        }
    }, [id])

    useEffect(() => {
        function voltaInicio() {
            navigate('/')
        }
        window.addEventListener('popstate', voltaInicio)
        return () => {
            window.removeEventListener('popstate', voltaInicio)
        }
    }, [])

    useEffect(() => {
        if (terminou) {
            const estadoFilmeParaArmazenar = {
                contador: contador,
                respostaErrada: respostaErrada,
                terminou: terminou,
                id:id
            };
            localStorage.setItem(`estadoFilme_${id}`, JSON.stringify(estadoFilmeParaArmazenar))
        }
    }, [id, contador, respostaErrada, terminou])
   

    if (!filme) {
        return <Inicio />
    }

    const verificaFilme = () => {
        if (nomeFilme.toLowerCase() == filme.title.toLowerCase()) {
            setContador(prevContador => prevContador + 1)
            setRespostaErrada(false)
            setTerminou(true)
        }
        else {
            if (imagem != 4) {
                setImagem(prevImagem => prevImagem + 1)
                setRespostaErrada(true)
            }
            setContador(prevContador => prevContador + 1)
            if (contador == 4) {
                setTerminou(true)
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
                                className={index + 1 === contador
                                    ? (respostaErrada ? styles.numero_imagem_errado : styles.numero_imagem_certo)
                                    : index < contador ? styles.numero_imagem_errado : styles.numero_imagem}
                                onClick={() => {
                                    if (index - 1 < contador || terminou) {
                                        setImagem(index);
                                    }
                                }}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <form className={terminou ? styles.esconde : styles.container_input}>
                        <input type="text" className={styles.input} placeholder='Digite o nome do filme' onChange={(evento) => {
                            setNomeFilme(evento.target.value);
                        }} />
                        <button className={styles.botao_submit} onClick={(event) => {
                            event.preventDefault();
                            verificaFilme();
                        }}>
                            Submit
                        </button>
                    </form>
                    <div className={terminou && !respostaErrada ? styles.resultado : styles.esconde}>
                        <p className={styles.texto_resultado}>Você acertou!</p>
                        <p className={styles.texto_resultado_resposta}>{filme.title}</p>
                    </div>
                    <div className={terminou && respostaErrada ? styles.resultado : styles.esconde}>
                        <p className={styles.texto_resultado}>A resposta certa é:<br /></p>
                        <p className={styles.texto_resultado_resposta}>{filme.title}</p>
                    </div>
                </>
            } />
        </Routes>
    );
}