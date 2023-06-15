import Link from "next/link";
import styles from "../../styles/Times.module.css"
export async function getStaticProps() {
    const data = await fetch('https://api.cartola.globo.com/clubes');
    const dataJson = await data.json();
    const teams = Object.values(dataJson);
    return {
        props: {teams},
    }
}
export default function TeamsList({teams}) {


    return (
        <div className={styles.listContainer}>
            <Link className={styles.voltar} href='/'>Voltar</Link>
            <h1>Times disponíveis para consulta:</h1>

            <ul className={styles.teamList}>
                {teams.map((team)=>(
                    <li key={team.id}>
                        <img
                            src = {team.escudos["60x60"]} 
                            width="10"
                            height="10"
                            alt="logo time"
                        />
                        <Link href={`/times/${team.id}`}>{team.nome}</Link></li>
                ))}
                
            </ul>
        </div>
    )
}
