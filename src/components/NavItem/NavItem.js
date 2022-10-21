import "../NavItem/NavItem.css"

const NavItem = (props) => {
   
    return (
        <div className="NavItems">
            <div key={props.id}>{props.title}</div>
        </div>
    )
}

export default NavItem