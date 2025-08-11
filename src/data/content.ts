export const profile = {
    name: 'Vinay K R',
    title: 'Full-Stack Engineer',
    location: 'Bengaluru (Tumakuru, KA)',
    phone: '7975893210',
    email: 'vinaykr0605@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vinay-k-r-a6bb51243',
    github: 'https://github.com/vinaykr0605',
    summary: `High-Reliability Systems Engineer with 2.5 years of experience delivering robust full-stack solutions for mission-critical applications. Specialized in .NET Core, Angular, and React, with strong test automation using Cypress.`,
    interests: ['Badminton', 'Cricket', 'Cycling', 'Swimming', 'Listening to Music']
}

export const skills = {
    backend: ['C#', 'ASP.NET Core', 'MVC', 'Web APIs'],
    frontend: ['Angular', 'React', 'JavaScript', 'TypeScript', 'Cypress'],
    database: ['SQL Server', 'PostgreSQL'],
    versionControl: ['Perforce', 'Git', 'GitHub'],
    concepts: ['OOP', 'Design Patterns', 'Agile/Scrum', 'Debugging & Testing (Unit, Integration)'],
    certifications: ['GitHub', 'Docker', 'PostgreSQL', 'React.js', 'Next.js', 'Angular', 'C#', '.NET (LinkedIn Learning)']
}

export const experiences = [
    {
        company: 'Light & Wonder (Scientific Games)',
        location: 'Bengaluru',
        role: 'Full Stack Developer',
        start: 'August 2023',
        end: 'July 2025',
        bullets: [
            'Engineered full-stack casino gaming platforms using C#, .NET Core Web API, and Angular/React with focus on reliability, security, and performance.',
            'Diagnosed and fixed video memory leak on embedded slot machine hardware, stabilizing RAM usage and eliminating production crashes.',
            "Designed and implemented the 'Cage Credit' location-based financial transaction system using .NET Core and Angular.",
            'Authored 700+ Cypress tests across projects, reducing production defects and raising code quality.',
            'Delivered across six product lines in distributed Agile teams with proactive documentation and communication.',
            'Modernized a legacy system by re-architecting the front-end with a new Angular app for performance and maintainability.'
        ]
    },
    {
        company: 'Light & Wonder (Scientific Games)',
        location: 'Bengaluru',
        role: 'Full Stack Developer Trainee',
        start: 'March 2023',
        end: 'July 2023',
        bullets: [
            'Completed full-stack internship: C# backend, Angular frontend for casino gaming.',
            'Built a Game Recommendation System with user feedback and rating for personalized suggestions.'
        ]
    }
]

export const recognitions = [
    'Company-wide recognition for automating end-to-end Cypress test suites in one month.',
    'Awarded Team of the Month for innovative integration and defect reduction.'
]

export const education = [
    {
        degree: 'Bachelor of Engineering in Computer Science',
        school: 'Siddaganga Institute of Technology, Tumkur',
        cgpa: '8.65/10',
        start: 'August 2019',
        end: 'July 2023'
    },
    {
        degree: 'Pre-University',
        school: 'Sarvodaya PU College, Tumkur',
        Percentage: '93.5/100',
        start: 'June 2017',
        end: 'March 2019'
    }
]

export const projects = [
    {
        name: 'Cage Credit System',
        stack: ['.NET Core', 'Angular', 'SQL Server'],
        description: 'Location-based financial transaction platform optimizing throughput and secure handling of instruments.',
        highlights: ['Secure authorization', 'Optimized transaction pipeline', 'Robust auditing'],
        link: null
    },
    {
        name: 'Embedded Memory Leak Fix',
        stack: ['C#', 'Hardware Debugging'],
        description: 'Resolved video memory leak on slot machine hardware to stabilize RAM and eliminate crashes.',
        highlights: ['Profiling & diagnostics', 'Performance stabilization', 'Production reliability'],
        link: null
    },
    {
        name: 'Test Automation @ Scale',
        stack: ['Cypress', 'TypeScript'],
        description: '700+ test cases across multiple products to cut production defects and improve maintainability.',
        highlights: ['Parallelization', 'CI-friendly', 'Actionable reports'],
        link: null
    },
    {
        name: 'Game Recommendation System',
        stack: ['Angular', 'C#', 'PostgreSQL'],
        description: 'Personalized recommendations using user feedback and ratings.',
        highlights: ['Feedback loop', 'Responsive UI', 'Clean architecture'],
        link: null
    }
]
