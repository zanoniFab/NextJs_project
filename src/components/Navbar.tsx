import Link from 'next/link';
export default function Navbar() {
    return (
        <ul>
          <li>
            <Link href="/times">
              Times de Futebol
            </Link>
          </li>
          <li>
            <p>
              Outro menu
            </p>
          </li>
        </ul>
    )
}