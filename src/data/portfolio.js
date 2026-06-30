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
      level: "Expert",
      years: 5,
      detail: "Primary language for backend systems, ML, and automation. Used extensively for building APIs, data pipelines, and ML workflows.",
      projects: ["GeoRAG", "AI Coding Agent", "ML Infrastructure"]
    },
    {
      name: "FastAPI",
      icon: "zap",
      level: "Expert",
      years: 3,
      detail: "Typed APIs for fast, maintainable backend services. Built multiple production APIs with authentication, WebSocket support, and async processing.",
      projects: ["Code Execution Service", "RAG API Gateway"]
    },
    {
      name: "PostgreSQL",
      icon: "database",
      level: "Advanced",
      years: 3,
      detail: "Relational modeling, SQL query optimization, and database design. Experience with complex joins, indexing strategies, and stored procedures.",
      projects: ["User Management System", "Analytics Dashboard"]
    },
    {
      name: "MongoDB",
      icon: "layers",
      level: "Advanced",
      years: 3,
      detail: "Flexible document storage for application data. Schema design, aggregation pipelines, and replica set management.",
      projects: ["GeoRAG Metadata Store", "Application Logs"]
    },
    {
      name: "Go",
      icon: "circle-dot",
      level: "Intermediate",
      years: 2,
      detail: "Concurrent, performance-oriented service development. Goroutines, channels, and building high-throughput microservices.",
      projects: ["High-Performance Data Processing"]
    },
    {
      name: "Java Spring",
      icon: "coffee",
      level: "Intermediate",
      years: 2,
      detail: "Enterprise backend systems with Spring Boot, Spring Security, and Spring Data. Building scalable REST APIs and microservices.",
      projects: ["Enterprise Backend Services"]
    },
  ],

  "Artificial Intelligence": [
    {
      name: "LLM Integration",
      icon: "bot",
      level: "Expert",
      years: 3,
      detail: "Integrating language models into products and workflows. Experience with OpenAI, Anthropic, and open-source models like Llama and Mistral.",
      projects: ["AI Coding Agent", "RAG System", "Chat Interfaces"]
    },
    {
      name: "AI Agents",
      icon: "users",
      level: "Advanced",
      years: 2,
      detail: "Tool-using systems that can plan, act, and adapt. Built agents with tool calling, self-debugging, and knowledge expansion capabilities.",
      projects: ["AI Coding Agent", "Autonomous Data Pipeline"]
    },
    {
      name: "RAG Systems",
      icon: "file-search",
      level: "Expert",
      years: 2,
      detail: "Retrieval-augmented generation with structured knowledge. Multi-modal retrieval, embedding strategies, and hybrid search approaches.",
      projects: ["GeoRAG Enterprise System"]
    },
    {
      name: "vLLM",
      icon: "eye",
      level: "Advanced",
      years: 2,
      detail: "Efficient inference and serving for large language models. PagedAttention, continuous batching, and model optimization for production.",
      projects: ["Production LLM Serving"]
    },
    {
      name: "Vector Databases",
      icon: "message-square",
      level: "Advanced",
      years: 2,
      detail: "Semantic retrieval and embedding-based search. Experience with ChromaDB, Qdrant, and pgvector for similarity search.",
      projects: ["GeoRAG", "Semantic Search API"]
    },
    {
      name: "llama.cpp",
      icon: "cpu",
      level: "Intermediate",
      years: 2,
      detail: "Lightweight local model inference workflows. GGUF model optimization, quantization techniques, and CPU-based inference.",
      projects: ["Local LLM Deployment"]
    },
  ],
  "Machine Learning": [
    {
      name: "Scikit-learn",
      icon: "brain",
      level: "Expert",
      years: 5,
      detail: "Classical machine learning workflows, evaluation, and model iteration. Classification, regression, clustering, and feature engineering.",
      projects: ["Tabular Data Analysis", "Predictive Models"]
    },
    {
      name: "PyTorch",
      icon: "network",
      level: "Advanced",
      years: 4,
      detail: "Deep learning experiments and neural network training. CNNs, RNNs, Transformers, and custom model architectures.",
      projects: ["Deep Learning Models", "Neural Architecture Experiments"]
    },
    {
      name: "Deep Learning",
      icon: "gamepad2",
      level: "Advanced",
      years: 4,
      detail: "Representation learning with modern neural architectures. Attention mechanisms, transformers, and advanced optimization techniques.",
      projects: ["LLM Fine-tuning", "Custom Neural Networks"]
    },
    {
      name: "MLOps",
      icon: "git-branch",
      level: "Advanced",
      years: 3,
      detail: "Reliable training, deployment, and monitoring pipelines. MLflow, Kubeflow, experiment tracking, and model versioning.",
      projects: ["ML Training Pipeline", "Model Deployment System"]
    },
    {
      name: "XGBoost",
      icon: "tree-pine",
      level: "Advanced",
      years: 3,
      detail: "Fast gradient boosting for structured and tabular data. GPU acceleration, hyperparameter tuning, and model interpretation.",
      projects: ["Financial Prediction Models", "Feature Importance Analysis"]
    },
    {
      name: "Ray / joblib",
      icon: "rays",
      level: "Advanced",
      years: 2,
      detail: "Distributed and parallel execution for scalable ML workflows. Ray Tune, Ray Serve, and parallel training across clusters.",
      projects: ["8x Training Speedup", "Distributed ML Pipeline"]
    },
  ],
  "DevOps / Tools": [
    {
      name: "Docker",
      icon: "container",
      level: "Expert",
      years: 4,
      detail: "Repeatable containerized environments and delivery. Multi-stage builds, docker-compose, and container orchestration.",
      projects: ["All Production Services"]
    },
    {
      name: "Kubernetes",
      icon: "cloud",
      level: "Advanced",
      years: 3,
      detail: "Orchestration for scalable workloads. Deployments, services, ingress, persistent volumes, and resource management.",
      projects: ["Cloud Infrastructure", "Auto-scaling Services"]
    },
    {
      name: "MinIO",
      icon: "server",
      level: "Advanced",
      years: 2,
      detail: "S3-compatible object storage layer. Bucket policies, replication, and integration with ML pipelines.",
      projects: ["ML Artifact Storage", "Data Lake"]
    },
    {
      name: "CI/CD",
      icon: "git-pull-request",
      level: "Advanced",
      years: 3,
      detail: "Automated build, test, and release pipelines. GitHub Actions, GitLab CI, and automated deployments.",
      projects: ["CI/CD Pipeline Overhaul"]
    },
    {
      name: "Linux",
      icon: "terminal",
      level: "Expert",
      years: 5,
      detail: "Server-side development and operations. Shell scripting, system administration, and performance tuning.",
      projects: ["Server Management", "DevOps Automation"]
    },
    {
      name: "Git",
      icon: "git-merge",
      level: "Expert",
      years: 5,
      detail: "Version control and collaboration. Branching strategies, code reviews, and merge conflict resolution.",
      projects: ["All Projects"]
    },
  ],
};

export const experience = [
  {
    company: "Roshan",
    role: "Engineering Manager",
    period: "May 2026 – Present",
    location: "Tehran, Iran",
    summary: "Leading engineering execution, delivery planning, and technical direction for the ML/AI product stack.",
    achievements: [
      "Guide architecture decisions for building AI-enabled services.",
      "Own roadmap coordination across product, engineering, and ML delivery.",
      "Improve execution cadence, review quality, and cross-functional alignment."
    ],
    highlights: [
      "Execution planning",
      "Architecture review"
    ]
  },
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
    validationUrl: "https://www.coursera.org/account/accomplishments/certificate/MNWVR3M849EB"
  },
  {
    name: "Supervised Machine Learning",
    issuer: "Stanford Online",
    date: "2023",
    validationUrl: "https://www.coursera.org/account/accomplishments/certificate/KWFJMR4DPJCL"
  },
  {
    name: "Deep Reinforcement Learning",
    issuer: "University of Tehran",
    date: "2023",
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
