import styles from './Cabecalho.module.scss'
import user from '../../assets/Cabecalho/user.svg'
import eye from '../../assets/Cabecalho/eye.svg'
import question from '../../assets/Cabecalho/question.svg'
import desk from '../../assets/Cabecalho/desk.svg'

export default function Cabecalho() {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <img src={desk} alt="" />
                <img src={eye} alt="" />
                <img src={question} alt="" />
                <img src={user} alt="" />
            </div>
        </div>
    )
}