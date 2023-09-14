import styles from "../styles/TeamCard.module.css"

export default function TeamCard({clube}) {

    return (
            <div className={styles.teamCard}>
                <img src={clube.escudos["60x60"]}></img>
                <p> Nome: {clube.nome}</p>
                <p> Abreviação: {clube.abreviacao}</p>
            </div>
        
    )
}