import { HomePage } from "../Components/HomePage";
import Head from "next/head"
import { params } from "../config/particles";
import Particles from "react-particles-js";
import { personalInfo } from "../static/personalInfo";

export default function Home({ initialState }) {
    return (
        <div>
            <Head>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,200&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Parisienne&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');</style>
                <title>NextJS</title>
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
