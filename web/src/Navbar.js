export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="Kuchen&Co">Kuchen & Co</a>
        <ul>
            <CustomLink href="/sortiment">Sortiment</CustomLink>
            <CustomLink href= "/event">Events</CustomLink>
            <CustomLink href= "/kommentarseite">Kommentare</CustomLink>
        </ul>
    </nav>
}
function CustomLink({href, children, ...props}){
    const path = window.location.pathname
    return(
        <li className={path=== href ? "active" : ""}>
            <a href= {href} {...props}>{children}</a>
        </li>
    )
}