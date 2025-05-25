import React from 'react';
import { FaArrowRight, FaHammer, FaTasks } from 'react-icons/fa';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const texts = {
  es: {
    title: 'Experiencia Profesional',
    job: 'Nielsen IBOPE - CDMX',
    Time1: `Production Associate - Abril 2024 – Presente`,
    Descr: 'Promovido a este puesto debido a mi destacado desempeño en la operación de México. Responsable del soporte y administración de operaciones en Suecia y Dinamarca, brindando asistencia en el testeo de configuraciones y la entrega de información a clientes. Experiencia en la gestión de servidores Linux y Windows, así como en la automatización de tareas mediante scripts en Bash, optimizando procesos operativos. Participación en el monitoreo y mantenimiento de servicios críticos, asegurando su disponibilidad y rendimiento. Además, realizo guardias 24/7 para la resolución de incidencias y el soporte continuo de los sistemas.',
    title2: 'Recursos Tecnologicos',
    data1: 'AWS Linux - Windows Servers',
    data2: 'Dispositivos Tangram',
    data3: 'AWS Workspaces',
    data4: 'Bash - Poweshell Scripting',
    data5: 'Programacion en C y Python'
  },
  en: {
    title: 'Professional Experience',
    job: 'Nielsen IBOPE - Mexico City',
    Time1: 'Production Associate - April 2024 – Present',
    Descr: 'Promoted to this position due to my outstanding performance in the Mexico operation. Responsible for supporting and managing operations in Sweden and Denmark, assisting with configuration testing and delivering information to clients. Experience in managing Linux and Windows servers, as well as automating tasks through Bash scripting to optimize operational processes. Involved in monitoring and maintaining critical services, ensuring their availability and performance. Additionally, I perform 24/7 on-call duties for incident resolution and continuous system support',
    title2: 'IT Resources',
    data1: 'AWS Linux - Windows Servers',
    data2: 'Tangram Devices',
    data3: 'AWS Workspaces',
    data4: 'Bash - Poweshell Scripting',
    data5: 'C and Python Programming'
  },
  ru: {
    title: 'Профессиональный опыт',
    job: 'Nielsen IBOPE - Мехико',
    Time1: 'Сотрудник производства – Апрель 2024 – настоящее время', 
    Descr: 'Повышен на эту должность благодаря отличным результатам в операциях в Мексике. Ответственен за поддержку и управление операциями в Швеции и Дании, помощь в тестировании конфигураций и предоставление информации клиентам. Имею опыт управления серверами Linux и Windows, а также автоматизации задач с помощью Bash-скриптов для оптимизации операционных процессов. Занимаюсь мониторингом и поддержанием критически важных сервисов, обеспечивая их доступность и производительность. Кроме того, выполняю дежурства 24/7 для решения инцидентов и постоянной поддержки системы.',
    title2: 'Ресурсы информационных технологий',
    data1: 'AWS Linux - Windows Servers',
    data2: 'Tangram Устройства',
    data3: 'AWS Workspaces',
    data4: 'Скрипты на Bash - PowerShell',
    data5: 'Программирование на C и Python'
  }
};


