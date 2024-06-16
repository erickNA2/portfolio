import { Roboto, Cinzel, Inconsolata } from "next/font/google";

const inconsolata_init = Inconsolata({
    subsets: ["latin"],
    weight: '400',
    variable: '--font-inconsolata'
})

const roboto_init = Roboto({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-roboto'
})

const cinzel_init = Cinzel({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-cinzel'
})

export const roboto = roboto_init.variable
export const cinzel = cinzel_init.variable
export const inconsolata = inconsolata_init.variable