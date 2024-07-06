import { Reveal } from "../Animations/Reveal";
import SectionStarter from "../sectionstarter";

export default function Globus() {
    return (
        <>
        <section className="py-24">
            <div className="w-sectionMain mx-auto max-w-4xl text-center">
            <Reveal>
                <h1 className="text-heroHeading font-[700] mb-[10px] text-white">
                Mere om ejerne bag Brandowners club
                </h1>
                </Reveal>
                <img className="w-full" src="/boc/globe.png"></img>
            </div>
        </section>
        <section>
            <div className="w-sectionMain mt-[-400px] mx-auto max-w-6xl text-center grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div style={{background: "linear-gradient(90deg, rgba(40,80,23,1) 0%, rgba(33,150,10,1) 100%)"}} className="p-10 rounded-2xl flex flex-col gap-4 border-2 border-white">
                    <h2 className="font-semibold text-left text-xl">Fra 0  -  2.000.000 på 6 måneder</h2>
                    <p className="text-left">Gustav Aabro og Filip Mellbin er ejerne bag tøjbrandet Ngoodso. De gik fra 0 - 2.000.000,- i omsætning på under 6 måneder. Uden hverken tårnhøje annoncebudgetter, men faktisk primært grundet deres unikke forståelse for branding, organisk markedsføring og kreative designs. Nu lærer de dig om hvordan du kan gøre netop det samme.</p>
                </div>
                <div style={{background: "linear-gradient(90deg, rgba(40,80,23,1) 0%, rgba(33,150,10,1) 100%)"}} className="p-10 rounded-2xl flex flex-col gap-4 border-2 border-white">
                    <h2 className="font-semibold text-left text-xl">Millionforretning som teenagers</h2>
                    <p className="text-left">Trods Gustav og filips unge alder på 17 & 21 kunne de formå at få stor succes med deres tøjbrand.</p>
                </div>
                <div style={{background: "linear-gradient(90deg, rgba(40,80,23,1) 0%, rgba(33,150,10,1) 100%)"}} className="p-10 rounded-2xl flex flex-col gap-4 border-2 border-white">
                    <h2 className="font-semibold text-left text-xl">Fik hjælp udefra</h2>
                    <p className="text-left">Gustav & Filip succes skyldtes ikke blot deres talent, men snarere deres evne til at være villig til at række ud til kloge hoveder indenfor specifikke felter. I brand owners club modtager du bla. viden fra store markedsførings specialister.</p>
                </div>
            </div>
        </section>
        </>
    )
}