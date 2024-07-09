const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: 'Home',
    link: '/',
   
  },
  {
    id:2,
    hasDropdown: false,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'Programs',
    megaMenuTwo: true,
    megaMenu: false,
    link: '/programs',
    mega_menus_two: [
      {
        title: 'List 1', link: '#',
        submenus: [
          {title:'First Semister',link:'/program-details/1', count:'01', age:'Diploma'},
          {title:'Second Semister',link:'/program-details/2', count:'02', age:'Diploma'},
          {title:'Third Semister',link:'/program-details/3', count:'03', age:'Diploma'},
        ]
      },
      {
        title: 'List 2', link: '#',
        submenus: [
          {title:'Fourth Semister',link:'/program-details/4', count:'04', age:'Diploma'},
          {title:'Fifth Semiser',link:'/program-details/5', count:'05', age:'Diploma'},
          {title:'Sixth Semister',link:'/program-details/6', count:'06', age:'Diploma'},
          {title:'Seven Semister',link:'/program-details/7', count:'07', age:'Diploma'},
        ]
      },
      {
        title: 'List 3', link: '#',
        submenus: [
          {programImg: true, title:'Join New Program',link:'/programs', img:'/assets/img/logo/mega-menu-1.png', btn:'View More'},
        ]
      }
    ]
  },
  {
    id:5,
    hasDropdown: false,
    title: 'Gallery',
    link: '/gallery',
  },
  {
    id:6,
    hasDropdown: false,
    title: 'News',
    link: '/news',
    submenus: [
      { title: 'News Default', link: '/news' },
      { title: 'News Sidebar', link: '/news-sidebar' },
      { title: 'News Classic', link: '/news-classic' },
      { title: 'News Details', link: '/news-details' },
    ]
  },
  {
    id:7,
    hasDropdown: false,
    title: 'Contact',
    link: '/contact',
  },
]

export default menu_data;
