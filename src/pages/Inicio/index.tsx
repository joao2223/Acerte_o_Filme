import Cabecalho from "../../components/Cabecalho";
import Cards from "../../components/Cards";
import styles from './Inicio.module.scss'

export default function Inicio() {
    return (
        <div>
            <p className={styles.titulo}>Escolha um card: </p>
            <Cards />
        </div>
    )
}