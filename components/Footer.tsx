import Image from "next/image"
import {footerLinks} from "@/constants/index"
import Link from "next/link"

type Props = {
  title: string,
  links: Array<string>
}

const FooterColumn = ({ title,links }: Props) => {
  
 return (<div className="footer_column">
<h4 className="font-bold">{title}</h4>
<ul className="flex flex-col gap-2 font-normal">
{links.map(link => (<Link href="/" key={link}>{link}</Link>))}
</ul>
</div>)
}
export default function Footer(){
  return (
  <footer className="flexStart footer">
  <div className="flex flex-col gap-12 w-full">
  <div className="flex item-start flex-col">
  <Image 
  src="/logo-purple.svg"
  width={115}
  height={38}
  alt="flexibble"
  />
  
  <p className="text-sm max-w-xs text-start font-normal mt-5">
  flexibble is the world's leading community for cratives to share, grow, and get hired
  </p>
  </div>
  
  <div className="flex flex-wrap gap-12">
  <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
  
  <div className="flex-1 flex flex-col gap-4">
    <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>
      <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>
  </div>
    <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links}/>
    
    <div className="flex-1 flex flex-col gap-4">
    <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links}/>
      <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links}/>
  </div>
          <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links}/>
  </div>
  
  </div>
  
  <div className="flexBetween footer_copyright">
  <p>@ 2023 flexibble, All rights reserved</p>
  
  <p className="text-gray"><span className="font-semibold text-black">10,214</span> Projects Submitted</p>
  </div>
  
  </footer>
  )
}