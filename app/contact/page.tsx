'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    typeContact: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4u783k0r9mt3nkms4rg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      if (response.ok) {
        setSubmitStatus('Message envoyé avec succès! Je vous répondrai rapidement.');
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: '',
          typeContact: 'general'
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setSubmitStatus('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'nellyassi468@gmail.com',
      description: 'Réponse sous 24h'
    },
    {
      icon: 'ri-phone-line',
      title: 'Téléphone',
      value: '+33 6 61 61 85 02',
      description: 'Disponible en semaine'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Localisation',
      value: 'Clichy, France',
      description: 'Région Parisienne'
    },
    {
      icon: 'ri-time-line',
      title: 'Disponibilité',
      value: 'Lun - Ven : 9h - 18h',
      description: 'Réponse rapide garantie'
    }
  ];

  const services = [
    {
      title: 'Développement Web',
      description: 'Sites web responsives et applications web modernes',
      icon: 'ri-code-line'
    },
    {
      title: 'Applications Mobiles',
      description: 'Développement d\'applications cross-platform',
      icon: 'ri-smartphone-line'
    },
    {
      title: 'Consultation Technique',
      description: 'Audit et conseils sur vos projets informatiques',
      icon: 'ri-settings-line'
    },
    {
      title: 'Formation & Mentoring',
      description: 'Partage de connaissances et accompagnement',
      icon: 'ri-graduation-cap-line'
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
              <Link href="/about" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
                À propos
              </Link>
              <Link href="/portfolio" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
                Projets
              </Link>
              <Link href="/certifications" className="px-3 py-2 rounded-lg transition-colors text-[#DFA49A] hover:text-[#C98A8A] whitespace-nowrap cursor-pointer">
                Attestations/Rapports
              </Link>
              <Link href="/contact" className="px-3 py-2 rounded-lg transition-colors bg-[#B2174A] text-white whitespace-nowrap cursor-pointer">
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
      <section 
        className="pt-24 pb-20 bg-gradient-to-br from-[#421734] to-[#5A1F2E] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(66, 23, 52, 0.95) 0%, rgba(90, 31, 46, 0.95) 100%), url('https://readdy.ai/api/search-image?query=professional%20communication%20background%2C%20modern%20office%20workspace%2C%20technology%20and%20collaboration%2C%20clean%20minimalist%20design%2C%20business%20networking%20atmosphere&width=1200&height=600&seq=16&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contactez-moi</h1>
            <p className="text-xl lg:text-2xl text-[#DFA49A] max-w-4xl mx-auto leading-relaxed">
              Prêt à donner vie à votre projet ? Discutons de vos idées et trouvons ensemble les meilleures solutions techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-[#DFA49A]/20 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-[#C98A8A]/30">
                <div className="w-16 h-16 bg-[#B2174A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${info.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#421734] mb-2">{info.title}</h3>
                <p className="text-[#B2174A] font-medium mb-1">{info.value}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#421734]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Envoyez-moi un message</h2>
              <p className="text-lg text-[#DFA49A] mb-8">
                Que ce soit pour un projet, une collaboration ou simplement pour échanger, 
                je serais ravie de vous entendre !
              </p>
              
              <form id="contact-portfolio" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-[#DFA49A] mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#5A1F2E] bg-[#2A2224] text-white rounded-lg focus:ring-2 focus:ring-[#B2174A] focus:border-transparent text-sm"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#DFA49A] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#5A1F2E] bg-[#2A2224] text-white rounded-lg focus:ring-2 focus:ring-[#B2174A] focus:border-transparent text-sm"
                      placeholder="votre.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-[#DFA49A] mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#5A1F2E] bg-[#2A2224] text-white rounded-lg focus:ring-2 focus:ring-[#B2174A] focus:border-transparent text-sm"
                      placeholder="+33 X XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-[#DFA49A] mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    required
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#5A1F2E] bg-[#2A2224] text-white rounded-lg focus:ring-2 focus:ring-[#B2174A] focus:border-transparent text-sm"
                    placeholder="Résumé de votre demande"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#DFA49A] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    maxLength={500}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#5A1F2E] bg-[#2A2224] text-white rounded-lg focus:ring-2 focus:ring-[#B2174A] focus:border-transparent resize-none text-sm"
                    placeholder="Décrivez votre projet ou votre demande en détail..."
                  ></textarea>
                  <div className="text-right text-sm text-[#DFA49A]/70 mt-1">
                    {formData.message.length}/500 caractères
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B2174A] text-white py-3 px-6 rounded-lg hover:bg-[#C8514D] transition-colors font-medium whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                {submitStatus && (
                  <div className={`text-center p-4 rounded-lg ${submitStatus.includes('succès') ? 'bg-[#C8514D]/20 text-[#DFA49A]' : 'bg-red-900/20 text-red-300'}`}>
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>

            {/* Services & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Comment puis-je vous aider ?</h2>
              
              <div className="space-y-6 mb-12">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-[#B2174A] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <i className={`${service.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-[#DFA49A]">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="bg-[#2A2224] p-6 rounded-xl border border-[#5A1F2E]">
                <h3 className="text-xl font-bold text-white mb-4">Questions fréquentes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#DFA49A] mb-1">Quel est votre délai de réponse ?</h4>
                    <p className="text-[#C98A8A] text-sm">Je réponds généralement sous 24h aux messages reçus en semaine.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#DFA49A] mb-1">Proposez-vous des stages ?</h4>
                    <p className="text-[#C98A8A] text-sm">En tant qu'étudiante, je suis ouverte aux collaborations et échanges d'expérience.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#DFA49A] mb-1">Travaillez-vous sur des projets étudiants ?</h4>
                    <p className="text-[#C98A8A] text-sm">Oui, je collabore volontiers sur des projets académiques et personnels.</p>
                  </div>
                </div>
              </div>
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