export function Card(){
    return(
        <div className="bg-almwhite text-lunargreen font-raleway-regular flex flex-col items-start justify-center p-8 pt-4 shadow-xl w-96 border-2 border-avacado">
            <img src="" alt="" />
            <div className="flex flex-col items-start gap-3">
            <span className="font-lato-bold text-2xl">Echinocereus Cactus</span>
            <span>$15.00</span>
            <div className="flex flex-row items-center justify-start gap-3">
                <div className="bg-grayishgreen border-2 border-avacado text-avacado px-3 py-1 rounded-3xl"><span>Label</span></div>
                <div className="bg-grayishgreen border-2 border-avacado text-avacado px-3 py-1 rounded-3xl"><span>Type</span></div>
            </div>
            </div>
        </div>
    )
}