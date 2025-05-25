import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const texts = {
  es: {
    Title: 'Certificaciones',
    certif: 'ISO 270001:2022 - Cybrary Online',
    certif2: 'Linux Fundamentals for Cybersecurity - Cybrary Online',
    certif3: 'Analisis Estatico y Dinamico de Malware - CIC IPN',
    certif4: 'Introduccion a Analisis Forence - CIC IPN',
    certif5: 'Enrutamiento Redes LAN WAN con Cisco - CIC IPN '
  },
  en: {
    Title: "Certifications",
    certif: "ISO 27001:2022 - Cybrary Online",
    certif2: "Linux Fundamentals for Cybersecurity - Cybrary Online",
    certif3: "Static and Dynamic Malware Analysis - CIC IPN",
    certif4: "Introduction to Forensic Analysis - CIC IPN",
    certif5: "LAN/WAN Network Routing with Cisco - CIC IPN"
  },
  ru: {
    Title: "Сертификаты",
    certif: "ISO 27001:2022 — Cybrary (онлайн)",
    certif2: "Основы Linux для кибербезопасности — Cybrary (онлайн)",
    certif3: "Статический и динамический анализ вредоносного ПО — CIC IPN",
    certif4: "Введение в судебный анализ — CIC IPN",
    certif5: "Маршрутизация LAN/WAN-сетей с Cisco — CIC IPN"
  }
}


const Certifications = ({ language }) => (
  <Section>
    <h2> {texts[language]?.Title || texts.en.Title || texts.ru.Title}</h2>
    <ul>
        <li>{texts[language]?.certif || texts.en.certif || texts.ru.certif}</li>
        <li>{texts[language]?.certif2 || texts.en.certif2 || texts.ru.certif2}</li>
        <li>{texts[language]?.certif3 || texts.en.certif3 || texts.ru.certif3}</li>
        <li>{texts[language]?.certif4 || texts.en.certif4 || texts.ru.certif4}</li>
        <li>{texts[language]?.certif5 || texts.en.certif5 || texts.ru.certif5}</li>
      </ul>
  </Section>
);

export default Certifications;
