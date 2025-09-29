'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { use } from 'react';
import clsx from 'clsx';

// Todo use src and html to import icons into this module
const links = [
    { 
        name: 'Forside',
        href: "www.google.dk"
    },
    {
        name: 'Tegninger',
        href: "www.google.dk"
    },
    {
        name: 'Hæklede tøjdyr',
        href: "www.google.dk"
    }
]

export default function SideNavLinks() {

    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                // const LinkIcon = link.icon; // Todo: få link til ikon

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
                        {/* <LinkIcon className="w-6" /> */}
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    )
}