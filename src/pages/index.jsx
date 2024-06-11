import {Navbar, Banner, MultiStepForm} from '../components';
import {BiArrowToRight} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import Head from "next/head"

const Início = () => {
    return (

        <div className='relative w-full min-h-screen text-white'>

<Head>
            <meta charset="UTF-8"/>
            <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <meta property="og:msapplication-TileImage" content="https://quiz.ceoglauco.com/logo.png" />
            <meta property="msapplication-TileImage" content="https://quiz.ceoglauco.com/logo.png" />
            <meta name="og:msapplication-TileImage" content="https://quiz.ceoglauco.com/logo.png" />
            <meta name="msapplication-TileImage" content="https://quiz.ceoglauco.com/logo.png" />

            <meta property="og:site_name" content="Teste Perfil Empresarial | CEO Glauco" />
            <meta property="site_name" content="Teste Perfil Empresarial | CEO Glauco" />
            <meta name="og:site_name" content="Teste Perfil Empresarial | CEO Glauco" />
            <meta name="site_name" content="Teste Perfil Empresarial | CEO Glauco" />

            <meta property="og:title" content="Teste Perfil Empresarial | CEO Glauco" />
            <meta property="title" content="Teste Perfil Empresarial | CEO Glauco" />
            <meta name="og:title" content="Teste Perfil Empresarial | CEO Glauco" />
            <meta name="title" content="Teste Perfil Empresarial | CEO Glauco" />

            <meta property="og:type" content="website" />
            <meta property="type" content="website" />
            <meta name="og:type" content="website" />
            <meta name="type" content="website" />

            <meta property="og:description" content="Quiz para definição de perfil profissional" />
            <meta property='description' content='Quiz para definição de perfil profissional.' />
            <meta name='og:description' content='Quiz para definição de perfil profissional.' />
            <meta name='description' content='Quiz para definição de perfil profissional.' />

            <meta property='og:subject' content='Teste Perfil Empresarial | CEO Glauco' />
            <meta property='subject' content='Teste Perfil Empresarial | CEO Glauco' />
            <meta name='og:subject' content='Teste Perfil Empresarial | CEO Glauco' />
            <meta name='subject' content='Teste Perfil Empresarial | CEO Glauco' />

            <meta property="og:image:secure_url" itemProp="image" content="https://quiz.ceoglauco.com/logo.png" />
            <meta property="image:secure_url" itemProp="image" content="https://quiz.ceoglauco.com/logo.png" />
            <meta name="og:image:secure_url" itemProp="image" content="https://quiz.ceoglauco.com/logo.png" />
            <meta name="image:secure_url" itemProp="image" content="https://quiz.ceoglauco.com/logo.png" />

            <meta property="og:image" itemProp="image" content="https://quiz.ceoglauco.com/logo.png" />
            <meta property="og:image" itemProp="image" content="http://quiz.ceoglauco.com/logo.png" />
            <meta property="image" itemProp="image" content="https://quiz.ceoglauco.com/logo.png" />
            <meta property="image" itemProp="image" content="http://quiz.ceoglauco.com/logo.png" />
            <meta name="og:image" itemProp="image" content="https://quiz.ceoglauco.com/logo.png" />
            <meta name="og:image" itemProp="image" content="http://quiz.ceoglauco.com/logo.png" />
            <meta name="image" itemProp="image" content="https://quiz.ceoglauco.com/logo.png" />
            <meta name="image" itemProp="image" content="http://quiz.ceoglauco.com/logo.png" />

            <title>Análise de Perfil Empresarial</title>
        </Head>

            <Navbar className="z-50"/>
            <Banner/>
            <div className='w-full border-gradient'></div>

            <div className='z-10 absolute w-full'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-20 mx-5 md:mx-40 mt-10 items-center'>
                    <div className='flex md:flex-col flex-row'>
                        <div className='text-sky-500 font-black text-2xl'>
                            <code>01.</code>
                        </div>
                        <div className='font-black text-2xl'>Quiz:</div>
                    </div>
                    <div className='text-white font-medium text-4xl col-span-3'>
                        Descubra agora qual é o seu perfil empresarial!
                    </div>
                </div>

                <div className='px-5 md:px-40 py-20 w-full'>
                    <MultiStepForm/>
                </div>

                <div className='text-center px-5 md:px-40 py-20 w-full bg-sky-500 flex flex-col justify-center items-center text-2xl'>
                    Entre no nosso grupo para expandir sua network e receber atualizações importantes!
                    <Link to="https://chat.whatsapp.com/Dh5Dx3xHbUOIqe5OHREE9t" target="_blank">
                        <button className='px-10 py-3 mt-5 rounded-xl bg-slate-900 hover:bg-slate-900/50'><BsWhatsapp /></button>
                    </Link>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-20 mx-5 md:mx-40 items-center my-40'>
                    <div className='flex md:flex-col flex-row'>
                        <div className='text-sky-500 font-black text-2xl'>
                            <code>02.</code>
                        </div>
                        <div className='font-black text-2xl'>Tipos:</div>
                    </div>
                    <div className='text-white font-medium text-4xl col-span-2'>Sobre cada personalidade</div>
                    <Link to="/personalidades" className='w-full flex justify-end'>
                        <BiArrowToRight className='w-full h-16 fill-sky-400 hover:fill-sky-50'></BiArrowToRight>
                    </Link>
                </div>
            </div>
            <svg
                className='fill-current stroke-zinc-50/10 stroke-1 bg-gradient-to-tr from-sky-950/20 to-transparent '
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1341 832.5">
                <g id="Camada_2" data-name="Camada 2">
                    <g id="Camada_1-2" data-name="Camada 1">
                        <line className="" x1="66.21" x2="66.21" y2="580.5"/>
                        <line className="" x1="151.21" x2="151.21" y2="570.5"/>
                        <line className="" x1="321.21" x2="321.21" y2="560.5"/>
                        <line className="" x1="406.21" x2="406.21" y2="550.5"/>
                        <line className="" x1="576.21" x2="576.21" y2="540.5"/>
                        <line className="" x1="746.21" x2="746.21" y2="520.5"/>
                        <line className="" x1="831.21" x2="831.21" y2="520"/>
                        <line className="" x1="1001.21" x2="1001.21" y2="450.5"/>
                        <line className="" x1="1086.21" x2="1086.21" y2="450.5"/>
                        <line className="" x1="1171.21" x2="1171.21" y2="430.5"/>
                        <line className="" x1="1256.21" x2="1256.21" y2="430.5"/>
                        <line className="" y1="73.44" x2="1341" y2="73.44"/>
                        <line className="" y1="158.5" x2="1136" y2="158.5"/>
                        <line className="" y1="243.56" x2="1023" y2="243.56"/>
                        <line className="" y1="328.62" x2="897.5" y2="328.62"/>
                        <line className="" y1="413.68" x2="788.5" y2="413.68"/>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default Início;