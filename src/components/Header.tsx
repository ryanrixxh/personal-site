import '../styles/Header.css'
import Card from './Card' 

export default function Header() {
    return (
        <div>
            <h1 class='name'>Ryan Richards</h1>
            <div class='subheader-container'>
                <h2 class='subheader'>Experience</h2>
                <h2 class='subheader'>Projects</h2>
            </div>
            <hr class='solid' />
        </div>
    )
}