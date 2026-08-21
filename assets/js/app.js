const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdenbzwa";

const CONTENT = {
  fr: {
    meta: { title: "Claire Favre — Portfolio Cybersécurité" },

    nav: {
      brandName: "Claire Favre",
      brandExt: ".sec",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      certifications: "Certifications",
      timeline: "Expérience",
      contact: "Contact",
      cvLabel: "Télécharger mon CV",
    },

    hero: {
      boot: [
        "$ whoami",
        "> 3 ans en développement logiciel",
        "> transition vers la cybersécurité défensive",
      ],
      titleLine1: "Du développement logiciel",
      titleLine2: "à la cybersécurité.",
      subtitle:
        "Je mets 3 ans d'expérience en développement au service de la détection et de la réponse à incident. Mon portfolio contient des labs, writeups et outils, documentés et publiés au fil de ma progression.",
      ctaPrimary: "Voir les projets",
      ctaSecondary: "Me contacter",
      profile: {
        id: "ID",
        idValue: "ANALYST-0001",
        role: "FOCUS ACTUEL",
        roleValue: "Cybersécurité défensive - SOC Détection & Investigation",
        background: "BACKGROUND",
        backgroundValue: "3 ans  - Développement logiciel",
        status: "STATUT",
        statusValue: "ACTIVE - à l'écoute d'opportunités",
        focus: "TRAJECTOIRE",
        focusValue: "SOC → IR / DFIR / CERT",
      },
    },

    about: {
      eyebrow: "// à propos",
      title: "Qui je suis",
      paragraphs: [
        "Après <strong>3 ans en tant que développeuse</strong>, je me reconvertis vers la cybersécurité défensive, avec pour objectif intégrer une équipe SOC en tant qu'<strong>Analyste</strong> ou <strong>Detection Engineer</strong>, puis évoluer vers la réponse à incident et l'investigation numérique (<strong>IR / DFIR / CERT</strong>).",
        "Mon expérience en développement est un atout direct pour cette transition : capacité à développer des outils internes, à créer des scripts d'automatisation selon le besoin, lecture de logs applicatifs, gestion de la documentation techniques.",
        "Cette page rassemble mes différents projets techniques, répartis sur plusieurs dépôts GitHub, et donne une vue d'ensemble de ma progression et de mes compétences.",
      ],
    },

    skills: {
      eyebrow: "// compétences",
      title: "Compétences techniques",
      subtitle: "",
      categories: [
        {
          name: "Detection Engineering",
          items: ["Sigma", "YARA","Suricata", "Splunk SPL","MITRE ATT&CK"],
        },
        {
          name: "SIEM & Gestion des logs",
          items: ["Splunk", "Dashboards", "Investigation", "Windows Event Logs", "Sysmon", "Rsyslog", "journald", "Auditd"]
        },
        {
          name: "Network Security & Traffic Analysis",
          items: ["Zeek", "Modèle TCP/IP", "Wireshark", "tcpdump", "DNS", "TCP", "TLS", "HTTP", "QUIC"]
        },
        {
          name: "Développement logiciel",
          items: ["Développement d'outils internes", "automatisation", "Python", "Bash", "Java", "Spring Boot", "Angular", "SQL", "Oracle", "Mulesoft", "Dataweave"],
        },
        {
          name: "Sécurité offensive",
          items: ["Méthodologie de pentest", "Reconnaissance", "Recherche de vulnérabilités", "Exploitation", "Escalade de privilèges", "Nmap", "BurpSuite", "Gobuster", "Hydra", "Sqlmap", "SMBClient", "Mimikatz"],
        },
        {
          name: "Reverse Engineering & Malware (Montée en compétence en cours)",
          items: ["Analyse statique et dynamique", "Ghidra", "x64dbg", "gdb", "Extraction d'IOCs", "YARA"],
        },
        {
          name: "Environnement & outils",
          items: ["Git", "Gitlab/Github", "Windows", "Linux", "VirtualBox", "Jenkins", "Docker"],
        },
      ],
    },

    projects: {
      eyebrow: "// projets",
      title: "Projets",
      subtitle: "Chaque projet est disponible sur un repository GitHub, et est alimenté au fil de ma progression.",
      viewRepo: "Voir le repo",
      comingSoon: "Repo bientôt disponible",
      objectiveLabel: "Objectif",
      skillsLabel: "Compétences acquises",
      statusLabels: { active: "Actif", completed: "Terminé", planned: "À venir" },
      items: [
        {
          status: "active",
          title: "Lab SOC - Detection Engineering & Incident Investigation",
          description: "Mise en place d'un environnement SOC, avec ingestion de logs Windows et Linux dans un SIEM Splunk, normalisation des champs, écriture de règles de détection au format Sigma, création d'alertes et de dashboards Splunk, puis lancement de scénarios d'attaque simulés et investigation des incidents remontés.",
          objective: "Comprendre et reproduire le fonctionnement d'une chaîne de détection SOC de bout en bout, en particulier l'ingestion des logs, la remontée d'alertes, et l'investigation.",
          skills: [
            "Lecture et corrélation de logs Windows (Windows Event Logs, Sysmon), Ubuntu (Rsyslog, Auditd)",
            "Monitoring réseau et investigation de captures réseau (Suricata, zeek, Wireshark, tcpdump)",
            "Écriture de règles de détection (Sigma) basées sur les Techniques et Tactics de la matrice Entreprise MITRE ATT&CK",
            "Création d'un outil custom Python pour automatiser l'écriture des recherches Splunk à partir des règles de détection Sigma",
            "Utilisation d'un SIEM Splunk (ingestion et normalisation de logs, recherches, alertes, dashboards)",
            "Simulation et investigation de comportements malveillants, sur Linux et Windows (reconnaissance, accès Initial, élévation de privilèges, mouvement latéral, exfiltration)",
            "Investigation d'un événement de phishing",
            "Création d'un beacon Command-and-Control simple (Python) et détection et analyse du comportement réseau suspect associé",
            "Simulation et investigation d'événements catégorisés comme faux positifs"
          ],
          tags: ["SIEM", "Splunk", "Sysmon", "Auditd", "YARA", "Sigma", "MITRE ATT&CK", "Python"],
          link: "https://github.com/w4phty/SOC-Lab",
        },
        {
          status: "completed",
          title: "Analyse réseau: investigation du traffic généré par Github avec Wireshark",
          description: "Analyse détaillée du traffic générée suite au chargement de la page web github.com. L'analyse suit le traffic depuis la résolution DNS, aux connections TCP/TLS et QUIC établies, et permet également d'identifier le traffic autre sur le réseau local.",
          objective: "Comprendre les protocoles principaux de manière approffondie, l'établissement des connections et quelles metadata sont observables.",
          skills: [
            "Lecture et filtrage de captures Wireshark",
            "Compréhension du modèle TCP/IP",
            "Analyse des queries DNS et utilisation des réponses pour suivre la suite du flux",
            "Suivre un flux TCP/TLS pour l'établissement de la connection et l'échange de données",
            "Suivre un flux QUIC/TLS pour l'établissement de la connection et l'échange de données",
            "Compréhension des limites d'une analyse réseau, sans les secrets de session"
          ],
          tags: ["Wireshark", "TCP/IP", "DNS", "TCP", "UDP", "TLS", "QUIC", "ARP", "ICMP"],
          link: "https://github.com/w4phty/Network-Traffic-Analysis",
        },
        {
          status: "active",
          title: "CTF Writeups - Boot-to-root & Low-level security",
          description: "Writeups détaillés de challenges de type CTF (Capture The Flag). Pour les challenges de type boot-to-root, explication de la méthodologie complète avec la reconnaissance, l'exploitation, l'élévation de privilèges. Pour les challenges type reverse engineering et pwn, détail de l'analyse statique et dynamique, explication du patch ou de l'exploit. Pour chaque chaque challenge, le raisonnement est détaillé pas à pas jusqu'à la résolution.",
          objective: "Comprendre le raisonnement offensif pour mieux anticiper et détecter les attaques côté défense. Acquérir les bases de la sécurité bas niveau via l'analyse dynamique et statique sur des challenges faits pour l'apprentissage.",
          skills: [
            "Méthodologie de pentest (reconnaissance, énumération, exploitation, élévation de privilèges)",
            "Utilisation d'outils offensifs courants",
            "Lecture de l'assembleur",
            "Analyse statique et dynamique de binaires",
            "Capacité à créer un exploit fonctionnel pour exploiter une vulnérabilité trouvée dans un binaire",
          ],
          tags: ["TryHackMe", "HackTheBox", "Pentest", "Reverse Engineering", "Exploit"],
          link: "https://github.com/w4phty/CTF-writeups",
        },
        {
          status: "planned",
          title: "Lab Malware Analysis",
          description: "Lab d'analyse de malwares en environnement isolé, avec un focus sur Windows: analyse statique et dynamique d'échantillons, extraction d'IOCs, rédaction d'un rapport d'analyse type.",
          objective: "Être capable d'analyser un échantillon suspect et d'en extraire des indicateurs exploitables.",
          skills: [
            "Sandboxing et isolation d'environnement",
            "Analyse statique et dynamique de malware",
            "Extraction d'IOCs",
            "Ecriture de règles de détection YARA",
            "Rédaction de rapport d'incident",
          ],
          tags: ["Malware Analysis", "IOC", "YARA", "x64dbg", "Ghidra"],
          link: null,
        },
      ],
    },

    certifications: {
      eyebrow: "// certifications",
      title: "Formations & Certifications",
      subtitle: "Feuille de route de mon parcours, regroupant certifications et formations, terminées et en cours.",
      statusLabels: { done: "Obtenue", progress: "En cours", planned: "Planifiée" },
      items: [
        { name: "Formation en cybersécurité défensive en autonomie", issuer: "SOC, Detection engineering, Incident response", status: "progress"},
        { name: "Certification DevOps Foundation", issuer: "DevOps Institute", status: "done", date: "2025" },
        { name: "Certification Mulesoft Developer Level 1", issuer: "Salesforce", status: "done", date: "2025" },
        { name: "Certification Junior Penetration Tester", issuer: "TryHackMe", status: "done", date: "2023" },
        { name: "Formation Infrastructure et production", issuer: "Solutec, Lyon", status: "done", date: "2023" },
        { name: "Ingénieure Génie de l'Eau et de l'Environnement", issuer: "ENSIL-ENSCI, Limoges",  status: "done", date: "2019-2022" },
        { name: "Classe préparatoire PCSI-PC", issuer: "Lycée Pierre de Fermat, Toulouse",  status: "done", date: "2017-2019" },
        { name: "Baccalauréat Scientifique", issuer: "Lycée Les Chartreux, Lyon", status: "done", date: "2017" },
      ],
    },

    timeline: {
      eyebrow: "// experience",
      title: "Expérience professionelle",
      items: [
        {
          period: "Depuis 08/2025",
          role: "Développeuse logiciel",
          org: "CGI, Avignon",
          description: "Développement de solutions middleware avec Mulesoft. Conception technique, développement, mappings de données. Connexions à différents systèmes de données: SAP, Salesforce, Oracle. Missions pour différents clients. Sensibilisation OWASP auprès du personnel de l'agence d'Avignon.",
        },
        {
          period: "10/2023 - 07/2025",
          role: "Développeuse fullstack",
          org: "CGI, Limoges",
          description: "Développement web sur 2 applications web, conception technique, écriture des tests unitaires et d'assemblage. Réalisation de migrations techniques, rédaction de documentation technique, débuggage avancé. Démonstrations régulières auprès du personnel non technique.",
        },
        {
          period: "02/2023 - 09/2023",
          role: "Ingénieure IT",
          org: "Solutec, Lyon",
          description: "Développement full-stack d'une application web (Java SpringBoot, PostgreSQL, API Rest, Angular). Mission consulting pour Enedis: gestion des demandes d'ouvertures et de modifications de flux applicatifs. Développement d'un outil interne d'automatisation (Python).",
        }
      ],
    },

    contact: {
      eyebrow: "// contact",
      title: "Me contacter",
      text: "Je suis ouverte aux opportunités SOC Analyst / Detection Engineer, et à toute discussion autour de la cybersécurité défensive.",
      emailLabel: "Email",
      emailValue: "claire.favre42@gmail.com",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      cvLabel: "Télécharger mon CV",
      form: {
        nameLabel: "Nom",
        emailLabel: "Votre email",
        messageLabel: "Message",
        submitLabel: "Envoyer",
        sendingLabel: "Envoi en cours…",
        success: "Message envoyé, merci ! Je vous réponds rapidement.",
        error: "Un problème est survenu à l'envoi. Vous pouvez me contacter directement via le bouton Email ci-dessus.",
      },
    },

    footer: {
      text: "© 2026 Claire Favre - hébergé sur GitHub Pages.",
    },
  },

  en: {
    meta: { title: "Claire Favre — Cybersecurity Portfolio" },

    nav: {
      brandName: "Claire Favre",
      brandExt: ".sec",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      timeline: "Experience",
      contact: "Contact",
      cvLabel: "Download my CV",
    },

    hero: {
      boot: [
        "$ whoami",
        "> 3 years in software development",
        "> transitioning to defensive cybersecurity",
      ],
      titleLine1: "From software development",
      titleLine2: "to cybersecurity.",
      subtitle:
        "I'm putting 3 years of development experience to work in detection and incident response. My portfolio contains labs, writeups and tools, documented and published as I go.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
      profile: {
        id: "ID",
        idValue: "ANALYST-0001",
        role: "CURRENT FOCUS",
        roleValue: "Defensive security - SOC Detection & Investigation",
        background: "BACKGROUND",
        backgroundValue: "3 years - Software development",
        status: "STATUS",
        statusValue: "ACTIVE - open to opportunities",
        focus: "TRAJECTORY",
        focusValue: "SOC → IR / DFIR / CERT",
      },
    },

    about: {
      eyebrow: "// about",
      title: "Who I am",
      paragraphs: [
        "After <strong>3 years as a software developer</strong>, I'm moving into defensive cybersecurity, with a clear goal: join a SOC team as an <strong>Analyst</strong> or <strong>Detection Engineer</strong>, then move toward digital forensics and incident response (<strong>IR / DFIR / CERT</strong>).",
        "My background as a developer is a direct asset for this transition: ability to develop internal tools, to create automation scripts, to read application logs, and to manage technical documentation.",
        "This page brings together my technical projects, spread across several GitHub repositories, into one coherent view of my progress and skills.",
      ],
    },

    skills: {
      eyebrow: "// skills",
      title: "Technical skills",
      subtitle: "",
      categories: [
        {
          name: "Detection Engineering",
          items: ["Sigma", "YARA","Suricata", "Splunk SPL","MITRE ATT&CK"],
        },
        {
          name: "SIEM & Log management",
          items: ["Splunk", "Dashboards", "Investigation", "Windows Event Logs", "Sysmon", "Rsyslog", "journald", "Auditd"]
        },
        {
          name: "Network Security & Traffic Analysis",
          items: ["Zeek", "TCP/IP Model", "Wireshark", "tcpdump", "DNS", "TCP", "TLS", "HTTP", "QUIC"]
        },
        {
          name: "Software development",
          items: ["Internal tool development", "automation", "Python", "Bash", "Java", "Spring Boot", "Angular", "SQL", "Oracle", "Mulesoft", "Dataweave"],
        },
        {
          name: "Offensive security",
          items: ["Pentest Methodology", "Reconnaissance", "Vulnerability discovery", "Exploitation", "Privileges escalation", "Nmap", "BurpSuite", "Gobuster", "Hydra", "Sqlmap", "SMBClient", "Mimikatz"],
        },
        {
          name: "Reverse Engineering & Malware Analysis (Currently learning)",
          items: ["Static and dynamic analysis", "Ghidra", "x64dbg", "gdb", "IOCs extraction", "YARA"],
        },
        {
          name: "Environment & tools",
          items: ["Git", "Gitlab/Github", "Windows", "Linux", "VirtualBox", "Jenkins", "Docker"],
        },
      ],
    },

    projects: {
      eyebrow: "// projects",
      title: "Projects",
      subtitle: "Each project is available on a GitHub repository, updated as I make progress.",
      viewRepo: "View repository",
      comingSoon: "Repo coming soon",
      objectiveLabel: "Goal",
      skillsLabel: "Skills gained",
      statusLabels: { active: "Active", completed: "Completed", planned: "Planned" },
      items: [
        {
          status: "active",
          title: "SOC Lab — Detection Engineering & Incident Investigation",
          description: "This project involved setting up a SOC environment with Windows and Linux log ingestion into a Splunk SIEM, including field normalization, Sigma-based detection rule development, alert and dashboard creation, followed by simulated attack scenarios and investigation of the resulting incidents.",
          objective: "Understand and reproduce an end-to-end SOC detection workflow, with a particular focus on log ingestion, alert generation, and incident investigation.",
          skills: [
            "Analysis and correlation of Windows logs (Windows Event Logs, Sysmon) and Ubuntu logs (Rsyslog, Auditd)",
            "Network monitoring and packet capture analysis using Suricata, Zeek, Wireshark, and tcpdump",
            "Development of Sigma detection rules based on techniques and tactics from the MITRE ATT&CK Enterprise Matrix",
            "Development of a custom Python tool to automate the Splunk searches generation from Sigma detection rules",
            "Hands-on experience with Splunk SIEM, including log ingestion and normalization, searches, alerts, and dashboards",
            "Simulation and investigation of malicious activity on Linux and Windows, including reconnaissance, initial access, privilege escalation, lateral movement, and exfiltration",
            "Investigation of a phishing event",
            "Development of a basic Python Command-and-Control (C2) beacon, followed by detection and analysis of the associated suspicious network activity",
            "Simulation and investigation of events categorized as false positives"
          ],
          tags: ["SIEM", "Splunk", "Sysmon", "Auditd", "YARA", "Sigma", "MITRE ATT&CK", "Python"],
          link: "https://github.com/w4phty/SOC-Lab",
        },
        {
          status: "completed",
          title: "Network Analysis: Investigating GitHub traffic using Wireshark",
          description: "This project focused on a detailed analysis of the network traffic generated when loading the github.com website. The analysis followed the traffic from DNS resolution through the establishment of TCP/TLS and QUIC connections, while also identifying other network traffic observed on the local network.",
          objective: "Develop a deeper understanding of key network protocols, how connections are established, and which types of metadata can be observed during network traffic analysis.",
          skills: [
            "Reading, filtering, and analyzing Wireshark packet captures",
            "Understanding of the TCP/IP model",
            "Analysis of DNS queries and use of DNS responses to follow subsequent network flows",
            "Following TCP/TLS streams to analyze connection establishment and data exchange",
            "Following QUIC/TLS streams to analyze connection establishment and data exchange",
            "Understanding the limitations of network traffic analysis without access to session secrets"
          ],
          tags: ["Wireshark", "TCP/IP", "DNS", "TCP", "UDP", "TLS", "QUIC", "ARP", "ICMP"],
          link: "https://github.com/w4phty/Network-Traffic-Analysis",
        },
        {
          status: "active",
          title: "CTF Writeups - Boot-to-root & Low-level security",
          description: "This project consists of detailed writeups for Capture The Flag (CTF) challenges. For boot-to-root challenges, the writeups cover the full methodology, including reconnaissance, enumeration, exploitation, and privilege escalation. For reverse engineering and pwn challenges, they cover both static and dynamic analysis, along with an explanation of the identified vulnerability, patch, or exploit. For each challenge, the reasoning and methodology are documented step by step, from initial analysis to successful completion.",
          objective: "Develop an offensive security mindset to better understand and anticipate attack techniques from a defensive perspective. Build a strong foundation in low-level security through static and dynamic analysis of intentionally vulnerable binaries designed for learning.",
          skills: [
            "Penetration testing methodology, including reconnaissance, enumeration, exploitation, and privilege escalation",
            "Use of common offensive security tools",
            "Assembly language analysis and reading",
            "Static and dynamic analysis of binaries",
            "Ability to develop functional exploits to leverage vulnerabilities identified in binaries"
          ],
          tags: ["TryHackMe", "HackTheBox", "Pentest", "Reverse Engineering", "Exploit"],
          link: "https://github.com/w4phty/CTF-writeups",
        },
        {
          status: "planned",
          title: "Malware Analysis Lab",
          description: "Malware analysis lab in an isolated environment, with a focus on Windows: static and dynamic analysis of samples, extraction of IOCs, and writing of a standard malware analysis report.",
          objective: "Be able to analyze a suspicious sample and extract actionable indicators.",
          skills: [
            "Sandboxing and environment isolation",
            "Static and dynamic malware analysis",
            "IOC extraction",
            "Writing YARA detection rules",
            "Incident report writing"
          ],
          tags: ["Malware Analysis", "IOC", "YARA", "x64dbg", "Ghidra"],
          link: null,
        },
      ],
    },

    certifications: {
      eyebrow: "// certifications",
      title: "Certifications & Training",
      subtitle: "Roadmap of my learning journey, including completed and ongoing certifications and training.",
      statusLabels: { done: "Obtained", progress: "In progress", planned: "Planned" },
      items: [
        { name: "Defensive cybersecurity learning", issuer: "SOC, Detection engineering, Incident response", status: "progress"},
        { name: "DevOps Foundation Certification", issuer: "DevOps Institute", status: "done", date: "2025" },
        { name: "Mulesoft Developer Level 1 Certification", issuer: "Salesforce", status: "done", date: "2025" },
        { name: "Junior Penetration Tester Certification", issuer: "TryHackMe", status: "done", date: "2023" },
        { name: "Infrastructure and production", issuer: "Solutec, Lyon", status: "done", date: "2023" },
        { name: "Water and Environment Engineer", issuer: "ENSIL-ENSCI, Limoges",  status: "done", date: "2019-2022" },
        { name: "PCSI-PC Preparatory Class", issuer: "Lycée Pierre de Fermat, Toulouse",  status: "done", date: "2017-2019" },
        { name: "Scientific Baccalaureate", issuer: "Lycée Les Chartreux, Lyon", status: "done", date: "2017" },
      ],
    },

    timeline: {
      eyebrow: "// experience",
      title: "Experience",
      items: [
        {
          period: "Since 08/2025",
          role: "Software Developer",
          org: "CGI, Avignon",
          description: "Development of middleware solutions using MuleSoft. Technical design, development, and data mapping. Integration with various data systems, including SAP, Salesforce, and Oracle. Projects delivered for multiple clients. OWASP security awareness session for the staff of the Avignon agency.",
        },
        {
          period: "10/2023 - 07/2025",
          role: "Fullstack Developer",
          org: "CGI, Limoges",
          description: "Web development on two web applications using Java, Spring Boot, Angular, PostgreSQL and Oracle, including technical design, unit and integration testing. Implementation of technical migrations, technical documentation, and advanced debugging. Regular demonstrations to non-technical staff.",
        },
        {
          period: "02/2023 - 09/2023",
          role: "IT Engineer",
          org: "Solutec, Lyon",
          description: "Full-stack development of a web application using Java Spring Boot, PostgreSQL, REST APIs, and Angular. Consulting assignment for Enedis, focused on managing requests to open and modify application flows. Development of an internal automation tool using Python.",
        }
      ],
    },

    contact: {
      eyebrow: "// contact",
      title: "Get in touch",
      text: "Open to SOC Analyst / Detection Engineer opportunities, and happy to talk about defensive security more generally.",
      emailLabel: "Email",
      emailValue: "claire.favre42@gmail.com",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      cvLabel: "Download my CV",
      form: {
        nameLabel: "Name",
        emailLabel: "Your email",
        messageLabel: "Message",
        submitLabel: "Send",
        sendingLabel: "Sending…",
        success: "Message sent, thank you! I'll get back to you soon.",
        error: "Something went wrong while sending. You can reach me directly using the Email button above.",
      },
    },

    footer: {
      text: "© 2026 Claire Favre - hosted on GitHub Pages.",
    },
  },
};

