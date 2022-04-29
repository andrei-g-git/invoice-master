
import { connect } from 'react-redux';
import HamburgerMenu from './HamburgerMenu';
import { openingNavMenu } from "../redux/actions";
import "../css/NavBar.scss";

function NavBar(props) {
    return (
        <div className="nav-bar">
            <div className="nav-bar-upper-left">
                <div className="logo">

                </div>
            </div>

            <div className="hamburger"
                onClick={() => props.handleHamburger(! props.menuOpen)}
            >

            </div>

            <div className="link-container">
                <a className="link"
                    href="/"
                >
                    Home
                </a>

                <a className="link"
                    href="/"
                >
                    Invoices
                </a>

                <a className="link"
                    href="/anon-stats"
                >
                    Statistics
                </a>
            </div>

            {
                props.menuOpen ?
                    <HamburgerMenu />
                :
                    null
            }
            
            <div className="nav-bar-end"> {/* this should belong to a user login feature. Users should have own table connected to the order table. Only fetch invoices where submitted user name = users.LOGIN_ID */}
                <div className="avatar">
                    
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        menuOpen: state.ui.navMenuOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleHamburger: (isOpen) => {
            dispatch(openingNavMenu(isOpen));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)