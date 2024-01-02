import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
        <img alt="SevenDJ" src="/MSDJ.jpg" style={{width: "50px", height: "50px"}} />SevenDJ
        </Link>
        <ul>
            <CustomLink to="/agenda">Agenda</CustomLink>
            <CustomLink to="/reservation">Réservation</CustomLink>
            <CustomLink to="/contacts">Contacts</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ to, children,...props}) {
    const resolvedPath = useResolvedPath(to, children)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={ isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}