const texts2 = {
  es: {
    title: 'Experiencia Profesional',
    job: 'Nielsen IBOPE - CDMX',
    Time1: `Sysadmin Linux Jr. - Abril 2022 – Abril 2024`,
    Descr: 'Inicié mi carrera como Sysadmin Linux Jr., desempeñándome como asistente del jefe del área productiva de Linux y colaborando en la gestión de escalaciones de incidentes relacionados con fallos en la producción diaria. Entre mis responsabilidades diarias también se encontraba brindar soporte a usuarios, resolviendo incidencias y asegurando la correcta operación de los sistemas. Fui responsable de la automatización de diversas tareas mediante scripts, tales como actualizaciones en bases de datos, búsqueda de archivos en el sistema y monitoreo de procesos productivos. Entre 2022 y 2024, coordiné las auditorías internas y externas realizadas por EY, enfocadas en la validación de accesos y permisos de usuarios en Active Directory. Como parte de este proceso, implementé una metodología estandarizada de revisión de usuarios para otros sistemas, lo cual resultó ser más eficaz y eficiente. Además, participé en múltiples sesiones internacionales, manteniendo comunicaciones en inglés con equipos de diversas nacionalidades y acentos.',
    title2: 'Recursos Tecnologicos',
    data1: 'AWS Linux - Centos - Ubuntu',
    data2: 'Active Directory',
    data3: 'AWS Workspaces',
    data4: 'Bash - Poweshell Scripting',
    data5: 'Programacion en C y Python',
    data6: 'Zabbix'
  },
  en: {
    title: 'Professional Experience',
    job: 'Nielsen IBOPE - Mexico City',
    Time1: 'Sysadmin Linux Jr. - April 2022 – April 2024',
    Descr: 'I began my career as a Sysadmin Linux Jr., assisting the head of the Linux production area and collaborating in the management of incident escalations related to daily production issues. Among my daily responsibilities, I also provided user support, resolving incidents and ensuring the proper functioning of systems. I was responsible for automating various tasks through scripts, such as database updates, file searches within the system, and monitoring of production processes. From 2022 to 2024, I coordinated internal and external audits conducted by EY, focusing on the validation of user access and permissions in Active Directory. As part of this process, I implemented a standardized user review methodology for other systems, which proved to be more effective and efficient. Additionally, I participated in multiple international sessions, communicating in English with teams from various countries and accents.',
    title2: 'IT Resources',
    data1: 'AWS Linux - Centos - Ubuntu',
    data2: 'Active Directory',
    data3: 'AWS Workspaces',
    data4: 'Bash - Poweshell Scripting',
    data5: 'C and Python Programming'
  },
  ru: {
    job: 'Nielsen IBOPE - Мехико',
    Time1: 'Sysadmin Linux Jr. - Апрель 2022 – Апрель 2024',
    Descr: 'Я начал свою карьеру в качестве младшего системного администратора Linux, оказывая поддержку руководителю производственного отдела Linux и участвуя в управлении эскалацией инцидентов, связанных с ежедневными проблемами производства. Среди моих повседневных обязанностей также была поддержка пользователей, решение инцидентов и обеспечение корректной работы систем. Я занимался автоматизацией различных задач с помощью скриптов, таких как обновление баз данных, поиск файлов в системе и мониторинг производственных процессов. С 2022 по 2024 год координировал внутренние и внешние аудиты, проводимые компанией EY, с фокусом на проверку доступа и прав пользователей в Active Directory. В рамках этого процесса я внедрил стандартизированную методологию проверки пользователей для других систем, что оказалось более эффективным и продуктивным решением. Кроме того, я принимал участие в многочисленных международных сессиях, общаясь на английском языке с командами из разных стран и с разными акцентами.',
    title2: 'Ресурсы информационных технологий',
    data2: 'Tangram Устройства',
    data3: 'AWS Workspaces',
    data4: 'Скрипты на Bash - PowerShell',
    data5: 'Программирование на C и Python'
  }
};

const text3 = {
  es: {
    job: 'Tres Compras Proyecto Freelancer - CDMX',
    Time1: `Linux Administrator & Backend Developer - Enero 2021 – Enero 2022`,
    Descr: 'Diseño e implementación de la arquitectura de base de datos para una plataforma e-commerce, utilizando MySQL como motor relacional principal, con enfoque en la normalización, integridad referencial y rendimiento en consultas de alto volumen. Integración del backend desarrollado en TypeScript, aplicando principios de diseño modular, tipado estricto y comunicación asincrónica mediante ORM y controladores API. Despliegue en entorno productivo sobre un servidor con Fedora Linux, configurando servicios de red, seguridad y monitoreo. Además, integración con AWS S3 para la gestión eficiente de archivos multimedia, asegurando escalabilidad, alta disponibilidad y redundancia de datos.',
    title2: 'Recursos Tecnologicos',
    data1: 'AWS S3 - Fedora Server - Ubuntu Server',
    data2: 'MYSQL Server',
    data3: 'Web Cloud Services',
    data4: 'Python Programming',
    data5: 'Bash Scripting',
    data6: 'Apache Hadoop',
    data7: 'Typescript',
    data8: 'Port Forwarding',
    data9: 'NOIP DNS'
  },
  en: {
    job: 'Tres Compras Proyect Freelancer - CDMX',
    Time1: `Linux Administrator & Backend Developer - January 2021 – January 2022`,
    Descr: 'Design and implementation of the database architecture for an e-commerce platform, using MySQL as the primary relational engine, with a focus on normalization, referential integrity, and high-performance querying for large data volumes. Backend integration developed in TypeScript, applying principles of modular design, strict typing, and asynchronous communication through ORM and API controllers. Deployment in a production environment on a Fedora Linux server, configuring network, security, and monitoring services. Additionally, integration with AWS S3 for efficient media file management, ensuring scalability, high availability, and data redundancy.',
    title2: 'IT Resources',
    data1: 'AWS S3 - Fedora Server - Ubuntu Server',
    data2: 'MYSQL Server',
    data3: 'Web Cloud Services',
    data4: 'Python Programming',
    data5: 'Bash Scripting',
    data6: 'Apache Hadoop',
    data7: 'Typescript',
    data8: 'Port Forwarding',
    data9: 'NOIP DNS'
  },
  ru: {
    job: 'Tres Compras Фриланс-проект - CDMX',
    Time1: `Linux Administrator & Backend Developer - январь 2021 – январь 2022`,
    Descr: 'Проектирование и реализация архитектуры базы данных для e-commerce платформы с использованием MySQL в качестве основного реляционного движка, с упором на нормализацию, соблюдение ссылочной целостности и высокоэффективные запросы при работе с большими объёмами данных. Интеграция backend-части реализована на TypeScript с применением принципов модульного проектирования, строгой типизации и асинхронного взаимодействия через ORM и API-контроллеры. Развёртывание в рабочей среде на сервере под управлением Fedora Linux с настройкой сетевых, защитных и мониторинговых сервисов. Дополнительно — интеграция с AWS S3 для эффективного управления медиафайлами, обеспечивая масштабируемость, высокую доступность и избыточность данных.',
    title2: 'Ресурсы информационных технологий',
    data1: 'AWS S3 - Fedora Server - Ubuntu Server',
    data2: 'MYSQL Server',
    data3: 'Web Cloud Services',
    data4: 'Программирование на Python',
    data5: 'Скрипты на Bash',
    data6: 'Apache Hadoop',
    data7: 'Typescript',
    data8: 'Port Forwarding',
    data9: 'NOIP DNS'
  }
};

