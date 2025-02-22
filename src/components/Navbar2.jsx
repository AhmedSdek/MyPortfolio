import { Container, Nav, Navbar } from "react-bootstrap"
import { navLinks } from "../constants";
import { logo } from "../assets";

function Navbar2() {
    return (
        <Navbar expand="lg" bg="dark" fixed="top" data-bs-theme="dark">
            <Container >
                <Navbar.Brand onClick={() => { window.scrollTo(0, 0) }} style={{ display: 'flex', alignItems: 'center' }} href="#home">
                    <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
                    <h3 style={{ marginLeft: '10px' }}>
                        Ahmed | Sdek
                    </h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{ justifyContent: 'flex-end' }} id="basic-navbar-nav">
                    <Nav>
                        {navLinks.map((link) => {
                            return (
                                <Nav.Link style={{ fontWeight: 'bold' }} key={link.id} href={`#${link.id}`}>{link.title}</Nav.Link>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbar2