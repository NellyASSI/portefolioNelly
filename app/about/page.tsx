'use client';
import Link from 'next/link';

export default function AboutPage() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 80 },
    { name: "Java", level: 75 },
    { name: "PHP", level: 80 },
    { name: "WordPress", level: 50 }
  ];

  const projects = [
    {
      id: 1,
      title: "Blog sur la Réalité Virtuelle",
      description: "Site web informatif explorant les différences entre la réalité virtuelle et la réalité augmentée",
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/2e49970dddcfd7605b36fe176a65266a.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      link: "/portfolio"
    },
    {
      id: 2,
      title: "Système de Gestion des Utilisateurs (SGU)",
      description: "Système complet de gestion des utilisateurs avec interface d'administration et génération de rapports PDF",
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/06a387c69a9d7d895fe5e43331967ccf.png",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP", "PDF"],
      link: "/portfolio"
    },
    {
      id: 3,
      title: "GameHub - Catalogue de Jeux Vidéo",
      description: "Application web permettant aux utilisateurs de découvrir des jeux vidéo et de les ajouter à leurs favoris",
      image: "https://static.readdy.ai/image/e0dcaa9f25ed50b50ba4099ea72e4385/9f20041a492c8ca60147ddda9299c90c.png",
      tags: ["PHP", "JavaScript", "CSS", "Bootstrap", "MySQL Workbench"],
      link: "/portfolio"
    }
  ];

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
              <Link href="/about" className="px-3 py-2 rounded-lg transition-colors bg-[#B2174A] text-white whitespace-nowrap cursor-pointer">
                À propos
              </Link>
              <Link href="/portfolio" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
                Projets
              </Link>
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

      {/* Hero & About Section - Combined */}
      <section className="pt-20 pb-20 bg-gradient-to-b from-[#421734] to-[#2A1428]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">À Propos</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#B2174A] to-[#C8514D] mx-auto mb-8"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left - Image */}
            <div className="order-1 lg:order-1 group animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#5A1F2E]/50 hover:border-[#B2174A]/50 transition-all duration-500">
                <img
                  src="/images/moi2.jpg"
                  alt="Nelly étudiant en BTS SIO"
                  className="w-full h-96 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#421734]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-2 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="text-4xl font-bold text-white mb-6">Qui suis-je ?</h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-lg text-[#DFA49A] leading-relaxed">
                  Je suis <strong>étudiante en BTS SIO option SLAM</strong> à ESIC (École Supérieure d'Informatique et de Commerce). Passionnée par le développement logiciel et les nouvelles technologies, je souhaite me spécialiser dans le développement d'applications web.
                </p>
                
                <p className="text-lg text-[#DFA49A] leading-relaxed">
                  Toujours motivée et curieuse, je suis à la recherche de nouvelles opportunités pour apprendre, expérimenter et développer mes compétences. En dehors des cours, je m'intéresse à l'IA, aux jeux vidéo et à la veille technologique.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="bg-[#5A1F2E]/60 rounded-lg p-4 text-center hover:bg-[#5A1F2E] transition-colors duration-300 border border-[#B2174A]/30 hover:border-[#B2174A] transition-all duration-300">
                  <div className="text-3xl font-bold text-[#DFA49A] mb-1">6+</div>
                  <p className="text-sm text-[#DFA49A]/80">Projets</p>
                </div>
                <div className="bg-[#5A1F2E]/60 rounded-lg p-4 text-center hover:bg-[#5A1F2E] transition-colors duration-300 border border-[#B2174A]/30 hover:border-[#B2174A] transition-all duration-300">
                  <div className="text-3xl font-bold text-[#DFA49A] mb-1">2+</div>
                  <p className="text-sm text-[#DFA49A]/80">Ans d'études</p>
                </div>
                <div className="bg-[#5A1F2E]/60 rounded-lg p-4 text-center hover:bg-[#5A1F2E] transition-colors duration-300 border border-[#B2174A]/30 hover:border-[#B2174A] transition-all duration-300">
                  <div className="text-3xl font-bold text-[#DFA49A] mb-1">5+</div>
                  <p className="text-sm text-[#DFA49A]/80">Compétences</p>
                </div>
              </div>

              {/* What I Do */}
              <div className="bg-gradient-to-br from-[#5A1F2E]/80 to-[#421734]/60 rounded-2xl p-6 mb-8 border border-[#B2174A]/40 hover:border-[#B2174A] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B2174A] to-[#C8514D] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-book-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Formation Actuelle</h3>
                    <p className="text-[#DFA49A] text-sm leading-relaxed">
                      BTS SIO option SLAM à ESIC - Spécialisation en développement d'applications
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href="/documents/cvalternance.pdf" 
                download="cvalternance.pdf"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#B2174A] to-[#C8514D] text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#B2174A]/40 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer group"
              >
                <i className="ri-download-line text-xl mr-3 w-5 h-5 flex items-center justify-center group-hover:animate-bounce"></i>
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-20 bg-gradient-to-b from-[#421734] to-[#2A1428]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Personal Info Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-[#5A1F2E]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#5A1F2E] hover:border-[#B2174A]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#B2174A]/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <i className="ri-user-settings-line text-[#C8514D] mr-3 w-6 h-6 flex items-center justify-center"></i>
                Informations Personnelles
              </h3>
              <div className="space-y-4">
                <div className="flex items-start group cursor-pointer">
                  <i className="ri-calendar-line text-[#C8514D] mr-4 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></i>
                  <div>
                    <p className="font-semibold text-[#DFA49A]">Date de naissance</p>
                    <p className="text-[#DFA49A]/70 text-sm">22 mai 2007</p>
                  </div>
                </div>
                <div className="flex items-start group cursor-pointer">
                  <i className="ri-map-pin-line text-[#C8514D] mr-4 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></i>
                </div>
                <div className="flex items-start group cursor-pointer">
                  <i className="ri-graduation-cap-line text-[#C8514D] mr-4 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></i>
                  <div>
                    <p className="font-semibold text-[#DFA49A]">Formation</p>
                    <p className="text-[#DFA49A]/70 text-sm">BTS SIO SLAM - Année 2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-[#5A1F2E]/40 backdrop-blur-sm rounded-2xl p-8 border border-[#5A1F2E] hover:border-[#B2174A]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#B2174A]/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <i className="ri-mail-line text-[#C8514D] mr-3 w-6 h-6 flex items-center justify-center"></i>
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start group cursor-pointer">
                  <i className="ri-phone-line text-[#C8514D] mr-4 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></i>
                  <div>
                    <p className="font-semibold text-[#DFA49A]">Téléphone</p>
                    <p className="text-[#DFA49A]/70 text-sm">+33 6 61 61 85 02</p>
                  </div>
                </div>
                <div className="flex items-start group cursor-pointer">
                  <i className="ri-mail-line text-[#C8514D] mr-4 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></i>
                  <div>
                    <p className="font-semibold text-[#DFA49A]">Email</p>
                    <p className="text-[#DFA49A]/70 text-sm">nellyassi468@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start group cursor-pointer">
                  <i className="ri-github-line text-[#C8514D] mr-4 mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></i>
                  <div>
                    <p className="font-semibold text-[#DFA49A]">GitHub</p>
                    <p className="text-[#DFA49A]/70 text-sm">github.com/NellyASSI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Modern & Clean */}
      <section className="py-20 bg-gradient-to-b from-[#2A1428] to-[#421734]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mes Compétences</h2>
            <p className="text-xl text-[#DFA49A]">Stack Fullstack organisé par pôles technologiques</p>
            <div className="h-1 w-16 bg-gradient-to-r from-[#B2174A] to-[#C8514D] mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-12">
            {/* Frontend Section */}
            <div className="group">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B2174A] to-[#C8514D] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-layout-4-line text-white text-xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-white">Frontend</h3>
                <div className="flex-1 ml-6 h-1 bg-gradient-to-r from-[#B2174A]/40 to-transparent"></div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: 'HTML5', icon: 'ri-html5-line', color: 'from-orange-500 to-red-500' },
                  { name: 'CSS3', icon: 'ri-css3-line', color: 'from-blue-500 to-cyan-500' },
                  { name: 'JavaScript', icon: 'ri-javascript-line', color: 'from-yellow-500 to-amber-500' },
                  { name: 'Vue.js', icon: 'ri-vuejs-line', color: 'from-green-500 to-emerald-500' },
                  { name: 'Angular', icon: 'ri-angularjs-line', color: 'from-red-600 to-rose-500' }
                ].map((tech, idx) => (
                  <div key={idx} className="group/card bg-[#2A2224] rounded-2xl p-6 border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B2174A]/30 transform hover:-translate-y-2 cursor-pointer">
                    <div className={`w-14 h-14 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center mb-4 group-hover/card:scale-125 transition-transform duration-300 shadow-lg`}>
                      <i className={`${tech.icon} text-white text-2xl`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover/card:text-[#DFA49A] transition-colors duration-300">{tech.name}</h4>
                    <p className="text-xs text-[#DFA49A]/70 mt-2">Maîtrisé</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Section */}
            <div className="group">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B2174A] to-[#C8514D] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-server-line text-white text-xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-white">Backend</h3>
                <div className="flex-1 ml-6 h-1 bg-gradient-to-r from-[#B2174A]/40 to-transparent"></div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Node.js', icon: 'ri-nodejs-line', color: 'from-green-600 to-emerald-500' },
                  { name: 'PHP', icon: 'ri-php-line', color: 'from-indigo-600 to-purple-500' },
                  { name: 'Java', icon: 'ri-code-s-slash-line', color: 'from-orange-600 to-red-500' },
                  { name: 'Spring Boot', icon: 'ri-leaf-line', color: 'from-green-500 to-teal-500' }
                ].map((tech, idx) => (
                  <div key={idx} className="group/card bg-[#2A2224] rounded-2xl p-6 border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B2174A]/30 transform hover:-translate-y-2 cursor-pointer">
                    <div className={`w-14 h-14 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center mb-4 group-hover/card:scale-125 transition-transform duration-300 shadow-lg`}>
                      <i className={`${tech.icon} text-white text-2xl`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover/card:text-[#DFA49A] transition-colors duration-300">{tech.name}</h4>
                    <p className="text-xs text-[#DFA49A]/70 mt-2">Maîtrisé</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CMS & Outils Section */}
            <div className="group">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B2174A] to-[#C8514D] rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-tools-line text-white text-xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-white">CMS & Outils</h3>
                <div className="flex-1 ml-6 h-1 bg-gradient-to-r from-[#B2174A]/40 to-transparent"></div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: 'WordPress', icon: 'ri-wordpress-line', color: 'from-gray-600 to-slate-500' }
                ].map((tech, idx) => (
                  <div key={idx} className="group/card bg-[#2A2224] rounded-2xl p-6 border border-[#5A1F2E] hover:border-[#B2174A] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B2174A]/30 transform hover:-translate-y-2 cursor-pointer">
                    <div className={`w-14 h-14 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center mb-4 group-hover/card:scale-125 transition-transform duration-300 shadow-lg`}>
                      <i className={`${tech.icon} text-white text-2xl`}></i>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover/card:text-[#DFA49A] transition-colors duration-300">{tech.name}</h4>
                    <p className="text-xs text-[#DFA49A]/70 mt-2">Maîtrisé</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary Stats */}
            <div className="mt-16 pt-12 border-t border-[#5A1F2E]">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-[#5A1F2E]/60 to-[#2A2224]/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#B2174A]/30 hover:border-[#B2174A] transition-all duration-300 hover:shadow-xl hover:shadow-[#B2174A]/20 transform hover:-translate-y-1">
                  <div className="text-4xl font-bold text-[#DFA49A] mb-2">10+</div>
                  <p className="text-[#DFA49A]/80 font-medium">Technologies</p>
                  <p className="text-sm text-[#DFA49A]/60 mt-2">Fullstack coverage</p>
                </div>
                <div className="bg-gradient-to-br from-[#5A1F2E]/60 to-[#2A2224]/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#B2174A]/30 hover:border-[#B2174A] transition-all duration-300 hover:shadow-xl hover:shadow-[#B2174A]/20 transform hover:-translate-y-1">
                  <div className="text-4xl font-bold text-[#DFA49A] mb-2">3</div>
                  <p className="text-[#DFA49A]/80 font-medium">Pôles Compétences</p>
                  <p className="text-sm text-[#DFA49A]/60 mt-2">Frontend, Backend, CMS</p>
                </div>
                <div className="bg-gradient-to-br from-[#5A1F2E]/60 to-[#2A2224]/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#B2174A]/30 hover:border-[#B2174A] transition-all duration-300 hover:shadow-xl hover:shadow-[#B2174A]/20 transform hover:-translate-y-1">
                  <div className="text-4xl font-bold text-[#DFA49A] mb-2">6+</div>
                  <p className="text-[#DFA49A]/80 font-medium">Projets Réalisés</p>
                  <p className="text-sm text-[#DFA49A]/60 mt-2">Production & Académique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#421734] mb-4">Mes Projets Récents</h2>
            <p className="text-xl text-gray-600">Découvrez 3 de mes meilleurs projets académiques</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: any) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer border border-[#DFA49A]/20">
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
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="bg-[#DFA49A]/30 text-[#5A1F2E] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-[#B2174A] hover:text-[#C8514D] font-medium transition-colors cursor-pointer"
                  >
                    Voir le projet
                    <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="bg-[#B2174A] text-white px-8 py-4 rounded-lg hover:bg-[#C8514D] transition-colors font-medium whitespace-nowrap cursor-pointer text-lg"
            >
              Voir tous mes projets
            </Link>
          </div>
        </div>
      </section>


      {/* Academic Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#421734] mb-4">Mes Objectifs Professionnels</h2>
            <p className="text-xl text-gray-600">Découvrez mes aspirations et ambitions</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[#DFA49A]/20 p-8 rounded-2xl text-center border border-[#C98A8A]/30">
              <div className="w-16 h-16 bg-[#C8514D] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-code-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#421734] mb-4">Passions</h3>
              <p className="text-gray-600">
                Développement web, Intelligence Artificielle et jeux vidéo
              </p>
            </div>
            
            <div className="bg-[#DFA49A]/20 p-8 rounded-2xl text-center border border-[#C98A8A]/30">
              <div className="w-16 h-16 bg-[#7D527A] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#421734] mb-4">Objectifs</h3>
              <p className="text-gray-600">
                Devenir développeuse d'applications web spécialisée en nouvelles technologies
              </p>
            </div>
          </div>
        </div>
      </section>

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