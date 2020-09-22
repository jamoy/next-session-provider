import Link from 'next/link';

export default function Index() {
  return (
    <div>
      Welcome to Next Session Provider

      <div>
        <Link href="/login"><a>login</a></Link></div>
      <div><Link href="/public"><a>public page</a></Link></div>
      <div><Link href="/protected"><a>protected page</a></Link>
      </div>
    </div>
  )
}