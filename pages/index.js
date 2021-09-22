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
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=device-dpi"/>
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Ultra&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Bigshot+One&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,500;1,300&display=swap"
                      rel="stylesheet"/>
                <title>Rakan Portfolio</title>
                <meta name="description" content="This is a portfolio written in NextJS"/>
                <meta name="keywords"
                      content="rakan, rakan portfolio, rakan work, rakan dev, rakan nextjs, rakan aljamal, Rakan Aljamal, Rakan Aljamal Work"/>
                <meta name="author" content="Rakan Aljamal"/>
                <link rel="apple-touch-icon" sizes="180x180" href="../static/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png"/>
                <link rel="manifest" href="../static/site.webmanifest"/>
                <meta property="og:title" content="Rakan Portfolio"/>
                <meta property="og:image" content="https://i.ibb.co/8zNLzcX/image.png"/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="488"/>
                <meta property="og:image:height" content="789"/>
                <meta property="og:description" content="This is a website built in nextjs"/>
                <meta property="og:url" content="rakan.work"/>
                <meta property="og:type" content="website"/>


            </Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=device-dpi" />
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
