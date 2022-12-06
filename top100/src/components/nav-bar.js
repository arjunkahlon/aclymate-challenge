import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <Navbar variant='dark' bg='dark' fixed='top'>
      <Navbar.Brand className='ms-4'>
       Top 100 Songs
      </Navbar.Brand>
      <Nav className='justify-content-end flex-grow-1'>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;