const text4 = {
  es: {
    job: 'Servicio Social - Centro de Investigacion CIC - CDMX ',
    Time1: `Desarrollador de Linux y Administrador de Linux Julio 2020 - Enero 2021`,
    Descr: 'Implementación de un prototipo funcional de Red Definida por Software (SDN) como parte del proyecto de titulación, desplegado en una red local de pruebas de pequeña escala dentro del Instituto Politécnico Nacional. El entorno integró switches Cisco Catalyst (serie 2960), que no cuentan con soporte nativo para OpenFlow, junto con nodos virtuales basados en Open vSwitch, completamente compatibles con OpenFlow. Se empleó el controlador SDN OpenDaylight para gestionar el plano de control, y se desarrollaron flujos programables para direccionamiento dinámico, segmentación de red y pruebas de interoperabilidad. El objetivo fue validar la coexistencia entre infraestructura de red tradicional y SDN en un entorno híbrido, con miras a su futura expansión institucional.',
    title2: 'Recursos Tecnologicos',
    data1: 'Protocolo OpenFlow',
    data2: 'Red Hat',
    data3: 'Cisco IOS XE ',
    data4: 'Programacion en C y Python',
    data5: 'Bash Scripting',
    data6: 'Monitores de red (Nagios)'
  },
  en: {
    job: 'Mandatory community service - Investigation center CIC - CDMX ',
    Time1: `Linux Developer & Linux Administrator July 2020 -  January 2021`,
    Descr: 'Implementation of a functional Software-Defined Networking (SDN) prototype as part of a graduation project, deployed in a small-scale local test network within the Instituto Politécnico Nacional. The environment integrated Cisco Catalyst switches (2960 series), which lack native OpenFlow support, alongside virtual nodes based on Open vSwitch, fully compatible with OpenFlow. The OpenDaylight SDN controller was used to manage the control plane, and programmable flows were developed for dynamic routing, network segmentation, and interoperability testing. The objective was to validate the coexistence of traditional network infrastructure and SDN in a hybrid environment, with a view toward future institutional expansion.',
    title2: 'IT Resources',
    data1: 'OpenFlow Protocol',
    data2: 'Red Hat',
    data3: 'Cisco IOS XE ',
    data4: 'Programacion en C y Python',
    data5: 'Bash Scripting',
    data6: 'Networking Monitor (Nagios)'
  },
  ru: {
    job: 'Mandatory community service - Investigation center CIC - CDMX ',
    Time1: `Разработчик Linux и Администратор Linux Июль 2020 — Январь 2021`,
    Descr: 'Реализация функционального прототипа сети, управляемой программно (SDN), в рамках выпускного проекта, развернутого в маломасштабной локальной тестовой сети в Национальном политехническом институте (Instituto Politécnico Nacional). Среда включала коммутаторы Cisco Catalyst серии 2960, не поддерживающие OpenFlow на аппаратном уровне, и виртуальные узлы на базе Open vSwitch, полностью совместимые с OpenFlow. В качестве SDN-контроллера использовался OpenDaylight для управления плоскостью управления. Были разработаны программируемые потоки для динамической маршрутизации, сегментации сети и тестирования совместимости. Целью проекта было подтверждение возможности сосуществования традиционной сетевой инфраструктуры и SDN в гибридной среде с перспективой институционального расширения.',
    title2: 'Ресурсы информационных технологий',
    data1: 'сетевой протокол OpenFlow',
    data2: 'Red Hat',
    data3: 'Cisco IOS XE ',
    data4: 'Программирование на C и Python',
    data5: 'Скрипты на Bash',
    data6: 'системы мониторинга сети (Nagios)'
  }
};


