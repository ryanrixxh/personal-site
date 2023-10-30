interface CardProps {
    title: string,
    techStack?: string[],
}

export default function Card(props: CardProps) {
    return (
        <h1>{props.title}</h1>
    )
}