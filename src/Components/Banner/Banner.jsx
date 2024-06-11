import back from '../../assets/back.svg'
import {Parallax} from 'react-parallax';

const Banner = () => {

    return (
        <div
            className='relative h-screen flex flexcol items-center justify-center overflow-hidden bg-gradient-to-r to-rose-900/20 from-slate-800'>
            <div className='z-10 absolute flex gap-10 lg:w-5/12'>
                <div className='bg-slate-500/40 p-20 rounded-lg text-center'>
                    <div className='text-sky-500 text-6xl mb-5'>Mentoria - Da Origem ao novo eu</div>
                    <div className='text-5xl font-bold'>
                        Quiz: Descubra qual é o seu perfil empresarial
                    </div>
                    <div className='text-xl mt-10'>
                        Conheça o perfil profissional que melhor se alinha às suas habilidades e
                        encontre oportunidades exclusivas para impulsionar sua carreira.
                    </div>
                </div>
            </div>

            <img
                src="/src/assets/ahhhhhhh.png"
                alt="glauco"
                className='hidden md:block absolute left-0 bottom-[-100px] h-full'/>

            <Parallax
                className='w-full h-full'
                blur={0}
                bgImage={back}
                bgImageAlt="Aa"
                strength={200}/>

        </div>
    )
}

export default Banner