
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaVuejs, FaAngular, FaAws, FaDocker, FaJava, FaBootstrap, FaJira } from 'react-icons/fa';
import { SiFirebase, SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiConfluence, SiTypescript, SiSass, SiFlutter, SiJest, SiPostgresql, SiLess, SiHcl } from 'react-icons/si';
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";

export function displayTechIcons(technology: string) {
  switch (technology) {
      case 'React':
          return <FaReact />;
      case 'Next.JS':
          return <TbBrandNextjs />;
      case 'React Native':
          return <TbBrandReactNative />;
      case 'Angular':
          return <FaAngular />;
      case 'Node.JS':
          return <FaNodeJs />;
      case 'HTML 5':
          return <FaHtml5 />;
      case 'CSS 3':
          return <FaCss3 />;
      case 'SCSS':
          return <SiSass />;
      case 'Javascript':
          return <FaJs />;
      case 'Typescript':
          return <SiTypescript />;
      case 'VueJS':
          return <FaVuejs />;
      case 'Firebase':
          return <SiFirebase />;
      case 'C#':
          return <SiCsharp />;
      case '.NET':
          return <SiDotnet />;
      case 'SQL Server':
          return <SiMicrosoftsqlserver />;
      case 'Confluence':
          return <SiConfluence />;
      case 'Jira':
          return <FaJira />;
      case 'Flutter':
          return <SiFlutter />;
      case 'AWS':
          return <FaAws />;
      case 'Docker':
          return <FaDocker />;
      case 'Jest':
          return <SiJest />;
      case 'PostgreSQL':
          return <SiPostgresql />;
      case 'Java':
          return <FaJava />;
      case 'JSTL':
          return <FaJava />;
      case 'Less':
          return <SiLess />;
      case 'HCL Commerce':
          return <SiHcl />;
      case 'HCL Commerce 8':
          return <SiHcl />;
      case 'Bootstrap':
          return <FaBootstrap />;
      case 'Bootstrap 3':
          return <FaBootstrap />;
      case 'Bootstrap 5':
          return <FaBootstrap />;
      default:
          return <></>;
  }
}