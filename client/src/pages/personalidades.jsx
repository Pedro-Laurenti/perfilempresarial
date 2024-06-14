import {Navbar} from '../components';
import {Link} from 'react-router-dom';
import aguia from "../assets/aguia.jpg"
import gato from "../assets/gato.jpg"
import lobo from "../assets/lobo.jpg"
import tubarao from "../assets/tubarao.jpg"

const Personalidades = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full flex flex-row gap-10 p-10">
                <div className='flex flex-col gap-10'>
                    <Link to="/personalidades">
                        <img
                            src={aguia}
                            alt="Águia"
                            className="rounded-lg shadow-md w-full hover:brightness-110 hover:cursor-pointer"/>
                    </Link>
                    <Link to="/personalidades">
                        <img
                            src={lobo}
                            alt="Lobo"
                            className="rounded-lg shadow-md w-full hover:brightness-125 hover:cursor-pointer"/>
                    </Link>
                </div>
                <div className='flex flex-col gap-10'>
                    <Link to="/personalidades">
                        <img
                            src={gato}
                            alt="Gato"
                            className="rounded-lg shadow-md w-full hover:brightness-125 hover:cursor-pointer"/>
                    </Link>
                    <Link to="/personalidades">
                        <img
                            src={tubarao}
                            alt="Tubarão"
                            className="rounded-lg shadow-md w-full brightness-150 hover:brightness-200 hover:cursor-pointer"/>
                    </Link>
                </div>
            </div>

            <div className='relative w-full min-h-screen text-white bg-gray-900 p-10 md:p-40 lg:p-60'>
                
                <h1 className='text-4xl md:text-6xl font-bold mb-20'>Perfis Comportamentais</h1>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-3xl font-semibold mb-4'>Introdução</h2>
                    <p className="text-xl">O estudo de perfis comportamentais é amplamente explorado por psicólogos e coaches, pois proporciona uma compreensão mais profunda dos clientes, permitindo conduzir sessões de maneira mais eficiente, criar tarefas mais precisas e obter melhores resultados em terapias ou sessões de coaching.
                    </p>
                    <p className="text-xl">Além disso, muitos líderes empresariais se aprofundam nesse assunto para lidar melhor com suas equipes, construindo times mais eficientes. Compreender o comportamento humano confere uma vantagem significativa em diversas situações.</p>
                    <p className="text-xl">Na verdade, qualquer pessoa que entenda sobre o comportamento das pessoas está na vantagem em relação às outras.</p>
                    <p className="text-xl">Imagine ser capaz de prever como uma pessoa reagirá a determinado evento. Saber como atrair a atenção dos seus superiores para obter uma promoção, ou como lidar com seu cônjuge de maneira a persuadi-lo mais eficazmente.</p>
                </section>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-4xl font-semibold mb-4'>Utilidades de Compreender Perfis Comportamentais</h2>
                    <p className="text-xl">As aplicações práticas de compreender perfis comportamentais são vastas. A seguir, alguns exemplos:</p>

                    <h3 className='text-xl font-bold mt-4'>Pessoal</h3>
                    <p className="text-xl">Aqueles que compreendem seu próprio comportamento conhecem seus pontos fortes e fracos, permitindo uma melhoria pessoal mais eficaz. Esta autoconsciência facilita superar dificuldades e maximizar habilidades.</p>

                    <h3 className='text-xl font-bold mt-4'>Relacionamento</h3>
                    <p className="text-xl">O comportamento é uma forma de comunicação. Entender o comportamento das pessoas permite compreender suas intenções, mesmo sem palavras. Compreender por que as pessoas agem de determinada forma torna as interações mais simples e eficazes.</p>

                    <h3 className='text-xl font-bold mt-4'>Profissional</h3>
                    <p className="text-xl">Líderes frequentemente avaliam comportamentos ao contratar novos colaboradores, muitas vezes de forma subconsciente. Alguns estudam intencionalmente perfis comportamentais para contratar pessoas que melhor se adequem às necessidades da empresa.</p>
                    <p className="text-xl">Em uma equipe, a diversidade de perfis comportamentais é essencial. Equipes compostas exclusivamente por líderes ou comunicadores podem enfrentar desafios de prazo, enquanto equipes exclusivamente técnicas podem enfrentar dificuldades na gestão ou vendas.</p>
                </section>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-4xl font-semibold mb-4'>Modelo de Dominância de Ned Herrmann</h2>
                    <p className="text-xl">O Modelo de Dominância de Ned Herrmann é uma maneira reconhecida de ilustrar perfis comportamentais. </p>
                    <p className="text-xl">Herrmann, um pesquisador americano, estudou a criatividade humana e desenvolveu um modelo que divide o cérebro em quatro partes, cada uma processando um conjunto específico de habilidades: lógico, organizador, emocional e criativo.</p>
                    <p className="text-xl">As 4 partes são: lógico, organizador, emocional e criativo.</p>
                </section>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-4xl font-semibold mb-4'>Modelo de Perfil Comportamental dos Animais</h2>
                    <p className="text-xl">De forma didática e popular, perfis comportamentais podem ser representados através de animais: lobo, águia, gato e tubarão.</p>

                    <h3 className='text-2xl font-bold mt-4 text-sky-500'>Lobo (organizado)</h3>
                    <p className="text-xl">O lobo é inteligente, equilibrado, experiente, organizado, perfeccionista, preciso, metódico, pontual, confiável e conservador. Suas decisões são baseadas em sucessos anteriores, minimizando a probabilidade de erros.</p>

                    <h3 className='text-2xl font-bold mt-4 text-sky-500'>Águia (idealizador)</h3>
                    <p className="text-xl">A águia é uma pessoa criativa. Gosta de inovar. Fazer de maneira diferente. Buscar novos resultados. Voa alto. Tem visão ampla, macro. Não gosta de pisar no chão.</p>

                    <h3 className='text-2xl font-bold mt-4 text-sky-500'>Gato (comunicador)</h3>
                    <p className="text-xl">O gato é aquela pessoa gente boa, que se dá bem como todo mundo. Tem facilidade em se comunicar. Adora o calor humano. Sempre está em contato com seus amigos e familiares.</p>

                    <h3 className='text-2xl font-bold mt-4 text-sky-500'>Tubarão (executor)</h3>
                    <p className="text-xl">O tubarão é a pessoa que coloca a mão na massa. Extremamente produtivo, competitivo, confiante e eficiente. Independente de qualquer coisa, vai lá e faz. Não suporta ficar para trás. Gosta de dificuldades.</p>
                </section>

                <section className='mb-20 flex flex-col gap-6'>
                    <h2 className='text-4xl mb-4 font-bold text-sky-500'>Como Descobrir Meu Perfil Comportamental?</h2>
                    <p className="text-xl">Para uma análise mais detalhada e personalizada, convidamos você a realizar o quiz disponível na página inicial do nosso site. Este questionário foi desenvolvido para auxiliar na identificação do seu perfil comportamental.</p>

                    <Link type="button" to={"/"}className='bg-sky-500 text-white text-2xl font-bold py-4 mt-5 flex justify-center hover:bg-sky-600 rounded-xl'>Fazer quiz</Link>
                </section>
            </div>
        </div>
    );
}

export default Personalidades;