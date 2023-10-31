import '../styles/Card.css'
import { For, onMount } from 'solid-js'
import { type ProjData, type ExpData } from '../data/Data'

type Data<T extends ProjData | ExpData> = T extends ProjData ? ProjData : ExpData

export interface CardProps {
    data: Data<ProjData | ExpData>,
}

export default function Card(props: CardProps) {
    function isProj(info: Data<ProjData | ExpData>): info is ProjData {
        return (info as ProjData).info.techStack !== null
    }

    function isExp(info: Data<ProjData | ExpData>): info is ExpData {
        return (info as ExpData).info.location !== null
    }

    onMount(() => {
        print()
    })

    return (
        <div>
            <div class='cardInfoContainer'>
            <h1>{props.data.info.title}</h1>
            
            { isProj(props.data) && 
                <p>{props.data.info.techStack}</p> 
            }
            
            { isExp(props.data) &&
                <span class='cardInfoContainer'>
                    <p>{props.data.info.location} </p>
                    <p>{props.data.info.start} - {props.data.info.end} </p>
                </span>
            }

            <div>
                <ul>
                    <For each={props.data.details}>{(point, i) =>
                        <li>{point}</li>
                    }</For>
                </ul>
            </div>
            </div>
        </div>
    )
}