import {LayoutDashboard} from 'lucide-react'
import {Settings} from 'lucide-react'
import { Search } from "lucide-react"
import { Mail } from "lucide-react"
import { ChartNoAxesColumn  } from "lucide-react"
import { ReactNode } from "react"

interface SidebarItem {
    name: string;
    icon:React.ComponentType<React.SVGProps<SVGSVGElement>>,
  }

 export const sidebarList:SidebarItem[]=[
    {
        name:"Dashboard",
        icon:LayoutDashboard
    },
    {
        name:"Find",
        icon:Search
    },
    {
        name:"Inbox",
        icon:Mail
    },
    {
        name:"Analytics",
        icon:ChartNoAxesColumn
    },
    {
        name:"Settings",
        icon:Settings
    },
]