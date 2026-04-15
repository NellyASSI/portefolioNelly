'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('tous');
  const [isVeilleOpen, setIsVeilleOpen] = useState(false);
  const [showFullVeille, setShowFullVeille] = useState(false);
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
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/2e49970dddcfd7605b36fe176a65266a.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      github: "https://github.com/Christian-Tasseu/Volet_Auto.git",
    },
    {
      id: 2,
      title: "Système de Gestion des Utilisateurs (SGU)",
      category: "web",
      description: "Système complet de gestion des utilisateurs avec interface d'administration et génération de rapports PDF",
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/06a387c69a9d7d895fe5e43331967ccf.png",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "PDF"],
      github: "https://github.com/Enami-code770/sgu1.0.git",
    },
    {
      id: 3,
      title: "GameHub - Catalogue de Jeux Vidéo",
      category: "application",
      description: "Application web permettant aux utilisateurs de découvrir des jeux vidéo et de les ajouter à leurs favoris",
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/9f20041a492c8ca60147ddda9299c90c.png",
      tags: ["PHP", "JavaScript", "CSS", "Bootstrap", "MySQL Workbench"],
      github: "https://github.com/Enami-code770/GameHub.git", 
    },
    {
      id: 4,
      title: "Volet Automatique Intelligent",
      category: "web",
      description: "Interface interactive avec un volet automation qui s'ouvre ou se ferme automatiquement en fonction de l'intensité lumineuse",
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/fc11c3429732ea36dfa4e8312addc36c.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Christian-Tasseu/Volet_Auto.git",
    },
    {
      id: 5,
      title: "Application de Demande de Devis Plomberie",
      category: "web",
      description: "Application web pour demander des devis de services de dépannage en plomberie avec formulaire interactif",
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/8f4ea06d26efd94b875bfa0b9cbac464.png",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      github: "#",
    },
    {
      id: 6,
      title: "Intranet d'Entreprise CoreFlow",
      category: "application",
      description: "Plateforme intranet complète en cours de développement pour la gestion des congés, tickets et événements d'entreprise",
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/838ae924a13129e2b2a40ca15a8e9295.png",
      tags: ["Vue.js", "Node.js", "JavaScript"],
      github: "#",
    }
  ];

  const veilleTopics = [
    {
      title: "Low-Code & No-Code - L'avenir du développement d'applications",
      sections: [
        {
          subtitle: "🔎 Qu'est-ce que le Low-Code et No-Code ?",
          items: [
            "Approches de développement logiciel permettant de créer des applications avec très peu ou pas de code",
            "Utilisation d'interfaces visuelles, modules prêts à l'emploi et automatisations",
            "No-code vise les utilisateurs sans compétences techniques",
            "Low-code s'adresse à des utilisateurs ayant quelques connaissances ou pour des projets nécessitant plus de personnalisation"
          ]
        },
        {
          subtitle: "📈 Tendances actuelles et à venir (2025–2026)",
          items: [
            "🚀 Adoption massive : 70-75% des nouvelles applications d'ici 2026 (Gartner)",
            "🤖 Intégration de l'IA : automatisation des workflows, analyse de données, génération de code",
            "🏢 Orientées entreprise : automatisation, portails clients, tableaux de bord avec sécurité renforcée",
            "🧩 Spécialisation sectorielle : Santé, Finance, Éducation adaptées par secteur",
            "⚙️ Automatisation avancée et intégration avec systèmes existants (CRM, ERP)"
          ]
        },
        {
          subtitle: "✅ Bénéfices clés",
          items: [
            "⚡ Rapidité : déploiement jusqu'à 10 fois plus rapide que le développement traditionnel",
            "💰 Réduction des coûts : jusqu'à 70% grâce à moindre dépendance aux développeurs spécialisés",
            "👥 Empowerment des équipes : création d'outils sans dépendre de la DSI",
            "🔗 Automatisation & intégration : synchronisation des données avec CRM, ERP et API"
          ]
        },
        {
          subtitle: "⚠️ Défis et limites à connaître",
          items: [
            "🔐 Gouvernance & sécurité : risques de shadow IT, failles de sécurité, incohérences de données",
            "🎨 Qualité & UX : applications moins ergonomiques et moins optimisées si créées par non-experts",
            "🔧 Maintenance : difficulté à maintenir certaines applications et risque si créateur quitte",
            "🧠 Limites techniques : projets complexes nécessitent toujours du code (SAP)"
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
          subtitle: "🔮 Perspectives futures",
          items: [
            "🤖 IA générative : création d'applications avec instructions en langage naturel",
            "📊 Standardisation : modèles d'évaluation pour comparer et choisir les meilleurs outils",
            "🎯 Démocratisation complète du développement informatique"
          ]
        },
        {
          subtitle: "📌 Points clés à retenir",
          items: [
            "Levier majeur de transformation digitale",
            "Création plus rapide et à moindre coût",
            "Démocratisation du développement informatique",
            "Nécessite une bonne gouvernance et sécurité",
            "L'IA va encore accélérer son évolution"
          ]
        },
        {
          subtitle: "📚 Sources fiables",
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
    { key: 'backend', label: 'Backend' }
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
                  Portfolio
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
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Mon Portfolio</h1>
            <p className="text-xl text-[#DFA49A] max-w-4xl mx-auto leading-relaxed mb-8">
              Découvrez mes projets de développement web, applications et ma veille technologique. 
              Chaque projet reflète ma passion pour les technologies modernes et mon apprentissage continu.
            </p>
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
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-[#421734] font-medium transition-colors cursor-pointer"
                    >
                      <i className="ri-github-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Code
                    </a>
                    <button
                      onClick={() => handleDemoClick(project)}
                      className="flex items-center text-[#B2174A] hover:text-[#C8514D] font-medium transition-colors cursor-pointer"
                    >
                      <i className="ri-external-link-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      Démo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veille Technologique Section - Enhanced */}
      <section id="veille-complete" className="py-20 bg-[#421734]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Veille Technologique</h2>
            <p className="text-xl text-[#DFA49A] max-w-4xl mx-auto">
              Je maintiens une veille active sur les dernières innovations technologiques, 
              les frameworks émergents et les meilleures pratiques du développement logiciel.
            </p>
          </div>
          
          <div className="w-full">
            {veilleTopics.map((topic, index) => (
              <div key={index} className="bg-[#2A2224] rounded-xl shadow-lg p-8 border border-[#5A1F2E]">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-10 h-10 bg-[#B2174A] rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-lightbulb-line text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  {topic.title}
                </h3>
                
                {topic.sections && topic.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-8">
                    <h4 className="text-lg font-bold text-[#DFA49A] mb-4">{section.subtitle}</h4>
                    <ul className="space-y-3 ml-4">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <i className="ri-arrow-right-line text-[#C8514D] mr-3 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0 flex-none"></i>
                          <span className="text-[#DFA49A] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {showFullVeille && (
            <div className="mt-16 space-y-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-8">Ressources et Plateformes Low-Code & No-Code</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#2A2224] rounded-xl shadow-lg p-8 border border-[#5A1F2E]">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <i className="ri-building-line text-[#B2174A] mr-3 w-6 h-6 flex items-center justify-center"></i>
                    Plateformes Enterprise
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-arrow-right-line text-[#C8514D] mr-3 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <div>
                        <p className="font-medium text-white">OutSystems</p>
                        <p className="text-xs text-[#DFA49A]/80">Plateforme complète d'entreprise avec IA</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-line text-[#C8514D] mr-3 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <div>
                        <p className="font-medium text-white">Mendix</p>
                        <p className="text-xs text-[#DFA49A]/80">Collaboration IT/métier optimisée</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-line text-[#C8514D] mr-3 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <div>
                        <p className="font-medium text-white">Microsoft Power Platform</p>
                        <p className="text-xs text-[#DFA49A]/80">Écosystème low-code Microsoft</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-line text-[#C8514D] mr-3 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <div>
                        <p className="font-medium text-white">Appian</p>
                        <p className="text-xs text-[#DFA49A]/80">Automatisation avancée des processus</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#2A2224] rounded-xl shadow-lg p-8 border border-[#5A1F2E]">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <i className="ri-computer-line text-[#B2174A] mr-3 w-6 h-6 flex items-center justify-center"></i>
                    Plateformes Accessibles
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="ri-arrow-right-line text-[#C8514D] mr-3 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <div>
                        <p className="font-medium text-white">Bubble</p>
                        <p className="text-xs text-[#DFA49A]/80">Applications web sans code</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-line text-[#C8514D] mr-3 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <div>
                        <p className="font-medium text-white">Retool</p>
                        <p className="text-xs text-[#DFA49A]/80">Outils internes et dashboards rapides</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-line text-[#C8514D] mr-3 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <div>
                        <p className="font-medium text-white">Airtable</p>
                        <p className="text-xs text-[#DFA49A]/80">Base de données visuelle et flexible</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-arrow-right-line text-[#C8514D] mr-3 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <div>
                        <p className="font-medium text-white">FlutterFlow</p>
                        <p className="text-xs text-[#DFA49A]/80">Applications mobiles sans code</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#5A1F2E] to-[#421734] rounded-2xl p-8 border border-[#C98A8A]/30">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Cas d'Usage Majeurs</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-[#2A2224] rounded-xl p-6 shadow-md border border-[#5A1F2E]">
                    <div className="w-12 h-12 bg-[#B2174A] rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-speed-line text-white text-xl"></i>
                    </div>
                    <h5 className="font-bold text-white mb-2">Rapidité</h5>
                    <p className="text-sm text-[#DFA49A]">Déploiement 10x plus rapide / Time-to-market réduit</p>
                  </div>
                  <div className="bg-[#2A2224] rounded-xl p-6 shadow-md border border-[#5A1F2E]">
                    <div className="w-12 h-12 bg-[#C8514D] rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-money-dollar-circle-line text-white text-xl"></i>
                    </div>
                    <h5 className="font-bold text-white mb-2">Économies</h5>
                    <p className="text-sm text-[#DFA49A]">Réduction de 70% des coûts de développement</p>
                  </div>
                  <div className="bg-[#2A2224] rounded-xl p-6 shadow-md border border-[#5A1F2E]">
                    <div className="w-12 h-12 bg-[#7D527A] rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-team-line text-white text-xl"></i>
                    </div>
                    <h5 className="font-bold text-white mb-2">Collaboration</h5>
                    <p className="text-sm text-[#DFA49A]">Empowerment des équipes métier</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowFullVeille(!showFullVeille)}
              className="bg-[#B2174A] text-white px-8 py-4 rounded-lg hover:bg-[#C8514D] transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              {showFullVeille ? 'Masquer les détails' : 'Accéder à ma veille complète'}
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

      {/* Demo Request Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative border-4 border-[#C98A8A]/30">
            <button
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#B2174A] cursor-pointer"
            >
              <i className="ri-close-line text-2xl w-6 h-6 flex items-center justify-center"></i>
            </button>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#C8514D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-line text-[#C8514D] text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-[#421734] mb-2">Demande envoyée !</h3>
                <p className="text-gray-600">Je vous contacterai bientôt avec les détails de la démo.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-[#421734] mb-2">Demander une démo</h3>
                <p className="text-gray-600 mb-6">
                  Intéressé par <span className="font-semibold text-[#B2174A]">{selectedProject?.title}</span> ? 
                  Laissez-moi vos coordonnées et je vous enverrai les détails de la démo.
                </p>
                
                <form id="demo-request-form" data-readdy-form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#421734] mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-[#DFA49A]/30 rounded-lg focus:ring-2 focus:ring-[#B2174A] focus:border-transparent text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#421734] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-[#DFA49A]/30 rounded-lg focus:ring-2 focus:ring-[#B2174A] focus:border-transparent text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#421734] mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-2 border border-[#DFA49A]/30 rounded-lg focus:ring-2 focus:ring-[#B2174A] focus:border-transparent text-sm resize-none"
                      placeholder="Dites-moi ce qui vous intéresse dans ce projet..."
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 caractères</p>
                  </div>
                  
                  <input type="hidden" name="project" value={selectedProject?.title || ''} />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#B2174A] text-white px-6 py-3 rounded-lg hover:bg-[#C8514D] transition-colors font-medium whitespace-nowrap cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                  </button>
                </form>
              </>
            )}
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
