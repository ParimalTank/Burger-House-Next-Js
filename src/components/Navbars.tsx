import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import style from "../styles/Navbar.module.css";
import { ProductSlider } from './ProductSlider';

const Navbars = () => {
    return (
        <div className={`${style.navbarMain} fixed-top `}>
            {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#" className={style.navbarBrandMain}>
                            <Image src="/assets/img/logo.png" alt="Burger House" width={59} height={58} />
                            <span className={style.brandname}>BURGER HOUSE</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Image src="/assets/img/logo.png" alt="Burger House" width={59} height={58} />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className={style.offcanvasBodyMain}>
                                <div className={style.offcanvasBody}>
                                    <div className='text-end mb-3'>
                                        <Image src="/assets/img/delivery-icon.png" alt='delivery' className={style.deliveryIcon} width={41} height={33} />
                                        <span className={style.delivery}> Express Delivery
                                            <a className={style.call} href="https://web.whatsapp.com/send?phone=+4450687474&text=Hello%20Burger%20House%20%E2%9C%8B&source&data&app_absent" target="_blank">+1 234 567 890</a>
                                        </span>
                                    </div>
                                    <div>
                                        {/* className="justify-content-end flex-grow-1 pe-3" */}
                                        <Nav className={style.menu} >
                                            <Nav.Link className={style.submenu} href="#action1">Home</Nav.Link>
                                            <Nav.Link className={style.submenu} href="#action2">Menu</Nav.Link>
                                            <Nav.Link className={style.submenu} href="#action2">Our Story</Nav.Link>
                                            <Nav.Link className={style.submenu} href="#action2">Contect Us</Nav.Link>
                                        </Nav>
                                    </div>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    )
}

export default Navbars