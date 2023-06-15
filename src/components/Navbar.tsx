import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src= "/bola.png"
            width="30"
            height="30"
            alt="Bola"
          />
        </div>
        <ul >
          <li>
            <Link href="/">
              Início
            </Link>
          </li>
          <li>
            <Link href="/times">
              Times de Futebol 
            </Link>
          </li>
        </ul>
      </nav>
    )
}