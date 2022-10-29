import Head from "next/head";
import Image from "next/image";
import LandingComponent from "layouts/Landing";
import PartnersComponent from "layouts/Partners";

export default function Home() {
    return (
        <>
            <LandingComponent />
            <PartnersComponent />
        </>
    )
}
