export function Balance({balance}){
    return <div className="flex font-bold items-center h-14">
        <div className="pr-2">Your Balance:</div>
        <div>₹{balance}</div>
    </div>
}