import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href='/racingData/1'>Race 1</Link><br/>
      <Link href='/racingData/2'>Race 2</Link><br/>
      <Link href='/racingData/3'>Race 3</Link>
      <p>etc...</p>
    </>
  )
}
