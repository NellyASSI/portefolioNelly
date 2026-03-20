'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('tous');

  const certifications = [
    {
      id: 1,
      category: 'cnil',
      title: 'Attestation CNIL - Protection des Données',
      description: 'Formation sur la protection des données personnelles et le RGPD',
      date: '2024',
      image: 'https://readdy.ai/api/search-image?query=CNIL%20data%20protection%20certification%20document%2C%20GDPR%20compliance%20certificate%2C%20professional%20legal%20document%2C%20data%20privacy%20training%2C%20official%20French%20certification&width=400&height=300&seq=cert1&orientation=landscape',
      pdfLink: '/documents/attestations/CNIL_Protection_Donnees.pdf'
    },
    {
      id: 2,
      category: 'cnil',
      title: 'RGPD et Conformité Numérique',
      description: 'Certification sur les règles de conformité RGPD pour les développeurs',
      date: '2024',
      image: 'https://readdy.ai/api/search-image?query=GDPR%20compliance%20certificate%2C%20digital%20privacy%20certification%2C%20European%20data%20protection%20document%2C%20professional%20training%20certificate%2C%20legal%20compliance&width=400&height=300&seq=cert2&orientation=landscape',
      pdfLink: '/documents/attestations/RGPD_Conformite_Numerique.pdf'
    },
    {
      id: 3,
      category: 'cybersecurite',
      title: 'Cyber Sécurité - Niveau Fondamental',
      description: 'Formation aux bases de la cybersécurité et aux bonnes pratiques',
      date: '2024',
      image: 'https://readdy.ai/api/search-image?query=cybersecurity%20certification%20document%2C%20information%20security%20training%20certificate%2C%20digital%20security%20credential%2C%20professional%20IT%20security%20certification%2C%20network%20protection&width=400&height=300&seq=cert3&orientation=landscape',
      pdfLink: '/documents/attestations/Cyber_Securite_Fondamental.pdf'
    },
    {
      id: 4,
      category: 'cybersecurite',
      title: 'Sécurité des Applications Web',
      description: 'Certification sur la sécurisation des applications web et des API',
      date: '2023',
      image: 'https://readdy.ai/api/search-image?query=web%20application%20security%20certificate%2C%20API%20security%20training%20document%2C%20software%20security%20certification%2C%20professional%20cybersecurity%20credential%2C%20secure%20coding&width=400&height=300&seq=cert4&orientation=landscape',
      pdfLink: '/documents/attestations/Securite_Applications_Web.pdf'
    },
    {
      id: 5,
      category: 'stage',
      title: 'Rapport de Stage - Développement Web',
      description: 'Stage de développement web chez une entreprise technologique',
      date: '2023',
      image: 'https://readdy.ai/api/search-image?query=internship%20report%20document%2C%20professional%20training%20report%2C%20web%20development%20internship%20certificate%2C%20business%20report%20cover%2C%20academic%20document&width=400&height=300&seq=cert5&orientation=landscape',
      pdfLink: '/documents/rapports/Rapport_Stage_Developpement_Web.pdf'
    },
    {
      id: 6,
      category: 'stage',
      title: 'Rapport de Stage - Gestion de Projet',
      description: 'Expérience en gestion de projet informatique et méthodologies agiles',
      date: '2023',
      image: 'https://readdy.ai/api/search-image?query=project%20management%20internship%20report%2C%20agile%20methodology%20training%20document%2C%20professional%20experience%20report%2C%20IT%20project%20certificate%2C%20business%20document&width=400&height=300&seq=cert6&orientation=landscape',
      pdfLink: '/documents/rapports/Rapport_Stage_Gestion_Projet.pdf'
    },
    {
      id: 7,
      category: 'alternance',
      title: 'Contrat d\'Alternance - BTS SIO',
      description: 'Alternance en développement logiciel et applications métiers',
      date: '2024',
      image: 'https://readdy.ai/api/search-image?query=apprenticeship%20contract%20document%2C%20professional%20training%20certificate%2C%20BTS%20SIO%20diploma%2C%20work-study%20program%20certificate%2C%20educational%20credential&width=400&height=300&seq=cert7&orientation=landscape',
      pdfLink: '/documents/rapports/Contrat_Alternance_BTS_SIO.pdf'
    }
  ];

  const categories = [
    { key: 'tous', label: 'Tous les documents', icon: 'ri-file-list-line' },
    { key: 'cnil', label: 'Attestations CNIL', icon: 'ri-shield-check-line' },
    { key: 'cybersecurite', label: 'Cyber Sécurité', icon: 'ri-lock-line' },
    { key: 'stage', label: 'Rapports de Stage', icon: 'ri-briefcase-line' },
    { key: 'alternance', label: 'Alternance', icon: 'ri-graduation-cap-line' }
  ];

  const filteredCertifications = activeCategory === 'tous' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

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
              <Link href="/portfolio" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
                Portfolio
              </Link>
              <Link href="/certifications" className="px-3 py-2 rounded-lg transition-colors bg-[#B2174A] text-white whitespace-nowrap cursor-pointer">
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
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Attestations & Rapports</h1>
            <p className="text-xl text-[#DFA49A] max-w-4xl mx-auto leading-relaxed">
              Découvrez mes certifications professionnelles, attestations CNIL, formations en cybersécurité 
              et mes rapports de stage et d'alternance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-[#DFA49A]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#B2174A] mb-2">{certifications.filter(c => c.category === 'cnil').length}</div>
              <div className="text-gray-600">Attestations CNIL</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C8514D] mb-2">{certifications.filter(c => c.category === 'cybersecurite').length}</div>
              <div className="text-gray-600">Cyber Sécurité</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#7D527A] mb-2">{certifications.filter(c => c.category === 'stage').length}</div>
              <div className="text-gray-600">Rapports de Stage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#C98A8A] mb-2">{certifications.filter(c => c.category === 'alternance').length}</div>
              <div className="text-gray-600">Alternance</div>
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
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full transition-all whitespace-nowrap cursor-pointer flex items-center ${
                  activeCategory === category.key
                    ? 'bg-[#B2174A] text-white shadow-lg'
                    : 'bg-[#DFA49A]/20 text-[#421734] hover:bg-[#DFA49A]/30'
                }`}
              >
                <i className={`${category.icon} mr-2 w-4 h-4 flex items-center justify-center`}></i>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-[#DFA49A]/20">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#B2174A] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {cert.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#421734] mb-2">{cert.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cert.category === 'cnil' ? 'bg-[#B2174A]/20 text-[#B2174A]' :
                      cert.category === 'cybersecurite' ? 'bg-[#C8514D]/20 text-[#C8514D]' :
                      cert.category === 'stage' ? 'bg-[#7D527A]/20 text-[#7D527A]' :
                      'bg-[#C98A8A]/20 text-[#C98A8A]'
                    }`}>
                      {categories.find(c => c.key === cert.category)?.label}
                    </span>
                    <a
                      href={cert.pdfLink}
                      className="flex items-center text-[#B2174A] hover:text-[#C8514D] font-medium transition-colors cursor-pointer"
                    >
                      <i className="ri-download-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-[#421734]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pourquoi ces certifications ?</h2>
            <p className="text-xl text-[#DFA49A] max-w-4xl mx-auto">
              Ces documents témoignent de mon engagement dans la formation continue et ma volonté 
              de maîtriser les aspects essentiels du développement professionnel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#2A2224] p-6 rounded-xl text-center border border-[#5A1F2E]">
              <div className="w-16 h-16 bg-[#B2174A] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Protection des Données</h3>
              <p className="text-[#DFA49A] text-sm">
                Conformité RGPD et respect de la vie privée
              </p>
            </div>
            
            <div className="bg-[#2A2224] p-6 rounded-xl text-center border border-[#5A1F2E]">
              <div className="w-16 h-16 bg-[#C8514D] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lock-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cybersécurité</h3>
              <p className="text-[#DFA49A] text-sm">
                Sécurisation des applications et des données
              </p>
            </div>
            
            <div className="bg-[#2A2224] p-6 rounded-xl text-center border border-[#5A1F2E]">
              <div className="w-16 h-16 bg-[#7D527A] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-briefcase-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Expérience Pratique</h3>
              <p className="text-[#DFA49A] text-sm">
                Stages en entreprise et projets réels
              </p>
            </div>
            
            <div className="bg-[#2A2224] p-6 rounded-xl text-center border border-[#5A1F2E]">
              <div className="w-16 h-16 bg-[#C98A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-graduation-cap-line text-white text-2xl"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Formation Continue</h3>
              <p className="text-[#DFA49A] text-sm">
                Apprentissage et développement des compétences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B2174A] to-[#C8514D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Intéressé par mon profil ?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            N'hésitez pas à me contacter pour en savoir plus sur mes compétences et mon parcours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#B2174A] px-8 py-4 rounded-lg hover:bg-[#DFA49A] transition-colors font-medium whitespace-nowrap cursor-pointer text-lg"
            >
              Me Contacter
            </Link>
            <Link
              href="/portfolio"
              className="inline-block bg-[#2A2224] text-white px-8 py-4 rounded-lg hover:bg-[#421734] transition-colors font-medium whitespace-nowrap cursor-pointer text-lg"
            >
              Voir mes Projets
            </Link>
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