import { useState, useRef } from 'react';
import { BsArrowBarLeft, BsArrowBarRight, BsDownload } from 'react-icons/bs';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';

import { FaFacebook, FaTwitter, FaLinkedin, FaLink } from 'react-icons/fa';
import { Radar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import aguia from "../../assets/aguia.jpg"
import gato from "../../assets/gato.jpg"
import lobo from "../../assets/lobo.jpg"
import tubarao from "../../assets/tubarao.jpg"

import aguiasvg from "../../assets/aguia.svg"
import gatosvg from "../../assets/gato.svg"
import lobosvg from "../../assets/Lobo.svg"
import tubaraosvg from "../../assets/tuba.svg"


ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const MultiStepForm = () => {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', answers: {} });
    const chartRef = useRef(null);

    const questions = [
        {
            question: "1. Eu sou...",
            options: ['Idealista, criativo e visionário', 'Divertido, espiritual e benéfico', 'Confiável, meticuloso e previsível', 'Focado, determinado e persistente']
        }, {
            question: "2. Eu gosto de...",
            options: ['Ser piloto', 'Conversar com os passageiros', 'Planejar a viagem', 'Explorar novas rotas']
        }, {
            question: "3. Se você quiser se dar bem comigo...",
            options: ['Me dê liberdade', 'Me deixe saber sua expectativa', 'Lidere, siga ou saia do caminho', 'Seja amigável, carinhoso e compreensivo']
        }, {
            question: "4. Para conseguir obter bons resultados é preciso...",
            options: ['Ter incertezas', 'Controlar o essencial', 'Diversão e celebração', 'Planejar e obter recursos']
        }, {
            question: "5. Eu me divirto quando...",
            options: ['Estou me exercitando', 'Tenho novidades', 'Estou com os outros', 'Determino as regras']
        }, {
            question: "6. Eu penso que...",
            options: ['Unidos venceremos, divididos perderemos', 'O ataque é melhor que a defesa', 'É bom ser manso, mas andar com um porrete', 'Um homem prevenido vale por dois']
        }, {
            question: "7. Minha preocupação é...",
            options: ['Gerar a ideia global', 'Fazer com que as pessoas gostem', 'Fazer com que funcione', 'Fazer com que aconteça']
        }, {
            question: "8. Eu prefiro...",
            options: ['Perguntas a respostas', 'Ter todos os detalhes', 'Vantagens a meu favor', 'Que todos tenham a chance de serem ouvidos']
        }, {
            question: "9. Eu gosto de...",
            options: ['Fazer progresso', 'Construir memórias', 'Fazer sentido', 'Tornar as pessoas confortáveis']
        }, {
            question: "10. Eu gosto de chegar...",
            options: ['Na frente', 'Junto', 'Na hora', 'Em outro lugar']
        }, {
            question: "11. Um ótimo dia para mim é quando...",
            options: ['Consigo fazer muitas coisas', 'Me divirto com meus amigos', 'Tudo segue conforme planejado', 'Desfruto de coisas novas e estimulantes']
        }, {
            question: "12. Eu vejo a morte como...",
            options: ['Uma grande aventura misteriosa', 'Oportunidade para rever os falecidos', 'Um modo de receber recompensas', 'Algo que sempre chega muito cedo']
        }, {
            question: "13. Minha filosofia de vida é...",
            options: ['Há ganhadores e perdedores, e eu acredito ser um ganhador', 'Para eu ganhar, ninguém precisa perder', 'Para ganhar é preciso seguir as regras', 'Para ganhar, é necessário inventar novas regras']
        }, {
            question: "14. Eu sempre gostei de...",
            options: ['Explorar', 'Evitar surpresas', 'Focalizar a meta', 'Realizar uma abordagem natural']
        }, {
            question: "15. Eu gosto de mudanças se...",
            options: ['Me der uma vantagem competitiva', 'For divertido e puder ser compartilhado', 'Me der mais liberdade e variedade', 'Melhorar ou me der mais controle']
        }, {
            question: "16. Não existe nada de errado em...",
            options: ['Se colocar na frente', 'Colocar os outros na frente', 'Mudar de ideia', 'Ser consistente']
        }, {
            question: "17. Eu gosto de buscar conselhos de...",
            options: ['Pessoas bem-sucedidas', 'Anciões e conselheiros', 'Autoridades no assunto', 'Lugares, os mais estranhos']
        }, {
            question: "18. Meu lema é...",
            options: ['Fazer o que precisa ser feito', 'Fazer bem feito', 'Fazer junto com o grupo', 'Simplesmente fazer']
        }, {
            question: "19. Eu gosto de...",
            options: ['Complexidade, mesmo se confuso', 'Ordem e sistematização', 'Calor humano e animação', 'Coisas claras e simples']
        }, {
            question: "20. Tempo para mim é...",
            options: ['Algo que detesto desperdiçar', 'Um grande ciclo', 'Uma flecha que leva ao inevitável', 'Irrelevante']
        }, {
            question: "21. Se eu fosse bilionário...",
            options: ['Faria doações para muitas entidades', 'Criaria uma poupança avantajada', 'Faria o que desse na cabeça', 'Me exibiria bastante para algumas pessoas']
        }, {
            question: "22. Eu acredito que...",
            options: ['O destino é mais importante que a jornada', 'A jornada é mais importante que o destino', 'Um centavo economizado é um centavo ganho', 'Bastam um navio e uma estrela para navegar']
        }, {
            question: "23. Eu acredito também que...",
            options: ['Aquele que hesita está perdido', 'De grão em grão a galinha enche o papo', 'O que vai, volta', 'Um sorriso ou uma careta é o mesmo para quem é cego']
        }, {
            question: "24. Eu acredito ainda que...",
            options: ['É melhor prudência do que arrependimento', 'A autoridade deve ser desafiada', 'Ganhar é fundamental', 'O coletivo é mais importante do que o individual']
        }, {
            question: "25. Eu penso que...",
            options: ['Não é fácil ficar encurralado', 'É preferível olhar, antes de pular', 'Duas cabeças pensam melhor que do que uma', 'Se você não tem condições de competir, não compita']
        }
    ];

    const optionGroupMapping = {
        'Idealista, criativo e visionário': 'Águia',
        'Divertido, espiritual e benéfico': 'Gato',
        'Confiável, meticuloso e previsível': 'Lobo',
        'Focado, determinado e persistente': 'Tubarão',
        'Ser piloto': 'Tubarão',
        'Conversar com os passageiros': 'Gato',
        'Planejar a viagem': 'Lobo',
        'Explorar novas rotas': 'Águia',
        'Me dê liberdade': 'Águia',
        'Me deixe saber sua expectativa': 'Lobo',
        'Lidere, siga ou saia do caminho': 'Tubarão',
        'Seja amigável, carinhoso e compreensivo': 'Gato',
        'Ter incertezas': 'Águia',
        'Controlar o essencial': 'Lobo',
        'Diversão e celebração': 'Gato',
        'Planejar e obter recursos': 'Tubarão',
        'Estou me exercitando': 'Tubarão',
        'Tenho novidades': 'Águia',
        'Estou com os outros': 'Gato',
        'Determino as regras': 'Lobo',
        'Unidos venceremos, divididos perderemos': 'Gato',
        'O ataque é melhor que a defesa': 'Tubarão',
        'É bom ser manso, mas andar com um porrete': 'Águia',
        'Um homem prevenido vale por dois': 'Lobo',
        'Gerar a ideia global': 'Águia',
        'Fazer com que as pessoas gostem': 'Gato',
        'Fazer com que funcione': 'Lobo',
        'Fazer com que aconteça': 'Tubarão',
        'Perguntas a respostas': 'Águia',
        'Ter todos os detalhes': 'Lobo',
        'Vantagens a meu favor': 'Tubarão',
        'Que todos tenham a chance de serem ouvidos': 'Gato',
        'Fazer progresso': 'Tubarão',
        'Construir memórias': 'Águia',
        'Fazer sentido': 'Lobo',
        'Tornar as pessoas confortáveis': 'Gato',
        'Na frente': 'Tubarão',
        'Junto': 'Gato',
        'Na hora': 'Lobo',
        'Em outro lugar': 'Águia',
        'Consigo fazer muitas coisas': 'Tubarão',
        'Me divirto com meus amigos': 'Gato',
        'Tudo segue conforme planejado': 'Lobo',
        'Desfruto de coisas novas e estimulantes': 'Águia',
        'Uma grande aventura misteriosa': 'Águia',
        'Oportunidade para rever os falecidos': 'Gato',
        'Um modo de receber recompensas': 'Lobo',
        'Algo que sempre chega muito cedo': 'Tubarão',
        'Há ganhadores e perdedores, e eu acredito ser um ganhador': 'Tubarão',
        'Para eu ganhar, ninguém precisa perder': 'Gato',
        'Para ganhar é preciso seguir as regras': 'Lobo',
        'Para ganhar, é necessário inventar novas regras': 'Águia',
        'Explorar': 'Águia',
        'Evitar surpresas': 'Lobo',
        'Focalizar a meta': 'Tubarão',
        'Realizar uma abordagem natural': 'Gato',
        'Me der uma vantagem competitiva': 'Tubarão',
        'For divertido e puder ser compartilhado': 'Gato',
        'Me der mais liberdade e variedade': 'Águia',
        'Melhorar ou me der mais controle': 'Lobo',
        'Se colocar na frente': 'Tubarão',
        'Colocar os outros na frente': 'Gato',
        'Mudar de ideia': 'Águia',
        'Ser consistente': 'Lobo',
        'Pessoas bem-sucedidas': 'Tubarão',
        'Anciões e conselheiros': 'Gato',
        'Autoridades no assunto': 'Lobo',
        'Lugares, os mais estranhos': 'Águia',
        'Fazer o que precisa ser feito': 'Águia',
        'Fazer bem feito': 'Lobo',
        'Fazer junto com o grupo': 'Gato',
        'Simplesmente fazer': 'Tubarão',
        'Complexidade, mesmo se confuso': 'Águia',
        'Ordem e sistematização': 'Lobo',
        'Calor humano e animação': 'Gato',
        'Coisas claras e simples': 'Tubarão',
        'Algo que detesto desperdiçar': 'Tubarão',
        'Um grande ciclo': 'Gato',
        'Uma flecha que leva ao inevitável': 'Lobo',
        'Irrelevante': 'Águia',
        'Faria doações para muitas entidades': 'Gato',
        'Criaria uma poupança avantajada': 'Lobo',
        'Faria o que desse na cabeça': 'Águia',
        'Me exibiria bastante para algumas pessoas': 'Tubarão',
        'O destino é mais importante que a jornada': 'Tubarão',
        'A jornada é mais importante que o destino': 'Gato',
        'Um centavo economizado é um centavo ganho': 'Lobo',
        'Bastam um navio e uma estrela para navegar': 'Águia',
        'Aquele que hesita está perdido': 'Tubarão',
        'De grão em grão a galinha enche o papo': 'Lobo',
        'O que vai, volta': 'Gato',
        'Um sorriso ou uma careta é o mesmo para quem é cego': 'Águia',
        'É melhor prudência do que arrependimento': 'Lobo',
        'A autoridade deve ser desafiada': 'Águia',
        'Ganhar é fundamental': 'Tubarão',
        'O coletivo é mais importante do que o individual': 'Gato',
        'Não é fácil ficar encurralado': 'Águia',
        'É preferível olhar, antes de pular': 'Lobo',
        'Duas cabeças pensam melhor que do que uma': 'Gato',
        'Se você não tem condições de competir, não compita': 'Tubarão'
    };

    const summaries = {
        Águia: {
            text: "A águia simboliza o idealizador criativo que sempre busca inovar e explorar novas possibilidades. Com uma visão ampla e macro, ela prefere olhar além do óbvio, evitando o caminho convencional e de 'pisar no chão'. A águia valoriza a inovação e a originalidade, se destacando por sua capacidade de pensar fora da caixa e buscar resultados inéditos. Seu espírito livre e criativo permite que ela veja oportunidades onde outros veem obstáculos, inspirando aqueles ao seu redor com sua perspectiva única e elevada.",
            image: <img src={aguiasvg} alt="aguia" className=' w-20' />
        },
        Gato: {
            text: "O gato é a personificação do comunicador carismático e sociável, que se dá bem com todos ao seu redor. Ele aprecia o calor humano e tem uma habilidade natural para estabelecer conexões e manter relacionamentos. Sempre envolvido com amigos e familiares, o gato se destaca por sua capacidade de comunicar-se de maneira eficaz e empática. Sua presença é sempre bem-vinda em qualquer grupo, pois ele traz consigo uma atmosfera de camaradagem e compreensão, facilitando a interação e a coesão entre as pessoas.",
            image: <img src={gatosvg} alt="gato" className=' w-20' />
        },
        Lobo: {
            text: "O lobo é um indivíduo metódico e confiável, caracterizado por sua inteligência e capacidade de organização. Ele valoriza a precisão e o perfeccionismo, tomando decisões baseadas em sucessos anteriores para minimizar a probabilidade de erros. Esse comportamento conservador garante que ele seja visto como um líder estável e equilibrado. Seu senso de responsabilidade e pontualidade o tornam uma figura essencial em qualquer grupo, pois é alguém em quem se pode confiar para planejar e executar tarefas de maneira eficaz e segura.",
            image: <img src={lobosvg} alt="lobo" className=' w-20' />
        },
        Tubarão: {
            text: "O tubarão é o executor determinado e competitivo, conhecido por sua extrema produtividade e eficiência. Ele não hesita em colocar a mão na massa e enfrentar desafios de frente. Confiante em suas habilidades, o tubarão detesta ficar para trás e sempre busca superar obstáculos para alcançar seus objetivos. Sua natureza independente e resoluta o torna um elemento crucial em qualquer equipe, pois ele garante que o trabalho seja concluído com competência e rapidez, sempre mantendo o foco em resultados concretos e tangíveis.",
            image: <img src={tubaraosvg} alt="tubarao" className=' w-20' />
        }
    };

    const handleNext = () => {
        if (page === 1 && (!formData.firstName || !formData.lastName)) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        setPage(page + 1);
    };

    const handlePrevious = () => {
        setPage(page - 1);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAnswerChange = (questionIndex, option) => {
        setFormData((prevState) => {
            const currentAnswers = prevState.answers[questionIndex] || [];
            const newAnswers = currentAnswers.includes(option)
                ? currentAnswers.filter((answer) => answer !== option)
                : [...currentAnswers, option];

            return {
                ...prevState,
                answers: {
                    ...prevState.answers,
                    [questionIndex]: newAnswers
                }
            };
        });
    };

    const calculateResults = () => {
        const groupScores = {
            Águia: 0,
            Gato: 0,
            Lobo: 0,
            Tubarão: 0
        };

        Object.values(formData.answers).forEach((answers) => {
            answers.forEach((answer) => {
                const group = optionGroupMapping[answer];
                if (group) {
                    groupScores[group]++;
                }
            });
        });

        const totalAnswers = Object.values(formData.answers).reduce((total, answers) => total + answers.length, 0);

        const groupPercentages = {};
        for (const [group, score] of Object.entries(groupScores)) {
            groupPercentages[group] = (score / totalAnswers) * 100;
        }

        return groupPercentages;
    };

    const results = calculateResults();

    const data = {
        labels: Object.keys(results),
        datasets: [
            {
                label: 'Porcentagem por grupo',
                data: Object.values(results),
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };

    const options = {};

    const progressBarStyle = {
        width: `${((page - 1) / (questions.length + 1)) * 100}%`
    };

    const handleSave = () => {
        if (chartRef.current) {
            html2canvas(chartRef.current.canvas).then((canvas) => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'grafico.png';
                link.click();
            });
        }
    };

    const sortedResults = Object.entries(results).sort(([, a], [, b]) => b - a);
    
    const topGroups = sortedResults.filter(([, percentage], index, arr) => {
        if (index === 0) return true;
        const diff = Math.abs(arr[0][1] - percentage);
        return diff <= 2;
    });

    // Função para formatar os resultados como string
    const formatResultsForSharing = (results) => {
        return Object.entries(results)
            .map(([group, percentage]) => `${group}: ${percentage.toFixed(2)}%`)
            .join(', ');
    };

    const handleShare = (platform) => {
        const url = window.location.href;
        const formattedResults = formatResultsForSharing(results); // Resultados formatados
        const text = `Dá uma olhada no resultado do meu quiz! ${formattedResults}`; // Incluindo os resultados formatados
        const encodedText = encodeURIComponent(text);
        const encodedUrl = encodeURIComponent(url);
        let shareUrl;

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&summary=${encodedText}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank');
    };

    // Function to copy link to clipboard
    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => alert('Link copied to clipboard!'))
            .catch(err => console.error('Failed to copy link: ', err));
    };

    return (
        <div className="w-full">
            <div className="w-full p-4">
                {page === 1 && (
                    <div className='w-full flex flex-col items-center sm:flex-row gap-20'>
                        <div className='w-full md:w-1/2'>
                            <h2 className="text-2xl mb-8">Vamos começar?</h2>
                            <div className='mb-8'>
                                <li>É permitido pular questões</li>
                                <li>É permitido marcar mais de uma opção</li>
                                <li>Resultados podem ser salvos e compartilhados</li>
                            </div>
                            <label className="block mb-5">
                                Primeiro Nome:
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-md w-full mt-4 bg-slate-950/20"/>
                            </label>
                            <label className="block mb-2">
                                Último Nome:
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-md w-full mb-10 mt-4 bg-slate-950/20"/>
                            </label>
                            <button
                                onClick={handleNext}
                                className="bg-sky-500/50 rounded-md flex px-5 py-2 gap-20 items-center hover:bg-sky-500 mt-5">Próximo
                                <BsArrowBarRight/></button>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-row gap-10">
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
                    </div>
                )}
                {page > 1 && page <= questions.length + 1 && questions.map((q, index) => (page === index + 2 && (
                    <div key={index}>
                        <div className="w-full h-4 bg-slate-950/20 rounded-full mb-5">
                            <div className="h-full bg-sky-500 rounded-full" style={progressBarStyle}></div>
                        </div>
                        <div>
                            <h2 className="text-2xl mb-10">{q.question}</h2>
                            {q
                                .options
                                .map((option, optionIndex) => (
                                    <label key={optionIndex} className="block mb-10">
                                        <input
                                            type="checkbox"
                                            name={`question-${index}`}
                                            value={option}
                                            checked={formData.answers[index]
                                            ?.includes(option)}
                                            onChange={() => handleAnswerChange(index, option)}
                                            className="mr-2"/> {option}
                                    </label>
                                ))}
                            <div className="flex justify-between mt-20">
                                <button
                                    onClick={handlePrevious}
                                    className="bg-slate-950/20 border border-white/50 rounded-md flex px-5 py-2 gap-20 items-center hover:bg-gray-600"><BsArrowBarLeft/></button>
                                <button
                                    onClick={handleNext}
                                    className="bg-sky-500/50 rounded-md flex px-5 py-2 gap-20 items-center hover:bg-sky-500">Próximo
                                    <BsArrowBarRight/></button>
                            </div>
                        </div>
                    </div>
                )))}
                {page === questions.length + 2 && (
                    <div className='w-full grid xl:grid-cols-2 gap-5 grid-cols-1'>
                        <div>
                            <h2 className='text-2xl text-sky-500'>Parabéns, {formData.firstName}!</h2>
                            <h2 className='text-2xl text-white mb-10'>Concluimos o quiz de 25 perguntas!</h2>

                            <div>
                                <div className="w-full flex flex-row items-center justify-center">
                                    {topGroups.map(([group]) => (
                                        <div key={group} className='text-center gap-5'>
                                            <div key={group} className='border-2 border-sky-50 rounded-full p-4'>
                                                {summaries[group].image}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='mt-5'>
                                    {topGroups.map(([group]) => (
                                        <div key={group}>
                                            <li className="text-left mb-5">{summaries[group].text}</li>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link to={"/personalidades"} className="bg-slate-950/20 border border-white/50 rounded-md flex px-5 py-2 gap-20 items-center hover:bg-gray-600 mt-10">
                                    Saiba mais de cada personalidade
                            </Link>

                            
                            <div className='flex flex-row justify-between'>

                                <button onClick={handlePrevious} className="bg-slate-950/20 border border-white/50 rounded-md flex px-5 py-2 gap-20 items-center hover:bg-gray-600 mt-10">
                                    <BsArrowBarLeft/>
                                </button>

                                <div className="mt-10 flex flex-row gap-5">
                                    <button onClick={() => handleShare('twitter')} className="bg-sky-500/50 rounded-full flex px-5 py-5 items-center hover:bg-sky-500">
                                        <FaTwitter />
                                    </button>
                                    <button onClick={() => handleShare('linkedin')} className="bg-sky-500/50 rounded-full flex px-5 py-5 items-center hover:bg-sky-500">
                                        <FaLinkedin />
                                    </button>
                                    <button onClick={() => handleShare('facebook')} className="bg-sky-500/50 rounded-full flex px-5 py-5 items-center hover:bg-sky-500">
                                        <FaFacebook />
                                    </button>
                                    <button onClick={handleCopyLink} className="bg-sky-500/50 rounded-full flex px-5 py-5 items-center hover:bg-sky-500">
                                        <FaLink />
                                    </button>
                                </div>
                            
                            </div>


                        </div>
                        <div className='flex flex-col items-center'>
                            <Radar ref={chartRef} data={data} options={options} className="h-full bg-sky-50 rounded-2xl" />
                            <button onClick={handleSave} className="bg-sky-500/50 rounded-md flex px-5 py-2 gap-5 items-center hover:bg-sky-500 mt-5">Baixar gráfico
                                <BsDownload/></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};

export default MultiStepForm;