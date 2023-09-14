import styles from "../styles/TeamCard.module.css"
import Link from "next/link"
export default function TeamCard({clube}) {

    return (
            <Link className={styles.teamCard} href={`/times/${clube.id}`}>
                <img src={clube.escudos["60x60"]}></img>
                <p> Nome: {clube.nome}</p>
                <p> Abreviação: {clube.abreviacao}</p>
            </Link>
        
    )
}