
import "./Nav.css"
import NavItem from "../NavItem/NavItem"
import Logo from '../Logo/Logo'

const Nav = () => {
    const navItems = [

        {
            id: 1,
            title: "Furniture"
        },

        {
            id: 2,
            title: "Shop"
        },

        {
            id: 3,
            title: "About us"
        },

        {
            id: 4,
            title: "Contact"
        },
    ]


    return (
        <div>
            <nav className="Nav">
                <div>
                    <Logo />
                </div>
                {navItems.map(el => <NavItem key={el.id} title={el.title} />)}
            </nav>
        </div>
    )
}

export default Nav