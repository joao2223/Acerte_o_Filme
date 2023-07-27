import styles from './Cabecalho.module.scss'
import user from '../../assets/Cabecalho/user.svg'
import eye from '../../assets/Cabecalho/eye.svg'
import question from '../../assets/Cabecalho/question.svg'
import desk from '../../assets/Cabecalho/desk.svg'
import { useNavigate, } from 'react-router-dom'

export default function Cabecalho() {
    const navigate = useNavigate()

    function redirecionarParaInicio() {
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <button className={styles.botao_icone} onClick={() => redirecionarParaInicio()}>
                    <img src={desk} alt="" />
                </button>
                <img src={eye} alt="" />
                <img src={question} alt="" />
                <img src={user} alt="" />
            </div>
        </div>
    )
}
