
import MenuTeams from "@/components/MenuTeams";
import TeamCard from "@/components/TeamCard";
import styles from "../../styles/Times.module.css"
export const getStaticProps = async () => {
    const resp = await fetch("https://api.cartola.globo.com/clubes");
    var data = await resp.json();
    var dataArray = Object.values(data);
    return {
        props: {dataArray},
    }
}

export default function TeamsList({dataArray}) {
    
    const listaOrdenada = dataArray.sort(function(a,b){
                if (a.nome > b.nome) {
                    return 1;
                }
                if (a.nome < b.nome) {
                    return -1;
                }
                return 0;
            });


    var cards = listaOrdenada.map((clube)=> {
        return <TeamCard clube={clube}/>
    })


    return (
    <div className={styles.container}>
        <MenuTeams listaTimes={listaOrdenada}></MenuTeams>
        <div className={styles.boxCards}>
            {cards}
        </div>
    </div>
    )
}
