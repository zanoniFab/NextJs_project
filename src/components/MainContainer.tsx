import Navbar from './Navbar';
import Footer from './Footer';
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export default function MainContainer({children}: Props) {

    return (
        <>
            <Navbar/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}