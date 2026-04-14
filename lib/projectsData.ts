import { Code, Terminal, Database, Server, Network, Shield, HardDrive, Monitor, Lock } from 'lucide-react';

export const projectData = [
  { 
    id: 1, 
    title: "Infrastructure CHU (En cours)", 
    desc: "Déploiement en équipe de 3 d'une infrastructure complète et sécurisée pour un CHU fictif (FortiGate, VLANs, AD, Hyper-V, supervision).", 
    icon: Server, 
    tech: ["Fortinet", "Windows Server", "VLANs", "Hyper-V", "Zabbix"],
    link: "https://roadmap.erwanlafosse.ovh/",
    isExternal: true,
    accentColor: "from-green-500 to-emerald-400",
    accentGlow: "bg-green-500/20",
    heroMockup: "/placeholder.png", // TODO: Replace with real mockup
    context: {
      description: "Conception et déploiement d'une infrastructure réseau complète, hautement sécurisée et résiliente pour un Centre Hospitalier Universitaire (CHU) fictif. Ce projet d'envergure, mené sur 22 semaines en équipe de trois, illustre notre capacité à concevoir une architecture d'entreprise répondant à des contraintes de sécurité strictes dans un milieu médical.",
      features: [
        { title: "Segmentation de Sécurité", description: "Isolation des données sensibles et des équipements via 6 VLANs distincts (Médical, IT, Logistique, etc.)." },
        { title: "Haute Disponibilité", description: "Redondance des services critiques tels que l'Active Directory et le système de sauvegarde." }
      ]
    },
    technicalDetails: [
      { icon: Network, title: "Réseau & Edge", description: "Topologie Core-Edge avec pare-feu Fortinet FortiGate, commutation Cisco et infrastructure Wi-Fi sécurisée dédiée au personnel médical." },
      { icon: HardDrive, title: "Virtualisation", description: "Déploiement d'un cluster multi-hôtes basé sur Microsoft Hyper-V pour consolider l'ensemble des services." },
      { icon: Shield, title: "Annuaire & Identité", description: "Mise en place d'Active Directory (SRV-AD1 et SRV-AD2), rôles DHCP/DNS, et sécurisation via des GPO restrictives." },
      { icon: Monitor, title: "Supervision & Parc", description: "Monitoring actif de l'infrastructure via Zabbix, gestion de parc IT sous Linux GLPI, et politique de sauvegarde Veeam." }
    ]
  },
  { 
    id: 2, 
    title: "Site de location et dépannage de flippers et machines d'arcades", 
    desc: "Développement et déploiement d'un site vitrine pour la location et le dépannage de flippers et bornes d'arcades.", 
    icon: Monitor, 
    tech: ["Next.js", "React", "Vercel", "GitHub"],
    link: "https://nicoflip2.dimitri-linque.fr",
    isExternal: true,
    accentColor: "from-blue-500 to-cyan-400",
    accentGlow: "bg-blue-500/20",
    context: {
      description: "Création d'une plateforme moderne permettant de présenter les services de location et de réparation de machines de jeux d'arcade.",
      features: [
        { title: "Développement Web", description: "Création de l'interface et de l'expérience utilisateur avec React et Next.js." }
      ]
    },
    technicalDetails: [
      { icon: Code, title: "Technologies Frontend & Hébergement", description: "Architecture basée sur Next.js, code source géré via GitHub et déploiement continu sur Vercel." }
    ]
  },
  { 
    id: 3, 
    title: "MyChores - Gestion des tâches", 
    desc: "Application web complète de gestion des tâches ménagères et corvées à la maison.", 
    icon: Database, 
    tech: ["Next.js", "React", "Supabase", "Vercel"],
    link: "https://mychores.dimitri-linque.fr/",
    isExternal: true,
    accentColor: "from-purple-500 to-indigo-400",
    accentGlow: "bg-purple-500/20",
    context: {
      description: "Création d'une application centralisée permettant d'organiser, d'assigner et de suivre les corvées au sein du foyer.",
      features: [
        { title: "Organisation Simplifiée", description: "Suivi interactif et en temps réel des tâches effectuées." }
      ]
    },
    technicalDetails: [
      { icon: Code, title: "Stack Moderne", description: "Interface utilisateur développée en React/Next.js, architecture backend gérée par Supabase, avec un déploiement continu assuré par Vercel." }
    ]
  },
  { 
    id: 4, 
    title: "Serveur Sécurisé", 
    desc: "Installation serveur SSH Debian et Windows avec clés publiques.", 
    icon: Code, 
    tech: ["Debian", "SSH", "Sécurité"],
    accentColor: "from-red-500 to-rose-400",
    accentGlow: "bg-red-500/20",
    context: {
      description: "Renforcement de l'accès distant aux serveurs d'administration.",
      features: [
        { title: "Authentification forte", description: "Mise en place de bi-clés asymétriques." }
      ]
    },
    technicalDetails: [
      { icon: Lock, title: "Cryptographie", description: "Configuration OpenSSH sécurisée avec désactivation des mots de passe." }
    ]
  }
];
