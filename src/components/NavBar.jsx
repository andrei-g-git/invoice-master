import "../css/NavBar.scss";

function NavBar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-upper-left">
                <div className="logo">

                </div>
            </div>
            <div className="nav-bar-end"> {/* this should belong to a user login feature. Users should have own table connected to the order table. Only fetch invoices where submitted user name = users.LOGIN_ID */}
                <div className="avatar">
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar;