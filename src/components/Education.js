import React from 'react';
import { FaArrowRight, FaHammer, FaTasks } from 'react-icons/fa';
import { FaSchool } from 'react-icons/fa';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const text = {
  es: {
    title: 'Educación',
    schooltitle: 'ESCOM, IPN CDMX',
    careertitle: 'Ingeniería en Sistemas Computacionales',
    period: '2018 - 2022',
    carrerstatus: 'Egresado',
    specializationtitle: 'Especializacion',
    specialization1: 'Programacion de Kernel en C',
    specialization2: 'Analisis de Malware estatico y dinamico',
    specialization3: 'Seguridad en Redes',
    specialization4: 'Automatas Celulares'
  },
  en: {
    title: 'Education',
    schooltitle: 'ESCOM, IPN CDMX',
    careertitle: 'B.S. in Computer Systems Engineering',
    period: '2018 - 2022',
    carrerstatus: 'Graduate',
    specializationtitle: 'Specialization',
    specialization1: 'Kernel Programming in C',
    specialization2: 'Static and Dynamic Malware Analysis',
    specialization3: 'Network Security',
    specialization4: 'Cellular Automata'
  },
  ru: {
    title: 'Образование',
    schooltitle: 'ESCOM, IPN CDMX',
    careertitle: 'Инженерия в области компьютерных систем',
    period: '2018 - 2022',
    carrerstatus: 'Выпускник',
    specializationtitle: 'Специализация',
    specialization1: 'Программирование ядра на C',
    specialization2: 'Статический и динамический анализ вредоносного ПО',
    specialization3: 'Сетевая безопасность',
    specialization4: 'Клеточные автоматы'
  }
};

const text2 = {
  es: {
    schooltitle: 'CECyT 14 Luis Enrique Erro, IPN CDMX',
    careertitle: 'Técnico en Informática',
    period: '2015 - 2017',
    carrerstatus: 'Egresado',
    specializationtitle: 'Especializacion',
    specialization1: 'Modelado 3D',
    specialization2: 'Mantenimiento y Prevencion en equipos de computo y servidores'
  },
  en: {
    schooltitle: 'CECyT 14 Luis Enrique Erro, IPN CDMX',
    careertitle: 'Técnico en Informática',
    period: '2015 - 2017',
    carrerstatus: 'Graduate',
    specializationtitle: 'Specialization',
    specialization1: '3D Modeling',
    specialization2: '    Maintenance and Prevention in Computer and Server Equipment'
  },
  ru: {
    schooltitle: 'CECyT 14 Luis Enrique Erro, IPN CDMX',
    careertitle: 'Техник по информатике',
    period: '2015 - 2017',
    carrerstatus: 'Выпускник',
    specializationtitle: 'Специализация',
    specialization1: '3D-моделирование',
    specialization2: 'Обслуживание и профилактика компьютерной и серверной техники'
  }
};

const Education = ({ language }) => (
  <Section>
   <h2> <FaSchool /> {text[language]?.title || text.en.title || text.ru.title}</h2>
       <div>
         <h3> <FaArrowRight/> {text[language]?.careertitle || text.en.careertitle || text.ru.careertitle}</h3>
         <h4>{text[language]?.schooltitle || text.en.schooltitle || text.ru.schooltitle}</h4>
         <p>{text[language]?.period || text.en.period || text.ru.period}</p>
         <h3>{text[language]?.carrerstatus || text.en.carrerstatus || text.ru.carrerstatus}</h3>
         <h4>{text[language]?.specializationtitle || text.en.specializationtitle || text.ru.specializationtitle}</h4>
         <ul>
           <li>{text[language]?.specialization1 || text.en.specialization1 || text.ru.specialization1}</li>
           <li>{text[language]?.specialization2 || text.en.specialization2 || text.ru.specialization2}</li>
           <li>{text[language]?.specialization3 || text.en.specialization3 || text.ru.specialization3}</li>
           <li>{text[language]?.specialization4 || text.en.specialization4 || text.ru.specialization4}</li>
         </ul>
       </div>
       <div>
         <h3> <FaArrowRight/> {text2[language]?.careertitle || text2.en.careertitle || text2.ru.careertitle}</h3>
         <h4>{text2[language]?.schooltitle || text2.en.schooltitle || text2.ru.schooltitle}</h4>
         <p>{text2[language]?.period || text2.en.period || text2.ru.period}</p>
         <h3>{text2[language]?.carrerstatus || text2.en.carrerstatus || text2.ru.carrerstatus}</h3>
         <h4>{text2[language]?.specializationtitle || text2.en.specializationtitle || text2.ru.specializationtitle}</h4>
         <ul>
           <li>{text2[language]?.specialization1 || text2.en.specialization1 || text2.ru.specialization1}</li>
           <li>{text2[language]?.specialization2 || text2.en.specialization2 || text2.ru.specialization2}</li>
         </ul>
       </div>
  </Section>
);

export default Education;
