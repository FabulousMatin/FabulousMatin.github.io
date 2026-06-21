export const personalInfo = {
  name: "Matin",
  surname: "Bazrafshan",
  fullName: "Matin Bazrafshan",
  title: "ML/AI Software Engineer",
  tagline: "Building intelligent systems that scale",
  email: "matinbazrafshan2003@gmail.com",
  phone: "+98 901 264 9743",
  location: "Tehran, Iran",
  birthDate: "2nd June 2003",
  website: "example.com",
  github: "https://github.com/FabulousMatin",
  linkedin: "https://linkedin.com/in/matinbazrafshan",
  twitter: "https://twitter.com/matinbazrafshan",
  profile: [
    "Highly motivated and hardworking, always eager to learn new things.",
    "Demonstrates a strong sense of responsibility.",
    "Track record of achieving academic excellence and actively participating in other activities."
  ],
  summary: "ML/AI Software Engineer with expertise in building scalable machine learning systems, MLOps pipelines, and AI-powered applications. Passionate about leveraging data and artificial intelligence to solve complex real-world problems."
};

export const skills = {
  "Machine Learning": [
    { name: "Machine Learning", icon: "brain" },
    { name: "Deep Learning", icon: "network" },
    { name: "Reinforcement Learning", icon: "gamepad2" },
    { name: "MLOps", icon: "git-branch" },
    { name: "XGBoost", icon: "tree-pine" },
    { name: "Ray", icon: "rays" },
  ],
  "Artificial Intelligence": [
    { name: "LLM Integration", icon: "bot" },
    { name: "RAG Systems", icon: "file-search" },
    { name: "Computer Vision", icon: "eye" },
    { name: "NLP", icon: "message-square" },
    { name: "AI Agents", icon: "users" },
    { name: "llama.cpp", icon: "cpu" },
  ],
  "Backend": [
    { name: "Python", icon: "code-2" },
    { name: "Go", icon: "circle-dot" },
    { name: "FastAPI", icon: "zap" },
    { name: "Java Spring", icon: "coffee" },
    { name: "PostgreSQL", icon: "database" },
    { name: "MongoDB", icon: "layers" },
  ],
  "Frontend": [
    { name: "React", icon: "layout" },
    { name: "TypeScript", icon: "file-code" },
    { name: "Tailwind CSS", icon: "palette" },
    { name: "Framer Motion", icon: "play" },
    { name: "Next.js", icon: "triangle" },
  ],
  "DevOps / Tools": [
    { name: "Docker", icon: "container" },
    { name: "Kubernetes", icon: "cloud" },
    { name: "MinIO", icon: "server" },
    { name: "CI/CD", icon: "git-pull-request" },
    { name: "Linux", icon: "terminal" },
    { name: "Git", icon: "git-merge" },
  ],
};

export const experience = [
  {
    company: "Roshan",
    role: "ML/AI Software Engineer",
    period: "August 2024 – Present",
    location: "Tehran, Iran",
    achievements: [
      "Led engineering processes to architect and scale core AI infrastructure and services.",
      "Developed a scalable backend service using FastAPI, Kubernetes and MinIO to support live, secure and containerized code execution.",
      "Designed an AI coding agent that generates and executes embedded Python code within a C# environment, featuring intent detection, self-debugging and on-demand knowledge expansion.",
      "Redesigned an ML workflow using Ray and Joblib, introducing pipelining, multi-stage caching and parallel execution to achieve an 8x speedup in model training.",
      "Implemented shared DMatrix structures in XGBoost, optimizing GPU VRAM utilization by 3x and maximizing concurrent training jobs.",
      "Optimized the TA library by fully vectorizing operations, significantly reducing latency in the time-series data pipeline."
    ]
  }
];

export const projects = [
  {
    name: "GeoRAG",
    description: "Enterprise Document Retrieval & RAG System. A from-scratch multimodal RAG system featuring text extraction, semantic search, and LLM question-answering across PDFs, text, and images.",
    technologies: ["Python", "FastAPI", "ChromaDB", "MongoDB", "llama.cpp", "Docker"],
    github: "https://github.com/FabulousMatin/georag",
    demo: "https://georag.example.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    featured: true
  },
  {
    name: "AI Code Agent",
    description: "An intelligent coding assistant that generates and executes embedded Python code within a C# environment, featuring intent detection, self-debugging and on-demand knowledge expansion.",
    technologies: ["C#", "Python", "AI Agents", "FastAPI", "Kubernetes"],
    github: "https://github.com/FabulousMatin/ai-code-agent",
    demo: null,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    featured: true
  },
  {
    name: "ML Pipeline Optimizer",
    description: "High-performance ML workflow system using Ray and Joblib with pipelining, multi-stage caching and parallel execution for 8x speedup in model training.",
    technologies: ["Python", "Ray", "Joblib", "XGBoost", "GPU Computing"],
    github: "https://github.com/FabulousMatin/ml-pipeline",
    demo: null,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    featured: false
  }
];

export const education = [
  {
    institution: "University of Tehran",
    degree: "Bachelor's in Computer Engineering",
    period: "2021 – 2026",
    location: "Tehran, Iran",
    gpa: "19.26/20",
    achievements: [
      "Head TA, Artificial Intelligence (4 semesters)",
      "Supervisor, Data Science (1 semester)",
      "TA, Internet Engineering (1 semester)",
      "TA, Engineering Probability and Statistics (2 semesters)"
    ]
  }
];

export const certifications = [
  {
    name: "Advanced Learning Algorithms",
    issuer: "Stanford Online",
    date: "2024",
    credentialId: "ML-ALT-2024-001"
  },
  {
    name: "Supervised Machine Learning",
    issuer: "Stanford Online",
    date: "2023",
    credentialId: "ML-SML-2023-001"
  },
  {
    name: "Deep Reinforcement Learning",
    issuer: "University of Tehran",
    date: "2023",
    credentialId: "RL-DRL-2023-001"
  }
];

export const honors = [
  {
    title: "Faculty of Engineering Prize",
    issuer: "University of Tehran",
    date: "June 2024",
    description: "Won Faculty of Engineering prize at university of Tehran"
  },
  {
    title: "First Rank - Bachelor's Degree",
    issuer: "University of Tehran",
    date: "February 2023",
    description: "Ranked first among all computer engineering students in bachelor's degree. GPA: 19.26/20"
  },
  {
    title: "National Rank - University Entrance",
    issuer: "Iran National Organization",
    date: "June 2021",
    description: "Ranked 88 among all participants in Iranian University Entrance Exam"
  }
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/FabulousMatin", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/matinbazrafshan", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/matinbazrafshan", icon: "twitter" },
  { name: "Email", url: "mailto:matinbazrafshan2003@gmail.com", icon: "mail" }
];
