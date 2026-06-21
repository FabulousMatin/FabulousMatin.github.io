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
  linkedin: "https://linkedin.com/in/matinbazrafshan2003",
  telegram: "https://t.me/MatinBzr",
  profile: [
    "Highly motivated and hardworking, always eager to learn new things.",
    "Demonstrates a strong sense of responsibility.",
    "Track record of achieving academic excellence and actively participating in other activities."
  ],
  summary: "ML/AI Software Engineer with expertise in building scalable machine learning systems, MLOps pipelines, and AI-powered applications. Passionate about leveraging data and artificial intelligence to solve complex real-world problems."
};

export const skills = {
    "Software": [
    {
      name: "Python",
      icon: "code-2",
      detail: "Primary language for backend systems, ML, and automation."
    },
    {
      name: "FastAPI",
      icon: "zap",
      detail: "Typed APIs for fast, maintainable backend services."
    },
    {
      name: "PostgreSQL",
      icon: "database",
      detail: "Relational modeling and SQL query design."
    },
    {
      name: "MongoDB",
      icon: "layers",
      detail: "Flexible document storage for application data."
    },
    {
      name: "Go",
      icon: "circle-dot",
      detail: "Concurrent, performance-oriented service development."
    },
    {
      name: "Java Spring",
      icon: "coffee",
      detail: "Enterprise backend systems with Spring ecosystems."
    },
  ],

  "Artificial Intelligence": [
    {
      name: "LLM Integration",
      icon: "bot",
      detail: "Integrating language models into products and workflows."
    },
    {
      name: "AI Agents",
      icon: "users",
      detail: "Tool-using systems that can plan, act, and adapt."
    },
    {
      name: "RAG Systems",
      icon: "file-search",
      detail: "Retrieval-augmented generation with structured knowledge."
    },
    {
      name: "vLLM",
      icon: "eye",
      detail: "Efficient inference and serving for large language models."
    },
    {
      name: "Vector Databases",
      icon: "message-square",
      detail: "Semantic retrieval and embedding-based search."
    },
    {
      name: "llama.cpp",
      icon: "cpu",
      detail: "Lightweight local model inference workflows."
    },
  ],
  "Machine Learning": [
    {
      name: "Scikit-learn",
      icon: "brain",
      detail: "Classical machine learning workflows, evaluation, and model iteration."
    },
    {
      name: "PyTorch",
      icon: "network",
      detail: "Deep learning experiments and neural network training."
    },
    {
      name: "Deep Learning",
      icon: "gamepad2",
      detail: "Representation learning with modern neural architectures."
    },
    {
      name: "MLOps",
      icon: "git-branch",
      detail: "Reliable training, deployment, and monitoring pipelines."
    },
    {
      name: "XGBoost",
      icon: "tree-pine",
      detail: "Fast gradient boosting for structured and tabular data."
    },
    {
      name: "Ray / joblib",
      icon: "rays",
      detail: "Distributed and parallel execution for scalable ML workflows."
    },
  ],
  "DevOps / Tools": [
    {
      name: "Docker",
      icon: "container",
      detail: "Repeatable containerized environments and delivery."
    },
    {
      name: "Kubernetes",
      icon: "cloud",
      detail: "Orchestration for scalable workloads."
    },
    {
      name: "MinIO",
      icon: "server",
      detail: "S3-compatible object storage layer."
    },
    {
      name: "CI/CD",
      icon: "git-pull-request",
      detail: "Automated build, test, and release pipelines."
    },
    {
      name: "Linux",
      icon: "terminal",
      detail: "Server-side development and operations."
    },
    {
      name: "Git",
      icon: "git-merge",
      detail: "Version control and collaboration."
    },
  ],
};