let currentLang = "fr";

function setText(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function renderHero(c) {
  const bootEl = document.getElementById("hero-boot");
  bootEl.innerHTML = c.hero.boot
    .map((line, i) => {
      const isPrompt = i === 0;
      return `<span class="boot-line">${isPrompt ? '<span class="prompt">$</span>' : '<span class="prompt">›</span>'} ${escapeHtml(line.replace(/^\$\s*|^>\s*/, ""))}</span>`;
    })
    .join("");

  setText("hero-title-1", c.hero.titleLine1);
  setText("hero-title-2", c.hero.titleLine2);
  setText("hero-subtitle", c.hero.subtitle);
  setText("hero-cta-primary", c.hero.ctaPrimary);
  setText("hero-cta-secondary", c.hero.ctaSecondary);

  const p = c.hero.profile;
  const rows = [
    [p.id, p.idValue, false],
    [p.role, p.roleValue, false],
    [p.background, p.backgroundValue, false],
    [p.status, p.statusValue, true],
    [p.focus, p.focusValue, false],
  ];
  const rowsHtml = rows
    .map(
      ([label, value, isStatus]) => `
      <div class="asset-row">
        <span class="asset-label">${escapeHtml(label)}</span>
        <span class="asset-value${isStatus ? " is-status" : ""}">${isStatus ? '<span class="status-dot"></span>' : ""}${escapeHtml(value)}</span>
      </div>`
    )
    .join("");
  document.getElementById("asset-card-body").innerHTML = rowsHtml;
}

function renderAbout(c) {
  setText("about-eyebrow", c.about.eyebrow);
  setText("about-title", c.about.title);
  document.getElementById("about-paragraphs").innerHTML = c.about.paragraphs.map((p) => `<p>${p}</p>`).join("");
}

function renderSkills(c) {
  setText("skills-eyebrow", c.skills.eyebrow);
  setText("skills-title", c.skills.title);
  setText("skills-subtitle", c.skills.subtitle);
  document.getElementById("skills-grid").innerHTML = c.skills.categories
    .map(
      (cat) => `
      <div class="skill-category">
        <div class="skill-category-name">${escapeHtml(cat.name)}</div>
        <div class="skill-tags">${cat.items.map((i) => `<span class="tag">${escapeHtml(i)}</span>`).join("")}</div>
      </div>`
    )
    .join("");
}

function renderProjects(c) {
  setText("projects-eyebrow", c.projects.eyebrow);
  setText("projects-title", c.projects.title);
  setText("projects-subtitle", c.projects.subtitle);
  document.getElementById("projects-grid").innerHTML = c.projects.items
    .map((item) => {
      const statusLabel = c.projects.statusLabels[item.status] || item.status;
      const linkHtml = item.link
        ? `<a class="project-link" href="${escapeAttr(item.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.projects.viewRepo)} →</a>`
        : `<span class="project-link is-disabled">${escapeHtml(c.projects.comingSoon)}</span>`;
      const skillsHtml = item.skills.map((s) => `<li>${escapeHtml(s)}</li>`).join("");
      return `
      <article class="project-card">
        <div class="project-card-top">
          <h3 class="project-title">${escapeHtml(item.title)}</h3>
          <span class="status-badge" data-status="${item.status}">${escapeHtml(statusLabel)}</span>
        </div>
        <p class="project-desc">${escapeHtml(item.description)}</p>
        <div class="project-block">
          <span class="project-block-label">${escapeHtml(c.projects.objectiveLabel)}</span>
          <p class="project-block-text">${escapeHtml(item.objective)}</p>
        </div>
        <div class="project-block">
          <span class="project-block-label">${escapeHtml(c.projects.skillsLabel)}</span>
          <ul class="project-skills">${skillsHtml}</ul>
        </div>
        <div class="project-tags">${item.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div>
        ${linkHtml}
      </article>`;
    })
    .join("");
}

function renderCertifications(c) {
  setText("certifications-eyebrow", c.certifications.eyebrow);
  setText("certifications-title", c.certifications.title);
  setText("certifications-subtitle", c.certifications.subtitle);
  document.getElementById("cert-list").innerHTML = c.certifications.items
    .map((item) => {
      const label = c.certifications.statusLabels[item.status] || item.status;
      const dateHtml = item.date ? `<span class="cert-date">${escapeHtml(item.date)}</span>` : "";
      return `
      <div class="cert-item">
        <div class="cert-main">
          <span class="cert-name">${escapeHtml(item.name)}</span>
          <span class="cert-issuer">${escapeHtml(item.issuer)}</span>
        </div>
        <div class="cert-status">
          <span class="status-badge" data-status="${item.status}">${escapeHtml(label)}</span>
          ${dateHtml}
        </div>
      </div>`;
    })
    .join("");
}

function renderTimeline(c) {
  setText("timeline-eyebrow", c.timeline.eyebrow);
  setText("timeline-title", c.timeline.title);
  document.getElementById("timeline-list").innerHTML = c.timeline.items
    .map(
      (item) => `
      <div class="timeline-item">
        <span class="timeline-period">${escapeHtml(item.period)}</span>
        <div>
          <h3 class="timeline-role">${escapeHtml(item.role)}</h3>
          <div class="timeline-org">${escapeHtml(item.org)}</div>
          <p class="timeline-desc">${escapeHtml(item.description)}</p>
        </div>
      </div>`
    )
    .join("");
}

function renderContact(c) {
  setText("contact-eyebrow", c.contact.eyebrow);
  setText("contact-title", c.contact.title);
  setText("contact-text", c.contact.text);
  setText("contact-email-label", c.contact.emailLabel);
  setText("contact-linkedin-label", c.contact.linkedinLabel);
  setText("contact-github-label", c.contact.githubLabel);
  setText("contact-cv-label", c.contact.cvLabel);

  const emailLink = document.getElementById("contact-email-link");
  if (emailLink) emailLink.href = "mailto:" + c.contact.emailValue;

  setText("cf-name-label", c.contact.form.nameLabel);
  setText("cf-email-label", c.contact.form.emailLabel);
  setText("cf-message-label", c.contact.form.messageLabel);
  setText("cf-submit", c.contact.form.submitLabel);

  const statusEl = document.getElementById("cf-status");
  if (statusEl) {
    statusEl.textContent = "";
    statusEl.className = "form-status";
  }
}

function renderFooter(c) {
  setText("footer-text", c.footer.text);
}

function renderNav(c) {
  setText("brand-name", c.nav.brandName);
  setText("brand-ext", c.nav.brandExt);
  setText("nav-about", c.nav.about);
  setText("nav-skills", c.nav.skills);
  setText("nav-projects", c.nav.projects);
  setText("nav-certifications", c.nav.certifications);
  setText("nav-timeline", c.nav.timeline);
  setText("nav-contact", c.nav.contact);
  setText("nav-cv-label", c.nav.cvLabel);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

function setLanguage(lang) {
  currentLang = lang;
  const c = CONTENT[lang];
  document.documentElement.lang = lang;
  document.title = c.meta.title;

  renderNav(c);
  renderHero(c);
  renderAbout(c);
  renderSkills(c);
  renderProjects(c);
  renderCertifications(c);
  renderTimeline(c);
  renderContact(c);
  renderFooter(c);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const statusEl = document.getElementById("cf-status");
    const submitBtn = document.getElementById("cf-submit");
    const formCopy = CONTENT[currentLang].contact.form;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    submitBtn.disabled = true;
    statusEl.className = "form-status";
    statusEl.textContent = formCopy.sendingLabel;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      statusEl.textContent = formCopy.success;
      statusEl.classList.add("is-success");
      form.reset();
    } catch (err) {
      statusEl.textContent = formCopy.error;
      statusEl.classList.add("is-error");
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* ---------- Mobile nav ---------- */
function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const panel = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const isOpen = panel.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  panel.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      panel.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------- Scroll-spy on nav links ---------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-link");
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("fr");
  initMobileNav();
  initScrollSpy();
  initContactForm();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
});
