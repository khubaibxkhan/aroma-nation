import { Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip , TooltipProvider , TooltipTrigger } from "./ui/tooltip"
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { TooltipContent } from '@radix-ui/react-tooltip';

interface Props{
    className?: string;
    iconClassName?: string;
    TooltipClassName?: string;
}

const socialLink = [
    {
        title: "Instagram",
        href: "https://www.instagram.com/aroma.nation.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        icon: <Instagram className="w-5 h-5" />,
    },
    {
        title: "Whatsapp",
        href: "www.khubaibxkhan.com",
        icon: <Youtube className="w-5 h-5" />,
    },
    {
        title: "Twitter",
        href: "www.khubaibxkhan.com",
        icon: <Twitter className="w-5 h-5" />,
    },
]
const SocialMedia = ({className,iconClassName,TooltipClassName}:Props) => {
  return (
    <TooltipProvider>
        <div className={cn("flex items-center gap-3.5",className)}>
            {socialLink?.map((item) => (
                <Tooltip key={item?.title}>
                    <TooltipTrigger asChild>
                        <Link
                           key={item?.title} 
                           href={item?.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",className)}
                        >
                            {item?.icon}
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className={cn("bg-white text-darkColor font-semibold ")}>{item?.title}</TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia
