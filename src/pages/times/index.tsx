import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps() {
    const data = await fetch('https://api.cartola.globo.com/clubes');
    const dataJson = await data.json();
    const teams = Object.values(dataJson);
    return {
        props: {teams},
    }
}
export default function TeamsList({teams}) {
    const router = useRouter();
    const teamId = router.query.teamId;

    return (
        <>
        <Link href='/'>Voltar</Link>
            <h1>Dados da Api</h1>

            <ul>
                {teams.map((team)=>(
                    <li><Link href={`/times/${team.id}`}>{team.nome}</Link></li>
                ))}
                
            </ul>
        </>
    )
}
