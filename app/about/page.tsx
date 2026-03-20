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
                Portfolio
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#421734] to-[#5A1F2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">À Propos</h1>
            <p className="text-xl text-[#DFA49A] max-w-4xl mx-auto leading-relaxed mb-8">
              Je suis étudiante en BTSxxxxx SIO  à ESIC (École Supérieure d'Informatique et de Commerce). 
              Avide de développement logiciel et de nouvelles technologies, je souhaite me spécialiser dans le développement d'applications web. 
              Je suis toujours à la recherche de nouvelles opportunités pour apprendre, expérimenter et développer mes compétences. 
              En dehors des cours, je m'intéresse à l'IA et aux jeux vidéo.
            </p>
            <a 
              href="/documents/CV_Nelly_ASSI.pdf" 
              download
              className="inline-flex items-center px-8 py-4 bg-[#B2174A] text-white font-semibold rounded-full hover:bg-[#C8514D] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              <i className="ri-download-line text-xl mr-3 w-5 h-5 flex items-center justify-center"></i>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20young%20African%20woman%20developer%20working%20on%20laptop%20in%20modern%20bright%20office%20workspace%2C%20focused%20and%20confident%2C%20contemporary%20tech%20environment%20with%20clean%20minimalist%20design%2C%20natural%20daylight%20streaming%20through%20windows%2C%20professional%20business%20casual%20attire%2C%20warm%20and%20inviting%20atmosphere%2C%20high%20quality%20professional%20photography&width=500&height=600&seq=about-nelly-professional&orientation=portrait"
                alt="Nelly étudiant en BTS SIO"
                className="rounded-2xl shadow-2xl object-cover w-full h-96 object-top border-4 border-[#C98A8A]/30"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#421734] mb-6">Informations personnelles</h2>
              <p className="text-lg text-gray-600 mb-8 italic">
                Toujours motivée, je suis à la recherche de nouvelles opportunités pour apprendre et évoluer.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="ri-calendar-line text-[#B2174A] mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <div>
                      <span className="font-semibold text-[#421734]">Date de naissance:</span>
                      <span className="text-gray-600 ml-2">22 mai 2007</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-phone-line text-[#B2174A] mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <div>
                      <span className="font-semibold text-[#421734]">Téléphone:</span>
                      <span className="text-gray-600 ml-2">+33 6 61 61 85 02</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line text-[#B2174A] mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <div>
                      <span className="font-semibold text-[#421734]">Ville:</span>
                      <span className="text-gray-600 ml-2">Clichy, France</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="ri-user-line text-[#B2174A] mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <div>
                      <span className="font-semibold text-[#421734]">Âge:</span>
                      <span className="text-gray-600 ml-2">17 ans</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-graduation-cap-line text-[#B2174A] mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <div>
                      <span className="font-semibold text-[#421734]">Niveau:</span>
                      <span className="text-gray-600 ml-2">BTS 1</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-mail-line text-[#B2174A] mr-3 w-5 h-5 flex items-center justify-center"></i>
                    <div>
                      <span className="font-semibold text-[#421734]">Email:</span>
                      <span className="text-gray-600 ml-2">nellyassi468@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[#421734]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Compétences</h2>
            <p className="text-xl text-[#DFA49A]">Compétences acquises en classe</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {skills.slice(0, 3).map((skill, index) => (
                <div key={index} className="bg-[#2A2224] p-6 rounded-xl shadow-lg border border-[#5A1F2E]">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-[#DFA49A] font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#5A1F2E] rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-[#B2174A] to-[#C8514D] h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-8">
              {skills.slice(3).map((skill, index) => (
                <div key={index} className="bg-[#2A2224] p-6 rounded-xl shadow-lg border border-[#5A1F2E]">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <span className="text-sm text-[#DFA49A] font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#5A1F2E] rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-[#B2174A] to-[#C8514D] h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#421734] mb-4">Mon Parcours</h2>
            <p className="text-xl text-gray-600">Formation et objectifs professionnels</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[#DFA49A]/20 p-8 rounded-2xl text-center border border-[#C98A8A]/30">
              <div className="w-16 h-16 bg-[#B2174A] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-book-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#421734] mb-4">Formation Actuelle</h3>
              <p className="text-gray-600">
                BTS SIO option SLAM à ESIC - Spécialisation en développement d'applications
              </p>
            </div>
            
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