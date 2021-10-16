import { NavLink } from 'react-router-dom';
import { Nav, Container, Navbar, Tabs, Tab } from 'react-bootstrap';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <>
    {/* <NavLink
      to="/register"
      className={styles.navLink}
      activeClassName={styles.navActiveLink}
    >
      Register
    </NavLink>

    <NavLink
      to="/login"
      className={styles.navLink}
      activeClassName={styles.navActiveLink}
    >
      Login
    </NavLink> */}
    <Container>
      <Tabs
        activeKey="/register"
        justify
        variant="tabs"
        className="mb-3"
        id="uncontrolled-tab-example"
      >
        <Tab

        // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav.Item>
        </Tab>

        <Tab>
          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
        </Tab>
      </Tabs>
    </Container>
  </>
);

export default AuthNav;
