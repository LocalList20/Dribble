import { NavLinks } from '@/constants/index'
import Link from 'next/link'
import Image from 'next/image'
import AuthProviders from "@/components/AuthProviders"

export default function Nav() {
  const session = {}
  return (<nav className="flexBetween navbar">
  
  <div className="flex-1 flex-start gap-10">
  <Link href="/">
  <Image 
  src="./logo.svg" 
  width={115}
  height={43}
  alt="Flexxible"
  />
  </Link>
  <ul className="xl:flex hidden text-small gap-7">
  {NavLinks.map(({href,key,text}) => (<Link href={href} key={key} className="">
  {text}
  </Link>))}
  </ul>
  </div>
  
  <div className="flexCenter gap-4">
  {session ? (<>
  UserPhoto <Link href="/create-project" className="capitalize">share work</Link>
  </>) : <AuthProviders />}
  </div>
  </nav>)
}