import Header from "@/components/Header"
import Place from "@/components/Place"
import Photo from "@/components/photo"

export default function Racing ({racingItem}: {racingItem: any}) {
    return (
        <>
            <Header racingItem={racingItem}/>
            <Photo/>
            <Place raceResultsCollection={racingItem.raceCollection.raceResultsCollection}/>
        </>
    )
}