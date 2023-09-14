import Navbar from './Navbar';
import Footer from './Footer';
import {ReactNode} from "react";
import "../styles/globals.css"

interface Props {
    children: ReactNode
}

export default function MainContainer({children}: Props) {

    return (
        <>
            <Navbar/>
            <main className='main-container'>{children}</main>
            <Footer/>
        </>
    )
}