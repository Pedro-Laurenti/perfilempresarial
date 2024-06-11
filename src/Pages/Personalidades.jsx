import {Navbar} from '../Components';
import {Link} from 'react-router-dom';

const Personalidades = () => {
    return (
        <div>
            <Navbar />

            <div className="w-full flex flex-row gap-10 p-10">
                <div className='flex flex-col gap-10'>
                    <Link to="/personalidades">
                        <img
                            src="/src/assets/aguia.jpg"
                            alt="Águia"
                            className="rounded-lg shadow-md w-full hover:brightness-110 hover:cursor-pointer"/>
                    </Link>
                    <Link to="/personalidades">
                        <img
                            src="/src/assets/lobo.jpg"
                            alt="Lobo"
                            className="rounded-lg shadow-md w-full hover:brightness-125 hover:cursor-pointer"/>
                    </Link>
                </div>
                <div className='flex flex-col gap-10'>
                    <Link to="/personalidades">
                        <img
                            src="/src/assets/gato.jpg"
                            alt="Gato"
                            className="rounded-lg shadow-md w-full hover:brightness-125 hover:cursor-pointer"/>
                    </Link>
                    <Link to="/personalidades">
                        <img
                            src="/src/assets/tubarao.jpg"
                            alt="Tubarão"
                            className="rounded-lg shadow-md w-full brightness-150 hover:brightness-200 hover:cursor-pointer"/>
                    </Link>
                </div>
            </div>

            <div className='relative w-full min-h-screen text-white bg-gray-900 p-10 md:p-40 lg:p-60'>
                
                <h1 className='text-6xl font-bold mb-20'>Perfis Comportamentais</h1>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-3xl font-semibold mb-4'>Introdução</h2>
                    <p className="text-xl">Este é um assunto muito explorado pelos psicólogos e coachs. Porque conseguem compreender melhor seu cliente, para conduzir a sessão de maneira mais eficiente, criar tarefas mais precisas e extrair melhores resultados das sessões de terapia ou coaching.</p>
                    <p className="text-xl">Muitos líderes de empresas também gostam de se aprofundar neste assunto para lidar melhor com as pessoas e conseguir construir uma equipe mais eficiente.</p>
                    <p className="text-xl">Na verdade, qualquer pessoa que entenda sobre o comportamento das pessoas está na vantagem em relação as outras.</p>
                    <p className="text-xl">Imagina, se você conseguisse prever qual seria a reação de uma pessoa quando algo acontecesse?</p>
                    <p className="text-xl">O que fazer para atrair a atenção dos seus chefes e receber um aumento. Como lidar com sua esposa de forma a persuadi-la a fazer o que você quer que ela faça.</p>
                    <p className="text-xl">Parece coisa de filme né. Tipo, aquele cara com super poderes que consegue ler a menta dos outros. Professor Chavier.</p>
                    <p className="text-xl">Mas não é não. Quando você começa a entender melhor sobre o comportamento das pessoas, você ganha super poderes.</p>
                </section>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-4xl font-semibold mb-4'>Utilidades de entender sobre Perfis Comportamentais</h2>
                    <p className="text-xl">Nossa, as utilidades de entender melhor deste assunto são inúmeras. Vou dar alguns exemplos:</p>

                    <h3 className='text-xl font-bold mt-4'>Pessoal</h3>
                    <p className="text-xl">A pessoa que entende sobre seu próprio comportamento, sabe seus pontos fortes e fracos. Consegue com mais facilidade melhorar a si próprio. Consegue com mais facilidade vencer suas dificuldades e explorar melhor suas habilidades.</p>

                    <h3 className='text-xl font-bold mt-4'>Relacionamento</h3>
                    <p className="text-xl">O comportamento é uma maneira de se comunicar. De forma geral, se você entende o comportamento das pessoas, entende o que ela quer dizer, mesmo que ela não diga nenhuma palavra.</p>
                    <p className="text-xl">Entender o porquê elas agem como agem, deixa tudo mais fácil.</p>

                    <h3 className='text-xl font-bold mt-4'>Profissional</h3>
                    <p className="text-xl">Todos os líderes, julgam o comportamento das pessoas na hora de contratar um novo colaborador para a empresa dele. É um processo subconsciente que ele faz sem perceber.</p>
                    <p className="text-xl">Mas, alguns fazem de propósito. Estudam sobre isso para conseguirem contratar pessoas que se encaixem melhor no perfil ou necessidade da empresa.</p>
                    <p className="text-xl">Em uma equipe, o perfil comportamental das pessoas deve variar.</p>
                    <p className="text-xl">Se houver somente líderes ou comunicadores, talvez o projeto não fique pronto no prazo esperado. Se houver somente pessoas técnicas, talvez a gestão ou as vendas sofram.</p>
                </section>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-4xl font-semibold mb-4'>Modelo de Dominância de Ned Herrmann</h2>
                    <p className="text-xl">A maneira mais conhecida de ilustrar os perfis comportamentais é o Modelo de Dominância de Ned Herrmann.</p>
                    <p className="text-xl">Ned Herrmann foi um pesquisador americano que estudava sobre a criatividade humana. Seu modelo separa o cérebro em 4 partes e cada área destas processa um conjunto específico de habilidades.</p>
                    <p className="text-xl">As 4 partes são: lógico, organizador, emocional e criativo.</p>
                </section>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-4xl font-semibold mb-4'>Modelo de Perfil Comportamental dos Animais</h2>
                    <p className="text-xl">Vamos falar em uma linguagem mais didática e popular que é o perfil comportamental através de animais: lobo, águia, gato e tubarão.</p>

                    <h3 className='text-2xl font-bold mt-4 text-sky-500'>Lobo (organizado)</h3>
                    <p className="text-xl">É inteligente, equilibrada, experiente, organizada, perfeccionista, precisa, metódica, pontual, confiável e conservadora. Dificilmente esta pessoa tomará uma decisão ruim, pois sempre toma suas decisões baseadas nos sucessos que já teve no passado.</p>

                    <h3 className='text-2xl font-bold mt-4 text-sky-500'>Águia (idealizador)</h3>
                    <p className="text-xl">A águia é uma pessoa criativa. Gosta de inovar. Fazer de maneira diferente. Buscar novos resultados. Voa alto. Tem visão ampla, macro. Não gosta de pisar no chão.</p>

                    <h3 className='text-2xl font-bold mt-4 text-sky-500'>Gato (comunicador)</h3>
                    <p className="text-xl">O gato é aquela pessoa gente boa, que se dá bem como todo mundo. Tem facilidade em se comunicar. Adora o calor humano. Sempre está em contato com seus amigos e familiares.</p>

                    <h3 className='text-2xl font-bold mt-4 text-sky-500'>Tubarão (executor)</h3>
                    <p className="text-xl">O tubarão é a pessoa que coloca a mão na massa. Extremamente produtivo, competitivo, confiante e eficiente. Independente de qualquer coisa, vai lá e faz. Não suporta ficar para trás. Gosta de dificuldades.</p>
                </section>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-4xl font-semibold mb-4'>Como descobrir meu perfil comportamental?</h2>
                    <p className="text-xl">Utilize tudo isso que te expliquei sobre os animais (lobo, águia, gato e tubarão) para encontrar seu próprio perfil comportamental.</p>
                    <p className="text-xl">Faça uma auto reflexão. Pense nos seus comportamentos, nos comportamentos dos animais e identifique qual tem mais características comuns com você.</p>
                    <p className="text-xl">A maneira mais precisa de identificar seu perfil comportamental é através de testes. Na internet tem vários. Dá uma procurada aí que você acha fácil.</p>
                </section>
            </div>
        </div>
    );
}

export default Personalidades;