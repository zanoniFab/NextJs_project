import Link from "next/link";
import styles from "../styles/MenuList.module.css"
export default function MenuTeams({listaTimes}) {

    return (
        <div className={styles.boxList}>
            <h3>Times disponíveis para consulta:</h3>
            <div className={styles.listContainer}>
                <ul className={styles.teamList}>
                    {listaTimes.map((clube)=>
                        <li key={clube.id} >
                            <img
                            src = {clube.escudos["60x60"]} 
                            width="10"
                            height="10"
                            alt="logo"
                            />
                            <Link href={`/times/${clube.id}`}>{clube.nome}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}