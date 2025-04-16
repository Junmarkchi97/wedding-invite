'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    guestCount: 1,
    dietaryRestrictions: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the backdrop itself, not its children
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f9e4e4]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#f4c5c5]/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      {/* Decorative floral elements */}
      <div className="absolute top-10 left-10 w-64 h-64 md:w-80 md:h-80 opacity-20 animate-float">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,40 Q35,10 50,40 Q65,70 80,40" stroke="#d88a95" strokeWidth="1" fill="none">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M20,40 Q35,10 50,40 Q65,70 80,40;
                      M20,45 Q35,15 50,45 Q65,75 80,45;
                      M20,40 Q35,10 50,40 Q65,70 80,40"
            />
          </path>
          <path d="M30,30 Q50,10 70,30" stroke="#d88a95" strokeWidth="1" fill="none" opacity="0.7">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M30,30 Q50,10 70,30;
                      M30,35 Q50,15 70,35;
                      M30,30 Q50,10 70,30"
            />
          </path>
        </svg>
      </div>

      {/* Monogram */}
      <div className="mb-12 text-center relative">
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-[#f9e4e4] rounded-full flex items-center justify-center relative">
          <span className="dancing-script text-[#d88a95] text-3xl md:text-4xl font-normal relative">J&S</span>
        </div>
      </div>

      <main className="max-w-xl w-full mx-auto card-elegant text-center z-10">
        <span className="dancing-script text-[#d88a95] text-xl md:text-2xl mb-4 block">With joy in our hearts</span>
        <h5 className="uppercase-spaced text-[#666666] mb-3">WE INVITE YOU TO OUR</h5>
        
        <h1 className="playfair text-2xl md:text-3xl lg:text-4xl mb-3 text-[#333333] font-light">
          "Wedding Celebration"
        </h1>
        
        <div className="divider my-6"></div>
        
        <div className="dancing-script text-[#d88a95] text-2xl md:text-3xl mb-4">
          June 15, 2024
        </div>
        
        <p className="text-base md:text-lg text-[#666666] mb-8 max-w-md mx-auto leading-relaxed">
          Join us as we celebrate our love and begin this new chapter together.
        </p>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-primary mb-6"
        >
          Accept Invitation
        </button>
        
        <div className="text-xs text-[#666666] mt-2 tracking-wide">
          Please RSVP by May 15, 2024
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={handleBackdropClick}
        >
          <div className="modal-card animate-fade-in">
            {!formSubmitted ? (
              <>
                <div className="text-center pt-8 pb-6 px-8">
                  <h2 className="uppercase-spaced mb-4">RSVP</h2>
                  <div className="divider w-full"></div>
                </div>
                
                <form onSubmit={handleSubmit} className="px-8 pt-2 pb-8 space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="form-label">FULL NAME</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="guestCount" className="form-label">NUMBER OF GUESTS</label>
                    <select
                      id="guestCount"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      required
                      className="form-input appearance-none"
                    >
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="dietaryRestrictions" className="form-label">
                      DIETARY RESTRICTIONS
                    </label>
                    <textarea
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleInputChange}
                      className="form-input resize-none"
                      rows={2}
                      placeholder="Please inform us of any dietary requirements"
                    />
                  </div>
                  
                  <div className="text-center pt-4">
                    <button 
                      type="submit" 
                      className="btn-primary"
                    >
                      Submit RSVP
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-12 px-8">
                <h2 className="playfair text-xl mb-3 text-[#333333] font-light">Thank you!</h2>
                <div className="divider w-32 mx-auto"></div>
                <p className="text-[#666666] mt-4">We can't wait to celebrate with you</p>
                <div className="dancing-script text-[#d88a95] text-lg mt-3">June 15, 2024</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
