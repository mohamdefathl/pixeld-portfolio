import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypingAnimation } from '../../components/typing-text/typing-text';
interface Section {
  name: string;
  route: string;
}
export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [sections] = useState<Section[]>([
    { name: 'Experience', route: 'experience' },
    { name: 'Learning & Training', route: 'learning-training' },
    { name: 'Certifications & Projects', route: 'certifications-projects' },
    { name: 'Contact', route: 'contact' }
  ]);

  const handleSectionClick = (route: string) => {

    navigate(`/${route}`);
  };

  return (
    <div className="home-container">
      <TypingAnimation duration={70} text='Hey, I am Mohammed Al-ghorbani, a fanatical software developer.' />      
      <div style={{ marginTop: '5rem' }}>
        {sections.map((message:Section, index:number) => (
          <q
            key={index}
            onClick={() => handleSectionClick(message.route)}
            className="text-q "
            style={{ cursor: 'pointer', maxWidth: '300px', fontSize: '1.5rem', marginBottom: '1.6rem' }}
          >
            {message.name}
          </q>
        ))}
      </div>
    </div>
  );
}
