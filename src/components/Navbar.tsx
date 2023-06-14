import Link from 'next/link';
export default function Navbar() {
    return (
        <ul>
          <li>
            <Link href="/users">
              Users
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