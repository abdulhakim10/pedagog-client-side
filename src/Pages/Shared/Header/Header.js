import { Avatar, Button, Dropdown, Navbar, Tooltip } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className='border p-2'>
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

                    {user?.uid ?
                        <Button onClick={handleLogout} className='m-2' size="xs">
                            <Link to=''>Logout</Link>
                        </Button>
                        :
                        <>
                            <Button className='mr-2 my-2' size="xs">
                                <Link to='/login'>Login</Link>
                            </Button>
                            <Button className='mr-2 my-2' size="xs">
                                <Link to='/register'>Register</Link>
                            </Button>
                        </>
                    }
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Tooltip
                            content={user?.uid ?
                                user?.displayName
                                :
                                'user name'
                            }
                            placement="bottom"
                        >
                            <Avatar alt="User settings" img={user?.photoURL} rounded={true} />
                        </Tooltip>}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {user?.uid ?
                                    user?.displayName
                                    : 'user name'
                                }
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {user?.uid ?
                                    user?.email
                                    : 'user email @'
                                }
                            </span>
                        </Dropdown.Header>
                        
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>
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