import '../styles/Card.css'
import { For, onMount } from 'solid-js'
import { type ProjData, type ExpData } from '../data/Data'

export interface CardProps {
    info: Info<ProjData | ExpData>,
    // details: string[],
}

type Info<T extends ProjData | ExpData> = T extends ProjData ? ProjData : ExpData

export default function Card(props: CardProps) {
    function isProj(info: Info<ProjData | ExpData>): info is ProjData {
        return (info as ProjData).techStack !== null
    }

    function isExp(info: Info<ProjData | ExpData>): info is ExpData {
        return (info as ExpData).location !== null
    }

    onMount(() => {
        print()
    })

    return (
        <div>
            <div class='cardInfoContainer'>
            <h1>{props.info.title}</h1>
            
            { isProj(props.info) && 
                <p>{props.info.techStack}</p> 
            }
            
            { isExp(props.info) &&
                <span class='cardInfoContainer'>
                    <p>{props.info.location} </p>
                    <p>{props.info.start} - {props.info.end} </p>
                </span>
            }

            {/* <div>
                <ul>
                    <For each={props.details}>{(point, i) =>
                        <li>{point}</li>
                    }</For>
                </ul>
            </div> */}
            </div>
        </div>
    )
}