const Experience = ({ language }) => (
  <Section>
    <h2> <FaHammer /> {texts[language]?.title || texts.en.title || texts.ru.title}</h2>
    <div>
      <h3> <FaArrowRight/> {texts[language]?.job || texts.en.job || texts.ru.job}</h3>
      <h4>{texts[language]?.Time1 || texts.en.Time1 || texts.ru.Time1}</h4>
      <p>{texts[language]?.Descr || texts.en.Descr || texts.ru.Descr}</p>
      <h4>{texts[language]?.title2 || texts.en.title2 || texts.ru.title2}</h4>
      <ul>
        <li>{texts[language]?.data1 || texts.en.data1 || texts.ru.data1}</li>
        <li>{texts[language]?.data2 || texts.en.data2 || texts.ru.data2}</li>
        <li>{texts[language]?.data3 || texts.en.data3 || texts.ru.data3}</li>
        <li>{texts[language]?.data4 || texts.en.data4 || texts.ru.data4}</li>
        <li>{texts[language]?.data5 || texts.en.data5 || texts.ru.data5}</li>
      </ul>
    </div>
    <div>
      <h3> <FaArrowRight/> {texts2[language]?.job || texts2.en.job || texts2.ru.job}</h3>
      <h4>{texts2[language]?.Time1 || texts2.en.Time1 || texts2.ru.Time1}</h4>
      <p>{texts2[language]?.Descr || texts2.en.Descr || texts2.ru.Descr}</p>
      <h4>{texts2[language]?.title2 || texts2.en.title2 || texts2.ru.title2}</h4>
      <ul>
        <li>{texts2[language]?.data1 || texts2.en.data1 || texts2.ru.data1}</li>
        <li>{texts2[language]?.data2 || texts2.en.data2 || texts2.ru.data2}</li>
        <li>{texts2[language]?.data3 || texts2.en.data3 || texts2.ru.data3}</li>
        <li>{texts2[language]?.data4 || texts2.en.data4 || texts2.ru.data4}</li>
        <li>{texts2[language]?.data5 || texts2.en.data5 || texts2.ru.data5}</li>
      </ul>
    </div>
    <div>
      <h3> <FaArrowRight/> {text3[language]?.job || text3.en.job || text3.ru.job}</h3>
      <h4>{text3[language]?.Time1 || text3.en.Time1 || text3.ru.Time1}</h4>
      <p>{text3[language]?.Descr || text3.en.Descr || text3.ru.Descr}</p>
      <h4>{text3[language]?.title2 || text3.en.title2 || text3.ru.title2}</h4>
      <ul>
        <li>{text3[language]?.data1 || text3.en.data1 || text3.ru.data1}</li>
        <li>{text3[language]?.data2 || text3.en.data2 || text3.ru.data2}</li>
        <li>{text3[language]?.data3 || text3.en.data3 || text3.ru.data3}</li>
        <li>{text3[language]?.data4 || text3.en.data4 || text3.ru.data4}</li>
        <li>{text3[language]?.data5 || text3.en.data5 || text3.ru.data5}</li>
        <li>{text3[language]?.data6 || text3.en.data6 || text3.ru.data6}</li>
        <li>{text3[language]?.data7 || text3.en.data7 || text3.ru.data7}</li>
        <li>{text3[language]?.data8 || text3.en.data8 || text3.ru.data8}</li>
        <li>{text3[language]?.data9 || text3.en.data9 || text3.ru.data9}</li>
      </ul>
    </div>
    <div>
    <h3> <FaArrowRight/> {text4[language]?.job || text4.en.job || text4.ru.job}</h3>
      <h4>{text4[language]?.Time1 || text4.en.Time1 || text4.ru.Time1}</h4>
      <p>{text4[language]?.Descr || text4.en.Descr || text4.ru.Descr}</p>
      <h4>{text4[language]?.title2 || text4.en.title2 || text4.ru.title2}</h4>
      <ul>
        <li>{text4[language]?.data1 || text4.en.data1 || text4.ru.data1}</li>
        <li>{text4[language]?.data2 || text4.en.data2 || text4.ru.data2}</li>
        <li>{text4[language]?.data3 || text4.en.data3 || text4.ru.data3}</li>
        <li>{text4[language]?.data4 || text4.en.data4 || text4.ru.data4}</li>
        <li>{text4[language]?.data5 || text4.en.data5 || text4.ru.data5}</li>
        <li>{text4[language]?.data6 || text4.en.data6 || text4.ru.data6}</li>
        </ul>
    </div>
    
  </Section>
);

export default Experience;
