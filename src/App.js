import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaLinkedin, FaAddressBook, FaBirthdayCake, FaRaspberryPi } from 'react-icons/fa';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Proyects from './components/proyects';
import Loader from './components/Loader'; // asegúrate de tener este componente creado
import { MdTranslate } from 'react-icons/md';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #007bff;
  color: white;
  border-radius: 10px;
`;

const LanguageSwitcher = styled.div`
  margin-bottom: 20px;
  text-align: right;
  button {
    margin-left: 10px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const texts = {
  es: {
    title: 'Ingeniero en Sistemas Computacionales',
    place: 'Disponibilidad para reubicación a nivel nacional/internacional.'
  },
  en: {
    title: 'Computer Systems Engineer',
    place: 'Open to relocation nationally/internationally.'
  },
  ru: {
    title: 'Инженер по компьютерным системам',
    place: 'Открыт(а) к переезду внутри страны и за границу.'
  }
};

function App() {
  const [language, setLanguage] = useState('es');
  const [loading, setLoading] = useState(true);

  // ⏳ Simula carga inicial
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // 🌀 Mostrar loader mientras carga
  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
<LanguageSwitcher>
  <button onClick={() => setLanguage('es')}>&#x1F1F2;&#x1F1FD; Español</button> {/* 🇲🇽 */}
  <button onClick={() => setLanguage('en')}>&#x1F1EC;&#x1F1E7; English</button> {/* 🇬🇧 */}
  <button onClick={() => setLanguage('ru')}>&#x1F1F7;&#x1F1FA; Русский</button> {/* 🇷🇺 */}
</LanguageSwitcher>

      <Header>
        <h1>Jorge Rubén Águila Ojeda</h1>
        <h2>{texts[language]?.title}</h2>
        <p><FaPhone /> +52 5582226736</p>
        <p><FaEnvelope /> jorge_ag2468@outlook.com</p>
        <p><FaEnvelope /> jorge.rub.ag198@gmail.com</p>
        <p><FaLinkedin /> <a href="https://www.linkedin.com/in/jorge-ruben-aguila-ojeda-9406191a7/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>LinkedIn Profile</a></p>
        <p><FaAddressBook /> Mexico, Mexico City </p>
        <p><FaBirthdayCake /> 01 Septiembre 1998</p>
        <p>{texts[language]?.place}</p>
      </Header>

      <PersonalInfo language={language} />
      <Experience language={language} />
      <Education language={language} />
      <Skills language={language} />
      <Certifications language={language} />
      <Proyects language={language} />
      <h6><p><FaRaspberryPi /> Powered on a Raspberry Pi                                        V1.0</p></h6>
    </Container>
  );
}

export default App;
