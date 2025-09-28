'use client';

import {
  crochet,
  drawing,
  DocumentDuplicateIcon,
} from '../../../../public';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { use } from 'react';
import clsx from 'clsx';

// Todo use src and html to import icons into this module
const links = [
    { 
        name: 'Forside',
        href: '/app/frontpage',
        // icon: HomeIcon
    },
    {
        name: 'Tegninger',
        href: '/app/front_page/drawings',
        icon: DocumentDuplicateIcon
    },
    {
        name: 'Hæklede tøjdyr',
        href: '/app/front_page/crochet',
        icon: crochet
    }
]