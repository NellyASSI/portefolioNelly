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

      {/* Veille Technologique Section - Enhanced with Animations */}
      <section id="veille-complete" className="py-20 bg-gradient-to-b from-[#421734] to-[#2A1428]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Veille Technologique
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#B2174A] to-[#C8514D] mx-auto mb-6"></div>
            <p className="text-xl text-[#DFA49A] max-w-4xl mx-auto leading-relaxed">
              Low-Code & No-Code : L'avenir du développement d'applications
            </p>
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="group bg-[#2A2224] rounded-2xl overflow-hidden border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B2174A]/20 transform hover:-translate-y-1">
                    <div className="relative bg-black h-48 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#421734]/80 group-hover:from-[#421734]/40 transition-all duration-300"></div>
                      <div className="w-16 h-16 bg-[#B2174A] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10">
                        <i className="ri-play-fill text-white text-3xl ml-1"></i>
                      </div>
                      <input
                        type="text"
                        placeholder="youtube.com/watch?v=..."
                        className="absolute inset-0 w-full h-full px-4 py-3 text-sm opacity-0 hover:opacity-100 focus:opacity-100 bg-[#2A2224] border border-[#5A1F2E] transition-opacity duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-2">Votre vidéo #1</h4>
                      <p className="text-sm text-[#DFA49A]/80 mb-4">Collez le lien YouTube directement sur la vidéo</p>
                      <div className="flex items-center text-xs text-[#C8514D]">
                        <i className="ri-video-line mr-2"></i>
                        Cliquez pour ajouter
                      </div>
                    </div>
                  </div>

                  <div className="group bg-[#2A2224] rounded-2xl overflow-hidden border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B2174A]/20 transform hover:-translate-y-1">
                    <div className="relative bg-black h-48 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#421734]/80 group-hover:from-[#421734]/40 transition-all duration-300"></div>
                      <div className="w-16 h-16 bg-[#B2174A] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10">
                        <i className="ri-play-fill text-white text-3xl ml-1"></i>
                      </div>
                      <input
                        type="text"
                        placeholder="youtube.com/watch?v=..."
                        className="absolute inset-0 w-full h-full px-4 py-3 text-sm opacity-0 hover:opacity-100 focus:opacity-100 bg-[#2A2224] border border-[#5A1F2E] transition-opacity duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-2">Votre vidéo #2</h4>
                      <p className="text-sm text-[#DFA49A]/80 mb-4">Collez le lien YouTube directement sur la vidéo</p>
                      <div className="flex items-center text-xs text-[#C8514D]">
                        <i className="ri-video-line mr-2"></i>
                        Cliquez pour ajouter
                      </div>
                    </div>
                  </div>

                  <div className="group bg-[#2A2224] rounded-2xl overflow-hidden border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B2174A]/20 transform hover:-translate-y-1">
                    <div className="relative bg-black h-48 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#421734]/80 group-hover:from-[#421734]/40 transition-all duration-300"></div>
                      <div className="w-16 h-16 bg-[#B2174A] rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300 z-10">
                        <i className="ri-play-fill text-white text-3xl ml-1"></i>
                      </div>
                      <input
                        type="text"
                        placeholder="youtube.com/watch?v=..."
                        className="absolute inset-0 w-full h-full px-4 py-3 text-sm opacity-0 hover:opacity-100 focus:opacity-100 bg-[#2A2224] border border-[#5A1F2E] transition-opacity duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-2">Votre vidéo #3</h4>
                      <p className="text-sm text-[#DFA49A]/80 mb-4">Collez le lien YouTube directement sur la vidéo</p>
                      <div className="flex items-center text-xs text-[#C8514D]">
                        <i className="ri-video-line mr-2"></i>
                        Cliquez pour ajouter
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
