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
      title: "Intelligence Artificielle et Machine Learning",
      items: [
        "GPT-4 et les dernières avancées des LLM",
        "AutoML et démocratisation du Machine Learning",
        "IA générative dans le développement logiciel",
        "Éthique et biais dans les algorithmes d'IA"
      ]
    },
    {
      title: "Développement Web Frontend",
      items: [
        "React 18 et les Server Components",
        "WebAssembly pour les performances web",
        "Progressive Web Apps (PWA) modernes",
        "CSS Container Queries et nouvelles spécifications"
      ]
    },
    {
      title: "Architecture et Backend",
      items: [
        "Microservices vs Architecture Monolithique",
        "Serverless Computing et Functions as a Service",
        "GraphQL vs REST API",
        "Containers et orchestration avec Kubernetes"
      ]
    },
    {
      title: "Cybersécurité",
      items: [
        "Zero Trust Security Model",
        "Sécurité des API et authentification moderne",
        "DevSecOps et sécurité dans le CI/CD",
        "Protection des données personnelles (RGPD)"
      ]
    },
    {
      title: "DevOps et Infrastructure",
      items: [
        "Infrastructure as Code (IaC)",
        "CI/CD pipelines modernes",
        "Monitoring et observabilité",
        "Cloud Computing : AWS, Azure, GCP"
      ]
    },
    {
      title: "Nouvelles Technologies",
      items: [
        "Blockchain et développement DApps",
        "Internet des Objets (IoT) et Edge Computing",
        "Réalité Virtuelle/Augmentée sur le web",
        "5G et impact sur les applications mobiles"
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {veilleTopics.map((topic, index) => (
              <div key={index} className="bg-[#2A2224] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-[#5A1F2E]">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <div className="w-10 h-10 bg-[#B2174A] rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-lightbulb-line text-white w-5 h-5 flex items-center justify-center"></i>
                  </div>
                  {topic.title}
                </h3>
                <ul className="space-y-3">
                  {topic.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <i className="ri-arrow-right-line text-[#C8514D] mr-2 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                      <span className="text-[#DFA49A] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {showFullVeille && (
            <div className="mt-16 space-y-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-8">Ressources et Articles de Veille</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#2A2224] rounded-xl shadow-lg p-8 border border-[#5A1F2E]">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <i className="ri-article-line text-[#B2174A] mr-3 w-6 h-6 flex items-center justify-center"></i>
                    Sources de Veille
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <i className="ri-checkbox-circle-line text-[#C8514D] mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-[#DFA49A]">Stack Overflow Developer Survey</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-checkbox-circle-line text-[#C8514D] mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-[#DFA49A]">GitHub Trending</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-checkbox-circle-line text-[#C8514D] mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-[#DFA49A]">Dev.to Community</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-checkbox-circle-line text-[#C8514D] mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-[#DFA49A]">Mozilla Developer Network</span>
                    </li>
                    <li className="flex items-center">
                      <i className="ri-checkbox-circle-line text-[#C8514D] mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-[#DFA49A]">TechCrunch Technology</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-[#2A2224] rounded-xl shadow-lg p-8 border border-[#5A1F2E]">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <i className="ri-calendar-line text-[#B2174A] mr-3 w-6 h-6 flex items-center justify-center"></i>
                    Fréquence de Veille
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#DFA49A]">Articles tech quotidiens</span>
                      <span className="bg-[#C8514D]/20 text-[#C8514D] px-3 py-1 rounded-full text-sm font-medium">Quotidien</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#DFA49A]">Nouvelles technologies</span>
                      <span className="bg-[#B2174A]/20 text-[#B2174A] px-3 py-1 rounded-full text-sm font-medium">Hebdomadaire</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#DFA49A]">Frameworks & Libraries</span>
                      <span className="bg-[#7D527A]/20 text-[#7D527A] px-3 py-1 rounded-full text-sm font-medium">Bi-mensuel</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#DFA49A]">Analyse de marché</span>
                      <span className="bg-[#C98A8A]/20 text-[#C98A8A] px-3 py-1 rounded-full text-sm font-medium">Mensuel</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#5A1F2E] to-[#421734] rounded-2xl p-8 border border-[#C98A8A]/30">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Dernières Découvertes</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-[#2A2224] rounded-xl p-6 shadow-md border border-[#5A1F2E]">
                    <div className="w-12 h-12 bg-[#B2174A] rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-brain-line text-white text-xl"></i>
                    </div>
                    <h5 className="font-bold text-white mb-2">GPT-4 Turbo</h5>
                    <p className="text-sm text-[#DFA49A]">Nouvelles capacités multimodales et optimisations de performance</p>
                  </div>
                  <div className="bg-[#2A2224] rounded-xl p-6 shadow-md border border-[#5A1F2E]">
                    <div className="w-12 h-12 bg-[#C8514D] rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-code-line text-white text-xl"></i>
                    </div>
                    <h5 className="font-bold text-white mb-2">Bun Runtime</h5>
                    <p className="text-sm text-[#DFA49A]">Alternative ultra-rapide à Node.js avec bundler intégré</p>
                  </div>
                  <div className="bg-[#2A2224] rounded-xl p-6 shadow-md border border-[#5A1F2E]">
                    <div className="w-12 h-12 bg-[#7D527A] rounded-lg flex items-center justify-center mb-4">
                      <i className="ri-shield-line text-white text-xl"></i>
                    </div>
                    <h5 className="font-bold text-white mb-2">Zero Trust</h5>
                    <p className="text-sm text-[#DFA49A]">Évolution des architectures de sécurité pour les applications modernes</p>
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
