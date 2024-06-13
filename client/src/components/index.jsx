import dynamic from 'next/dynamic'

export const Navbar = dynamic(() => import('./Navbar/Navbar.jsx'))
export const Footer = dynamic(() => import('./Footer/Footer.jsx'))
export const Banner = dynamic(() => import('./Banner/Banner.jsx'))
export const MultiStepForm = dynamic(() => import('./MultiStepForm/MultiStepForm.jsx'))
export const SimpleShare = dynamic(() => import('./SimpleShareComponent/SimpleShareComponent.tsx'))
export const Coutdown = dynamic(() => import('./Coutdown/Coutdown.jsx'))
export const YouTubePage = dynamic(() => import('./YoutubePage/YoutubePage.jsx'))