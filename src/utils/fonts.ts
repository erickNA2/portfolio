import { Roboto, Cinzel,  EB_Garamond } from "next/font/google";

const ebgaramond_init = EB_Garamond({
    subsets: ["latin"],
    weight: '400',
    variable: '--font-ebgaramond'
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
export const ebgaramond = ebgaramond_init.variable