import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const id = Number(req.url.slice(req.url.lastIndexOf("/") + 1))

    const res = await fetch(`http://localhost:4000/Races`)

    const data = await res.json()

    const trackName = data[0].meet.trackName

    const findItem = data[0].raceCollection.filter((item: any) => {return item.raceNumber === id})

    if (!findItem) return NextResponse.json({"message": "Product not found"})

    const receResultCollection = [];

    for (var i = 0; i < 3; i++) {
        receResultCollection.push(findItem[0].raceResultsCollection[i])
    }

    const newData = {
        "trackName": trackName,
        "raceCollection": {
            "raceNumber": findItem[0].raceNumber,
            "dateUTC": findItem[0].dateUTC,
            "raceResultsCollection": receResultCollection
        }
    }
    
    // setTimeout(()=>{
        return NextResponse.json(newData)

    // },5000)
}