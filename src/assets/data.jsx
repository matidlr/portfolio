import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaWordpress, FaNode } from 'react-icons/fa';
import { SiMysql } from "react-icons/si";
import ecommerceImg from '../assets/ecommerce.jpg';
import unsplashImg from '../assets/unsplash.jpg';
import mixmasterImg from '../assets/mixmaster.jpg';
import blog from '../assets/blog.png'
import instagram from '../assets/instagram.jpg';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Wordpress',
    icon: <FaWordpress className='h-16 w-16 text-emerald-500' />,
    text: 'Create Wordpress responsive sites',
  },
  {
    id: nanoid(),
    title: 'Node.js',
    icon: <FaNode className='h-16 w-16 text-emerald-500' />,
    text: 'Build basic backend api',
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <SiMysql className='h-16 w-16 text-emerald-500' />,
    text: 'Manage data base with MySQL',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: mixmasterImg,
    url: 'https://drinks-mdlr.netlify.app/',
    github: 'https://github.com/matidlr/mixmaster',
    title: 'Mix Master',
    text: 'Search drinks web. This site was created using React and consuming API with axios',
  },
  {
    id: nanoid(),
    img: ecommerceImg,
    url: 'https://github.com/matidlr/e-commerce',
    github: 'https://github.com/john-smilga',
    title: 'Ecommerce',
    text: 'Ecommerce site using React.',
  },
  {
    id: nanoid(),
    img: unsplashImg,
    url: 'https://unsplash-11.netlify.app/',
    github: 'https://github.com/matidlr/api-unsplash',
    title: 'Unsplash',
    text: 'Project created with React',
  },
  {
    id: nanoid(),
    img: blog,
    url: 'https://mern-blog-m63m.onrender.com/',
    github: 'https://github.com/matidlr/mern-blog',
    title: 'BLOG',
    text: 'Personal blog created with MERN',
  },
  {
    id: nanoid(),
    img: instagram,
    url: 'https://insta-next-m8tq.onrender.com/',
    github: 'https://github.com/matidlr/insta-next',
    title: 'Instagram',
    text: 'Instagram clone with Next.js',
  },
];