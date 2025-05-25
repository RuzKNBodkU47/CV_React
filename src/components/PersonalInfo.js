import React from 'react';
import { FaChessKing, FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const texts = {
  es: {
    title: 'Perfil Profesional',
    description: `Soy ingeniero en sistemas de cómputo con una sólida formación académica y una profunda ambición de crecer
    en el ámbito de la ciberseguridad y la administración de sistemas. Mi trayectoria profesional se caracteriza
    por un compromiso constante con la actualización y el aprendizaje, reflejado en mi participación continua
    en cursos y certificaciones especializadas en estas áreas. Mi enfoque proactivo y mi habilidad para resolver
    problemas complejos a contra reloj me permiten enfrentar desafíos tecnológicos con eficacia y ofrecer soluciones
    innovadoras. Estoy entusiasmado por aplicar mis conocimientos y habilidades para contribuir al éxito de proyectos
    y organizaciones en un entorno dinámico y en constante evolución.`
  },
  en: {
    title: 'Professional Profile',
    description: 'I am a Computer Systems Engineer with a strong academic background and a deep ambition to grow in the fields of cybersecurity and system administration. My professional journey is characterized by a constant commitment to continuous learning and staying up to date, reflected in my active participation in specialized courses and certifications in these areas. My proactive approach and ability to solve complex problems under pressure allow me to tackle technological challenges effectively and provide innovative solutions. I am excited to apply my knowledge and skills to contribute to the success of projects and organizations in a dynamic and ever-evolving environment.'
  },
  ru: {
    title: 'Профессиональный профиль',
    description: 'Я инженер в области вычислительных систем с солидной академической подготовкой и сильным стремлением развиваться в сфере кибербезопасности и администрирования систем. Мой профессиональный путь характеризуется постоянным стремлением к обновлению знаний и обучению, что отражается в моей активной участии в курсах и сертификациях, специализирующихся в этих областях. Мой проактивный подход и способность решать сложные проблемы в условиях нехватки времени позволяют мне эффективно справляться с технологическими вызовами и предлагать инновационные решения. Я воодушевлен возможностью применить свои знания и навыки для достижения успеха в проектах и организациях в динамичной и постоянно меняющейся среде.'
  }
};

const PersonalInfo = ({ language }) => (
  <Section>
    <h2> <FaChessKing/> {texts[language]?.title || texts.en.title || texts.ru.title }</h2>
    <p>{texts[language]?.description || texts.en.description || texts.ru.description}</p>
  </Section>
);

export default PersonalInfo;
