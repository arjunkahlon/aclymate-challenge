import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <Navbar variant='danger' bg='danger' fixed='top' className='bg-gradient'>
      <Navbar.Brand className='ms-4 text-light'>
       Top 100 Albums
      </Navbar.Brand>
      <Nav className='justify-content-end flex-grow-1'>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;