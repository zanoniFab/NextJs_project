import Link from "next/link";

export async function getStaticProps(context) {
    const {params} = context;
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const user = await data.json();
    return {
        props:{ user }
    }
}

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map((user) => {
        return {
            params: {
                userId: `${user.id}`
            },
        }
    })
    return {
        paths, fallback: false
    }
}

export default function Todo({user}) {
    
    return (
        <>
            <Link href="/users">Voltar</Link>
            <p> Nome: {user.name}</p>
            <p> E-mais: {user.email}</p>
        </>
    )
}