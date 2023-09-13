
import MenuTeams from "@/components/MenuTeams";
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

    

    return (
    <div>
        <MenuTeams listaTimes={listaOrdenada}></MenuTeams>
    </div>
    )

}


// import Link from "next/link";
// import styles from "../../styles/Times.module.css"
// export async function getStaticProps() {
//     const data = await fetch('https://api.cartola.globo.com/clubes');
//     const dataJson = await data.json();
//     const clubes = Object.values(dataJson);
//     return {
//         props: {clubes},
//     }
// }
//     // console.log(listaOrdenada[0]); //objeto inteiro de um time

    
//     var clubesAgrupadosPorLetra: any = [];

//     while (listaOrdenada.length != 0) {
//         var primeiraLetra = listaOrdenada[0].nome[0]; //tá pegando certo a primeira letra
//         var listaPorLetra = listaOrdenada.filter((clube)=>clube.nome[0]==primeiraLetra); //nova lista filtrada
//         clubesAgrupadosPorLetra.push(listaPorLetra); //adiciona na lista separado por letra
//         listaOrdenada.splice(0,listaPorLetra.length); //cortar da lista antiga
//     }    
//     // console.log(clubesAgrupadosPorLetra[0])
//     //console.log("clubesA: "+ clubesA);
//     // clubesA.map((clube)=>console.log(clube.nome))
//     clubesAgrupadosPorLetra.map((item)=>item.map((clube)=>console.log(clube.nome)))
//     var arrayQualquer = clubesAgrupadosPorLetra[0];
//     console.log(Array.isArray(arrayQualquer));

//     return (
//         <div className={styles.listContainer}>
//             <Link className={styles.voltar} href='/'>Voltar</Link>
//             <h1>Times disponíveis para consulta:</h1>
//             <ul className={styles.teamList}>
//                 {clubes.map((team)=>(
//                     <li key={team.id}>
//                         <img
//                             src = {team.escudos["60x60"]} 
//                             width="10"
//                             height="10"
//                             alt="logo time"
//                         />
//                         <Link href={`/times/${team.id}`}>{team.nome}</Link></li>
//                 ))}
    
//             </ul>
//         </div>
//     )
// }





// ESTÁ FUNCIONANDO
// return (
//     <div className={styles.listContainer}>
//         <Link className={styles.voltar} href='/'>Voltar</Link>
//         <h1>Times disponíveis para consulta:</h1>

//         <ul className={styles.teamList}>
//             {listaOrdenada.map((team)=>(
//                 <li key={team.id}>
//                     <img
//                         src = {team.escudos["60x60"]} 
//                         width="10"
//                         height="10"
//                         alt="logo time"
//                     />
//                     <Link href={`/times/${team.id}`}>{team.nome}</Link></li>
//             ))}
            
//         </ul>
//     </div>
// )
// }
