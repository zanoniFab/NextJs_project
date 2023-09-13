import Navbar from './Navbar';
import Footer from './Footer';
import {ReactNode} from "react";
import styles from "../styles/MainContainer.module.css"
interface Props {
    children: ReactNode
}

export default function MainContainer({children}: Props) {

    return (
        <div className={styles.mainContainer}>
            <Navbar/>
                <div>{children}</div>
            <Footer/>
        </div>
    )
}