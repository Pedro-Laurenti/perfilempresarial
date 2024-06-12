import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import {useEffect, useState} from "react";
import {FaBars} from "react-icons/fa";

const navigationLinks = [
    {
        title: 'Início',
        href: '/'
    }, {
        title: 'Personalidades',
        href: '/personalidades'
    },
];

const Navbar = () => {

    const [isTransparent,
        setIsTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsTransparent(false);
            } else {
                setIsTransparent(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <>
        <nav className={`${isTransparent ? "z-[1500] h-auto bg-gray-500/10 py-5 flex flex-col w-full items-center fixed border-b border-b-sky-800" : " backdrop-blur-md fixed z-[1500] h-auto bg-gray-900/50 py-3 border-b border-b-sky-400 flex flex-col w-full items-center"}`}>
            <div className="container flex items-center justify-between py-1.5 px-2">
                <div className="flex items-center">
                    <Link to="/" className="text-[22px] font-semibold hover:rotate-90">
                        {isTransparent
                            ? (<img src={Logo} className='w-20'/>)
                            : (<img src={Logo} className='w-10'/>)}
                    </Link>
                </div>
                <div className="md:hidden flex flex-row justify-end w-full h-full">
                    <div
                        className={`transform transition-transform duration-300 ${isMenuOpen
                        ? 'rotate-90'
                        : 'rotate-0'}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FaBars className="text-2xl fill-sky-300"/>
                    </div>
                </div>

                <div className="hidden md:flex flex-row justify-end w-full h-full gap-28">
                    {navigationLinks.map((link) => (
                        <Link key={link.href} to={link.href}>
                            <h3
                                className={`text-gray-200 hover:text-sky-300 text-2xl`}>
                                {link.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>

        {
        isMenuOpen && (
            <div
                className="md:hidden fixed z-[500] flex flex-col items-end w-full h-screen gap-10 bg-black/50">
                <div className=" pt-44 bg-slate-800 h-full relative">
                    {navigationLinks.map((link) => (
                        <Link key={link.href} to={link.href}>
                            <h3
                                className={`w-full py-5 px-40 hover:bg-slate-900 border-b border-b-slate-600 text-gray-300 hover:text-appBlue-100 text-2xl`}>
                                {link.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        )}
    </>
    )
}

export default Navbar