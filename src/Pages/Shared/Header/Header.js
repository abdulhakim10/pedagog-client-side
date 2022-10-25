import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Pedagog
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                <Button className='m-2' size="xs">
                    <Link to='/login'>Login</Link>
                </Button>
                <Button className='m-2' size="xs">
                    <Link to='/register'>Register</Link>
                </Button>
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link
                        to="/"
                    //   active={true}
                    >
                        Home
                    </Link>
                    <Navbar.Link href="/navbars">
                        About
                    </Navbar.Link>
                    <Link to='/courses'>
                        Courses
                    </Link>
                    <Link to='/blog'>Blog</Link>
                    <Navbar.Link href="/navbars">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;