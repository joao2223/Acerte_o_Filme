import { useNavigate } from 'react-router-dom';
import styles from './Cards.module.scss'

export default function Cards() {
    const navigate = useNavigate()

    function redirecionarParaFilmes(id: number) {
        navigate(`/filme/${id}`, { state: { id }, replace: true })
        console.log('1')
    }

    return (
        <div className={styles.cards}>
            <button className={styles.card} onClick={() => redirecionarParaFilmes(1)}>1</button>
            <button className={styles.card} onClick={() => redirecionarParaFilmes(2)}>2</button>
            <button className={styles.card} onClick={() => redirecionarParaFilmes(3)}>3</button>
            <button className={styles.card} onClick={() => redirecionarParaFilmes(4)}>4</button>
            <button className={styles.card} onClick={() => redirecionarParaFilmes(5)}>5</button>
            <button className={styles.card}>6</button>
            <button className={styles.card}>7</button>
            <button className={styles.card}>8</button>
            <button className={styles.card}>9</button>
            <button className={styles.card}>10</button>
            <button className={styles.card}>11</button>
            <button className={styles.card}>12</button>
            <button className={styles.card}>13</button>
            <button className={styles.card}>14</button>
            <button className={styles.card}>15</button>

        </div>
    )
}
