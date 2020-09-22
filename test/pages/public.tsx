import Link from 'next/link';

export default function Public() {
  return (
    <div>
      This is a public page
      <div>
        <Link href="/login"><a>login</a></Link>
      </div>
    </div>
  )
}