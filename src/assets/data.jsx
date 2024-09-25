import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaWordpress, FaNode } from 'react-icons/fa';
import { SiMysql } from "react-icons/si";
import cannon from '../assets/ecommercecannon.png';
import jackie from '../assets/jackie.png';
import key from '../assets/keith.png';
import value from '../assets/value.png'
import petenatti from '../assets/petenatti.png';

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
    img: value,
    url: 'www.valuewds-com/',
    github: '',
    title: 'Value wds',
    text: 'Ecommerce. This site was built witd wordpress, gutenberg and edited with CSS and Javascript',
  },
  {
    id: nanoid(),
    img: cannon,
    url: 'https://cannon.com.ar',
    github: '',
    title: 'Cannon',
    text: 'Ecommerce site using wordpress, elementor, CSS, Jaascript and PHP.',
  },
  {
    id: nanoid(),
    img: jackie,
    url: 'https://jackiesmith.com.ar/',
    github: '',
    title: 'Jacke Smith',
    text: 'Project created with Wordpress, CSS, Javascript and PHP',
  },
  {
    id: nanoid(),
    img: petenatti,
    url: 'https://jackiesmith.com.ar/',
    github: '',
    title: 'Petenatti',
    text: 'Ecommerce created with wordpress, elementor, CSS, Javascript and woocomerce',
  },
  {
    id: nanoid(),
    img: key,
    url: '5.	https://keywhoss.com.ar/',
    github: '',
    title: 'Key Whoss',
    text: 'Developed with Wordpress, elementor, CSS, Javascript',
  },
];