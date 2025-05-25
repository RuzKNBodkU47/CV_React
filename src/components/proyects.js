import React from 'react';
import { FaFilePowerpoint, FaFolderOpen, FaImages, FaRProject } from 'react-icons/fa';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Section = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/4.jpeg",
  "/images/3.png",
  "/images/4.png"
];

const images2 = [
  "/images/3.jpeg",
  "/images/5.jpeg"
];

const texts = {
  es: {
    title: 'Proyectos',
    titleGallery: 'Galeria',
    Proyect_name: 'Servidor Productivo - Servidor de Pruebas',
    Descr: 'Servidores con diferentes servicios implementados para satisfacer las necesidades de una red local para el bloqueo de publicidad, monitoreo y manejo de dispositivos en red. Ademas de proveer una VPN para la conexion remota fuera de la red. ',
    TileServ: 'Servicios',
    dataServ1: 'PiHole - Servidor DNS [Contenedor]',
    dataServ2: 'Mysterium Node',
    dataServ3: 'Twingate VPN [Contenedor]',
    dataServ4: 'OctoPrint [Contenedor]',
    dataServ5: 'Portainer',
    titleTec: 'Recursos Tecnologicos',
    data1: 'Raspberry - Orangepi',
    data2: 'Docker',
    data3: 'Twingate',
    data4: 'Rkhunter - rootkit Hunter'
  },
  en: {
    title: "Projects",
    titleGallery: "Gallery",
    Proyect_name: "Production Server - Test Server",
    Descr: "Servers with different services implemented to meet the needs of a local network for ad blocking, monitoring, and management of network devices. Additionally, they provide a VPN for remote connection outside the network.",
    TileServ: "Services",
    dataServ1: "PiHole - DNS Server [Container]",
    dataServ2: "Mysterium Node",
    dataServ3: "Twingate VPN [Container]",
    dataServ4: "OctoPrint [Container]",
    dataServ5: "Portainer",
    titleTec: "Technological Resources",
    data1: "Raspberry - Orangepi",
    data2: "Docker",
    data3: "Twingate",
    data4: "Rkhunter - rootkit Hunter"
  },
  ru: {
    title: "Проекты",
    titleGallery: "Галерея",
    Proyect_name: "Рабочий сервер - Тестовый сервер",
    Descr: "Серверы с различными реализованными сервисами, предназначенные для удовлетворения потребностей локальной сети: блокировка рекламы, мониторинг и управление сетевыми устройствами. Также предоставляется VPN для удалённого подключения вне сети.",
    TileServ: "Сервисы",
    dataServ1: "PiHole — DNS-сервер [Контейнер]",
    dataServ2: "Узел Mysterium",
    dataServ3: "Twingate VPN [Контейнер]",
    dataServ4: "OctoPrint [Контейнер]",
    dataServ5: "Portainer",
    titleTec: "Технологические ресурсы",
    data1: "Raspberry - Orangepi",
    data2: "Docker",
    data3: "Twingate",
    data4: "Rkhunter — поиск rootkit'ов"
  }
};

const texts2 = {
  es: {
    Proyect_name: 'Servidor Cloud NextCloud',
    Descr: 'Servidor de Nube privada para almacenamiento de informacion de mis dispositivos moviles y conocidos. De esta manera ahorra gastos en servicios de google cloud.',
    TileServ: 'Servicios',
    dataServ1: 'Nextcloud',
    title: 'Recursos Tecnologicos',
    data2: 'RAID 0',
    data3: 'Fedora Server',
    data4: 'Docker',
    data5: 'Rkhunter - rootkit Hunter',
    titleTec: 'Recursos Tecnologicos',
    data1: 'NUC - PC',
    data2: 'Docker',
    data4: 'Rkhunter - rootkit Hunter'
  },
  en: {
    Proyect_name: "Cloud Server - NextCloud",
    Descr: "Private cloud server for storing data from my mobile devices and acquaintances. This helps save costs on Google Cloud services.",
    TileServ1: "Services",
    dataServ1: "Nextcloud",
    title: "Technological Resources",
    data1: "NUC - PC",
    data2: "Docker",
    data3: "RAID 0",
    data4: "Rkhunter - rootkit Hunter",
    data5: "Fedora Server",
    titleTec: "Technological Resources"
  },
  ru: {  Proyect_name: "Облачный сервер - NextCloud",
    Descr: "Приватный облачный сервер для хранения данных с моих мобильных устройств и устройств знакомых. Это помогает сократить расходы на услуги Google Cloud.",
    TileServ: "Сервисы",
    dataServ1: "Nextcloud",
    title: "Технологические ресурсы",
    data1: "NUC - ПК",
    data2: "Docker",
    data3: "RAID 0",
    data4: "Rkhunter — поиск rootkit'ов",
    data5: "Fedora Server",
    titleTec: "Технологические ресурсы"}

};



