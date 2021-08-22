import { HomePage } from "../Components/HomePage";
import Head from "next/head"

export default function Home({ initialState }) {
    return (
        <div>
            <Head>
                <style>
                    @import url(&#34;https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@700&display=swap&#34;);
                </style>
                <title>NextJS</title>
            </Head>
            <HomePage initialState={initialState}/>
        </div>
    )
}

export async function getStaticProps(ctx) {
    return {
        props: {
            initialState: 'Hey Everyone it looks like worked'
        }
    }
}
