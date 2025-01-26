import React, { useState, useEffect } from 'react';
import { TypingAnimation } from '../../components/typing-text/typing-text';
import { useFirstVisit } from '../../hooks/useFirstVisit';

export const LearningTraining = () => {
    const isFirstVisit = useFirstVisit('learning-training');
    const [showTraining, setShowTraining] = useState(false);

    useEffect(() => {
        if (!isFirstVisit) {
            setShowTraining(true);
        }
    }, [isFirstVisit]);

    const education = `Education
• Emirates International University, Sana'a
  Bachelor's Degree in Information Technology
  2019 – 2023

• General Telecommunication Institue, Sana'a
  Cisco Academy: Cisco Certified Network Associate (CCNA)
  Assistant (CCNA 1, CCNA 2)`;

    const training = `Training
• Company YOU, Sana'a
  Training at Company YOU
  2022/02/12 to 2023/02/26

• Public Telecommunications Corporation
  Training Program
  September 24, 2022 to October 5, 2022`;

    return (
        <div className='flex flex-col gap-8'>
            <div>
                <h2 className='text-q mb-4'>Education</h2>
                <q className='text-q text-q-content whitespace-pre-line'>
                    <TypingAnimation
                        text={education}
                        duration={20}
                        animate={isFirstVisit}
                        style={{ fontSize: '1.2rem' }}
                        onComplete={() => setShowTraining(true)}
                    />
                </q>
            </div>

            {showTraining && (
                <div style={{ opacity: showTraining ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                    <h2 className='text-q mb-4'>Training</h2>
                    <q className='text-q text-q-content whitespace-pre-line'>
                        <TypingAnimation
                            text={training}
                            duration={20}
                            animate={isFirstVisit}
                            style={{ fontSize: '1.2rem' }}
                        />
                    </q>
                </div>
            )}
        </div>
    );
};
