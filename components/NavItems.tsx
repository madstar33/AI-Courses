'use client';

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
	{label:'Home', href:'/'},
	{label: 'Companions', href:'/companions'},
	{label:'My journy', href: '/my-journey'},
]

const NavItems = () => {

	//current page we are in
  const pathname = usePathname();

  return (
	<nav className='flex items-center gap-4'>
		{/* automatically destructure label and href */}
		{navItems.map(({label, href}) => (
			<Link href={href} key={label} 
			className={cn(pathname === href && 'text-primary font-semibold')}>
				{label}
			</Link>
		))}
	</nav>
  )
}

export default NavItems