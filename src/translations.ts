import { Translation } from './types';

export const translations: Record<'en' | 'es', Translation> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      title: 'Julieta Mendiola',
      subtitle: 'Business Economics & Marketing Specialist',
    },
    about: {
      title: 'About Me',
      description: 'I am a Business Economics student with a background in Marketing and Graphic Design. My unique combination of analytical and creative skills allows me to develop comprehensive business strategies while creating visually appealing content that drives engagement.',
    },
    skills: {
      title: 'My Skills',
      business: 'Business Economics',
      marketing: 'Digital Marketing',
      design: 'Graphic Design',
    },
    contact: {
      title: 'Contact',
      getInTouch: 'Get in touch',
      email: 'Send email',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      title: 'Julieta Mendiola',
      subtitle: 'Especialista en Economía Empresarial y Marketing',
    },
    about: {
      title: 'Sobre Mí',
      description: 'I am a Business Economics student with a background in Marketing and Graphic Design. My unique combination of analytical and creative skills allows me to develop comprehensive business strategies while creating visually appealing content that drives engagement.',
    },
    skills: {
      title: 'Mis Habilidades',
      business: 'Economía Empresarial',
      marketing: 'Marketing Digital',
      design: 'Diseño Gráfico',
    },
    contact: {
      title: 'Contacto',
      getInTouch: 'Contactar',
      email: 'Enviar email',
    },
  },
}