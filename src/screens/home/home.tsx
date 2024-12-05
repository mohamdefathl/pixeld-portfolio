import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState<Array<{name: string, route: string}>>([
    { name: 'Experience', route: 'experience' },
    { name: 'Learning & Training', route: 'learning-training' },
    { name: 'Certifications & Projects', route: 'certifications-projects' },
    { name: 'Contact', route: 'contact' }
]);

  const handleSectionClick = (route: string) => {
    
    navigate(`/${route}`);
  };

  return (
    <div>
      {sections.map((message, index) => (
        <q
          key={index}
          onClick={() => handleSectionClick(message.route)}
          style={{ cursor: 'pointer' }}
        >
          {message.name}
        </q>
      ))}
    </div>
  );
}
