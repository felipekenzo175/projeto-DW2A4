import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ 
    onFeedbackRestartRequested 
}: FeedbackSuccessStepProps) {
    return(
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
            
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="40.000000pt" height="40.000000pt" viewBox="0 0 40.000000 40.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            </g>
            </svg>

            <span className="text-xl mt-2">Agradecemos o Feedback!</span>

            <button
                type="button"
                onClick={onFeedbackRestartRequested}
                className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            >
                Quero Enviar Outro
            </button>
            </div>
        </>
    )
}