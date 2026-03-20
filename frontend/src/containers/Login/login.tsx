import type{ Heads } from '../../types/Head.ts'

import Header from "../Head/Head";
import Footer from "../Footer/Footer.tsx";

export default function Login_Page(){

    const headType: Heads = {
        head_type: true
    }

    return(
        <main style={{ marginTop: "80px" }}>
        
            <Header head_type={headType.head_type}/>

            <Footer></Footer>

        </main>
    )

}