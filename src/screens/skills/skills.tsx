import { useState, useEffect } from 'react'
import { TypingAnimation } from '../../components/typing-text/typing-text'
import { useFirstVisit } from '../../hooks/useFirstVisit'

export const Skills = () => {
    const isFirstVisit = useFirstVisit('skills');
    const [currentFramework, setCurrentFramework] = useState<number>(-1);
    const [showFrameworks, setShowFrameworks] = useState<boolean>(false);
    const [currentPlatform, setCurrentPlatform] = useState<number>(-1);
    const [showPlatforms, setShowPlatforms] = useState<boolean>(false);
    const [currentOdoo, setCurrentOdoo] = useState<number>(-1);
    const [showOdoo, setShowOdoo] = useState<boolean>(false);
    const [currentBaas, setCurrentBaas] = useState<number>(-1);
    const [showBaas, setShowBaas] = useState<boolean>(false);

    const frameworks = [
        "React: Proficient in React.js concepts and ecosystem, including TanStack Query, Zustand, PrimeReact, Material UI, React Hook Form, React Router, and more.",
        "Flutter: Built multiple projects and worked with maps, notifications, state management (GetX), sqflite, Firebase and more.",
        "React Native: Worked with react native and expo ecosystem.",
        "OWL (Odoo Framework): Worked with odoo framework."
    ];

    const platforms = [
        "Git",
        "Docker",
        "GitHub",
        "Azure DevOps",
    ];

    const odooSkills = [
        "Build and customize odoo apps, to meet the business needs"
    ];

    const baasSkills = [
        "Firebase",
        "Appwrite"
    ];

    useEffect(() => {
        if (!isFirstVisit) {
            setShowFrameworks(true);
            setShowOdoo(true);
            setShowBaas(true);
            setShowPlatforms(true);
            setCurrentFramework(frameworks.length - 1);
            setCurrentOdoo(odooSkills.length - 1);
            setCurrentBaas(baasSkills.length - 1);
            setCurrentPlatform(platforms.length - 1);
        }
    }, [isFirstVisit]);

    useEffect(() => {
        if (showFrameworks) {
            setCurrentFramework(0);
        }
    }, [showFrameworks]);

    useEffect(() => {
        if (showPlatforms) {
            setCurrentPlatform(0);
        }
    }, [showPlatforms]);

    useEffect(() => {
        if (showOdoo) {
            setCurrentOdoo(0);
        }
    }, [showOdoo]);

    useEffect(() => {
        if (showBaas) {
            setCurrentBaas(0);
        }
    }, [showBaas]);

    const handleFrameworkComplete = () => {
        if (currentFramework < frameworks.length - 1) {
            setCurrentFramework(prev => prev + 1);
        } else {
            setShowOdoo(true);
        }
    };

    const handleOdooComplete = () => {
        if (currentOdoo < odooSkills.length - 1) {
            setCurrentOdoo(prev => prev + 1);
        } else {
            setShowBaas(true);
        }
    };

    const handleBaasComplete = () => {
        if (currentBaas < baasSkills.length - 1) {
            setCurrentBaas(prev => prev + 1);
        } else {
            setShowPlatforms(true);
        }
    };

    const handlePlatformComplete = () => {
        if (currentPlatform < platforms.length - 1) {
            setCurrentPlatform(prev => prev + 1);
        }
    };

    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-q mb-2'>
                Programming Languages
            </h2>
            <q className='text-q text-q-content' >
                <TypingAnimation
                    text="Javascript , Typescript , Dart , Python , C#"
                    duration={10}
                    onComplete={() => setShowFrameworks(true)}
                    style={{ fontSize: '1.2rem' }}
                    animate={isFirstVisit}
                />
            </q>
            {
                showFrameworks && (
                    <>
                        <h2 className='text-q mb-2' style={{ marginTop: '2rem' }}>
                            Frameworks and Libraries
                        </h2>
                        <div className='text-q flex flex-col gap-3'>
                            {frameworks.map((framework, index) => (
                                <q className='text-q text-q-content'
                                    key={index}
                                    style={{ opacity: index <= currentFramework ? 1 : 0, fontSize: '1.2rem' }}
                                >
                                    {index === currentFramework ? (
                                        <TypingAnimation
                                            text={framework}
                                            duration={10}
                                            onComplete={handleFrameworkComplete}
                                            style={{ fontSize: '1.2rem' }}
                                            animate={isFirstVisit}
                                        />
                                    ) : index < currentFramework ? (
                                        framework
                                    ) : null}
                                </q>
                            ))}
                        </div>
                    </>
                )
            }
            {
                showOdoo && (
                    <>
                        <h2 className='text-q mb-2' style={{ marginTop: '2rem' }}>
                            Odoo Developer
                        </h2>
                        <div className='text-q flex flex-col gap-3'>
                            {odooSkills.map((skill, index) => (
                                <q className='text-q text-q-content'
                                    key={index}
                                    style={{ opacity: index <= currentOdoo ? 1 : 0, fontSize: '1.2rem' }}
                                >
                                    {index === currentOdoo ? (
                                        <TypingAnimation
                                            text={skill}
                                            duration={10}
                                            onComplete={handleOdooComplete}
                                            animate={isFirstVisit}
                                        />
                                    ) : index < currentOdoo ? (
                                        skill
                                    ) : null}
                                </q>
                            ))}
                        </div>
                    </>
                )
            }
            {
                showBaas && (
                    <>
                        <h2 className='text-q mb-2' style={{ marginTop: '2rem' }}>
                            BaaS (Backend as a Service)
                        </h2>
                        <div className='text-q flex flex-col gap-3'>
                            {baasSkills.map((skill, index) => (
                                <q className='text-q text-q-content'
                                    key={index}
                                    style={{ opacity: index <= currentBaas ? 1 : 0, fontSize: '1.2rem' }}
                                >
                                    {index === currentBaas ? (
                                        <TypingAnimation
                                            text={skill}
                                            duration={10}
                                            onComplete={handleBaasComplete}
                                            animate={isFirstVisit}
                                        />
                                    ) : index < currentBaas ? (
                                        skill
                                    ) : null}
                                </q>
                            ))}
                        </div>
                    </>
                )
            }
            {
                showPlatforms && (
                    <>
                        <h2 className='text-q mb-2' style={{ marginTop: '2rem' }}>
                            Others
                        </h2>
                        <div className='text-q flex flex-col gap-3'>
                            {platforms.map((platform, index) => (
                                <q className='text-q text-q-content'
                                    key={index}
                                    style={{ opacity: index <= currentPlatform ? 1 : 0, fontSize: '1.2rem' }}
                                >
                                    {index === currentPlatform ? (
                                        <TypingAnimation
                                            text={platform}
                                            duration={10}
                                            onComplete={handlePlatformComplete}
                                            animate={isFirstVisit}
                                        />
                                    ) : index < currentPlatform ? (
                                        platform
                                    ) : null}
                                </q>
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    )
}
