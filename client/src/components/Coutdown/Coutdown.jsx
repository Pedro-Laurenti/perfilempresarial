import Countdown from "react-countdown";
import { YouTubePage } from "..";

// Componente de conclusão
const Completionist = () => {
    
    return(

        <span>
            <YouTubePage />
        </span>
    
)}

// Renderer callback com condição
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Renderiza um estado completo
        return <Completionist />;
    } else {
        return (
            <section className="w-full flex flex-row justify-center font-mono font-thin text-5xl gap-1 md:gap-5">
                <div className="px-5 md:px-10 py-10 md:py-20 w-full max-w-60 bg-sky-500/50 border border-white flex flex-col text-center rounded-lg">
                    <div>{days}</div>
                    <div className=" text-xl font-sans font-light">Dias</div>
                </div>
                <div className="px-5 md:px-10 py-10 md:py-20 w-full max-w-60 bg-sky-500/50 border border-white flex flex-col text-center rounded-lg">
                    <div>{hours}</div>
                    <div className="text-xl font-sans font-light">Horas</div>
                </div>
                <div className="px-5 md:px-10 py-10 md:py-20 w-full max-w-60 bg-sky-500/50 border border-white flex flex-col text-center rounded-lg">
                    <div>{minutes}</div>
                    <div className=" text-xl font-sans font-light">Min</div>
                </div>
                <div className="px-5 md:px-10 py-10 md:py-20 w-full max-w-60 bg-sky-500/50 border border-white flex flex-col text-center rounded-lg">
                    <div>{seconds}</div>
                    <div className=" text-xl font-sans font-light">Seg</div>
                </div>
            </section>
        );
    }
};

const CountdownComponent = () => {
    const targetDate = new Date("2024-06-17T13:00:00")
    return <Countdown date={targetDate} renderer={renderer} />
};

export default CountdownComponent;