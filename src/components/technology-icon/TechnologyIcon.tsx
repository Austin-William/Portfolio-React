import { FaAmazon, FaCloud, FaCode, FaDatabase, FaMobileAlt, FaServer, FaTools, FaVial } from 'react-icons/fa'
import { SiAngular, SiCss, SiDocker, SiFirebase, SiFlutter, SiHtml5, SiJavascript, SiJest, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSass, SiTailwindcss, SiTypescript } from 'react-icons/si'

type TechnologyIconProps = {
  technology: string
}

export function getTechnologyIcon(technology: string) {
  if (technology.startsWith('React')) return SiReact
  if (technology.startsWith('Typescript')) return SiTypescript
  if (technology.startsWith('Javascript')) return SiJavascript
  if (technology.startsWith('Angular')) return SiAngular
  if (technology.startsWith('Next')) return SiNextdotjs
  if (technology.startsWith('Node')) return SiNodedotjs
  if (technology.startsWith('Flutter')) return SiFlutter
  if (technology.startsWith('Docker')) return SiDocker
  if (technology.startsWith('Firebase')) return SiFirebase
  if (technology.startsWith('PostgreSQL')) return SiPostgresql
  if (technology.startsWith('AWS')) return FaAmazon
  if (technology.startsWith('Jest')) return SiJest
  if (technology.startsWith('SCSS')) return SiSass
  if (technology.startsWith('SonarCloud')) return FaTools
  if (technology.startsWith('Tailwind')) return SiTailwindcss
  if (technology.startsWith('HTML')) return SiHtml5
  if (technology.startsWith('CSS')) return SiCss
  if (technology.includes('API') || technology.startsWith('Rest')) return FaCloud
  if (technology.includes('SQL') || technology.startsWith('Postgre')) return FaDatabase
  if (technology.includes('mobile') || technology.startsWith('React Native')) return FaMobileAlt
  if (technology.includes('Server') || technology === 'Java' || technology === '.NET') return FaServer
  if (technology.includes('Test')) return FaVial
  if (technology.includes('Jira') || technology.includes('Confluence') || technology.includes('Bootstrap')) return FaTools
  return FaCode
}

export function TechnologyIcon({ technology }: TechnologyIconProps) {
  const Icon = getTechnologyIcon(technology)
  return <Icon className="technology-icon" aria-hidden="true" />
}
