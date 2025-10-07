'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';

// Todo use src and html to import icons into this module
const links = [
    { 
        name: 'Forside',
        href: './',
        icon: '/home.png'
    },
    {
        name: 'Tegninger',
        href: './',
        icon: '/drawing.png'
    },
    {
        name: 'Hæklede tøjdyr',
        href: './',
        icon: '/crochet.png'
    }
]

export default function SideNavLinks() {

    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-black font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                        <Image
                            src={link.icon}
                            width={24}
                            height={24}
                            alt={`${link.name} Icon`}
                            className="w-6 h-6"
                        />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    )
}
