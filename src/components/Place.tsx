import Link from "next/link";
import './Place.css'

export default function Place ({raceResultsCollection}: {raceResultsCollection: any}) {
    return (
        <table className="w-full text-black m-3">
             <thead className="text-left">
                 <tr>
                    <th>Win/Place</th>
                    <th>Margin</th>
                    <th>SP</th>
                    <th>VIC</th>
                 </tr>
            </thead>
            <tbody>
            {
                raceResultsCollection.map((raceResult: any) => {
                    return (
                        <tr key={raceResult.position} className="tableDetail">
                            <td className="flex">
                                <div className="flex-none px-5">{raceResult.position}</div>
                                <img className="flex-none px-5" src={raceResult.horse.silkUrl}/>
                                <div className="flex-1 px-5">
                                    <div className='block'>{raceResult.raceEntryNumber}. 
                                    <Link href='https://www.racing.com/horses'>{raceResult.horse.fullName}</Link> 
                                    ({raceResult.barrierNumber})</div>
                                    <div className='block'>T:  
                                        <span>
                                            <Link href='https://www.racing.com/trainers'>{raceResult.horse.fullName}</Link> 
                                            {raceResult.trainer.shortName} 
                                            <Link href='https://www.racing.com/jokeys'>{raceResult.jockey.shortName}</Link> 
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>{raceResult.position == 1 ? raceResult.winningTime : raceResult.margin}</td>
                            <td>{raceResult.odds.priceStart}</td>
                            <td>{
                                raceResult.position == 1 ? 
                                    (<>
                                        <div className="block">{raceResult.odds.parimutuel.returnWin}</div>
                                        <div className="block">{raceResult.odds.parimutuel.returnPlace}</div>
                                    </>) :
                                    raceResult.odds.parimutuel.returnPlace
                            }</td>
                        </tr>
                    )
                })
            }

            </tbody>
        </table>
    )
}