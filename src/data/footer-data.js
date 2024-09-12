import logo from '@assets/img/logo/favicon.png';
import logoWhite from '@assets/img/logo/logo-white.svg';

const footer_data = {
    "description": {
        id: 1,
        logo: logo,
        logoWhite: logoWhite,
        teaser: 'SK Private Home is a Diploma in Engineering Coaching Center as known as Polytechnic Coaching Centre .We are First Polytechnic Coaching Centre in Chittagong, We Services Polytechnic Students last 7 Years & we will give more.',
        socialTitle: 'Social',
        newsTitle: 'Join Our Newsletter',
        newsBtn: 'Subscribe now',
        social_icons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/skprivetehome?mibextid=ZbWKwL',
                name: 'Facebook Page',
            },
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/share/icsbk4df2hjQ8PTp/?mibextid=A7sQZp',
                name: 'Facebook Group',
            }
            
        ]
    },
    "quick_links": {
        id: 2,
        title: 'Quick links',
        menus: [
            {
                id: 1,
                menu: 'About',
                path: '/about',
            },
            {
                id: 2,
                menu: 'Programs',
                path: '/programs',
            },
            {
                id: 5,
                menu: 'Gallery',
                path: '/gallery',
            },
            {
                id: 6,
                menu: 'Contact',
                path: '/contact',
            }
        ]
    },
    "program_links": {
        id: 3,
        title: 'Programs',
        programs: [
            {
                id: 1,
                menu: 'First Semister',
                path: '/program-details/1',
            },
            {
                id: 2,
                menu: 'Second Semister',
                path: '/program-details/2',
            },
            {
                id: 3,
                menu: 'Third Semister',
                path: '/program-details/3',
            },
            {
                id: 4,
                menu: 'Fourth Semister',
                path: '/program-details/4',
            },
            {
                id: 5,
                menu: 'Fifth Semister',
                path: '/program-details/5',
            },
            {
                id: 6,
                menu: 'Sixth Semister',
                path: '/program-details/6',
            },
            {
                id: 7,
                menu: 'Seven Semister',
                path: '/program-details/7',
            },
        ]
    },
    "customer_services": {
        id: 3,
        title: 'Programs',
        services: [
            {
                id: 1,
                menu: 'Recently Viewed',
                path: '/programs',
            },
            {
                id: 2,
                menu: 'New Products',
                path: '/shop',
            },
            {
                id: 3,
                menu: 'Shipping & Returns',
                path: '/contact',
            },
            {
                id: 4,
                menu: 'Senior Kg',
                path: '/programs',
            },
            {
                id: 5,
                menu: 'Become a Seller',
                path: '/programs',
            }
        ]
    },
    "contact_info": {
        id: 4,
        title: 'Contact Us',
        infos: [
            {
                id: 1,
                icon: 'fa-light fa-location-dot',
                url: '#',
                title: 'Near Polytechnic Institute, Hazi Abdul Hannan Sarak, Khulshi Green Housing Society, Khulshi Colony, Chaittagong',
            },
            {
                id: 2,
                icon: 'fa-light fa-phone',
                url: 'tel:9072003462',
                title: '+880 16723 47172',
            },
            {
                id: 3,
                icon: 'fa-light fa-envelope',
                url: 'skprivatehome@gmail.com',
                title: 'skprivatehome@gmail.com',
            }
        ]
    },
}

export default footer_data;
