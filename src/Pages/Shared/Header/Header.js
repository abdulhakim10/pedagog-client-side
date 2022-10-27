import { Avatar, Button, Dropdown, Navbar, Tooltip } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(e => console.error(e))
    }
    return (
        <div className='border-2 rounded-lg border-slate-900 p-2'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://www.creativefabrica.com/wp-content/uploads/2019/11/18/awawaw_52-580x387.jpg"
                        className="mr-0 h-8 sm:h-16"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-serif dark:text-white">
                        Pedagog
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">

                    {user?.uid ?
                        <Button color={'dark'} onClick={handleLogout} className='m-2 bg-slate-700' size="xs">
                            <Link to=''>Logout</Link>
                        </Button>
                        :
                        <>
                            <Button color={'dark'} className='mr-2 my-2 bg-slate-700' size="xs">
                                <Link to='/login'>Login</Link>
                            </Button>
                            <Button color={'dark'} className='mr-2 my-2 bg-slate-700' size="xs">
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
                    <Link to="/">
                    <p className='px-4 py-1 rounded-lg text-lg hover:text-cyan-200 hover:bg-slate-700'>Home</p>
                    </Link>
                    <Link to='/courses'>
                    <p className='px-4 py-1 rounded-lg text-lg hover:text-cyan-200 hover:bg-slate-700'>Courses</p>
                    </Link>
                    <Link to='/faq'>
                    <p className='px-4 py-1 rounded-lg text-lg hover:text-cyan-200 hover:bg-slate-700'>FAQ</p>
                    </Link>
                    <Link to='/blog'>
                        <p className='px-4 py-1 rounded-lg text-lg hover:text-cyan-200 hover:bg-slate-700'>Blog</p>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;