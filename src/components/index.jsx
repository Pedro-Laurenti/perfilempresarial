import dynamic from 'next/dynamic'

export const Navbar = dynamic(() => import('./Navbar/Navbar'))
export const Footer = dynamic(() => import('./Footer/Footer'))
export const Banner = dynamic(() => import('./Banner/Banner'))
export const MultiStepForm = dynamic(() => import('./MultiStepForm/MultiStepForm'))
export const SimpleShare = dynamic(() => import('./SimpleShareComponent/SimpleShareComponent.tsx'))
export const Coutdown = dynamic(() => import('./Coutdown/Coutdown'))
