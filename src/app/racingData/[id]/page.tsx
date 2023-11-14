"use client"
import { Suspense, useEffect, useState } from 'react';
import { useRouter } from "next/navigation"
import dynamic from 'next/dynamic'
import Loading from '@/app/loading';
 
const Racing = dynamic(() => import('../../../components/racing'), {
    loading: () => <Loading/>,
  })

export default function RacingItem(
    { params }: { params: { id: number }}
) {
    const id = params.id
    const router = useRouter()
    const [racingItem, setRacingItem] = useState<any>()
    
    useEffect(() => {
        async function fetchAPI() {
            try {
                // fetch Next API
                const response = await fetch(
                    'http://localhost:3000/api/racing-data/' + id
                ).then(res => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        throw new Error('error ' + res.status)
                    }
                })
                setRacingItem(response)
            } catch {
                router.push("/404")
            }
        }
        fetchAPI()
    }, [])

    return ( 
        !!racingItem && 
        <div className="bg-white">
            <Suspense fallback={<p className="text-red">loading</p>}>
                <Racing racingItem={racingItem}/>
            </Suspense>
        </div>
    )
}