import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    return {
        props: {users},
    }
}
export default function UserList({users}) {
    const router = useRouter();
    const userId = router.query.userId;

    return (
        <>
        <Link href='/'>Voltar</Link>
            <h1>Dados da Api</h1>

            <ul>
                {users.map((user)=>(
                    <li><Link href={`/users/${user.id}`}>{user.name}</Link></li>
                ))}
                
            </ul>
        </>
    )
}