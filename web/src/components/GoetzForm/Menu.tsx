import { Link } from 'react-router-dom'

export function Menu() {
    return(
        <div id="menu">
        <ul>
            <div id="topicos">
                <li><Link to="/">Home</Link></li>
            </div>
            <div id="topicos">
                <li><Link to="/Pagina2">Info</Link></li>
            </div>
            <div id="topicos">
                <li><Link to="/Pagina3">Images New</Link></li>
            </div>
            <div id="topicos">
                <li><Link to="/Pagina4">Images Old</Link></li>
            </div>
        </ul>
    </div>
    );
}

