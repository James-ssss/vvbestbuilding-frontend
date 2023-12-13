import Link from "next/link";
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "react-bootstrap";

const MainContainer = ({children}) => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Строительная компания</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} href="/createtask">Создать заявку</Nav.Link>
                    <Nav.Link as={Link} href="/createuser">Создать пользователя</Nav.Link>
                    <Nav.Link as={Link} href="/tasks">Список заявок</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div>
            {children}
        </div>
        </>
    )
};

export default MainContainer;