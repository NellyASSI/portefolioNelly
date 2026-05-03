'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [isVeilleOpen, setIsVeilleOpen] = useState(false);
  const [showFullVeille, setShowFullVeille] = useState(false);
  const [showProjectDetailsModal, setShowProjectDetailsModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Blog sur la Réalité Virtuelle",
      category: "web",
      description: "Site web informatif explorant les différences entre la réalité virtuelle et la réalité augmentée",
      fullDescription: "J'ai réalisé toute la partie Enjeux et défis du site sur la réalité virtuelle et la réalité augmentée. Mon objectif était de transformer un sujet technique en contenu compréhensible pour un public non spécialiste, tout en gardant une présentation claire et structurée.",
      context: "Projet académique de site informatif autour de la réalité virtuelle et de la réalité augmentée.",
      objective: "Présenter les différences entre VR et AR, leurs usages et leurs impacts dans des domaines comme les jeux vidéo, la santé et l'éducation.",
      contribution: "J'ai réalisé la partie Enjeux et défis : recherche d'informations, organisation des idées, rédaction des contenus et intégration dans l'interface.",
      difficulties: "La principale difficulté était de rendre des notions techniques accessibles sans perdre les informations importantes.",
      results: "Le site présente une section claire sur les défis techniques, sécuritaires et éthiques de la VR, avec une navigation lisible.",
      proofs: ["Contenus rédigés", "Captures du site", "Structure des sections", "Code HTML/CSS/JS"],
      e5Skills: ["Développer la présence en ligne", "Organiser son développement professionnel", "Travailler en mode projet"],
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/2e49970dddcfd7605b36fe176a65266a.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/Christian-Tasseu/Volet_Auto.git",
    },
    {
      id: 2,
      title: "Système de Gestion des Utilisateurs (SGU)",
      category: "web",
      description: "Système complet de gestion des utilisateurs avec interface d'administration et génération de rapports PDF",
      fullDescription: "J'ai géré la documentation du projet et le CRUD complet de gestion des utilisateurs. Ce projet m'a permis de montrer ma capacité à organiser une application, sécuriser les données et expliquer le fonctionnement technique de manière claire.",
      context: "Application web de gestion des comptes utilisateurs avec espace d'administration, authentification et rôles.",
      objective: "Permettre à un administrateur d'ajouter, consulter, modifier et supprimer des utilisateurs depuis une interface dédiée.",
      contribution: "J'ai pris en charge la documentation technique et utilisateur, ainsi que le CRUD complet : création, lecture, modification et suppression des comptes.",
      difficulties: "Il fallait garder une logique claire entre les vues, les traitements PHP et la base MySQL, tout en sécurisant les formulaires.",
      results: "L'application permet une gestion structurée des utilisateurs, avec authentification, contrôle des rôles et export de données.",
      proofs: ["Documentation technique", "Documentation utilisateur", "CRUD utilisateurs", "Base de données MySQL", "Code PHP/PDO"],
      e5Skills: ["Gérer le patrimoine informatique", "Mettre à disposition un service", "Répondre aux incidents et demandes"],
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/06a387c69a9d7d895fe5e43331967ccf.png",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "PDF"],
      github: "https://github.com/Enami-code770/sgu1.0.git",
    },
    {
      id: 3,
      title: "GameHub - Catalogue de Jeux Vidéo",
      category: "application",
      description: "Application web permettant aux utilisateurs de découvrir des jeux vidéo et de les ajouter à leurs favoris",
      fullDescription: "J'ai réalisé GameHub de A à Z, depuis la conception de la base de données jusqu'au développement des pages et des fonctionnalités. C'est l'un des projets qui montre le plus clairement mon autonomie technique.",
      context: "Projet personnel/formation autour d'un catalogue de jeux vidéo avec gestion de favoris.",
      objective: "Créer une application dynamique où un utilisateur peut consulter des jeux, se connecter et gérer sa liste de favoris.",
      contribution: "J'ai tout réalisé : conception, base de données MySQL, pages PHP, authentification, affichage dynamique, gestion des favoris et intégration responsive.",
      difficulties: "La difficulté principale était de relier correctement les utilisateurs, les jeux et les favoris, puis de garder une navigation simple.",
      results: "L'application dispose d'une base relationnelle, d'un système d'inscription/connexion et d'une gestion personnalisée des favoris.",
      proofs: ["Schéma de base de données", "Code PHP", "Pages dynamiques", "Fonction favoris", "Lien GitHub"],
      e5Skills: ["Mettre à disposition un service", "Gérer le patrimoine informatique", "Organiser son développement professionnel"],
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/9f20041a492c8ca60147ddda9299c90c.png",
      tags: ["PHP", "JavaScript", "CSS", "Bootstrap", "MySQL Workbench"],
      github: "https://github.com/Enami-code770/GameHub.git", 
    },
    {
      id: 4,
      title: "Volet Automatique Intelligent",
      category: "web",
      description: "Interface interactive avec un volet automation qui s'ouvre ou se ferme automatiquement en fonction de l'intensité lumineuse",
      fullDescription: "J'ai participé à la création d'une interface interactive simulant un volet automatique. Le projet montre ma capacité à manipuler le DOM et à traduire une règle simple en comportement visible pour l'utilisateur.",
      context: "Projet de simulation d'un système domotique réagissant à l'intensité lumineuse.",
      objective: "Afficher le comportement d'un volet qui s'ouvre ou se ferme automatiquement selon un seuil de luminosité.",
      contribution: "J'ai participé à l'intégration HTML/CSS et à la logique JavaScript permettant de déclencher l'ouverture ou la fermeture du volet.",
      difficulties: "Il fallait rendre la simulation compréhensible visuellement et synchroniser l'état du volet avec la valeur lumineuse.",
      results: "L'utilisateur peut comprendre le fonctionnement du système grâce à une interface simple et à une réaction immédiate.",
      proofs: ["Interface interactive", "Gestion du DOM", "Conditions JavaScript", "Lien GitHub"],
      e5Skills: ["Travailler en mode projet", "Mettre à disposition un service", "Répondre aux incidents et demandes"],
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/fc11c3429732ea36dfa4e8312addc36c.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Christian-Tasseu/Volet_Auto.git",
    },
    {
      id: 5,
      title: "Application de Demande de Devis Plomberie",
      category: "web",
      description: "Application web pour demander des devis de services de dépannage en plomberie avec formulaire interactif",
      fullDescription: "J'ai développé une fonctionnalité de demande de devis dans un contexte de stage. Ce projet montre un cas concret de service mis à disposition pour répondre à un besoin client.",
      context: "Projet de stage pour un site de services de dépannage en plomberie.",
      objective: "Permettre aux visiteurs d'envoyer une demande de devis via un formulaire clair et fiable.",
      contribution: "J'ai conçu le formulaire, intégré l'interface responsive, ajouté des validations JavaScript et prévu l'enregistrement sécurisé des demandes.",
      difficulties: "Le point important était de limiter les erreurs de saisie et de sécuriser les données envoyées par les utilisateurs.",
      results: "Le formulaire facilite la prise de contact et permet à l'entreprise de récupérer les demandes de manière structurée.",
      proofs: ["Formulaire de contact", "Validation JavaScript", "Traitement PHP", "Base MySQL", "Rapport de stage"],
      e5Skills: ["Développer la présence en ligne", "Mettre à disposition un service", "Répondre aux incidents et demandes"],
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/8f4ea06d26efd94b875bfa0b9cbac464.png",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      github: "#",
    },
    {
      id: 6,
      title: "Intranet d'Entreprise CoreFlow",
      category: "application",
      description: "Plateforme intranet complète en cours de développement pour la gestion des congés, tickets et événements d'entreprise",
      fullDescription: "J'ai travaillé avec mon collègue sur la partie événements de CoreFlow. J'ai participé à la suppression des événements, à leur affichage selon la date et à leur remontée dans le tableau de bord.",
      context: "Projet BTS SIO en équipe : intranet d'entreprise pour centraliser la communication interne et certaines fonctions RH.",
      objective: "Permettre aux utilisateurs de consulter les événements internes, distinguer les événements passés et à venir, et afficher les informations utiles sur le tableau de bord.",
      contribution: "Avec mon collègue, j'ai géré la partie événements : suppression, récupération selon la date, affichage dans les vues et intégration sur le tableau de bord.",
      difficulties: "La difficulté était de coordonner le front Vue.js avec les API Node.js, puis de respecter les rôles et les dates des événements.",
      results: "La partie événements permet de consulter les événements selon leur statut temporel et d'avoir une vue utile depuis le tableau de bord.",
      proofs: ["Routes API événements", "Composants Vue.js", "Tableau de bord", "Gestion des dates", "Travail Git en équipe"],
      e5Skills: ["Travailler en mode projet", "Mettre à disposition un service", "Gérer le patrimoine informatique", "Répondre aux incidents et demandes"],
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/838ae924a13129e2b2a40ca15a8e9295.png",
      tags: ["Vue.js", "Node.js", "JavaScript"],
      github: "https://github.com/2026-BTS-SIO2-ESIC/CoreFlow.git",
    }
  ];

  const veilleTopics = [
    {
      title: "Low-Code & No-Code - L'avenir du développement d'applications",
      sections: [
        {
          subtitle: " Qu'est-ce que le Low-Code et No-Code ?",
          items: [
            "Approches de développement logiciel permettant de créer des applications avec très peu ou pas de code",
            "Utilisation d'interfaces visuelles, modules prêts à l'emploi et automatisations",
            "No-code vise les utilisateurs sans compétences techniques",
            "Low-code s'adresse à des utilisateurs ayant quelques connaissances ou pour des projets nécessitant plus de personnalisation"
          ]
        },
        {
          subtitle: " Tendances actuelles et à venir (2025–2026)",
          items: [
            " Adoption massive : 70-75% des nouvelles applications d'ici 2026 (Gartner)",
            " Intégration de l'IA : automatisation des workflows, analyse de données, génération de code",
            " Orientées entreprise : automatisation, portails clients, tableaux de bord avec sécurité renforcée",
            " Spécialisation sectorielle : Santé, Finance, Éducation adaptées par secteur",
            " Automatisation avancée et intégration avec systèmes existants (CRM, ERP)"
          ]
        },
        {
          subtitle: " Bénéfices clés",
          items: [
            " Rapidité : déploiement jusqu'à 10 fois plus rapide que le développement traditionnel",
            " Réduction des coûts : jusqu'à 70% grâce à moindre dépendance aux développeurs spécialisés",
            " Empowerment des équipes : création d'outils sans dépendre de la DSI",
            " Automatisation & intégration : synchronisation des données avec CRM, ERP et API"
          ]
        },
        {
          subtitle: " Défis et limites à connaître",
          items: [
            " Gouvernance & sécurité : risques de shadow IT, failles de sécurité, incohérences de données",
            " Qualité & UX : applications moins ergonomiques et moins optimisées si créées par non-experts",
            " Maintenance : difficulté à maintenir certaines applications et risque si créateur quitte",
            " Limites techniques : projets complexes nécessitent toujours du code (SAP)"
          ]
        },
        {
          subtitle: "🛠️ Plateformes majeures à connaître",
          items: [
            "OutSystems → Low-code entreprise complète",
            "Mendix → Collaboration IT/métier optimisée",
            "Retool → Outils internes et dashboards",
            "Appian → Automatisation des processus",
            "Bubble → Applications web sans code",
            "Airtable → Base de données visuelle",
            "WeWeb → Interfaces frontend modernes",
            "Xano → Backend sans code",
            "FlutterFlow → Applications mobiles"
          ]
        },
        {
          subtitle: "Perspectives futures",
          items: [
            " IA générative : création d'applications avec instructions en langage naturel",
            " Standardisation : modèles d'évaluation pour comparer et choisir les meilleurs outils",
            " Démocratisation complète du développement informatique"
          ]
        },
        {
          subtitle: "Points clés à retenir",
          items: [
            "Levier majeur de transformation digitale",
            "Création plus rapide et à moindre coût",
            "Démocratisation du développement informatique",
            "Nécessite une bonne gouvernance et sécurité",
            "L'IA va encore accélérer son évolution"
          ]
        },
        {
          subtitle: "Sources fiables",
          items: [
            "Gartner – prévisions marché low-code",
            "Microsoft – Power Platform",
            "Amazon Web Services – définition low-code",
            "SAP – enjeux LCNC",
            "IONOS – comparaison low-code/no-code",
            "Appvizer – avantages et usages"
          ]
        }
      ]
    }
  ];

  const categories = [
    { key: 'tous', label: 'Tous les projets' },
    { key: 'web', label: 'Développement Web' },
    { key: 'application', label: 'Applications' },
    { key: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = activeFilter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToVeille = () => {
    setShowFullVeille(true);
    setIsVeilleOpen(false);
    setTimeout(() => {
      const veilleSection = document.getElementById('veille-complete');
      if (veilleSection) {
        veilleSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDemoClick = (project: any) => {
    setSelectedProject(project);
    setShowProjectDetailsModal(true);
  };

  const handleRequestDemo = () => {
    setShowProjectDetailsModal(false);
    setShowDemoModal(true);
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new URLSearchParams();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('project', selectedProject?.title || '');

    try {
      const response = await fetch('https://readdy.ai/api/form/d4k1sik4bsgki10ajbig', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setShowDemoModal(false);
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#2A2224]/95 backdrop-blur-sm border-b border-[#421734] z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-['Pacifico'] text-2xl text-[#DFA49A]">NELLY</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
                Accueil
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
                À propos
              </Link>
              <div className="relative">
                <button
                  onClick={() => setIsVeilleOpen(!isVeilleOpen)}
                  className="px-3 py-2 rounded-lg transition-colors bg-[#B2174A] text-white flex items-center whitespace-nowrap cursor-pointer"
                >
                  Projets
                  <i className={`ri-arrow-down-s-line ml-1 transition-transform w-4 h-4 flex items-center justify-center ${isVeilleOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isVeilleOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-[#2A2224] rounded-lg shadow-xl border border-[#421734] py-4 z-50">
                    <Link href="/portfolio" className="block px-4 py-2 text-[#DFA49A] hover:bg-[#421734] font-medium cursor-pointer">
                      Mes Projets
                    </Link>
                    <div className="border-t border-[#421734] mt-2 pt-2">
                      <div className="px-4 py-2 text-sm font-semibold text-[#C98A8A] uppercase tracking-wider">
                        Veille Technologique
                      </div>
                      {veilleTopics.slice(0, 3).map((topic, index) => (
                        <button
                          key={index}
                          className="block w-full text-left px-4 py-2 text-[#DFA49A] hover:bg-[#421734] text-sm cursor-pointer"
                        >
                          {topic.title}
                        </button>
                      ))}
                      <button
                        onClick={scrollToVeille}
                        className="block w-full text-left px-4 py-2 text-[#B2174A] hover:bg-[#421734] text-sm font-medium cursor-pointer"
                      >
                        Voir toute la veille →
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <Link href="/certifications" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
                Attestations/Rapports
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/NellyASSI" target="_blank" rel="noopener noreferrer" className="text-[#DFA49A] hover:text-[#C98A8A] cursor-pointer">
                <i className="ri-github-line text-xl w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="https://www.linkedin.com/in/nelly-assi-243a93336" target="_blank" rel="noopener noreferrer" className="text-[#DFA49A] hover:text-[#C98A8A] cursor-pointer">
                <i className="ri-linkedin-line text-xl w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#421734] to-[#5A1F2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Mes Projets</h1>
            <p className="text-xl text-[#DFA49A] max-w-4xl mx-auto leading-relaxed mb-8">
              Découvrez mes réalisations présentées pour l'épreuve E5 : contexte, contribution personnelle,
              preuves concrètes et compétences mobilisées.
            </p>
          </div>
        </div>
      </section>

      {/* E5 Summary Section */}
      <section className="py-12 bg-[#2A2224] border-b border-[#5A1F2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_2fr] gap-8 items-start">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#DFA49A]/15 text-[#DFA49A] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <i className="ri-file-list-3-line"></i>
                Préparation E5
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">Lien avec ma fiche de compétences</h2>
              <p className="text-[#DFA49A] leading-relaxed">
                Chaque projet est relié aux compétences du bloc E5 afin que le jury puisse comprendre ce que j'ai fait,
                comment je l'ai fait et quelles preuves je peux présenter.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Gérer le patrimoine informatique",
                "Répondre aux incidents et demandes",
                "Développer la présence en ligne",
                "Travailler en mode projet",
                "Mettre à disposition un service",
                "Organiser son développement professionnel"
              ].map((skill, index) => (
                <div key={index} className="bg-[#421734] border border-[#5A1F2E] rounded-xl p-4 text-[#DFA49A] font-medium">
                  <i className="ri-checkbox-circle-line text-[#C8514D] mr-2"></i>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-[#DFA49A]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-3 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === category.key
                    ? 'bg-[#B2174A] text-white shadow-lg'
                    : 'bg-[#DFA49A]/20 text-[#421734] hover:bg-[#DFA49A]/30'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-[#DFA49A]/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#421734] mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="bg-[#DFA49A]/15 border border-[#DFA49A]/30 rounded-lg p-3 mb-4">
                    <p className="text-xs uppercase tracking-wider text-[#B2174A] font-bold mb-1">Ma contribution</p>
                    <p className="text-sm text-[#421734] leading-relaxed">{project.contribution}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-[#DFA49A]/30 text-[#5A1F2E] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.e5Skills.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-[#421734] text-[#DFA49A] px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-[#421734] font-medium transition-colors cursor-pointer"
                      >
                        <i className="ri-github-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                        Code
                      </a>
                    )}
                    <button
                      onClick={() => handleDemoClick(project)}
                      className="flex items-center text-[#B2174A] hover:text-[#C8514D] font-medium transition-colors cursor-pointer"
                    >
                      <i className="ri-file-search-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Détails E5
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veille Technologique Section - Enhanced with Animations */}
      <section id="veille-complete" className="py-20 bg-gradient-to-b from-[#421734] to-[#2A1428]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Veille Technologique
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#B2174A] to-[#C8514D] mx-auto mb-6"></div>
            <p className="text-xl text-[#DFA49A] max-w-4xl mx-auto leading-relaxed">
              Low-Code & No-Code : l'avenir du développement d'apps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#2A2224] border border-[#5A1F2E] rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#B2174A] to-[#C8514D] rounded-xl flex items-center justify-center mb-4">
                <i className="ri-search-eye-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Méthode de veille</h3>
              <p className="text-[#DFA49A] text-sm leading-relaxed">
                Je suis l'évolution du low-code/no-code à partir de sources professionnelles, de vidéos spécialisées
                et de comparatifs d'outils afin de comprendre les usages réels en entreprise.
              </p>
            </div>
            <div className="bg-[#2A2224] border border-[#5A1F2E] rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C8514D] to-[#DFA49A] rounded-xl flex items-center justify-center mb-4">
                <i className="ri-filter-3-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Critères observés</h3>
              <p className="text-[#DFA49A] text-sm leading-relaxed">
                Je compare la rapidité de développement, la sécurité, la maintenance, les possibilités d'intégration
                et les limites lorsque le projet devient plus complexe.
              </p>
            </div>
            <div className="bg-[#2A2224] border border-[#5A1F2E] rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7D527A] to-[#5A3D63] rounded-xl flex items-center justify-center mb-4">
                <i className="ri-graduation-cap-line text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lien avec mon parcours</h3>
              <p className="text-[#DFA49A] text-sm leading-relaxed">
                Cette veille m'aide à mieux comprendre les outils actuels, mais aussi à garder un regard critique :
                certaines solutions accélèrent un projet, mais ne remplacent pas les bases du développement web.
              </p>
            </div>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {/* Définition Card */}
            <div className="group bg-[#2A2224] rounded-2xl p-8 border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-500 hover:shadow-2xl hover:shadow-[#B2174A]/20 transform hover:-translate-y-1">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#B2174A] to-[#C8514D] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-lightbulb-flash-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Qu'est-ce que?</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start group/item">
                  <span className="w-2 h-2 bg-[#C8514D] rounded-full mt-2 mr-3 group-hover/item:scale-150 transition-transform duration-300"></span>
                  <span className="text-[#DFA49A] text-sm leading-relaxed">Créer des applications avec très peu ou pas de code</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="w-2 h-2 bg-[#C8514D] rounded-full mt-2 mr-3 group-hover/item:scale-150 transition-transform duration-300"></span>
                  <span className="text-[#DFA49A] text-sm leading-relaxed">Interfaces visuelles et modules prêts à l'emploi</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="w-2 h-2 bg-[#C8514D] rounded-full mt-2 mr-3 group-hover/item:scale-150 transition-transform duration-300"></span>
                  <span className="text-[#DFA49A] text-sm leading-relaxed">Démocratisation du développement informatique</span>
                </li>
              </ul>
            </div>

            {/* Tendances Card */}
            <div className="group bg-[#2A2224] rounded-2xl p-8 border border-[#5A1F2E] hover:border-[#C8514D] transition-all duration-500 hover:shadow-2xl hover:shadow-[#C8514D]/20 transform hover:-translate-y-1">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#C8514D] to-[#DFA49A] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-trending-up-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Tendances 2025-2026</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start group/item">
                  <span className="text-[#C8514D] mr-3 font-bold text-lg"></span>
                  <span className="text-[#DFA49A] text-sm leading-relaxed"><strong>70-75%</strong> des nouvelles apps (Gartner)</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#C8514D] mr-3 font-bold text-lg"></span>
                  <span className="text-[#DFA49A] text-sm leading-relaxed">Intégration massive de l'<strong>IA générative</strong></span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#C8514D] mr-3 font-bold text-lg"></span>
                  <span className="text-[#DFA49A] text-sm leading-relaxed">Solutions <strong>orientées entreprise</strong></span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#C8514D] mr-3 font-bold text-lg"></span>
                  <span className="text-[#DFA49A] text-sm leading-relaxed">Automatisation des processus et connexion aux API</span>
                </li>
              </ul>
            </div>

            {/* Bénéfices Card */}
            <div className="group bg-[#2A2224] rounded-2xl p-8 border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-500 hover:shadow-2xl hover:shadow-[#B2174A]/20 transform hover:-translate-y-1">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#B2174A] to-[#92166B] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-star-smile-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Bénéfices clés</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#5A1F2E]/40 rounded-lg p-4 hover:bg-[#5A1F2E]/70 transition-colors duration-300">
                  <p className="text-[#C8514D] text-lg font-bold"> 10x</p>
                  <p className="text-xs text-[#DFA49A]">Plus rapide</p>
                </div>
                <div className="bg-[#5A1F2E]/40 rounded-lg p-4 hover:bg-[#5A1F2E]/70 transition-colors duration-300">
                  <p className="text-[#C8514D] text-lg font-bold"> 70%</p>
                  <p className="text-xs text-[#DFA49A]">Réduction coûts</p>
                </div>
                <div className="bg-[#5A1F2E]/40 rounded-lg p-4 hover:bg-[#5A1F2E]/70 transition-colors duration-300">
                  <p className="text-[#C8514D] text-lg font-bold"> Équipes</p>
                  <p className="text-xs text-[#DFA49A]">Empowerment</p>
                </div>
                <div className="bg-[#5A1F2E]/40 rounded-lg p-4 hover:bg-[#5A1F2E]/70 transition-colors duration-300">
                  <p className="text-[#C8514D] text-lg font-bold"> API</p>
                  <p className="text-xs text-[#DFA49A]">Intégration</p>
                </div>
              </div>
            </div>

            {/* Défis Card */}
            <div className="group bg-[#2A2224] rounded-2xl p-8 border border-[#5A1F2E] hover:border-[#DFA49A] transition-all duration-500 hover:shadow-2xl hover:shadow-[#DFA49A]/10 transform hover:-translate-y-1">
              <div className="flex items-start mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#7D527A] to-[#5A3D63] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-alert-line text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">Défis à relever</h3>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start group/item">
                  <span className="text-[#DFA49A] mr-2">⚠️</span>
                  <span className="text-[#DFA49A] text-sm">Gouvernance & sécurité</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#DFA49A] mr-2">⚠️</span>
                  <span className="text-[#DFA49A] text-sm">Qualité & UX</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#DFA49A] mr-2">⚠️</span>
                  <span className="text-[#DFA49A] text-sm">Maintenance à long terme</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#DFA49A] mr-2">⚠️</span>
                  <span className="text-[#DFA49A] text-sm">Limites techniques</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-[#DFA49A] mr-2">⚠️</span>
                  <span className="text-[#DFA49A] text-sm">Dépendance aux plateformes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Plateformes Section */}
          {showFullVeille && (
            <div className="mt-16 space-y-12 animate-in fade-in duration-700">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-2">🛠️ Plateformes</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-[#B2174A] to-[#C8514D] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: 'OutSystems', type: 'Enterprise', icon: 'ri-building-4-line' },
                  { name: 'Mendix', type: 'Enterprise', icon: 'ri-team-line' },
                  { name: 'Microsoft Power', type: 'Enterprise', icon: 'ri-windows-line' },
                  { name: 'Appian', type: 'Enterprise', icon: 'ri-flow-chart-line' },
                  { name: 'Bubble', type: 'Accessible', icon: 'ri-bubble-chart-line' },
                  { name: 'Retool', type: 'Accessible', icon: 'ri-tools-line' },
                  { name: 'Airtable', type: 'Accessible', icon: 'ri-table-2' },
                  { name: 'FlutterFlow', type: 'Accessible', icon: 'ri-smartphone-line' },
                ].map((platform, idx) => (
                  <div key={idx} className="group bg-[#2A2224] rounded-xl p-6 border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-300 hover:shadow-xl hover:shadow-[#B2174A]/20 transform hover:-translate-y-2 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B2174A] to-[#C8514D] rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 transition-transform duration-300">
                      <i className={`${platform.icon} text-white text-xl`}></i>
                    </div>
                    <h4 className="font-bold text-white mb-1 group-hover:text-[#DFA49A] transition-colors duration-300">{platform.name}</h4>
                    <p className="text-xs text-[#DFA49A]/70">{platform.type}</p>
                  </div>
                ))}
              </div>

              {/* YouTube Videos Section */}
              <div className="mt-20">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-2">📺 Ressources Vidéo</h3>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#B2174A] to-[#C8514D] mx-auto mb-4"></div>
                  <p className="text-[#DFA49A]">Découvrez des tutoriels et analyses sur le Low-Code & No-Code</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Vidéo 1: No-Code */}
                  <div className="group bg-[#2A2224] rounded-2xl overflow-hidden border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B2174A]/40 transform hover:-translate-y-2">
                    <div className="relative w-full aspect-video bg-black overflow-hidden rounded-t-2xl">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/XjpyYtnAR0g?modestbranding=1&rel=0&controls=1"
                        title="Mouvement No-Code"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-6 bg-[#2A2224]">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#DFA49A] transition-colors duration-300">🚀 Mouvement No-Code</h4>
                      <p className="text-sm text-[#DFA49A]/80 mb-4 leading-relaxed">Explorez l'essor du mouvement No-Code et comment il transforme le développement d'applications en 2025. Découvrez comment les équipes peuvent créer des solutions sans écrire une seule ligne de code.</p>
                      <div className="flex items-center justify-between pt-3 border-t border-[#421734]">
                        <div className="flex items-center text-xs text-[#C8514D] font-medium">
                          <i className="ri-youtube-line mr-2 text-red-500"></i>
                          YouTube
                        </div>
                        <a 
                          href="https://www.youtube.com/watch?v=XjpyYtnAR0g" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#B2174A] hover:text-[#DFA49A] transition-colors duration-300 font-medium text-sm flex items-center gap-1"
                        >
                          Voir complet <i className="ri-external-link-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Vidéo 2: Low-Code */}
                  <div className="group bg-[#2A2224] rounded-2xl overflow-hidden border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B2174A]/40 transform hover:-translate-y-2">
                    <div className="relative w-full aspect-video bg-black overflow-hidden rounded-t-2xl">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/vV_uA-T5DMc?modestbranding=1&rel=0&controls=1"
                        title="Low-Code : L'accélérateur Pro"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-6 bg-[#2A2224]">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#DFA49A] transition-colors duration-300">⚡ Low-Code : L'accélérateur Pro</h4>
                      <p className="text-sm text-[#DFA49A]/80 mb-4 leading-relaxed">Découvrez comment le Low-Code accélère le développement professionnel et optimise la productivité. Apprenez à combiner la simplicité du No-Code avec la puissance du code pour des solutions enterprise.</p>
                      <div className="flex items-center justify-between pt-3 border-t border-[#421734]">
                        <div className="flex items-center text-xs text-[#C8514D] font-medium">
                          <i className="ri-youtube-line mr-2 text-red-500"></i>
                          YouTube
                        </div>
                        <a 
                          href="https://www.youtube.com/watch?v=vV_uA-T5DMc" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#B2174A] hover:text-[#DFA49A] transition-colors duration-300 font-medium text-sm flex items-center gap-1"
                        >
                          Voir complet <i className="ri-external-link-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-16">
            <button 
              onClick={() => setShowFullVeille(!showFullVeille)}
              className="group bg-gradient-to-r from-[#B2174A] to-[#C8514D] text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-[#B2174A]/40 transition-all duration-300 font-bold whitespace-nowrap cursor-pointer transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              {showFullVeille ? (
                <>
                  <i className="ri-arrow-up-s-line group-hover:-translate-y-1 transition-transform duration-300"></i>
                  Voir moins
                </>
              ) : (
                <>
                  <i className="ri-arrow-down-s-line group-hover:translate-y-1 transition-transform duration-300"></i>
                  Voir plus
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B2174A] to-[#C8514D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à collaborer sur votre prochain projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Je suis toujours ouverte à de nouveaux défis et opportunités d'apprentissage.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#B2174A] px-8 py-4 rounded-lg hover:bg-[#DFA49A] transition-colors font-medium whitespace-nowrap cursor-pointer text-lg"
          >
            Contactez-moi
          </Link>
        </div>
      </section>

      {/* Project Details Modal */}
      {/* Project Details Modal - Version Agrandie & Stylisée */}
{showProjectDetailsModal && selectedProject && (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[100] p-4 sm:p-6">
    <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in duration-300 border border-[#DFA49A]/30">
      
      {/* Header : Image de couverture & Titre */}
      <div className="relative h-64 md:h-96 w-full">
        <img 
          src={selectedProject.image} 
          className="w-full h-full object-cover object-top"
          alt={selectedProject.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2224] via-[#2A2224]/40 to-transparent"></div>
        
        {/* Bouton Fermer */}
        <button
          onClick={() => setShowProjectDetailsModal(false)}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#B2174A] transition-all cursor-pointer z-50 border border-white/20"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        <div className="absolute bottom-10 left-10 right-10">
          <span className="bg-[#DFA49A] text-[#421734] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
            {selectedProject.category}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {selectedProject.title}
          </h2>
          <div className="flex flex-wrap gap-3">
            {selectedProject.tags.map((tag: string, i: number) => (
              <span key={i} className="text-white/90 border border-white/30 px-3 py-1 rounded-lg text-sm backdrop-blur-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 md:p-16">
        {/* Section 1 : Analyse E5 */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-10">
            <h3 className="text-3xl font-bold text-[#421734] whitespace-nowrap tracking-tight">Analyse E5 du projet</h3>
            <div className="h-[1px] bg-[#DFA49A]/40 flex-grow"></div>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-lg mb-10 max-w-4xl">
            {selectedProject.fullDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Contexte", value: selectedProject.context, icon: "ri-map-pin-line" },
              { title: "Objectif", value: selectedProject.objective, icon: "ri-focus-3-line" },
              { title: "Travail réalisé par moi", value: selectedProject.contribution, icon: "ri-user-star-line" },
              { title: "Difficultés rencontrées", value: selectedProject.difficulties, icon: "ri-tools-line" },
              { title: "Résultats obtenus", value: selectedProject.results, icon: "ri-checkbox-circle-line" },
            ].map((item, index) => (
              <div key={index} className="bg-[#fdfafb] border border-[#DFA49A]/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#421734] text-[#DFA49A] flex items-center justify-center">
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-[#421734]">{item.title}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 : Preuves et compétences */}
        <div className="space-y-12">
          <div className="flex items-center gap-6 mb-10">
            <h3 className="text-3xl font-bold text-[#421734] whitespace-nowrap tracking-tight">Preuves et compétences</h3>
            <div className="h-[1px] bg-[#DFA49A]/40 flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#421734] rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <i className="ri-attachment-2"></i>
                Preuves concrètes à présenter
              </h4>
              <div className="flex flex-wrap gap-3">
                {selectedProject.proofs.map((proof: string, idx: number) => (
                  <span key={idx} className="bg-[#DFA49A]/15 text-[#DFA49A] border border-[#DFA49A]/30 px-4 py-2 rounded-full text-sm font-medium">
                    {proof}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#fdfafb] border border-[#DFA49A]/30 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-[#421734] mb-5 flex items-center gap-2">
                <i className="ri-medal-line text-[#B2174A]"></i>
                Compétences E5 mobilisées
              </h4>
              <div className="space-y-3">
                {selectedProject.e5Skills.map((skill: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 text-gray-700">
                    <i className="ri-checkbox-circle-line text-[#B2174A] mt-1"></i>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Modale avec Actions */}
        <div className="mt-24 pt-10 border-t border-[#DFA49A]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            {selectedProject.github !== "#" && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#421734] hover:text-[#B2174A] font-bold transition-colors"
              >
                <i className="ri-github-fill text-2xl"></i>
                Consulter le Code Source
              </a>
            )}
          </div>
          
          <button 
            onClick={() => setShowProjectDetailsModal(false)}
            className="px-12 py-4 bg-[#421734] text-white rounded-2xl font-bold hover:bg-[#B2174A] transition-all transform hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          >
            Quitter la présentation
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Footer */}
      <footer className="bg-[#421734] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-['Pacifico'] text-2xl text-[#DFA49A] mb-4 md:mb-0">NELLY Portfolio</div>
            <div className="flex space-x-6">
              <a href="https://github.com/NellyASSI" target="_blank" rel="noopener noreferrer" className="text-[#C98A8A] hover:text-white transition-colors cursor-pointer">
                <i className="ri-github-fill text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="https://www.linkedin.com/in/nelly-assi-243a93336" target="_blank" rel="noopener noreferrer" className="text-[#C98A8A] hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-2xl w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
          <div className="border-t border-[#5A1F2E] mt-8 pt-8 text-center">
            <p className="text-[#DFA49A]/70">© 2026 Nelly Portfolio. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
