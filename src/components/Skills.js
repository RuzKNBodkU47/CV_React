import React from 'react';
import styled from 'styled-components';
import {
  SiCplusplus, SiPython, SiJavascript, SiBash, SiPowershell,
  SiRedhat, SiUbuntu, SiDebian, SiWindows, SiVmware, SiVirtualbox,
  SiQemu, SiApache, SiNginx, SiTomcat, SiMysql, SiMariadb,
  SiPostgresql, SiRaspberrypi, SiCisco, SiMikrotik, SiFedora,
  SiDocker,
  SiOpenvpn,
  SiWireguard,
  SiOpenmediavault,
  SiWireshark,
  SiAnsible
} from 'react-icons/si';
import { FaVirus, FaTools, FaCode, FaTerminal, FaAws, FaDesktop,FaServer, FaLanguage, FaShieldAlt, FaProjectDiagram, FaChartLine, FaUserSecret } from 'react-icons/fa';

const Section = styled.section`
  padding: 20px;
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin: 20px 0 10px;
  color: #007bff;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillBox = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  cursor: default;
  &:hover {
    transform: scale(1.05);
    background-color: #e8f0ff;
  }

  svg {
    margin-right: 8px;
    font-size: 1rem;
  }
`;

const iconMap = {
  'C/C++': <SiCplusplus />,
  'Ubuntu Server': <SiUbuntu />, 
  'Python': <SiPython />,
  'Java': <FaCode />,
  'JavaScript': <SiJavascript />,
  'Bash': <FaTerminal />,
  'PowerShell': <FaTerminal />,
  'Red Hat': <SiRedhat />,
  'Fedora': <SiFedora />,
  'Ubuntu': <SiUbuntu />,
  'Debian': <SiDebian />,
  'CentOS': <SiRedhat />,
  'Windows': <FaDesktop />,
  'Windows Server': <FaDesktop />,
  'AWS Linux': <FaAws />,
  'ESXi VMware': <SiVmware />,
  'VirtualBox': <SiVirtualbox />,
  'QEMU': <SiQemu />,
  'VMware': <SiVmware />,
  'VirusTotal': <FaVirus />,
  'Apache': <SiApache />,
  'Tomcat': <FaServer />,
  'NGINX': <SiNginx />,
  'MySQL': <SiMysql />,
  'MariaDB': <SiMariadb />,
  'PostgreSQL': <SiPostgresql />,
  'Raspberry Pi 4': <SiRaspberrypi />,
  'Orange Pi': <SiRaspberrypi />,
  'Cisco (Routers, Switches)': <SiCisco />,
  'Cisco (Маршрутизаторы, Коммутаторы)' : <SiCisco />,
  'Mikrotik (Routers)': <SiMikrotik />,
  'Wireshark' : <SiWireshark/>,
  'Tshark' : <SiWireshark/>,
  'tcpdump': <FaTerminal/>,
  'NMAP' : <FaTerminal/>,
  'Zenmap' : <FaProjectDiagram/>,
  'Mikrotik (Маршрутизаторы)' : <SiMikrotik />,
  'Firewalld': <FaShieldAlt />,
  'ufw': <FaShieldAlt/>,
  'OpenMediaVault': <SiOpenmediavault />,
  'Docker': <SiDocker />,
  'OpenVPN' : <SiOpenvpn/>,
  'Wireguard' : <SiWireguard/>,
  'Twingate' : <FaShieldAlt/>,
  'Ansible' : <SiAnsible/>,
  'Observium' : <FaChartLine/>,
  'Zabbix' : <FaServer/>,
  'Ingles (B2)': < FaLanguage />,
  'English (B2)' : < FaLanguage />,
  'Английский (B2)' : < FaLanguage />,
  'Ruso (A2)' : < FaLanguage />,
  'Russian (A2)' : < FaLanguage />,
  'Русский (A2)' : < FaLanguage />,
  'Autopsy' : <FaUserSecret />
};

