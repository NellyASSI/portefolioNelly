'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('accueil');

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

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 10 },
    { name: "PHP", level: 75 },
    { name: "SQL", level: 70 },
    { name: "Python", level: 10 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#2A2224]/95 backdrop-blur-sm border-b border-[#421734] z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-['Pacifico'] text-2xl text-[#DFA49A]">NELLY</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="px-3 py-2 rounded-lg transition-colors bg-[#B2174A] text-white whitespace-nowrap cursor-pointer">
                Accueil
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
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
            <button className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer text-[#DFA49A]">
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('images/me.jpeg')`,
            filter: 'brightness(0.5) contrast(1.1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#421734]/70 via-[#5A1F2E]/60 to-[#2A2224]/80"></div>
        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              ASSI Abo Marie Ange Nelly
            </h1>
            <p className="text-xl lg:text-2xl text-[#DFA49A] mb-6">
              Je suis étudiante passionnée de développement web
            </p>
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Bienvenue sur mon site! Je m'appelle ASSI Abo Marie Ange Nelly, étudiante en BTS SIO option SLAM. 
              Ce site me permet de partager mon parcours, mes projets et mes expériences. 
              Vous y trouverez des informations sur mon travail, mes compétences et aspirations professionnelles.
            </p>
            <Link
              href="/about"
              className="bg-[#B2174A] text-white px-8 py-4 rounded-lg hover:bg-[#C8514D] transition-colors font-medium whitespace-nowrap cursor-pointer text-lg"
            >
              À propos de moi
            </Link>
          </div>
        </div>
      </section>
     
      {/* Contact Section */}
      <section className="py-20 bg-[#2A2224]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Me Contacter</h2>
            <p className="text-xl text-[#DFA49A]">N'hésitez pas à me contacter pour échanger !</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Parlons ensemble</h3>
              <p className="text-[#DFA49A] mb-8 leading-relaxed">
                Je suis toujours ouverte aux échanges sur les technologies, 
                les opportunités de stage ou tout projet intéressant. 
                N'hésitez pas à me contacter !
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#B2174A] rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-[#DFA49A]">nellyassi468@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#B2174A] rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-medium">Téléphone</div>
                    <div className="text-[#DFA49A]">+33 6 61 61 85 02</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#B2174A] rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-white font-medium">Localisation</div>
                    <div className="text-[#DFA49A]">Clichy, France</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-[#B2174A] text-white px-8 py-4 rounded-lg hover:bg-[#C8514D] transition-colors font-medium whitespace-nowrap cursor-pointer text-lg mb-8"
              >
                Formulaire de contact complet
              </Link>
              <p className="text-[#DFA49A]/70 text-sm">
                Accédez au formulaire détaillé pour me contacter facilement
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