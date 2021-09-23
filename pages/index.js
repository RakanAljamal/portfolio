import { HomePage } from "../components/HomePage";
import Head from "next/head"
import { params } from "../config/particles";
import Particles from "react-particles-js";
import { personalInfo } from "../static/personalInfo";
import Modal from "../components/Modal";

export default function Home({ initialState }) {
    return (
        <div>
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
