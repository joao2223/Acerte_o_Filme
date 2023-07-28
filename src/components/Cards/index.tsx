import { useNavigate } from 'react-router-dom';
import { getEstadoFilmeTerminou } from '../../utils/localStorageUtils';
import styles from './Cards.module.scss'
import filmes from '../../data/filmes.json'

export default function Cards() {
    const navigate = useNavigate()

    function redirecionarParaFilmes(id: number) {
        navigate(`/filme/${id}`, { state: { id }, replace: true })
    }

    function acertouFilme(id: number) {
        const dadosFilme = getEstadoFilmeTerminou(id)
        if (dadosFilme == null) {
            return null
        }
        if (dadosFilme.contador == 5) {
            return (false)
        }
        else {
            return (true)
        }
    }

    return (
        <div className={styles.cards}>
            {filmes.map(filme => (
                <button className={acertouFilme(filme.id) !== null ? (acertouFilme(filme.id) ? styles.card_acertou : styles.card_errou) : styles.card} onClick={() => redirecionarParaFilmes(filme.id)}>{filme.id}</button>
            ))}
        </div>
    )
}