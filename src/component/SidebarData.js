import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WaterIcon from '@mui/icons-material/Water';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Weather",
        icon: <WbSunnyIcon />,
        link: "/weather"
    },
    {
        title: "Water Temperature",
        icon: <WaterIcon />,
        link: "/waterTemp"
    }
]
