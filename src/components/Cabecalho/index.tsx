import styles from './Cabecalho.module.scss'
import eye from '../../assets/Cabecalho/eye.svg'
import question from '../../assets/Cabecalho/question.svg'
import desk from '../../assets/Cabecalho/desk.svg'
import image from '../../assets/Cabecalho/image.svg'
import next from '../../assets/Cabecalho/next.svg'
import { useNavigate, } from 'react-router-dom'
import { useState } from 'react'

export default function Cabecalho() {
    const navigate = useNavigate()
    const [show, setShow] = useState<boolean>(false)

    function redirecionarParaInicio() {
        navigate('/')
    }

    function fecharModal() {
        setShow(false)
    }
    function abrirModal(){
        setShow(true);
    }

    return (
        <>
            <div className={styles.container}>

                <div className={styles.icons}>
                    <button className={styles.botao_icone} onClick={() => redirecionarParaInicio()}>
                        <img src={desk} alt="" />
                    </button>
                    <button className={styles.botao_icone} onClick={() => abrirModal()}>
                        <img src={question} alt="" />
                    </button>
                </div>

            </div>
            <div className={show ? styles.modal : styles.esconde}>
                <div className={styles.cabecalho_modal}>
                    <button onClick={() => fecharModal()} className={styles.botao_fecha}>X</button>
                    <h1 className={styles.titulo_modal}>Como jogar?</h1>
                </div>

                <div>
                    <div className={styles.informacao}>
                        <img src={image} alt="" className={styles.imagem_info} />
                        <p className={styles.texto_info}>Uma imagem irá aparecer para você tentar acertar</p>
                    </div>
                    <div className={styles.informacao}>
                        <img src={eye} alt="" className={styles.imagem_info} />
                        <p className={styles.texto_info}>Cada palpite errado vai exibir uma nova imagem</p>
                    </div>
                    <div className={styles.informacao}>
                        <img src={next} alt="" className={styles.imagem_info} />
                        <p className={styles.texto_info}>Se quiser pular a imagem, basta clicar em submit e deixar o campo em branco</p>
                    </div>
                </div>
            </div>
        </>
    )
}