export const copy = {
  fr: {
    meta: 'Etienne ZONON — Spécialiste des données, développeur BI et Analytics. Pipelines ETL/ELT, SQL, Power BI et applications React. Ottawa.',
    nav: {
      home: 'Accueil',
      about: 'Profil',
      projects: 'Projets',
      education: 'Formation',
      services: 'Services',
      contact: 'Contact',
      language: 'Langue'
    },
    footer: {
      rights: 'Tous droits réservés.',
      built: 'Portfolio développé avec React'
    },
    home: {
      subtitle: 'Spécialiste des données · Développeur BI & Analytics',
      mission: 'Plus de 6 ans à concevoir, modéliser et automatiser des pipelines de données (ETL/ELT) dans des environnements réglementés, notamment les télécoms. SQL avancé, schémas en étoile et tableaux de bord Power BI, avec un développement applicatif en Python, C#, JavaScript et React. Basé à Ottawa. Français langue maternelle, anglais professionnel.',
      highlights: [
        { label: 'Pipelines ETL / ELT', to: '/services' },
        { label: 'Modélisation en étoile', to: '/services' },
        { label: 'Power BI', to: '/services' },
        { label: 'SQL avancé', to: '/services' },
        { label: 'React & FastAPI', to: '/projects' }
      ],
      services: 'Voir les services',
      profile: 'Voir le profil'
    },
    about: {
      title: 'À propos de moi',
      role: 'Spécialiste des données · Développeur BI & Analytics',
      location: 'Ottawa, Ontario · (343) 558-6485 · Français (langue maternelle) · Anglais professionnel',
      portrait: 'Portrait de Etienne ZONON',
      profileLabel: 'Profil',
      profile: 'Spécialiste des données certifié (DP-700, DP-750, DP-800), avec plus de 6 ans d’expérience dans la conception, la modélisation et l’automatisation de pipelines de données (ETL/ELT), notamment dans les télécoms. Programmation SQL avancée, modélisation dimensionnelle (schéma en étoile) et tableaux de bord Power BI. Je développe aussi des logiciels et des applications (Python, C#, JavaScript, React, HTML/CSS, SSIS) et je travaille avec les équipes techniques et d’affaires pour transformer les données en outils de décision.',
      skillsTitle: 'Compétences',
      skills: [
        ['Bases de données et SQL :', 'PostgreSQL, Oracle T-SQL, mise à jour des structures et des règles d’affaires, SSIS.'],
        ['Modélisation :', 'schéma en étoile, architecture médaillon, notions de Data Vault 2.0.'],
        ['BI et visualisation :', 'rapports et tableaux de bord Power BI (DP-800).'],
        ['Extraction et automatisation :', 'scripts Python et R, requêtes SQL, pipelines d’intégration via API.'],
        ['Développement :', 'Python, C#, JavaScript, React, HTML/CSS, FastAPI.'],
        ['Livraison :', 'Agile/Scrum, Git, Linux. Français langue maternelle, anglais professionnel.']
      ],
      experienceTitle: 'Expérience',
      tools: 'Outils :',
      languages: 'Langues :',
      languagesValue: 'français — langue maternelle · anglais — professionnel',
      download: 'Télécharger mon CV',
      jobs: [
        {
          role: 'Spécialiste de données',
          org: '4ChangeHub — Canada (télétravail)',
          period: 'Août 2025 – Présent',
          points: [
            'Structuration des données dans un environnement infonuagique selon un schéma en étoile, comme base d’analyse et de rapports.',
            'Indexation PostgreSQL et requêtes SQL pour optimiser les flux ; gestion du back-end applicatif avec FastAPI.',
            'Pipelines d’ingestion automatisés à partir d’API, en Python.',
            'Tableaux de bord Power BI branchés sur les données modélisées.',
            'Code versionné sous Git, avec intégration et déploiement continus.'
          ],
          stack: 'PostgreSQL, SQL, Python, FastAPI, Power BI, Git, CI/CD'
        },
        {
          role: 'Lead Data Scientist',
          org: 'Orange Liberia (télétravail)',
          period: 'Oct. 2024 – Avr. 2025',
          points: [
            'Tableaux de bord Power BI pour la haute direction, au service des décisions opérationnelles.',
            'Pipelines SQL et Python de manipulation, de nettoyage et de traitement sur de grands ensembles de données.',
            'Protocoles de détection d’anomalies, avec une baisse de 20 % des erreurs de traitement.'
          ],
          stack: 'Power BI, Python, SQL'
        },
        {
          role: 'Data Scientist — Marketing',
          org: 'Orange Côte d’Ivoire',
          period: 'Janv. 2023 – Sept. 2024',
          points: [
            'Industrialisation d’indicateurs SQL (Oracle T-SQL) et automatisation des flux, avec une réduction de 40 % du temps de traitement.',
            'Suivi et pilotage des résultats dans des tableaux de bord Power BI.',
            'Livraison des projets de données en Agile / Scrum.'
          ],
          stack: 'Oracle T-SQL, Power BI, Agile / Scrum'
        },
        {
          role: 'Data Scientist — Services techniques',
          org: 'Orange Côte d’Ivoire',
          period: 'Déc. 2019 – Déc. 2022',
          points: [
            'Scripts de web scraping pour extraire les indicateurs de performance technique et industrialiser les rapports.',
            'Application interactive en R Flexdashboard qui centralise l’analyse technique et économise une semaine de production manuelle de rapports par cycle.'
          ],
          stack: 'R, R Flexdashboard, Python, web scraping'
        }
      ]
    },
    services: {
      title: 'Services',
      intro: 'Spécialiste des données et développeur BI & Analytics. Je conçois les pipelines, le modèle, les tableaux de bord et, quand il le faut, l’application qui les porte.',
      tools: 'Outils',
      cta: 'Discuter d’un besoin',
      items: [
        { title: 'Pipelines ETL / ELT', description: 'Conception et automatisation de pipelines d’ingestion, de nettoyage et de chargement (Python, API, SSIS) pour des environnements réglementés, dont les télécoms.', icon: '🔄' },
        { title: 'Modélisation de données', description: 'Modèles dimensionnels en schéma en étoile, architecture médaillon et notions de Data Vault 2.0, pour une base fiable d’analyse et de rapports.', icon: '🏗️' },
        { title: 'SQL avancé et bases de données', description: 'PostgreSQL et Oracle T-SQL : structures de tables, règles d’affaires, indexation et requêtes qui accélèrent les flux de données.', icon: '🗄️' },
        { title: 'Tableaux de bord Power BI', description: 'Création, optimisation et maintien de rapports interactifs pour la direction et les équipes métiers (certifications DP-700, DP-750, DP-800).', icon: '📊' },
        { title: 'Qualité des données', description: 'Contrôles, détection d’anomalies et industrialisation des indicateurs. Résultats observés : −20 % d’erreurs de traitement, −40 % de temps de traitement.', icon: '✅' },
        { title: 'Développement web et applicatif', description: 'Applications de l’interface jusqu’à l’API : React, JavaScript, HTML/CSS, Python, FastAPI et C#, avec le code versionné sous Git et livré en CI/CD.', icon: '🧩' },
        { title: 'Ingénierie de données infonuagique', description: 'Entreposage infonuagique et pipelines, appuyés par les certifications Microsoft Fabric (DP-700, DP-800) et Azure Databricks (DP-750).', icon: '☁️' },
        { title: 'Analyse quantitative', description: 'Économétrie, prévision de séries temporelles et modèles prédictifs appliqués à la finance et aux télécoms, à partir d’une formation d’ingénieur statisticien-économiste.', icon: '📈' },
        { title: 'IA générative', description: 'Grands modèles de langage et génération augmentée par recherche, de l’extraction documentaire jusqu’aux assistants de questions-réponses.', icon: '🤖' },
        { title: 'Livraison Agile', description: 'Travail en Scrum avec les équipes techniques et d’affaires, pour traduire les données en outils de décision. Git, Linux, français langue maternelle et anglais professionnel.', icon: '🤝' }
      ]
    },
    projects: {
      title: 'Projets',
      intro: 'Prototypes d’analyse et d’IA, puis une sélection de projets web.',
      role: 'Rôle :',
      outcome: 'Résultat :',
      demo: 'Voir la démo',
      items: [
        {
          title: 'Cadre de modélisation macrofinancière (BRVM Macrofinance Scout)',
          description: 'Fouille de texte et modélisation macroéconomique pour la recherche de marché. Un moteur textuel à base de LLM (Groq / OpenAI) transforme des flux financiers en sentiment structuré, puis plusieurs modèles anticipent les mouvements de marché.',
          role: 'Data Scientist',
          outcome: 'Sentiment net de +0,44 issu du pipeline textuel. La régression linéaire multiple atteint un R² de 0,68 (croissance de la masse monétaire et solidité du capital bancaire), la régression logistique une probabilité de hausse à court terme de 68 %, et une forêt aléatoire une confiance de 73 % sur les régimes de volatilité.'
        },
        {
          title: 'Assistant Telegram agentique et traitement de documents',
          description: 'Assistant conversationnel RAG local et ouvert, avec Ollama et Qdrant, suivi des exécutions dans MLflow, plus un pipeline qui transforme des numérisations non structurées en JSON et Excel validés.',
          role: 'Ingénieur IA',
          outcome: 'Questions-réponses localisées sur des documents privés, et un flux d’extraction avec Qwen2.5-Coder qui vérifie les écarts avant l’export.'
        },
        {
          title: 'Portfolio personnel et vitrine culturelle (Bénin)',
          description: 'Site multipage adaptatif qui présente un parcours personnel et le patrimoine culturel du Bénin.',
          role: 'Développeur web',
          outcome: 'Mise en page adaptative et navigation lisible sur toutes les tailles d’écran.'
        },
        {
          title: 'Application interactive BugSmasher',
          description: 'Interface qui suit les coordonnées des clics et valide les actions de l’utilisateur dans le navigateur.',
          role: 'Développeur front-end',
          outcome: 'Événements DOM, contrôles de saisie et une petite boucle interactive en JavaScript.'
        },
        {
          title: 'Carte interactive des points de vente PS5',
          description: 'Carte visuelle pour situer les points de vente régionaux de PlayStation 5.',
          role: 'Développeur front-end',
          outcome: 'Image cliquable qui relie chaque région à la page d’un détaillant.'
        },
        {
          title: 'Pacific Trails Resort',
          description: 'Site d’hébergement multipage construit selon une maquette visuelle fixe.',
          role: 'Développeur front-end',
          outcome: 'Pages sémantiques, feuille de style partagée et mise en page cohérente entre les sections.'
        },
        {
          title: 'Plateforme de gestion de restaurant',
          description: 'Site de restaurant pour le menu, les commandes, la galerie et le contact, avec un graphique en direct de l’activité.',
          role: 'Développeur full-stack',
          outcome: 'Écrans de commande reliés à l’activité graphique, pour garder menu, commandes et synthèse au même endroit.'
        }
      ]
    },
    education: {
      title: 'Formation et certifications',
      institution: 'Établissement :',
      details: 'Détails :',
      viewProgram: 'Voir le programme',
      viewAttestation: 'Voir l’attestation',
      viewCertificate: 'Voir le certificat',
      items: [
        { title: 'Génie logiciel et intelligence artificielle', institution: 'Collège Centennial, Canada', period: 'Janv. 2026 – Août 2026', credential: 'Python, JavaScript, React, C#, Linux, HTML/CSS et fondements du génie logiciel.', link: 'https://centennialcollege.ca', kind: 'program' },
        { title: 'Maîtrise en science des données et Big Data', institution: 'INP-HB, Côte d’Ivoire', period: 'Sept. 2018 – Déc. 2019', credential: 'International Data Science Institute. Équivalence WES disponible.', link: '/diplome/diploma-IDSI.pdf', kind: 'attestation' },
        { title: 'Ingénieur statisticien-économiste', institution: 'ISSEA, Cameroun', period: 'Sept. 2015 – Juill. 2018', credential: 'Méthodes quantitatives, macroéconomie, modélisation économétrique et prévision. Accent sur la modélisation statistique appliquée à la finance et à l’assurance.', link: '/diplome/ISSEA.pdf', kind: 'attestation' },
        { title: 'Analyste de données', institution: 'NPower Canada', period: '—', credential: 'Programme Analyste de données.', link: 'https://npowercanada.ca', kind: 'program' },
        { title: 'Technicien supérieur en statistiques', institution: 'ENEAM, Université d’Abomey-Calavi, Bénin', period: '2012 – 2013', credential: 'Attestation de diplôme, technicien supérieur en statistiques.', link: '/diplome/ENEAM.pdf', kind: 'attestation' },
        { title: 'Microsoft Certified : Fabric Data Engineer Associate (DP-700)', institution: 'Microsoft', period: '2025', credential: 'Ingénierie de données sur Microsoft Fabric.', link: '/diplome/DP700.pdf', kind: 'certificate' },
        { title: 'Microsoft Certified : Azure Databricks Data Engineer Associate (DP-750)', institution: 'Microsoft', period: '2026', credential: 'Ingénierie de données sur Azure Databricks.', link: '/diplome/DP750.pdf', kind: 'certificate' },
        { title: 'Microsoft Certified : SQL AI Developer Associate (DP-800)', institution: 'Microsoft', period: '2026', credential: 'Solutions de bases de données avec IA.', link: '/diplome/DP800.pdf', kind: 'certificate' },
        { title: 'Microsoft Certified : Azure AI Fundamentals (AI-900)', institution: 'Microsoft', period: '2025', credential: 'Fondamentaux de l’intelligence artificielle.', link: '/diplome/Azure_AI.pdf', kind: 'certificate' },
        { title: 'Advanced Data Science with IBM', institution: 'Coursera / IBM', period: '2022', credential: 'Science des données à l’échelle, apprentissage automatique avancé, apprentissage profond et projet de synthèse.', link: '/diplome/Advanced Data science.pdf', kind: 'certificate' },
        { title: 'Generative AI with Large Language Models', institution: 'Coursera / DeepLearning.AI', period: '2024', credential: 'Grands modèles de langage, avec DeepLearning.AI et AWS.', link: '/diplome/GenAI.pdf', kind: 'certificate' },
        { title: 'Google Project Management & Agile', institution: 'Coursera / Google', period: '2022', credential: 'Gestion de projet Agile.', link: '/diplome/Google_project_management.pdf', kind: 'certificate' },
        { title: 'Certification Scrum Master', institution: 'LearnQuest', period: '2022', credential: 'Livraison Scrum, mise à l’échelle d’Agile et pratiques associées.', link: '/diplome/Scrum_master.pdf', kind: 'certificate' },
        { title: 'IBM Data Analyst Professional Certificate', institution: 'Coursera / IBM', period: '2025', credential: 'Analyse de données avec Excel, SQL, Python et tableaux de bord.', link: '/diplome/Data_Analyst.pdf', kind: 'certificate' }
      ]
    },
    contact: {
      title: 'Contact',
      email: 'Courriel :',
      phone: 'Téléphone :',
      location: 'Lieu :',
      firstName: 'Prénom *',
      lastName: 'Nom *',
      phoneField: 'Téléphone',
      emailField: 'Courriel *',
      message: 'Message *',
      send: 'Envoyer'
    }
  },
  en: {
    meta: 'Etienne ZONON — Data specialist and BI & Analytics developer. ETL/ELT pipelines, SQL, Power BI, and React applications. Ottawa.',
    nav: {
      home: 'Home',
      about: 'Profile',
      projects: 'Projects',
      education: 'Education',
      services: 'Services',
      contact: 'Contact',
      language: 'Language'
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Portfolio built with React'
    },
    home: {
      subtitle: 'Data Specialist · BI & Analytics Developer',
      mission: 'More than 6 years designing, modeling, and automating data pipelines (ETL/ELT) in regulated environments, including telecom. Advanced SQL, star schemas, and Power BI dashboards, together with application development in Python, C#, JavaScript, and React. Based in Ottawa. French is my first language, and I work in professional English.',
      highlights: [
        { label: 'ETL / ELT pipelines', to: '/services' },
        { label: 'Star-schema modeling', to: '/services' },
        { label: 'Power BI', to: '/services' },
        { label: 'Advanced SQL', to: '/services' },
        { label: 'React & FastAPI', to: '/projects' }
      ],
      services: 'View services',
      profile: 'View profile'
    },
    about: {
      title: 'About me',
      role: 'Data Specialist · BI & Analytics Developer',
      location: 'Ottawa, Ontario · (343) 558-6485 · French (native) · Professional English',
      portrait: 'Portrait of Etienne ZONON',
      profileLabel: 'Profile',
      profile: 'Certified data specialist (DP-700, DP-750, DP-800) with more than 6 years designing, modeling, and automating data pipelines (ETL/ELT), including in telecom. Advanced SQL, dimensional modeling (star schema), and Power BI dashboards. I also build software and applications (Python, C#, JavaScript, React, HTML/CSS, SSIS) and work with technical and business teams to turn data into decision tools.',
      skillsTitle: 'Skills',
      skills: [
        ['Databases and SQL:', 'PostgreSQL, Oracle T-SQL, table structures and business rules, SSIS.'],
        ['Modeling:', 'star schema, medallion architecture, and Data Vault 2.0 concepts.'],
        ['BI and visualization:', 'Power BI reports and dashboards (DP-800).'],
        ['Extraction and automation:', 'Python and R scripts, SQL queries, and API integration pipelines.'],
        ['Development:', 'Python, C#, JavaScript, React, HTML/CSS, FastAPI.'],
        ['Delivery:', 'Agile/Scrum, Git, Linux. Native French and professional English.']
      ],
      experienceTitle: 'Experience',
      tools: 'Tools:',
      languages: 'Languages:',
      languagesValue: 'French — native · English — professional',
      download: 'Download my resume',
      jobs: [
        {
          role: 'Data Specialist',
          org: '4ChangeHub — Canada (remote)',
          period: 'Aug. 2025 – Present',
          points: [
            'Structured cloud data in a star schema as the base for analysis and reporting.',
            'PostgreSQL indexing and SQL queries to speed up data flows, plus the application back end with FastAPI.',
            'Automated API ingestion pipelines in Python.',
            'Power BI dashboards connected to the modeled data.',
            'Code versioned in Git, with continuous integration and delivery.'
          ],
          stack: 'PostgreSQL, SQL, Python, FastAPI, Power BI, Git, CI/CD'
        },
        {
          role: 'Lead Data Scientist',
          org: 'Orange Liberia (remote)',
          period: 'Oct. 2024 – Apr. 2025',
          points: [
            'Power BI dashboards for senior management, in support of operational decisions.',
            'SQL and Python pipelines to manipulate, clean, and process large datasets.',
            'Anomaly-detection protocols that cut processing errors by 20%.'
          ],
          stack: 'Power BI, Python, SQL'
        },
        {
          role: 'Data Scientist — Marketing',
          org: 'Orange Côte d’Ivoire',
          period: 'Jan. 2023 – Sept. 2024',
          points: [
            'Industrialized SQL indicators (Oracle T-SQL) and automated flows, cutting processing time by 40%.',
            'Tracked results in Power BI dashboards.',
            'Delivered data projects with Agile / Scrum.'
          ],
          stack: 'Oracle T-SQL, Power BI, Agile / Scrum'
        },
        {
          role: 'Data Scientist — Technical Services',
          org: 'Orange Côte d’Ivoire',
          period: 'Dec. 2019 – Dec. 2022',
          points: [
            'Web-scraping scripts that pulled technical performance indicators and industrialized the reports.',
            'An interactive R Flexdashboard that centralized technical analysis and saved one week of manual report production per cycle.'
          ],
          stack: 'R, R Flexdashboard, Python, web scraping'
        }
      ]
    },
    services: {
      title: 'Services',
      intro: 'Data specialist and BI & Analytics developer. I design the pipelines, the model, the dashboards, and, when needed, the application that carries them.',
      tools: 'Tools',
      cta: 'Discuss a need',
      items: [
        { title: 'ETL / ELT pipelines', description: 'Design and automation of ingestion, cleaning, and loading pipelines (Python, APIs, SSIS) for regulated environments, including telecom.', icon: '🔄' },
        { title: 'Data modeling', description: 'Dimensional models in a star schema, medallion architecture, and Data Vault 2.0 concepts, as a reliable base for analysis and reporting.', icon: '🏗️' },
        { title: 'Advanced SQL and databases', description: 'PostgreSQL and Oracle T-SQL: table structures, business rules, indexing, and queries that speed up data flows.', icon: '🗄️' },
        { title: 'Power BI dashboards', description: 'Interactive reports for leadership and business teams, built, tuned, and maintained (DP-700, DP-750, DP-800).', icon: '📊' },
        { title: 'Data quality', description: 'Checks, anomaly detection, and industrialized indicators. Observed results: 20% fewer processing errors and 40% less processing time.', icon: '✅' },
        { title: 'Web and application development', description: 'Applications from the interface to the API: React, JavaScript, HTML/CSS, Python, FastAPI, and C#, versioned in Git and shipped with CI/CD.', icon: '🧩' },
        { title: 'Cloud data engineering', description: 'Cloud warehousing and pipelines, backed by the Microsoft Fabric (DP-700, DP-800) and Azure Databricks (DP-750) certifications.', icon: '☁️' },
        { title: 'Quantitative analysis', description: 'Econometrics, time-series forecasting, and predictive models for finance and telecom, from a statistician-economist engineering background.', icon: '📈' },
        { title: 'Generative AI', description: 'Large language models and retrieval-augmented generation, from document extraction to question-answering assistants.', icon: '🤖' },
        { title: 'Agile delivery', description: 'Scrum work with technical and business teams, turning data into decision tools. Git, Linux, native French, and professional English.', icon: '🤝' }
      ]
    },
    projects: {
      title: 'Projects',
      intro: 'Analysis and AI prototypes, then a selection of web projects.',
      role: 'Role:',
      outcome: 'Outcome:',
      demo: 'View demo',
      items: [
        {
          title: 'Macrofinancial Modeling Framework (BRVM Macrofinance Scout)',
          description: 'Automated text mining and macroeconomic modeling for market research. A text engine using LLMs (Groq / OpenAI) turns financial feeds into structured sentiment, then several models forecast market moves.',
          role: 'Data Scientist',
          outcome: 'Net sentiment of +0.44 from the text pipeline. Multiple linear regression reached an R² of 0.68 (money-supply growth and bank capital strength), logistic regression a 68% short-term up-probability, and a random forest a 73% confidence on volatility regimes.'
        },
        {
          title: 'Agentic AI Telegram Assistant & Document Processor',
          description: 'A local, open-source RAG conversational assistant using Ollama and Qdrant, with run tracking in MLflow, plus a document pipeline that turns unstructured scans into validated JSON and Excel.',
          role: 'AI Engineer',
          outcome: 'Localized question answering over private documents, and an extraction flow with Qwen2.5-Coder that checks discrepancies before export.'
        },
        {
          title: 'Personal Portfolio & Cultural Showcase (Benin)',
          description: 'A multi-page responsive site introducing a personal background and the cultural heritage of Benin.',
          role: 'Web Developer',
          outcome: 'Responsive layout and clear navigation that stay readable across screen sizes.'
        },
        {
          title: 'BugSmasher Interactive App',
          description: 'An interactive front end that tracks click coordinates and validates user actions in the browser.',
          role: 'Front-End Developer',
          outcome: 'DOM events, input checks, and a small interactive loop implemented in plain JavaScript.'
        },
        {
          title: 'PS5 Interactive Location Map',
          description: 'A visual map for plotting regional PlayStation 5 retail locations.',
          role: 'Front-End Developer',
          outcome: 'Image-map interaction that links each region to a retailer page.'
        },
        {
          title: 'Pacific Trails Resort',
          description: 'A multi-page hospitality site built to a fixed visual specification.',
          role: 'Front-End Developer',
          outcome: 'Semantic pages with a shared stylesheet and a consistent layout across the resort sections.'
        },
        {
          title: 'Restaurant Management Platform',
          description: 'A multi-page restaurant site for the menu, orders, gallery, and contact flow, with live charting of order activity.',
          role: 'Full-Stack Developer',
          outcome: 'Connected ordering screens to charted activity so the menu, orders, and summary stay in one place.'
        }
      ]
    },
    education: {
      title: 'Education & certifications',
      institution: 'Institution:',
      details: 'Details:',
      viewProgram: 'View program',
      viewAttestation: 'View attestation',
      viewCertificate: 'View certificate',
      items: [
        { title: 'Software Engineering and Artificial Intelligence', institution: 'Centennial College, Canada', period: 'Jan. 2026 – Aug. 2026', credential: 'Python, JavaScript, React, C#, Linux, HTML/CSS, and software engineering foundations.', link: 'https://centennialcollege.ca', kind: 'program' },
        { title: 'Master’s in Data Science and Big Data', institution: 'INP-HB, Côte d’Ivoire', period: 'Sept. 2018 – Dec. 2019', credential: 'International Data Science Institute. WES equivalency available.', link: '/diplome/diploma-IDSI.pdf', kind: 'attestation' },
        { title: 'Statistician-Economist Engineer', institution: 'ISSEA, Cameroon', period: 'Sept. 2015 – July 2018', credential: 'Quantitative methods, macroeconomics, econometric modeling, and forecasting. Focus on statistical modeling applied to finance and insurance.', link: '/diplome/ISSEA.pdf', kind: 'attestation' },
        { title: 'Data Analyst', institution: 'NPower Canada', period: '—', credential: 'Data Analyst program.', link: 'https://npowercanada.ca', kind: 'program' },
        { title: 'Senior Statistics Technician', institution: 'ENEAM, Université d’Abomey-Calavi, Benin', period: '2012 – 2013', credential: 'Diploma attestation, senior statistics technician.', link: '/diplome/ENEAM.pdf', kind: 'attestation' },
        { title: 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)', institution: 'Microsoft', period: '2025', credential: 'Data engineering on Microsoft Fabric.', link: '/diplome/DP700.pdf', kind: 'certificate' },
        { title: 'Microsoft Certified: Azure Databricks Data Engineer Associate (DP-750)', institution: 'Microsoft', period: '2026', credential: 'Data engineering on Azure Databricks.', link: '/diplome/DP750.pdf', kind: 'certificate' },
        { title: 'Microsoft Certified: SQL AI Developer Associate (DP-800)', institution: 'Microsoft', period: '2026', credential: 'AI-enabled database solutions.', link: '/diplome/DP800.pdf', kind: 'certificate' },
        { title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)', institution: 'Microsoft', period: '2025', credential: 'Artificial intelligence fundamentals.', link: '/diplome/Azure_AI.pdf', kind: 'certificate' },
        { title: 'Advanced Data Science with IBM', institution: 'Coursera / IBM', period: '2022', credential: 'Scalable data science, advanced machine learning, deep learning, and a capstone.', link: '/diplome/Advanced Data science.pdf', kind: 'certificate' },
        { title: 'Generative AI with Large Language Models', institution: 'Coursera / DeepLearning.AI', period: '2024', credential: 'Large language models, with DeepLearning.AI and AWS.', link: '/diplome/GenAI.pdf', kind: 'certificate' },
        { title: 'Google Project Management & Agile', institution: 'Coursera / Google', period: '2022', credential: 'Agile project management.', link: '/diplome/Google_project_management.pdf', kind: 'certificate' },
        { title: 'Scrum Master Certification', institution: 'LearnQuest', period: '2022', credential: 'Scrum delivery, scaling Agile, and related engineering practices.', link: '/diplome/Scrum_master.pdf', kind: 'certificate' },
        { title: 'IBM Data Analyst Professional Certificate', institution: 'Coursera / IBM', period: '2025', credential: 'Data analysis with Excel, SQL, Python, and dashboards.', link: '/diplome/Data_Analyst.pdf', kind: 'certificate' }
      ]
    },
    contact: {
      title: 'Contact',
      email: 'Email:',
      phone: 'Phone:',
      location: 'Location:',
      firstName: 'First name *',
      lastName: 'Last name *',
      phoneField: 'Phone',
      emailField: 'Email *',
      message: 'Message *',
      send: 'Send'
    }
  }
};
