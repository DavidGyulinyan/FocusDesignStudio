import "../NavItem/NavItem.css"

const NavItem = (props) => {
   
    return (
        <div className="NavItems">
        <a href="#" key={props.id}>{props.title}</a>
        </div>
    )
}

export default NavItem