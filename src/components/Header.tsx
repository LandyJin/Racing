import './Header.css';

export default function Header ({racingItem}: {racingItem: any}) {

    return (
        <div className='header flex'>
                <div className='raceNumberCircle flex-none' >
                    <div className='text-3xl text-black raceNumber'>{racingItem.raceCollection.raceNumber}</div>
                </div>
                <div className='flex-1'>
                    <div className='block'>{racingItem.trackName} | {new Date(racingItem.raceCollection.dateUTC).toLocaleDateString()}</div>
                    <div className='block'>{new Date(racingItem.raceCollection.dateUTC).toLocaleTimeString()}</div>
                </div>
                <div className='flex-none'>
                    <div className='block'>Track condition</div>
                    <div className='block'>Good 3</div>
                </div>
        </div>
    )
}