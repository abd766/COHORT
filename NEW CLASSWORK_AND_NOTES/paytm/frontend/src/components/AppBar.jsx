export function AppBar({name}){
    return <div className="flex justify-between font-semibold text-black px-4 shadow h-14">
        <div className="flex flex-col justify-center ml-4">
            PayTM App
        </div>
        <div className="flex mr-4">
            <div className="flex flex-col justify-center pr-3">
                {name}
            </div>
            <div className="flex flex-col justify-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200 text-xl">
                {name[0].toUpperCase()}
            </div>
        </div>
    
            </div>
        </div>
}