const Proyects = ({ language }) => (
  <Section>
    <h2> <FaFolderOpen /> {texts[language]?.title || texts.en.title || texts.ru.title}</h2>
    <div>
      <h3> {texts[language]?.Proyect_name || texts.en.Proyect_name || texts.ru.Proyect_name}</h3>
      <p>{texts[language]?.Descr || texts.en.Descr || texts.ru.Descr}</p>
      <h4>{texts[language]?.TileServ || texts.en.TileServ || texts.ru.TileServ}</h4>
      <ul>
        <li>{texts[language]?.dataServ1 || texts.en.dataServ1 || texts.ru.dataServ1}</li>
        <li>{texts[language]?.dataServ2 || texts.en.dataServ2 || texts.ru.dataServ2}</li>
        <li>{texts[language]?.dataServ3 || texts.en.dataServ3 || texts.ru.dataServ3}</li>
        <li>{texts[language]?.dataServ4 || texts.en.dataServ4 || texts.ru.dataServ4}</li>
        <li>{texts[language]?.dataServ5 || texts.en.dataServ5 || texts.ru.dataServ5}</li>
      </ul>
      <h4>{texts[language]?.titleTec || texts.en.titleTec || texts.ru.titleTec}</h4>
      <ul>
        <li>{texts[language]?.data1 || texts.en.data1 || texts.ru.data1}</li>
        <li>{texts[language]?.data2 || texts.en.data2 || texts.ru.data2}</li>
        <li>{texts[language]?.data3 || texts.en.data3 || texts.ru.data3}</li>
        <li>{texts[language]?.data4 || texts.en.data4 || texts.ru.data4}</li>
      </ul>
      <h2> <FaImages /> {texts[language]?.titleGallery || texts.en.titleGallery || texts.ru.titleGallery}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
  {images.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Gallery ${index + 1}`}
      style={{ width: '120px', height: '120px', objectFit: 'cover' }} // 🔥 Fuerza el tamaño aquí
      className="rounded-md shadow hover:scale-105 transition-transform duration-200 mx-auto"
    />
  ))}
</div>

</div>
    <div>
      <h3> <FaFolderOpen /> {texts2[language]?.Proyect_name || texts2.en.Proyect_name || texts2.ru.Proyect_name}</h3>
      <p>{texts2[language]?.Descr || texts2.en.Descr || texts2.ru.Descr}</p>
      <h4>{texts2[language]?.TileServ || texts2.en.TileServ || texts2.ru.TileServ}</h4>
      <ul>
        <li>{texts2[language]?.dataServ1 || texts2.en.dataServ1 || texts2.ru.dataServ1}</li>
      </ul>
      <h4>{texts2[language]?.titleTec || texts2.en.titleTec || texts2.ru.titleTec}</h4>
      <ul>
        <li>{texts2[language]?.data1 || texts2.en.data1 || texts2.ru.data1}</li>
        <li>{texts2[language]?.data2 || texts2.en.data2 || texts2.ru.data2}</li>
        <li>{texts2[language]?.data3 || texts2.en.data3 || texts2.ru.data3}</li>
        <li>{texts2[language]?.data4 || texts2.en.data4 || texts2.ru.data4}</li>
      </ul>
      <h2> <FaImages /> {texts[language]?.titleGallery || texts.en.titleGallery || texts.ru.titleGallery}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
  {images2.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Gallery ${index + 1}`}
      style={{ width: '120px', height: '120px', objectFit: 'cover' }} // 🔥 Fuerza el tamaño aquí
      className="rounded-md shadow hover:scale-105 transition-transform duration-200 mx-auto"
    />
  ))}
</div>
    </div>
  </Section>
);



export default Proyects;