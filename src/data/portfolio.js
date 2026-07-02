const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export const personalInfo = {
  name: "Matin",
  surname: "Bazrafshan",
  fullName: "Matin Bazrafshan",
  title: "ML/AI Software Engineer",
  email: "matinbazrafshan2003@gmail.com",
  phone: "+98 901 264 9743",
  location: "Tehran, Iran",
  birthDate: "2nd June 2003",
  github: "https://github.com/FabulousMatin",
  linkedin: "https://linkedin.com/in/matinbazrafshan2003",
  telegram: "https://t.me/MatinBzr",
  summary: "ML/AI Software Engineer focused on building scalable machine learning systems, MLOps pipelines, and AI-powered applications. I am interested in transforming machine learning ideas into reliable production systems that create real-world impact. I approach challenges with curiosity, responsibility, and a continuous improvement mindset, while consistently pursuing technical growth and excellence."
};

export const skills = {
  "Software": [
    { name: "Python", level: 5 },
    { name: "FastAPI", level: 4 },
    { name: "Python Async / Threading / Multiprocessing", level: 4 },
    { name: "Clean Coding", level: 5 },
    { name: "Software Architecture", level: 3 },
    { name: "Design Patterns", level: 3 },
    { name: "PostgreSQL", level: 3 },
    { name: "MongoDB", level: 4 },
    { name: "Java Spring", level: 3 },
    { name: "Go", level: 2 },
  ],
  "Artificial Intelligence": [
    { name: "LLM Integration", level: 5 },
    { name: "AI Agents", level: 5 },
    { name: "LangGraph", level: 4 },
    { name: "RAG Systems", level: 5 },
    { name: "vLLM", level: 3 },
    { name: "llama.cpp", level: 3 },
  ],
  "Machine Learning": [
    { name: "Scikit-learn", level: 5 },
    { name: "Numpy / Pandas", level: 5 },
    { name: "Deep Learning", level: 4 },
    { name: "XGBoost", level: 5 },
    { name: "PyTorch", level: 4 },
    { name: "Ray / joblib", level: 3 },
    { name: "MLOps", level: 4 },
    { name: "Vector Databases", level: 4 },
  ],
  "DevOps / Tools": [
    { name: "Git", level: 4 },
    { name: "Docker", level: 3 },
    { name: "Kubernetes", level: 3, },
    { name: "MLOps", level: 4 },
    { name: "CI/CD", level: 3 },
    { name: "Linux", level: 3 },
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
      "Improved delivery processes, code quality, and team coordination."
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
      "ML pipeline optimization and acceleration",
      "Backend services",
      "Scalable AI infrastructure",
    ]
  },
];

export const projects = [
  {
    name: "GeoRAG",
    description: "Enterprise Document Retrieval & RAG System.",
    technologies: ["Python", "FastAPI", "ChromaDB", "MongoDB", "llama.cpp"],
    github: "",
    isPrivate: true,
    details: [
      "A from-scratch multimodal RAG system featuring text extraction, semantic search, and LLM question-answering across PDFs, text, and images."
    ],
    mediaSlots: {
      images: [],
      gifs: [publicAsset("georag.gif")]
    },
  },
{
    name: "gmprof",
    description: "A small NVIDIA GPU VRAM profiler for Python.",
    technologies: ["Python", "NVML", "Matplotlib"],
    github: "https://github.com/FabulousMatin/gmprof",
    isPrivate: false,
    details: [
      "mprof-style CLI for sampling a subprocess",
      "Plotting and text reports for sampled .dat files",
      "profiling as both a decorator and context manager",
    ],
    mediaSlots: {
      images: [
        publicAsset("gmprof.png")
      ],
      gifs: []
    },
  },
  {
    name: "Deep Neural Networks Course Projects",
    description: "Deep learning assignments covering CNNs, RNNs, Transformers, and generative models.",
    technologies: ["Python", "PyTorch", "NumPy", "Pandas", "TensorFlow", "Keras"],
    github: "https://github.com/Shahriar-0/Neural-Networks-and-Deep-Learning-Course-Projects-S2024",
    isPrivate: false,
    details: [
      "Adversarial attacks (FGSM, PGD) on MNIST",
      "CNN fine-tuning (VGG16, ResNet-50) for classification",
      "U-Net for semantic segmentation, Faster R-CNN for object detection",
      "Hybrid CNN-LSTM for sentiment analysis and RUL prediction",
      "Transformer fine-tuning for fake news detection",
      "VAE and Pix2Pix for image generation and translation"
    ],
    mediaSlots: {
      images: [
        publicAsset("NN_1.png"),
        publicAsset("NN_2.png"),
        publicAsset("NN_3.png"),
        publicAsset("NN_4.png"),
        publicAsset("NN_5.png"),
        publicAsset("NN_6.png"),
        publicAsset("NN_7.png"),
        publicAsset("NN_8.png"),
        publicAsset("NN_9.png")
      ],
      gifs: []
    },
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