const texts = {
  es: {
    title: 'Habilidades',
    categories: {
      'Lenguajes de Programación': ['C/C++', 'Python', 'Java', 'JavaScript'],
      'Lenguajes de scripting': ['Bash', 'PowerShell'],
      'Sistemas Operativos (usuario)': ['Red Hat', 'Fedora', 'Ubuntu', 'Debian', 'CentOS', 'Windows'],
      'Sistemas Operativos (productivo)': ['Windows Server 2019', 'AWS Linux', 'Red Hat', 'Fedora', 'CentOS', 'Ubuntu Server'],
      'Virtualización': ['ESXi VMware', 'VirtualBox', 'QEMU', 'VMware',"Docker"],
      'Herramientas de análisis de malware': ['VirusTotal'],
      'Herramientas de Analisis Forence': ["Autopsy"],
      'Servicios Web': ['Apache', 'Tomcat', 'NGINX'],
      'Bases de Datos': ['MySQL', 'MariaDB', 'PostgreSQL'],
      'Dispositivos Embebidos': ['Raspberry Pi 4', 'Orange Pi'],
      'Dispositivos de Red': ['Cisco (Routers, Switches)', 'Mikrotik (Routers)'],
      'Monitor de Red': ['Wireshark', 'Tshark', 'tcpdump'],
      'Monitor de dispositivos por SMNP': ['Observium', 'Zabbix'],
      'Herramientas de Ciberseguridad': ['NMAP','Zenmap'],
      'Firewall': ['Firewalld', 'ufw'],
      'NAS' : ['OpenMediaVault'],
      'Automatizacion' : ['Ansible'],
      'VPN Servidores' : ['OpenVPN','Wireguard','Twingate'],
      'Idiomas' : ['Ingles (B2)','Ruso (A2)'],
      'Normativas de Seguridad' : ['ISO 27001:2022','ANSI/TIA-942']
    }
  },
  en: {
    title: 'Skills',
    categories: {
      "Programming Languages": ["C/C++", "Python", "Java", "JavaScript"],
      "Scripting Languages": ["Bash", "PowerShell"],
      "Operating Systems (User)": ["Red Hat", "Fedora", "Ubuntu", "Debian", "CentOS", "Windows"],
      "Operating Systems (Production)": ["Windows Server", "AWS Linux", "Red Hat", "Fedora", "CentOS", "Ubuntu Server"],
      "Virtualization": ["ESXi VMware", "VirtualBox", "QEMU", "VMware","Docker"],
      "Malware Analysis Tools": ["VirusTotal"],
      "Forensic Analysis Tools": ["Autopsy"],
      "Web Services": ["Apache", "Tomcat", "NGINX"],
      "Databases": ["MySQL", "MariaDB", "PostgreSQL"],
      "Embedded Devices": ["Raspberry Pi 4", "Orange Pi"],
      "Networking Devices": ["Cisco (Routers, Switches)", "Mikrotik (Routers)"],
      "Network Monitoring": ["Wireshark", "Tshark", "tcpdump"],
      "SNMP Device Monitoring": ["Observium", "Zabbix"],
      "Cybersecurity Tools": ["NMAP", "Zenmap"],
      "Firewall": ["Firewalld", "ufw"],
      'NAS' : ['OpenMediaVault'],
      "Automation": ["Ansible"],
      'VPN Servers' : ['OpenVPN','Wireguard','Twingate'],
      "Languages": ["English (B2)", "Russian (A2)"]
    }
  },
  ru: {
    title: 'Навыки',
    categories: {
    "Языки программирования": ["C/C++", "Python", "Java", "JavaScript"],  
    "Скриптовые языки": ["Bash", "PowerShell"],
    "Операционные системы (пользователь)": ["Red Hat", "Fedora", "Ubuntu", "Debian", "CentOS", "Windows"],
    "Операционные системы (продуктивные)": ["Windows Server", "AWS Linux", "Red Hat", "Fedora", "CentOS", 'Ubuntu Server'],
    "Виртуализация": ["ESXi VMware", "VirtualBox", "QEMU", "VMware","Docker"],
    "Инструменты анализа вредоносного ПО": ["VirusTotal"],
    "Инструменты судебного анализа": ["Autopsy"],
    "Веб-сервисы": ["Apache", "Tomcat", "NGINX"],
    "Базы данных": ["MySQL", "MariaDB", "PostgreSQL"],
    "Встроенные устройства": ["Raspberry Pi 4", "Orange Pi"],
    "Сетевые устройства": ["Cisco (Маршрутизаторы, Коммутаторы)", "Mikrotik (Маршрутизаторы)"],
    "Мониторинг сети": ["Wireshark", "Tshark", "tcpdump"],
    "Мониторинг устройств через SNMP": ["Observium", "Zabbix"],
    "Инструменты кибербезопасности": ["NMAP", "Zenmap"],
    "Брандмауэр": ["Firewalld", "ufw"],
    'СХД (Сетевая хранилище данных)' : ['OpenMediaVault'],
    "Автоматизация": ["Ansible"],
    'VPN-серверы':  ['OpenVPN','Wireguard','Twingate'],
    "Языки": ["Английский (B2)", "Русский (A2)"]
    }
  }
};

const Skills = ({ language }) => {
  const selected = texts[language] || texts.en || texts.ru;

  return (
    <Section>
      <h2>{selected.title}</h2>
      {Object.entries(selected.categories).map(([category, items]) => (
        <div key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <Grid>
            {items.map((skill) => (
              <SkillBox key={skill}>
                {iconMap[skill] || <FaTools />} {skill}
              </SkillBox>
            ))}
          </Grid>
        </div>
      ))}
    </Section>
  );
};

export default Skills;
