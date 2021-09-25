import { HomePage } from "../components/HomePage";
import Head from "next/head"
import { params } from "../config/particles";
import Particles from "react-particles-js";
import { personalInfo } from "../static/personalInfo";
import Modal from "../components/Modal";

export default function Home({ initialState }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=device-dpi" />
                <title>Rakan Portfolio</title>
            </Head>

            {/*<Particles*/}
            {/*    params={params}/>*/}
            <HomePage initialState={initialState}/>
        </div>
    )
}

export async function getStaticProps(ctx) {
    return {
        props: {
            initialState: personalInfo
        }
    }
}
