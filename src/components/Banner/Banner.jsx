import back from '../../assets/back.svg';
import backhor from '../../assets/backrotate.svg';
import ah from '../../assets/glauco-removebg.png'
import {Parallax} from 'react-parallax';
import { SimpleShare } from '..';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowAltCircleDown } from 'react-icons/fa';

const Banner = ({ toShare }) => {

    return (
        <div className='relative h-screen flex flexcol items-center justify-center overflow-hidden bg-gradient-to-r to-rose-900/20 from-slate-800'>
            <div className='z-10 absolute flex gap-10 lg:w-5/12'>
                <div className='bg-slate-500/40 p-5 md:px-20 md:py-10 rounded-lg text-center relative'>
                    <div className='text-sky-500 text-5xl mb-5'>
                        Da Origem ao novo eu
                    </div>
                    <div className='text-xl mt-10'>
                        Conheça o perfil profissional que melhor se alinha às suas habilidades e
                        encontre oportunidades exclusivas para impulsionar sua carreira.
                    </div>
                    <div className="w-full flex flex-col items-center justify-center mt-8">
                        Compartilhe:
                        <SimpleShare />
                    </div>

                    <Link to={toShare} smooth={true} duration={1000} className="hover:cursor-pointer right-0 mt-8 absolute">
                            <FaArrowAltCircleDown className='w-10 h-7 hover:text-sky-500 animate-bounce' />
                    </Link>
                </div>
            </div>

            <img
                src={ah}
                alt="glauco"
                className='hidden md:block absolute left-0 h-[120%] scaleX(-1) scale-x-[-1]'/>

            <Parallax
            className='w-full h-full hidden md:block'
            blur={0}
            bgImage={back}
            bgImageAlt="Aa"
            strength={200}/>

            <Parallax
            className='w-full h-full block md:hidden'
            blur={0}
            bgImage={backhor}
            bgImageAlt="Aa"
            strength={200}/>


        </div>
    )
}

export default Banner