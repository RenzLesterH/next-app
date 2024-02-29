import Image from 'next/image'
import ProductCard from './component/product_card'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <h1>Hello!</h1>
        <Link href="/users">Users</Link>
    </main>
  )
}