export const experience = [
  {
    company: "Roshan",
    role: "ML/AI Software Engineer",
    period: "August 2024 – Present",
    location: "Tehran, Iran",
    summary: "Building ML/AI infrastructure and shipped systems across backend, training, and deployment.",
    achievements: [
      "Led engineering processes to architect and scale core AI infrastructure and services.",
      "Developed a scalable backend service using FastAPI, Kubernetes and MinIO to support live, secure and containerized code execution.",
      "Designed an AI coding agent that generates and executes embedded Python code within a C# environment, featuring intent detection, self-debugging and on-demand knowledge expansion.",
      "Redesigned an ML workflow using Ray and Joblib, introducing pipelining, multi-stage caching and parallel execution to achieve an 8x speedup in model training.",
      "Implemented shared DMatrix structures in XGBoost, optimizing GPU VRAM utilization by 3x and maximizing concurrent training jobs.",
      "Optimized the TA library by fully vectorizing operations, significantly reducing latency in the time-series data pipeline."
    ],
    highlights: [
      "Scalable AI infrastructure",
      "FastAPI / Kubernetes backend",
      "Ray + Joblib acceleration"
    ]
  },
  {
    company: "Roshan",
    role: "Engineering Manager",
    period: "May 2026 – Present",
    location: "Tehran, Iran",
    summary: "Leading engineering execution, delivery planning, and technical direction for the ML/AI product stack.",
    achievements: [
      "Own roadmap coordination across product, engineering, and ML delivery.",
      "Guide architecture decisions for teams building AI-enabled services.",
      "Improve execution cadence, review quality, and cross-functional alignment."
    ],
    highlights: [
      "Team leadership",
      "Execution planning",
      "Architecture review"
    ]
  },
  {
    company: "UTeam",
    role: "Co-founder / Engineer",
    period: "2025",
    location: "Remote",
    summary: "Participated in an early startup attempt that ultimately did not work out, but informed later product and engineering decisions.",
    achievements: [
      "Helped validate product direction, build prototypes, and test user workflows.",
      "Learned to make faster technical tradeoffs under constrained startup conditions.",
      "Carried lessons from a failed launch into later work on reliability and scope control."
    ],
    highlights: [
      "Startup prototyping",
      "Product validation",
      "Failure-informed learning"
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
    details: [
      "Build a polished case-study modal with screenshots, architecture notes, demo GIFs, and implementation notes.",
      "Add a timeline of milestones, a feature breakdown, and a gallery area for media.",
      "Keep the project card minimal and use the modal for the full narrative."
    ],
    mediaSlots: {
      heroImage: "",
      gallery: [],
      gifs: []
    },
    validationLink: "https://github.com/FabulousMatin/georag",
  }
];

export const education = [
  {
    institution: "University of Tehran",
    degree: "Bachelor's in Computer Engineering",
    period: "2021 – 2026",
    location: "Tehran, Iran",
    gpa: "18.89/20",
    achievements: [
      {
        role: "Head TA",
        course: "Artificial Intelligence",
        instructor: "Dr. Fadaei, Dr. Yaghoubzadeh",
        semesters: 4
      },
      {
        role: "TA",
        course: "Internet Engineering",
        instructor: "Dr. Khamespanah",
        semesters: 1
      },
      {
        role: "Supervisor",
        course: "Data Science",
        instructor: "Dr. Bahrak, Dr. Yaghoubzadeh",
        semesters: 1
      },
      {
        role: "TA",
        course: "Engineering Probability and Statistics",
        instructor: "Dr. Tavassolipour",
        semesters: 2
      }
    ]
  }
];

export const certifications = [
  {
    name: "Advanced Learning Algorithms",
    issuer: "Stanford Online",
    date: "2024",
    credentialId: "ML-ALT-2024-001",
    validationUrl: "https://www.coursera.org/account/accomplishments/certificate/MNWVR3M849EB"
  },
  {
    name: "Supervised Machine Learning",
    issuer: "Stanford Online",
    date: "2023",
    credentialId: "ML-SML-2023-001",
    validationUrl: "https://www.coursera.org/account/accomplishments/certificate/KWFJMR4DPJCL"
  },
  {
    name: "Deep Reinforcement Learning",
    issuer: "University of Tehran",
    date: "2023",
    credentialId: "RL-DRL-2023-001",
    validationUrl: "https://ieeesb.ut.ac.ir/certificates"
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
  { name: "LinkedIn", url: "https://linkedin.com/in/matinbazrafshan2003", icon: "linkedin" },
  { name: "Email", url: "mailto:matinbazrafshan2003@gmail.com", icon: "mail" },
  { name: "GitHub", url: "https://github.com/FabulousMatin", icon: "github" },
  { name: "Telegram", url: "https://t.me/MatinBzr", icon: "telegram" },
];
