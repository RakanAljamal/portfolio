import { HomePage } from "../Components/HomePage";
import Head from "next/head"
import { params } from "../config/particles";
import Particles from "react-particles-js";
import { personalInfo } from "../static/personalInfo";

export default function Home({ initialState }) {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet"/>
                <title>NextJS</title>
            </Head>
            <Particles
                params={params}/>
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
