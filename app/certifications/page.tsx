'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState('tous');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // Chemins corrigés selon ton arborescence (Dossier public)
  const certifications = [
    {
      id: 1,
      category: 'cnil',
      title: 'Attestation CNIL - Protection des Données',
      description: 'Formation sur la protection des données personnelles et le RGPD',
      date: '2025',
      image: '/images/cnil.jpeg',
      pdfLink: '/documents/CNIL_RGPD/votre_fichier.pdf' // VERIFIE LE NOM DANS CE DOSSIER
    },
    {
      id: 4,
      category: 'cybersecurite',
      title: 'Sécurité des Applications Web',
      description: 'Certification sur la sécurisation des applications web et des API',
      date: '2025',
      image: '/images/cyber.jpeg',
      pdfLink: '/documents/attestation_de_suivie_cybersecurite.pdf'
    },
    {
      id: 5,
      category: 'stage',
      title: 'Rapport de Stage - Développement Web',
      description: 'Stage de développement web chez une entreprise technologique',
      date: '2025',
      image: '/images/rapport1.jpeg',
      pdfLink: '/documents/rapport_de_stage_1.pdf'
    },
    {
      id: 6,
      category: 'stage',
      title: 'Rapport de Stage - Gestion de Projet',
      description: 'Expérience en gestion de projet informatique et méthodologies agiles',
      date: '2026',
      image: '/images/rapport2.jpeg',
      pdfLink: '/documents/rapport_de_stage_2.pdf'
    },
    {
      id: 7,
      category: 'fiche',
      title: 'Fiche de compétence E5 - BTS SIO',
      description: 'Alternance en développement logiciel et applications métiers',
      date: '2024',
      image: '/images/e5.jpeg',
      pdfLink: '/documents/fiche5.pdf'
    }
  ];

  const categories = [
    { key: 'tous', label: 'Tous les documents', icon: 'ri-file-list-line' },
    { key: 'cnil', label: 'Attestations CNIL', icon: 'ri-shield-check-line' },
    { key: 'cybersecurite', label: 'Cyber Sécurité', icon: 'ri-lock-line' },
    { key: 'stage', label: 'Rapports de Stage', icon: 'ri-briefcase-line' },
    { key: 'fiche', label: 'Fiche de compétences', icon: 'ri-file-info-line' },
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
              <Link href="/" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A]">Accueil</Link>
              <Link href="/about" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A]">À propos</Link>
              <Link href="/portfolio" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A]">Projets</Link>
              <Link href="/certifications" className="px-3 py-2 rounded-lg transition-colors bg-[#B2174A] text-white">Attestations/Rapports</Link>
              <Link href="/contact" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A]">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/NellyASSI" target="_blank" className="text-[#DFA49A]"><i className="ri-github-line text-xl"></i></a>
              <a href="https://www.linkedin.com/in/nelly-assi-243a93336" target="_blank" className="text-[#DFA49A]"><i className="ri-linkedin-line text-xl"></i></a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#421734] to-[#5A1F2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Attestations & Rapports</h1>
          <p className="text-xl text-[#DFA49A] max-w-4xl mx-auto">
            Découvrez mes certifications professionnelles et mes rapports de stage.
          </p>
        </div>
      </section>

      {/* Modal Aperçu PDF */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
          <div className="bg-white w-full max-w-5xl h-[90vh] rounded-xl overflow-hidden relative">
            <button 
              onClick={() => setSelectedPdf(null)}
              className="absolute top-4 right-4 bg-red-500 text-white w-10 h-10 rounded-full z-50 shadow-lg"
            >✕</button>
            <iframe src={selectedPdf} className="w-full h-full border-none"></iframe>
          </div>
        </div>
      )}

      {/* Stats Section avec correction des liens */}
      <section className="py-12 bg-white border-b border-[#DFA49A]/20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center cursor-pointer p-4 hover:bg-gray-50 rounded-xl transition" 
               onClick={() => setSelectedPdf("/documents/attestation_de_suivie_cybersecurite.pdf")}>
            <div className="text-4xl font-bold text-[#B2174A] mb-2">1</div>
            <div className="text-gray-600">Cyber Sécurité</div>
          </div>
          <div className="text-center cursor-pointer p-4 hover:bg-gray-50 rounded-xl transition"
               onClick={() => setSelectedPdf("/documents/rapport_de_stage_1.pdf")}>
            <div className="text-4xl font-bold text-[#7D527A] mb-2">2</div>
            <div className="text-gray-600">Rapports de Stage</div>
          </div>
          <div className="text-center cursor-pointer p-4 hover:bg-gray-50 rounded-xl transition"
               onClick={() => setSelectedPdf("/documents/fiche5.pdf")}>
            <div className="text-4xl font-bold text-[#C98A8A] mb-2">1</div>
            <div className="text-gray-600">Compétences E5</div>
          </div>
        </div>
      </section>

      {/* Grille des certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#DFA49A]/20 hover:shadow-2xl transition">
                <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#421734] mb-2">{cert.title}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <button 
                      onClick={() => setSelectedPdf(cert.pdfLink)}
                      className="text-[#B2174A] font-medium flex items-center hover:underline"
                    >
                      <i className="ri-eye-line mr-2"></i> Voir
                    </button>
                    <a href={cert.pdfLink} download className="text-gray-500 hover:text-[#B2174A]">
                      <i className="ri-download-line text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}