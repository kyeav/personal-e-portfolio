import Intern from '../assets/internship-min.PNG'
import Gomovies from '../assets/gomovies-min.PNG'
import Ecomm from '../assets/e-commerce-min.PNG'
import Eport from '../assets/e-portfolio-min.PNG'
import Twitter from '../assets/twitter-min.PNG'
import Hulu from '../assets/hulu-min.PNG'
import Google from '../assets/google-min.PNG'

export const projects = [
    {
        id: 1, 
        name: 'NFT Marketplace Internship',
        image: Intern,
        stack: 'React | JavaScript | CSS | HTML',
        description: 'Features: pagination, carousel, branching, animations, pull-requests, api-integration, rebasing, library-integration, skeleton-loading-states',
        github: 'https://github.com/kyeav/kylie-internship',
        link: 'https://kylie-internship.vercel.app/',
    },
    {
        id: 2, 
        name: 'gomovies',
        image: Gomovies,
        stack: 'React (+ Context API) | Tailwind CSS',
        description: 'An app for searching, filtering, sorting, viewing top-rated and popular movies and viewing recommended movies and cast for a particular movie.',
        github: 'https://github.com/kyeav/react-final-project',
        link: 'http://movies-react-final-project.vercel.app/',
    },
    {
        id: 3, 
        name: 'E-Commerce Website',
        image: Ecomm,
        stack: 'React (+ hooks) | CSS3 (+ BEM) | HTML5',
        description: 'A React E-commerce app that displays data about popular and recommended books. Has the abililty to filter books and add them to cart for purchase.',
        github: 'https://github.com/kyeav/library-react',
        link: 'https://l1braryapp-react.herokuapp.com/',
    },
    {
        id: 4, 
        name: 'E-Portfolio Website',
        image: Eport,
        stack: 'CSS3 (+ BEM) | HTML5',
        description: 'A responsive and multi-platform E-Portfolio that allows individuals to connect with prospective employers, as well as showcasing their skills and projects. Animations, transitions and reusable classes are implemented. Personal information and projects were replaced to maintain privacy.',
        github: 'https://github.com/kyeav/e-portfolio',
        link: 'https://kyeav.github.io/e-portfolio/',
    },
    {
        id: 5, 
        name: 'Twitter Clone',
        image: Twitter,
        stack: 'Firebase | Material-UI | React-Flip-Move | React | JavaScript | CSS3 (+ BEM) | HTML5',
        description: 'A fully reponsive social media app with posting, commenting and liking tweets functionality.',
        github: 'https://github.com/kyeav/twitter-clone',
        link: 'https://twitter-clone-b0acc.web.app',
    },
    {
        id: 6, 
        name: 'Hulu Clone',
        image: Hulu,
        stack: 'Next.js | Tailwind CSS | Flexbox | CSS Grid | REST API | Heroicons',
        description: 'A constantly updating movie homepage that sorts over 2,500 movies by category.',
        github: 'https://github.com/kyeav/hulu-clone',
        link: 'https://hulu-clone-kyeav.vercel.app/',
    },
    {
        id: 7, 
        name: 'Google clone',
        image: Google,
        stack: 'Google Custom Search API | React (+ hooks) | Context API (Redux) | Material-UI | JavaScript | CSS | HTML',
        description: 'A search engine that fetches data from Google Custom Search API to display search results.',
        github: 'https://github.com/kyeav/google-clone',
        link: 'https://clone-730a7.web.app/',
    },
]