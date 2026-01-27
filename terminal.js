// Auto-running Terminal Display - Commands execute automatically
document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.querySelector('.terminal-output');
    let commandIndex = 0;
    
    const addLine = (text, className = 'terminal-line', delay = 0) => {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = className;
            line.textContent = text;
            terminalOutput.appendChild(line);
            // Auto-scroll to bottom
            const terminal = document.getElementById('terminal');
            terminal.scrollTop = terminal.scrollHeight;
        }, delay);
    };
    
    const showCommand = (command, delay = 0) => {
        addLine(`will@portfolio:${getCurrentPath()}${command}`, 'terminal-line terminal-prompt-line', delay);
    };
    
    const showOutput = (text, delay = 0) => {
        if (text) {
            addLine(text, 'terminal-line', delay);
        }
    };
    
    let currentPath = '~';
    const getCurrentPath = () => {
        return currentPath === '~' ? '~' : currentPath;
    };
    
    const setPath = (path) => {
        currentPath = path;
    };
    
    let delay = 100;
    const addDelay = (ms) => {
        delay += ms;
        return delay;
    };
    
    // Start
    showCommand(' ls', 0);
    addDelay(200);
    showOutput('about.txt  experience/  projects/  certifications/  education/  leadership/  contact.txt  help.txt', delay);
    addDelay(300);
    showOutput('', delay);
    
    // About
    showCommand(' cat about.txt', addDelay(200));
    addDelay(200);
    showOutput(`will j. jedrzejczak
deployment strategist @ palantir technologies (nyse: $pltr)

it all started with youtube videos about computer viruses. what began as childhood curiosity 
turned into a self-taught journey through cybersecurity, leading me to jmu where i became 
valedictorian of my major while racking up 5 internships. then palantir called at the start 
of my junior year asking if i'd be willing to drop out after may 2026. naturally, i said yes.

when i'm not building secure ai/ml solutions for the government, you'll find me lifting weights, 
discovering new music, or outperforming the market by a mile on my fidelity account. ultimately, 
i'm just extremely passionate about building things that help other people.`, addDelay(200));
    addDelay(300);
    showOutput('', delay);
    
    // Experience
    showCommand(' cd experience', addDelay(200));
    setPath('~/experience');
    addDelay(200);
    showCommand(' ls', delay);
    addDelay(200);
    showOutput('palantir.txt  aws.txt  mantech.txt  bluesky.txt  rockingham.txt', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat palantir.txt', addDelay(200));
    addDelay(200);
    showOutput(`deployment strategist (usg)
palantir technologies
sep 2025 - present

us government + business development. offered full-time role starting may 2026 before degree conferral. 
palantir provides configurable solutions to confront the most complex defense challenges, from building 
ai-enabled ground stations to supporting distributed multi-domain operations at the edge.

tech: AI/ML, Defense Technology, Government Solutions, Business Development`, delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat aws.txt', addDelay(200));
    addDelay(200);
    showOutput(`professional services national security cloud engineer
amazon web services (aws)
may 2025 - sep 2025

analytics + application development for amazon dedicated cloud. doubled project scope and tripled 
certification requirements. aws cloud provides secure, scalable solutions for u.s. federal government 
across civilian agencies, intelligence community, and department of defense.

tech: AWS Lambda, Amazon S3, AWS CloudFormation, Amazon Cognito, Machine Learning, Infrastructure as Code, Large Language Models`, delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat mantech.txt', addDelay(200));
    addDelay(200);
    showOutput(`technical engineer & subject matter expert (ii+)
mantech
nov 2024 - may 2025

supporting the cio, worked across iam, ad, and virtualization. received two promotions in less 
than a year. mantech proudly safeguards the country's most sensitive national security missions.

tech: Identity and Access Management, Active Directory, Virtualization, IT Management, Cybersecurity`, delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat bluesky.txt', addDelay(200));
    addDelay(200);
    showOutput(`artificial intelligence engineer
blue sky innovators
sep 2025 - present

r&d team; built an ml-driven cybersecurity agent with opensearch queries. blue sky innovators 
supports government and commercial customers in the definition and delivery of advanced technologies 
to solve the toughest challenges.

tech: Machine Learning, OpenSearch, Cybersecurity, R&D`, delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat rockingham.txt', addDelay(200));
    addDelay(200);
    showOutput(`network engineer
rockingham county public schools
aug 2025 - present

pii, data migration, and infrastructure challenges for 11,500+ students. supporting the division's 
mission to deliver exceptional learning experiences to students through comprehensive technology solutions.

tech: Network Infrastructure, Data Migration, PII Management, Educational Technology`, delay);
    addDelay(300);
    showOutput('', delay);
    
    // Projects
    showCommand(' cd ../projects', addDelay(200));
    setPath('~/projects');
    addDelay(200);
    showCommand(' ls', delay);
    addDelay(200);
    showOutput('jmu-advising-bot.txt  musiccpr.txt  dukessat.txt  cybersecdb.txt', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat jmu-advising-bot.txt', addDelay(200));
    addDelay(200);
    showOutput(`jmu it advising bot
james madison university
oct 2025 - dec 2026

fully built-out jmu it/cs advisor created with aws cdk infrastructure as code. 
leverages amazon bedrock for ai capabilities, claude haiku for natural language processing, 
dynamodb for scalable data storage, and s3 for document management. provides personalized 
academic advising and course recommendations for information technology and computer science students.

tech: aws cdk, amazon bedrock, claude haiku, dynamodb, amazon s3, infrastructure as code, ai/ml`, delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat musiccpr.txt', addDelay(200));
    addDelay(200);
    showOutput(`musiccpr
james madison university
dec 2023 - may 2024

educational website aimed at enhancing music education, developed as a niche learning management system 
similar to canvas. collaborated with music teachers to design and implement this web application, 
which was enthusiastically received by students and teachers during the pandemic.

tech: javascript, react, html, css, web development`, delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat dukessat.txt', addDelay(200));
    addDelay(200);
    showOutput(`jmu dukessat (meshsat)
james madison university
feb 2024 - mar 2024

supported the development of meshsat, a satellite project at james madison university. 
contributed to the technical development and implementation of this innovative satellite 
communication system using ai/ml and python technologies.

tech: python, ai/ml, satellite tech, research`, delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat cybersecdb.txt', addDelay(200));
    addDelay(200);
    showOutput(`cybersecdb
james madison university
academic project

cybersecurity database built collaboratively with friends to help threat detection. 
utilized sql for database design and mockaroo for realistic data generation. 
the database was designed to support cybersecurity operations and was presented 
to our class as a comprehensive threat detection solution.

tech: sql, mockaroo, database design, cybersecurity, threat detection`, delay);
    addDelay(300);
    showOutput('', delay);
    
    // Certifications
    showCommand(' cd ../certifications', addDelay(200));
    setPath('~/certifications');
    addDelay(200);
    showCommand(' ls', delay);
    addDelay(200);
    showOutput('aws/  comptia/  palantir/', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' ls aws/', addDelay(200));
    addDelay(200);
    showOutput('data-engineer.txt  developer.txt  ml-engineer.txt  sysops.txt  ai-practitioner.txt  solutions-architect.txt  cloud-practitioner.txt', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat aws/data-engineer.txt', addDelay(200));
    addDelay(200);
    showOutput('aws certified data engineer - associate\namazon web services (aws)\naug 2025 - aug 2028\n\nadvanced certification in data engineering on aws, covering data privacy, data science, databases, and comprehensive aws data services.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat aws/developer.txt', addDelay(200));
    addDelay(200);
    showOutput('aws certified developer - associate\namazon web services (aws)\njul 2025 - jul 2028\n\nprofessional certification in developing and maintaining applications on aws platform, covering infrastructure as code, lambda, and api gateways.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat aws/ml-engineer.txt', addDelay(200));
    addDelay(200);
    showOutput('aws certified machine learning engineer - associate\namazon web services (aws)\njul 2025 - jul 2028\n\nspecialized certification in machine learning engineering on aws, covering ai, large language models, and advanced ml services.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat aws/sysops.txt', addDelay(200));
    addDelay(200);
    showOutput('aws certified sysops administrator - associate\namazon web services (aws)\nmay 2025 - may 2028\n\nsystems operations certification covering deployment, management, and operations of scalable, highly available systems on aws.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat aws/ai-practitioner.txt', addDelay(200));
    addDelay(200);
    showOutput('aws certified ai practitioner\namazon web services (aws)\nmar 2025 - mar 2028\n\nfoundational ai certification covering artificial intelligence concepts, large language models, and cloud computing applications.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat aws/solutions-architect.txt', addDelay(200));
    addDelay(200);
    showOutput('aws certified solutions architect - associate\namazon web services (aws)\njul 2024 - jul 2027\n\nsolutions architecture certification covering designing distributed systems and applications on aws platform.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat aws/cloud-practitioner.txt', addDelay(200));
    addDelay(200);
    showOutput('aws certified cloud practitioner\namazon web services (aws)\njun 2024 - jun 2027\n\nfoundational cloud certification covering aws cloud concepts, services, security, architecture, pricing, and support.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' ls comptia/', addDelay(200));
    addDelay(200);
    showOutput('cysa+.txt  csap.txt  csis.txt  security+.txt  cios.txt  network+.txt  a+.txt  it-fundamentals+.txt', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat comptia/cysa+.txt', addDelay(200));
    addDelay(200);
    showOutput('comptia cybersecurity analyst (cysa+)\ncomptia\nfeb 2025 - feb 2028\n\nadvanced cybersecurity certification covering threat detection, analysis, and response using behavioral analytics and security tools.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat comptia/csap.txt', addDelay(200));
    addDelay(200);
    showOutput('comptia security analytics practitioner (csap)\ncomptia\nfeb 2025 - feb 2028\n\nspecialized certification in security analytics, covering advanced threat detection and security data analysis techniques.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat comptia/csis.txt', addDelay(200));
    addDelay(200);
    showOutput('comptia secure infrastructure specialist (csis)\ncomptia\njun 2024 - feb 2028\n\ncomprehensive security infrastructure certification covering network security, system security, and secure infrastructure design.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat comptia/security+.txt', addDelay(200));
    addDelay(200);
    showOutput('comptia security+\ncomptia\njun 2024 - feb 2028\n\nfoundational cybersecurity certification covering core security functions, risk management, and security operations.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat comptia/cios.txt', addDelay(200));
    addDelay(200);
    showOutput('comptia it operations specialist (cios)\ncomptia\napr 2024 - feb 2028\n\nit operations certification covering system administration, troubleshooting, and operational security practices.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat comptia/network+.txt', addDelay(200));
    addDelay(200);
    showOutput('comptia network+\ncomptia\napr 2024 - feb 2028\n\nnetwork administration certification covering network design, implementation, troubleshooting, and security.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat comptia/a+.txt', addDelay(200));
    addDelay(200);
    showOutput('comptia a+\ncomptia\nfeb 2024 - feb 2028\n\nfoundational it certification covering hardware, software, troubleshooting, and operational procedures.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat comptia/it-fundamentals+.txt', addDelay(200));
    addDelay(200);
    showOutput('comptia it fundamentals+\ncomptia\nmay 2023 - may 2026\n\nentry-level it certification covering basic it concepts, terminology, and fundamental skills.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' ls palantir/', addDelay(200));
    addDelay(200);
    showOutput('foundry-aware.txt  scoping.txt  builder-foundations.txt', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat palantir/foundry-aware.txt', addDelay(200));
    addDelay(200);
    showOutput('certified palantir foundry aware professional\npalantir technologies\nsep 2025 - sep 2027\ncredential id: d5t97obr7p42\n\nfoundry certification exam for foundry aware 2025, covering databases, data privacy, and data science in the palantir foundry platform.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat palantir/scoping.txt', addDelay(200));
    addDelay(200);
    showOutput('scoping use cases in foundry & aip\npalantir technologies\noct 2025\ncredential id: 9dmvmq43i33a\n\nspecialized certification covering scoping use cases in palantir foundry and aip platforms, including data privacy, data science, and database management.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat palantir/builder-foundations.txt', addDelay(200));
    addDelay(200);
    showOutput('foundry & aip builder foundations\npalantir technologies\nsep 2025\ncredential id: iunn5grp5bah\n\nfoundational certification covering foundry & aip builder foundations, including databases, data science, and data privacy.', delay);
    addDelay(300);
    showOutput('', delay);
    
    // Education
    showCommand(' cd ../education', addDelay(200));
    setPath('~/education');
    addDelay(200);
    showCommand(' ls', delay);
    addDelay(200);
    showOutput('jmu.txt  coursework/', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat jmu.txt', addDelay(200));
    addDelay(200);
    showOutput(`james madison university
b.s. information technology
valedictorian candidate (3.984/4.000 gpa)

ranked #1 in b.s. it program at james madison university. consistently on president's list every semester, 
demonstrating exceptional academic excellence in information technology and computer science.`, delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' ls coursework/', addDelay(200));
    addDelay(200);
    showOutput('core-it.txt  networking.txt  data-science.txt  cs-foundations.txt  capstone.txt', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat coursework/core-it.txt', addDelay(200));
    addDelay(200);
    showOutput('core information technology courses:\nit-101, it-203, it-215, it-240, it-301, it-302, it-311, it-313', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat coursework/networking.txt', addDelay(200));
    addDelay(200);
    showOutput('advanced networking & cybersecurity:\nit-333, it-460, it-480', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat coursework/data-science.txt', addDelay(200));
    addDelay(200);
    showOutput('data science & artificial intelligence:\nit-340, it-347', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat coursework/cs-foundations.txt', addDelay(200));
    addDelay(200);
    showOutput('computer science foundations:\ncs-149, it-160e, it-201e, it-212', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat coursework/capstone.txt', addDelay(200));
    addDelay(200);
    showOutput('capstone & professional development:\nit-444, it-445, it-433', delay);
    addDelay(300);
    showOutput('', delay);
    
    // Leadership
    showCommand(' cd ../leadership', addDelay(200));
    setPath('~/leadership');
    addDelay(200);
    showCommand(' ls', delay);
    addDelay(200);
    showOutput('it-ambassador.txt  cyber-defense.txt  consulting-club.txt  teaching-assistant.txt', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat it-ambassador.txt', addDelay(200));
    addDelay(200);
    showOutput('founding & lead it ambassador\ninformation technology department (2023-present)\n\nled it major to become one of jmu\'s fastest-growing programs as top-ranked ambassador by hours contributed.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat cyber-defense.txt', addDelay(200));
    addDelay(200);
    showOutput('executive officer, cyber defense club\n2025-present\n\nthe cyber defense club achieved first place at the virginia military institute cyber competition, demonstrating exceptional cybersecurity excellence.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat consulting-club.txt', addDelay(200));
    addDelay(200);
    showOutput('internal vice president, madison consulting club\n2025-present\n\none of the biggest clubs in jmu\'s college of business. driving strategic initiatives and fostering professional development.', delay);
    addDelay(300);
    showOutput('', delay);
    
    showCommand(' cat teaching-assistant.txt', addDelay(200));
    addDelay(200);
    showOutput('teaching assistant\nit-201 computational structures and logic (2024-2025)\n\nmentored students in discrete mathematics, logic, and computational theory fundamentals.', delay);
    addDelay(300);
    showOutput('', delay);
    
    // Contact
    showCommand(' cd ~', addDelay(200));
    setPath('~');
    addDelay(200);
    showCommand(' cat contact.txt', delay);
    addDelay(200);
    showOutput(`contact information

primary email: william@altuvo.info
alternate: will.jedrzejczak@gmail.com

other emails:
- wjedrzejczak@palantir.com
- wjd@amazon.com
- william.jedrzejczak@blueskyinnovators.com
- wjedrzejc@rockingham.k12.va.us
- will.jedrzejczak@mantech.com
- william.jedrzejczak@solvitursystems.com`, delay);
    addDelay(300);
    showOutput('', delay);
    
    // Final prompt
    showCommand('', addDelay(200));
});
