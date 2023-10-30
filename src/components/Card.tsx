import { onMount } from 'solid-js'

export interface CardProps {
    title: string,
    info: Info<ProjDetails | ExpDetails>,
}

interface ProjDetails {
    techStack: string[],
}

interface ExpDetails {
    location: string,
    start: number,
    end: number,
}

type Info<T extends ProjDetails | ExpDetails> = T extends ProjDetails ? ProjDetails : ExpDetails

export default function Card(props: CardProps) {
    onMount(() => {
        console.log(props.info)
    })

    return (
        <h1>{props.title}</h1>
    )
}