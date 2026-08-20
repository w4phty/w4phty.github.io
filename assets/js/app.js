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
        roleValue: "Cybersécurité défensive — SOC Détection & Investigation",
        background: "BACKGROUND",
        backgroundValue: "3 ans  — Développement logiciel",
        status: "STATUT",
        statusValue: "ACTIVE — à l'écoute d'opportunités",
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
            "Création d'un script d'automatisation (Python) pour écrire des recherches Splunk à partir des règles de détection Sigma",
            "Utilisation d'un SIEM Splunk (ingestion et normalisation de logs, recherches, alertes, dashboards)",
            "Cartographie des techniques MITRE ATT&CK",
            "Simulation et investigation de comportements malveillants, sur Linux et Windows (reconnaissance, accès Initial, élévation de privilèges, mouvement latéral, exfiltration)",
            "Investigation d'un événement de phishing",
            "Création d'un beacon Command&Control simple (Python) et détection et analyse du comportement réseau suspect associé",
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
          title: "CTF Writeups - Boot-to-root & Low level security",
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
        { name: "Formation en cybersécurité défensive en autonomie", issuer: "SOC, Detection engineering, Incidence response", status: "progress"},
        { name: "Certification DevOps Foundation", issuer: "DevOps Institute", status: "done", date: "2025" },
        { name: "Certification Mulesoft Developer Level 1", issuer: "Salesforce", status: "done", date: "2025" },
        { name: "Certification Junior Penetration Tester", issuer: "TryHackMe", status: "done", date: "2023" },
        { name: "Formation Infrastructure et production", issuer: "Solutec, Lyon", status: "done", date: "2023" },
        { name: "Ingénieure Génie de l'Eau et de l'Environnement", issuer: "ENSIL-ENSCI, Limoges",  status: "done", date: "2019-2022" },
        { name: "Classe préparatoir PCSI-PC", issuer: "Lycée Pierre de Fermat, Toulouse",  status: "done", date: "2017-2019" },
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
      text: "© 2026 Claire Favre — hébergé sur GitHub Pages.",
    },
  },

  en: {
    meta: { title: "Your Name — Cybersecurity Portfolio (SOC / DFIR)" },

    nav: {
      brandName: "Your Name",
      brandExt: ".sec",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      timeline: "Background",
      contact: "Contact",
      cvLabel: "CV",
    },

    hero: {
      boot: [
        "$ whoami",
        "> 4 years in software development",
        "> career shift: dev → blue team / SOC / DFIR",
      ],
      titleLine1: "From software engineering",
      titleLine2: "to cybersecurity.",
      subtitle:
        "I'm putting 4 years of development experience to work in detection and incident response. Labs, writeups and tools, documented and published as I go.",
      ctaPrimary: "View projects",
      ctaSecondary: "Get in touch",
      profile: {
        id: "ID",
        idValue: "ANALYST-0001",
        role: "CURRENT FOCUS",
        roleValue: "Defensive security — SOC & detection",
        background: "BACKGROUND",
        backgroundValue: "4 years — Software development",
        status: "STATUS",
        statusValue: "ACTIVE — open to opportunities",
        focus: "TRAJECTORY",
        focusValue: "Detection Engineering → IR / DFIR / CERT",
      },
    },

    about: {
      eyebrow: "// about",
      title: "Who I am",
      paragraphs: [
        "After <strong>4 years as a software developer</strong>, I'm moving into defensive cybersecurity, with a clear goal: join a SOC team as an <strong>Analyst</strong> or <strong>Detection Engineer</strong>, then move toward digital forensics and incident response (<strong>IR / DFIR / CERT</strong>).",
        "My background as a developer is a direct asset for this transition: reading code, a solid understanding of systems and network protocols, the ability to script and automate, and a rigorous, well-documented approach to every topic I tackle.",
        "This page brings together my technical projects — usually spread across several GitHub repositories — into one coherent view of my progress and skills.",
      ],
    },

    skills: {
      eyebrow: "// skills",
      title: "Technical skills",
      subtitle: "Grouped by area, from closest to the target role to still in progress.",
      categories: [
        {
          name: "Blue Team / SOC",
          items: ["SIEM (Splunk, Elastic)", "Detection & rules (Sigma)", "MITRE ATT&CK", "Log analysis", "Sysmon / Windows Event Logs", "Suricata / Zeek"],
        },
        {
          name: "Networking & protocols",
          items: ["Wireshark / tcpdump", "TCP/IP model", "Traffic analysis", "DNS, HTTP(S), TLS"],
        },
        {
          name: "Red Team (offensive basics)",
          items: ["TryHackMe", "Pentest methodology", "Reconnaissance", "Basic exploitation"],
        },
        {
          name: "Reverse Engineering & Malware",
          items: ["Static / dynamic analysis", "Ghidra", "Sandboxing", "IOC extraction"],
        },
        {
          name: "Development & automation",
          items: ["Scripting (Python, Bash)", "Writing detection rules", "Building internal tools", "Basic CI"],
        },
        {
          name: "Environment & tools",
          items: ["Git / GitHub", "Linux", "VirtualBox / VMware labs", "Volatility"],
        },
      ],
    },

    projects: {
      eyebrow: "// projects",
      title: "Projects",
      subtitle: "Each project lives in its own GitHub repo, updated as I make progress.",
      viewRepo: "View repository",
      comingSoon: "Repo coming soon",
      objectiveLabel: "Goal",
      skillsLabel: "Skills gained",
      statusLabels: { active: "Active", completed: "Completed", planned: "Planned" },
      items: [
        {
          status: "active",
          title: "SOC Lab — Detection & Monitoring",
          description: "A mini-SOC environment: Windows/Sysmon log ingestion into a SIEM, writing Sigma detection rules, and building alerts triggered by simulated attack scenarios (lateral movement, persistence, exfiltration).",
          objective: "Understand and reproduce an end-to-end SOC detection pipeline, from log ingestion to alert.",
          skills: [
            "Writing detection rules (Sigma)",
            "Reading and correlating Windows/Sysmon logs",
            "Using a SIEM (ingestion, search, dashboards)",
            "Mapping techniques to MITRE ATT&CK",
          ],
          tags: ["SIEM", "Sysmon", "Sigma", "MITRE ATT&CK"],
          link: "https://github.com/YOUR-USERNAME/lab-soc",
        },
        {
          status: "active",
          title: "Network Protocol Analysis",
          description: "Packet-level study of network protocols: Wireshark captures, parsing with custom scripts, identifying normal vs suspicious behaviour across DNS, HTTP and TLS.",
          objective: "Build a sharp eye for network anomalies by deeply understanding what normal protocol behaviour looks like.",
          skills: [
            "Reading and filtering Wireshark captures",
            "Solid understanding of the TCP/IP model",
            "Scripting packet analysis",
            "Spotting traffic anomalies",
          ],
          tags: ["Wireshark", "TCP/IP", "DNS", "TLS"],
          link: "https://github.com/YOUR-USERNAME/network-protocol-analysis",
        },
        {
          status: "active",
          title: "TryHackMe Writeups — Red Team",
          description: "Detailed writeups of offensive-focused rooms: full methodology from recon to exploitation, tool choices explained, step-by-step reasoning through to the solve.",
          objective: "Understand offensive reasoning in order to better anticipate and detect attacks from the defensive side.",
          skills: [
            "Pentest methodology (recon, enumeration, exploitation)",
            "Using common offensive tools",
            "Structured technical writing",
            "Attacker mindset applied to detection",
          ],
          tags: ["TryHackMe", "Pentest", "Methodology"],
          link: "https://github.com/YOUR-USERNAME/thm-redteam-writeups",
        },
        {
          status: "active",
          title: "TryHackMe Writeups — Reverse Engineering",
          description: "Writeups of reverse engineering challenges: static and dynamic binary analysis, disassembly with Ghidra, step-by-step solves.",
          objective: "Build the reverse engineering fundamentals needed for malware analysis.",
          skills: [
            "Static / dynamic binary analysis",
            "Using Ghidra",
            "Reading assembly",
            "Breaking a complex problem into steps",
          ],
          tags: ["Reverse Engineering", "Ghidra", "TryHackMe"],
          link: "https://github.com/YOUR-USERNAME/thm-reverse-writeups",
        },
        {
          status: "planned",
          title: "Malware Analysis Lab",
          description: "An isolated malware analysis lab: static and dynamic sample analysis, IOC extraction, a standard analysis report template.",
          objective: "Be able to independently analyse a suspicious sample and extract actionable indicators.",
          skills: [
            "Sandboxing and environment isolation",
            "Static / dynamic malware analysis",
            "IOC extraction",
            "Writing incident reports",
          ],
          tags: ["Malware Analysis", "Sandbox", "IOC"],
          link: null,
        },
      ],
    },

    certifications: {
      eyebrow: "// certifications",
      title: "Certifications & ongoing training",
      subtitle: "Roadmap — customise this to reflect your actual progress.",
      statusLabels: { done: "Obtained", progress: "In progress", planned: "Planned" },
      items: [
        { name: "Certification name (obtained)", issuer: "Issuing organisation (fill in)", status: "done", date: "Month Year" },
        { name: "Jr Penetration Tester", issuer: "TryHackMe", status: "progress" },
        { name: "CompTIA Security+", issuer: "CompTIA", status: "planned" },
        { name: "Blue Team Level 1 (BTL1)", issuer: "Security Blue Team", status: "planned" },
      ],
    },

    timeline: {
      eyebrow: "// background",
      title: "Education & experience",
      items: [
        {
          period: "Ongoing",
          role: "Career shift — Defensive cybersecurity",
          org: "Self-directed training",
          description: "Personal labs, TryHackMe writeups, active MITRE ATT&CK / DFIR learning, working toward certifications.",
        },
        {
          period: "2022 — 2026",
          role: "Software Developer",
          org: "Company name (fill in)",
          description: "4 years of software development: design, code review, debugging complex systems — skills that transfer directly to analysis and investigation.",
        },
        {
          period: "Year",
          role: "Degree / initial training (fill in)",
          org: "Institution (fill in)",
          description: "Computer science education.",
        },
      ],
    },

    contact: {
      eyebrow: "// contact",
      title: "Get in touch",
      text: "Open to SOC Analyst / Detection Engineer opportunities, and happy to talk about defensive security more generally.",
      emailLabel: "Email",
      emailValue: "your.email@example.com",
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
      text: "© 2026 Your Name — Built with HTML/CSS/JS, hosted on GitHub Pages.",
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
