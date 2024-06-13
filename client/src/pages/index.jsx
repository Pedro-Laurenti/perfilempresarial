import { Navbar, Banner, MultiStepForm, Coutdown } from '../components'
import { BiArrowToRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { BsWhatsapp } from 'react-icons/bs'
import Head from "next/head"
import config from '../../package.json'
import { FaBell } from 'react-icons/fa'

const Início = () => {

    const CURRENT_YEAR = new Date().getFullYear();

    return (
        <div className='relative w-full min-h-screen text-white'>
            <Head>
                <meta charset="UTF-8"/>
                <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <meta property="og:msapplication-TileImage" content="https://ceoglauco.com/logo.webp" />
                <meta property="msapplication-TileImage" content="https://ceoglauco.com/logo.webp" />
                <meta name="og:msapplication-TileImage" content="https://ceoglauco.com/logo.webp" />
                <meta name="msapplication-TileImage" content="https://ceoglauco.com/logo.webp" />

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

                <meta property="og:image:secure_url" itemProp="image" content="https://ceoglauco.com/logo.webp" />
                <meta property="image:secure_url" itemProp="image" content="https://ceoglauco.com/logo.webp" />
                <meta name="og:image:secure_url" itemProp="image" content="https://ceoglauco.com/logo.webp" />
                <meta name="image:secure_url" itemProp="image" content="https://ceoglauco.com/logo.webp" />

                <meta property="og:image" itemProp="image" content="https://ceoglauco.com/logo.webp" />
                <meta property="og:image" itemProp="image" content="http://ceoglauco.com/logo.webp" />
                <meta property="image" itemProp="image" content="https://ceoglauco.com/logo.webp" />
                <meta property="image" itemProp="image" content="http://ceoglauco.com/logo.webp" />
                <meta name="og:image" itemProp="image" content="https://ceoglauco.com/logo.webp" />
                <meta name="og:image" itemProp="image" content="http://ceoglauco.com/logo.webp" />
                <meta name="image" itemProp="image" content="https://ceoglauco.com/logo.webp" />
                <meta name="image" itemProp="image" content="http://ceoglauco.com/logo.webp" />

                <title>Análise de Perfil Empresarial</title>
            </Head>

            <Navbar className="z-50"/>
            <Banner toShare="toScroll" />
            

            <div className='z-10 absolute w-full'>
                <div className='border-gradient' />

                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-20 mx-5 md:mx-40 mt-10 items-center'>
                    <div className='flex md:flex-col flex-row'>
                        <div className='text-sky-500 font-black text-2xl' id="toScroll">
                            <code>01.</code>
                        </div>
                        <div className='font-black text-2xl'>Eventos:</div>
                    </div>
                    <div className='text-white font-medium text-4xl col-span-3'>
                    </div>
                </div>

                <div className='px-5 md:px-40 py-20 w-full border-gradient'>
                    <section className='w-full flex flex-col items-center'>
                        <h2 className='text-sky-500 font-medium text-4xl mb-10'>
                            <span className='text-3xl font-light text-white'>Mentoria:</span> Da origem ao novo eu
                        </h2>
                        <div className='w-full md:w-3/4 text-xl text-left flex flex-col gap-6 mb-20'>
                        
                            <p className=''>Estamos muito felizes em receber todos vocês! Nossa jornada de transformação e autoconhecimento começa agora e promete mudar a sua vida em 8 encontros semanais.</p>
                            <p className='font-bold'>Detalhes:</p>
                            <ul className='list-disc flex flex-col gap-2'>
                                <li><b className='text-sky-500'>Data e Hora:</b> 17/06/2024 às 13h00</li>
                                <li><b className='text-sky-500'>Local Presencial:</b> Rua Manoel da Abadia, nº 116, Centro, Anápolis, GO</li>
                                <li><b className='text-sky-500'>Transmissão ao Vivo:</b> Disponibilizada no YouTube e no site.</li>
                            </ul>
                            
                        </div>

                        <Link to="https://www.youtube.com/@glaucoalvescosta/streams" className="bg-sky-500 hover:bg-sky-500/50 px-10 py-3 my-10 flex flex-row justify-between rounded-xl gap-5 items-center"><div>Ativar notificação</div> <FaBell /></Link>

                        


                    </section>


                    <Coutdown />

                    <p className='w-full text-center font-bold my-10'>Primeira conferência</p>

                    <section className='w-full flex flex-col items-center'>
                        <div className='w-full md:w-3/4 text-xl text-left flex flex-col gap-6 my-20'>
                        <p className='font-bold'>Atividades Extras:</p>
                            <ul className='list-disc flex flex-col gap-2'>
                                <li>Sorteios semanais com diversos prêmios</li>
                                <li>Certificado de presença para todos os participantes</li>
                                <li>Chat disponível
                                    <ScrollLink to={"toScrollWpp"} smooth={true} duration={1000} className='hover:cursor-pointer hover:text-sky-500 px-1 underline'>
                                        no grupo
                                    </ScrollLink>
                                    aos domingos e segundas para tirar dúvidas</li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-20 mx-5 md:mx-40 mt-10 items-center'>
                    <div className='flex md:flex-col flex-row'>
                        <div className='text-sky-500 font-black text-2xl'>
                            <code>02.</code>
                        </div>
                        <div className='font-black text-2xl'>Quiz:</div>
                    </div>
                    <div className='text-white font-medium text-4xl col-span-3'>
                        Descubra agora qual é o seu perfil empresarial!
                    </div>
                </div>

                <MultiStepForm/>

                <Link to="/personalidades" className='w-full'>
                    <div className='grid grid-cols-1 bg-sky-950 md:grid-cols-4 gap-5 md:gap-20 px-5 md:px-40 items-center py-40 hover:bg-slate-950'>
                        <div className='flex md:flex-col flex-row'>
                            <div className='text-sky-500 font-black text-2xl'>
                                <code>03.</code>
                            </div>
                            <div className='font-black text-2xl'>Tipos:</div>
                        </div>
                        <div className='text-white font-medium text-4xl col-span-2'>Sobre cada personalidade</div>
                        <div className='w-full flex justify-end'>
                            <BiArrowToRight className='w-full h-16 fill-sky-400 hover:fill-sky-50'></BiArrowToRight>
                        </div> 
                    </div>
                </Link>

                <div className='text-center px-5 md:px-40 py-20 w-full bg-sky-500 flex flex-col justify-center items-center text-2xl'>
                    Entre no nosso grupo para expandir sua network e receber atualizações importantes!
                    <Link to="https://chat.whatsapp.com/Dh5Dx3xHbUOIqe5OHREE9t" id='toScrollWpp' target="_blank">
                        <button className='px-10 py-3 mt-5 rounded-xl bg-slate-900 hover:bg-slate-900/50'><BsWhatsapp /></button>
                    </Link>
                </div>

                <div className='text-center px-5 md:px-40 py-1 w-full bg-sky-950 flex flex-row justify-between items-center'>
                    <div>
                    &copy; {CURRENT_YEAR} - Ceo Glauco
                    </div>
                    <div>
                    v. {config.version}
                    </div>
                </div>
            </div>

            <svg
                className='fill-current stroke-zinc-50/10 stroke-1 bg-gradient-to-tr from-sky-950/20 to-transparent hidden md:block '
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

            <svg viewBox="0 0 581 1341" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-current stroke-zinc-50/10 stroke-2 bg-gradient-to-tr from-sky-950/20 to-transparent block md:hidden '>
                <path d="M0 66.21L580.5 66.2099" />
                <path d="M0 151.21L570.5 151.21" />
                <path d="M0 321.21L560.5 321.21" />
                <path d="M0 406.21L550.5 406.21" />
                <path d="M0 576.21L540.5 576.21" />
                <path d="M0 746.21L520.5 746.21" />
                <path d="M0 831.21L520 831.21" />
                <path d="M0 922L450.5 922" />
                <path d="M0 1007L450.5 1007" />
                <path d="M0 1092L430.5 1092" />
                <path d="M0 1177L430.5 1177" />
                <path d="M73.4399 0L73.44 1341" />
                <path d="M158.5 0L158.5 1136" />
                <path d="M243.56 0L243.56 1023" />
                <path d="M328.62 0L328.62 897.5" />
                <path d="M413.68 0L413.68 788.5" />
            </svg>
        </div>
    );
}

export default Início;