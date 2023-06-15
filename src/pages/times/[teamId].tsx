import Link from "next/link";
import styles from "../../styles/teamId.module.css"


export async function getStaticProps(context) {
    const {params} = context;
    const data = await fetch('https://api.cartola.globo.com/clubes');
    const dataJson = await data.json();
    const teamsList = Object.values(dataJson);
    const team = buscarTime(teamsList,params.teamId);
    return {
        props: {team},
    }
}

function buscarTime(teams,idTime) {
    const timeEscolhido = teams.filter((time)=> {
        if(time.id==idTime){
            return time;
        }

    })
    return timeEscolhido[0];
}
export async function getStaticPaths() {
    
    const response = await fetch('https://api.cartola.globo.com/clubes');
    const dataJson = await response.json();
    const teams = Object.values(dataJson);
    const paths = teams.map((team) => {
        if(typeof team == "object" && team != null){
            return {
                params: {
                    teamId: `${team["id"]}`
                },
            }

        }

    })
    return {
        paths, fallback: false
    }
}

export default function Time({team}) {

    return (
        <div className={styles.teamContainer}>
            <Link href="/times">Voltar</Link>
            <div className={styles.cardTeam}>
                <img src={team.escudos["60x60"]}></img>
                <p> Nome: {team.nome}</p>
                <p> Abreviação: {team.abreviacao}</p>
            </div>
            
        </div>
    )
}