export const siteConfig = {
  name: "Muhammad Muneeb Arshad",
  shortName: "Muneeb",
  role: "Data Scientist / AI Systems Engineer",
  headline: "Production AI, made inspectable.",
  description:
    "I build computer vision and AI automation systems that move beyond prototypes: validated model pipelines, schema-governed agents, traceable workflows, real dashboards, and production-ready integrations.",
  location: "Pakistan / Remote",
  social: {
    email: "muneebsaddal@outlook.com",
    linkedin: "https://linkedin.com/in/muneebsaddal",
    github: "https://github.com/muneebsaddal",
  },
  stats: [
    { value: "Vision models", label: "YOLO, DETR, CNN, U-Net" },
    { value: "CV pipeline", label: "OpenCV, PyTorch, Tensorflow, NumPy" },
    { value: "Agent backend", label: "LangGraph, FastAPI, n8n, Docker, Redis" },
  ],
  buildLanes: [
    {
      title: "Computer Vision Systems",
      description:
        "Model pipelines for industrial inspection, sports analytics, medical imaging, OCR, segmentation, and deployment workflows.",
      proofPoints: [
        "YOLO player/object detection, pose estimation, court keypoints, and ball tracking",
        "OCR and defect workflows with annotation guidelines, preprocessing, and evaluation",
        "Medical image segmentation/classification experiments with clinical-style validation",
      ],
      stack: ["YOLO", "DETR", "CNN", "U-Net", "OpenCV", "PyTorch"],
    },
    {
      title: "AI Automation Systems",
      description:
        "Deterministic AI backends and workflow systems with state, validation, human review, observability, and production integration points.",
      proofPoints: [
        "LangGraph intent routing, planner/executor/validator pipelines, and trace replay",
        "Pydantic schema validation, bounded retries, confidence gates, and hard-fail behavior",
        "FastAPI, Redis, Celery, WebSocket dashboards, n8n workflows, and webhook integrations",
      ],
      stack: ["LangGraph", "FastAPI", "Pydantic", "Redis", "Celery", "n8n"],
    },
  ],
  featuredProjects: [
    {
      name: "AI Business Automation Platform",
      category: "AI Automation",
      description:
        "A production-oriented operations platform that classifies, plans, executes, validates, and streams plain-English business tasks to a live dashboard.",
      outcome:
        "Built intent routing, IR generation/validation, schema resolution, planner/executor/validator orchestration, WebSocket progress, and trace replay.",
      link: "https://github.com/muneebsaddal/AI-Business-Automation-Platform",
      skills: ["LangGraph", "FastAPI", "React", "WebSocket", "Redis", "Docker"],
      proofType: "trace",
      proofLabel: "Planner / Executor / Validator trace",
      featured: true,
    },
    {
      name: "AI Developer Agent",
      category: "Agentic Systems",
      description:
        "A multi-agent developer-ops system that turns natural-language operational requests into planned, executed, validated, and logged workflows.",
      outcome:
        "Built planner, executor, and validator agents with Redis state, Pydantic schemas, bounded retries, hard-stop failure behavior, and FastAPI run/status endpoints.",
      skills: ["Python", "LangGraph", "FastAPI", "Redis", "Pydantic"],
      proofType: "agent",
      proofLabel: "Planner / Executor / Validator loop",
      featured: true,
    },
    {
      name: "Padel Analytics System",
      category: "Computer Vision",
      description:
        "A training-first sports analytics pipeline covering player detection, pose estimation, ball tracking, and court keypoint detection.",
      outcome:
        "Normalized datasets, converted annotations, trained models on RunPod, adapted inference logic, and prepared CVAT annotation handoff.",
      link: "https://github.com/muneebsaddal/Padel-Analytics-System",
      skills: ["YOLO", "Pose Estimation", "RunPod", "CVAT", "Python"],
      proofType: "vision",
      proofLabel: "Vision pipeline map",
      featured: true,
    },
    {
      name: "AI Architecture Plan Auditor",
      category: "Computer Vision",
      description:
        "A multimodal audit system that evaluates architectural drawings with vision extraction, structured rules, and evidence-grounded scoring.",
      outcome:
        "Combined GPT-4o Vision, JSON-mode scoring, Markdown rulesets, disk cache persistence, and Streamlit reporting.",
      link: "https://github.com/muneebsaddal/AI-Architecture-Plan-Auditor",
      skills: ["GPT-4o Vision", "Streamlit", "Python", "JSON Mode", "Rulesets"],
      proofType: "audit",
      proofLabel: "Evidence scoring panel",
      featured: true,
    },
    {
      name: "Adaptive AI Office Space Planner",
      category: "Decision Support",
      description:
        "An AI-assisted office planning tool for importing floor plans, editing layouts, scoring scenarios, and comparing workspace decisions.",
      outcome:
        "Built DXF import, SVG-based editing, environmental scoring, comfort diagnosis, scenario comparison, and FastAPI-backed planning flows.",
      link: "https://github.com/muneebsaddal/Adaptive-AI-Office-Space-Planner",
      skills: ["TypeScript", "React", "Vite", "SVG", "FastAPI"],
      proofType: "planner",
      proofLabel: "Scenario planning workspace",
      featured: true,
    },
  ],
  projectArchive: [
    {
      name: "AI Voice Notes to Content",
      category: "AI Product",
      description:
        "Voice-note-to-content workflow for turning captured ideas into structured drafts and reusable content assets.",
      link: "https://github.com/muneebsaddal/AI-Voice-Notes-to-Content",
      skills: ["HTML", "AI Workflow", "Content Automation"],
    },
    {
      name: "n8n Workflow Showcase",
      category: "Automation",
      description:
        "Credential-light n8n workflow demos for AI lead triage, sales follow-up, and AI-powered social clip planning.",
      link: "https://github.com/muneebsaddal/n8n-workflows",
      skills: ["n8n", "Workflow Design", "Human Review"],
    },
    {
      name: "X-ray Spine Segmentation",
      category: "Medical Vision",
      description:
        "Medical imaging pipeline adapting TotalSpineSeg-style segmentation from 3D MRI workflows toward 2D X-ray vertebral analysis.",
      link: "https://github.com/muneebsaddal/X-ray-Spine-Segmentation",
      skills: ["nnU-Net", "Medical Imaging", "Python", "Segmentation"],
    },
    {
      name: "Deterministic AI Processor",
      category: "LLM Systems",
      description:
        "Local-first structured extraction system using schema validation, bounded retries, and hard-stop LLM behavior.",
      link: "https://github.com/muneebsaddal/Deterministic-AI-Processor",
      skills: ["Ollama", "Pydantic", "Python", "Schemas"],
    },
    {
      name: "RAG Document QA System",
      category: "NLP",
      description:
        "Context-grounded document question answering with retrieval, chunking, Flask API, and responsive chat UI.",
      link: "https://github.com/muneebsaddal/RAG-Document-QA-System",
      skills: ["RAG", "Flask", "TF-IDF", "NLP"],
    },
    {
      name: "Retail Sales Data Analytics",
      category: "Analytics",
      description:
        "Retail sales and profitability analytics dashboard covering pricing, discounts, returns, and product performance.",
      link: "https://github.com/muneebsaddal/retail-sales-data-analytics",
      skills: ["Power BI", "DAX", "Power Query", "BI"],
    },
    {
      name: "Financial Performance Dashboard",
      category: "Business Intelligence",
      description:
        "Power BI financial dashboard for revenue, profitability, regional performance, and discount impact analysis.",
      link: "https://github.com/muneebsaddal/financial-performace-dashboard",
      skills: ["Power BI", "DAX", "KPI Design"],
    },
    {
      name: "OpenSky Flight Data Analysis",
      category: "Data Engineering",
      description:
        "Python pipeline for real-time aircraft telemetry, geospatial EDA, Folium maps, and aviation trend analysis.",
      link: "https://github.com/muneebsaddal/opensky-flight-data-analysis",
      skills: ["Python", "Pandas", "Folium", "API"],
    },
  ],
  experience: [
    {
      company: "Elunic GmbH",
      title: "Data Scientist",
      dateRange: "Dec 2025 - Present",
      focus: "Industrial Computer Vision & Production ML Systems",
      bullets: [
        "Design and deliver computer vision solutions for industrial quality control, from dataset strategy through deployment and monitoring.",
        "Create annotation guidelines, labeling workflows, QA checks, and model training pipelines for robust defect detection and OCR systems.",
        "Develop and maintain production ML workflows using YOLO, DETR, Mask R-CNN, preprocessing, post-processing, reporting, and client integration.",
      ],
    },
    {
      company: "Upwork",
      title: "Freelance AI Engineer",
      dateRange: "2025 - Present",
      focus: "Production AI Systems Across Vision, Automation, and Decision Support",
      bullets: [
        "Build AI automation systems with LangGraph, FastAPI, schema validation, human review, Redis/Celery execution, and trace visibility.",
        "Deliver computer vision systems for sports analytics, architecture plan auditing, medical imaging, and manufacturing workflows.",
        "Create workflow automation demos with n8n, AI qualification endpoints, CRM-style logging, editor review paths, and scheduling payloads.",
      ],
    },
    {
      company: "Emumba (Pvt) Ltd",
      title: "Software Engineer",
      dateRange: "Mar 2022 - Nov 2022",
      focus: "Full-Stack Development & DevOps",
      bullets: [
        "Built production features and responsive React/TypeScript interfaces with maintainable frontend architecture.",
        "Implemented CI/CD pipelines using GitHub Actions to improve deployment reliability and iteration speed.",
        "Translated design systems into pixel-accurate UI using Material UI, Ant Design, hooks, context, and reducers.",
      ],
    },
    {
      company: "Floreat Enterprises",
      title: "Managing Partner",
      dateRange: "2020 - 2025",
      focus: "Business Operations & Strategic Management",
      bullets: [
        "Directed operations, sales strategy, inventory management, client communication, and export delivery for a surgical instruments business.",
        "Introduced structured sales tracking, inventory analytics, and cost analysis frameworks to improve financial visibility.",
        "Developed practical understanding of KPIs, margins, pricing, and operational bottlenecks that informs AI and analytics work.",
      ],
    },
    {
      company: "TUKL-NUST R&D Centre",
      title: "Machine Learning Research Assistant",
      dateRange: "May 2019 - Jul 2019",
      focus: "Computer Vision Research & Prototyping",
      bullets: [
        "Researched machine learning and computer vision methods for medical image analysis, CNN architectures, and transfer learning.",
        "Developed a prototype for automated skin cancer classification using CNNs and public dermatology datasets.",
      ],
    },
  ],
  education: [
    {
      school: "National University of Sciences and Technology (NUST)",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2016 - 2020",
      achievements: [
        "Final Year Project: Skin Disease Identification using Convolutional Neural Networks",
      ],
    },
  ],
  certifications: [
    "Machine Learning Specialization",
    "MERN Stack Full Ecommerce Site - React, Redux, Node.js",
    "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    "Microsoft Office Specialist Master Certification",
  ],
};
