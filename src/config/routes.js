import * as Pages from '../pages'

export const routes = [
    {
        name: 'Home',
        icon: 'home',
        path: '/',
        page: Pages.Home,
    },
    {
        name: 'Find Relief Camps',
        icon: 'global',
        path: '/find-camps',
        page: Pages.FindCamps,
    },
    {
        name: 'Missing Person',
        icon: 'user',
        path: '/missing-person',
        page: Pages.MissingPerson,
    },
    {
        name: 'Request Help',
        icon: 'safety',
        path: '/request-help',
        page: Pages.RequestHelp,
    },
    {
        name: 'Volunteer',
        icon: 'team',
        path: '/volunteer',
        page: Pages.Volunteer,
    },
    {
        name: 'Announcements',
        icon: 'sound',
        path: '/announcements',
        page: Pages.Announcement,
    },
    {
        name: '24 X 7 Helpline',
        icon: 'phone',
        path: '/helpline',
        page: Pages.HelpLine,
    },
]