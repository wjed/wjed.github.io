// Static Terminal Display - All Portfolio Content
document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.querySelector('.terminal-output');
    
    const addLine = (text, className = 'terminal-line') => {
        const line = document.createElement('div');
        line.className = className;
        line.textContent = text;
        terminalOutput.appendChild(line);
    };
    
    const addSection = (title, content) => {
        addLine(`will@portfolio:~$ cat ${title}`, 'terminal-line terminal-prompt-line');
        addLine('');
        addLine(content);
        addLine('');
    };
    
    // Start with prompt
    addLine('will@portfolio:~$ ls', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('about.txt  experience/  projects/  certifications/  education/  leadership/  contact.txt  help.txt');
    addLine('');
    
    // About
    addSection('about.txt', `will j. jedrzejczak
deployment strategist @ palantir technologies (nyse: $pltr)

it all started with youtube videos about computer viruses. what began as childhood curiosity 
turned into a self-taught journey through cybersecurity, leading me to jmu where i became 
valedictorian of my major while racking up 5 internships. then palantir called at the start 
of my junior year asking if i'd be willing to drop out after may 2026. naturally, i said yes.

when i'm not building secure ai/ml solutions for the government, you'll find me lifting weights, 
discovering new music, or outperforming the market by a mile on my fidelity account. ultimately, 
i'm just extremely passionate about building things that help other people.`);
    
    // Experience
    addLine('will@portfolio:~$ cd experience', 'terminal-line terminal-prompt-line');
    addLine('will@portfolio:~/experience$ ls', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('palantir.txt  aws.txt  mantech.txt  bluesky.txt  rockingham.txt');
    addLine('');
    
    addSection('experience/palantir.txt', `deployment strategist (usg)
palantir technologies
sep 2025 - present

us government + business development. offered full-time role starting may 2026 before degree conferral. 
palantir provides configurable solutions to confront the most complex defense challenges, from building 
ai-enabled ground stations to supporting distributed multi-domain operations at the edge.

tech: AI/ML, Defense Technology, Government Solutions, Business Development`);
    
    addSection('experience/aws.txt', `professional services national security cloud engineer
amazon web services (aws)
may 2025 - sep 2025

analytics + application development for amazon dedicated cloud. doubled project scope and tripled 
certification requirements. aws cloud provides secure, scalable solutions for u.s. federal government 
across civilian agencies, intelligence community, and department of defense.

tech: AWS Lambda, Amazon S3, AWS CloudFormation, Amazon Cognito, Machine Learning, Infrastructure as Code, Large Language Models`);
    
    addSection('experience/mantech.txt', `technical engineer & subject matter expert (ii+)
mantech
nov 2024 - may 2025

supporting the cio, worked across iam, ad, and virtualization. received two promotions in less 
than a year. mantech proudly safeguards the country's most sensitive national security missions.

tech: Identity and Access Management, Active Directory, Virtualization, IT Management, Cybersecurity`);
    
    addSection('experience/bluesky.txt', `artificial intelligence engineer
blue sky innovators
sep 2025 - present

r&d team; built an ml-driven cybersecurity agent with opensearch queries. blue sky innovators 
supports government and commercial customers in the definition and delivery of advanced technologies 
to solve the toughest challenges.

tech: Machine Learning, OpenSearch, Cybersecurity, R&D`);
    
    addSection('experience/rockingham.txt', `network engineer
rockingham county public schools
aug 2025 - present

pii, data migration, and infrastructure challenges for 11,500+ students. supporting the division's 
mission to deliver exceptional learning experiences to students through comprehensive technology solutions.

tech: Network Infrastructure, Data Migration, PII Management, Educational Technology`);
    
    // Projects
    addLine('will@portfolio:~/experience$ cd ../projects', 'terminal-line terminal-prompt-line');
    addLine('will@portfolio:~/projects$ ls', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('jmu-advising-bot.txt  musiccpr.txt  dukessat.txt  cybersecdb.txt');
    addLine('');
    
    addSection('projects/jmu-advising-bot.txt', `jmu it advising bot
james madison university
oct 2025 - dec 2026

fully built-out jmu it/cs advisor created with aws cdk infrastructure as code. 
leverages amazon bedrock for ai capabilities, claude haiku for natural language processing, 
dynamodb for scalable data storage, and s3 for document management. provides personalized 
academic advising and course recommendations for information technology and computer science students.

tech: aws cdk, amazon bedrock, claude haiku, dynamodb, amazon s3, infrastructure as code, ai/ml`);
    
    addSection('projects/musiccpr.txt', `musiccpr
james madison university
dec 2023 - may 2024

educational website aimed at enhancing music education, developed as a niche learning management system 
similar to canvas. collaborated with music teachers to design and implement this web application, 
which was enthusiastically received by students and teachers during the pandemic.

tech: javascript, react, html, css, web development`);
    
    addSection('projects/dukessat.txt', `jmu dukessat (meshsat)
james madison university
feb 2024 - mar 2024

supported the development of meshsat, a satellite project at james madison university. 
contributed to the technical development and implementation of this innovative satellite 
communication system using ai/ml and python technologies.

tech: python, ai/ml, satellite tech, research`);
    
    addSection('projects/cybersecdb.txt', `cybersecdb
james madison university
academic project

cybersecurity database built collaboratively with friends to help threat detection. 
utilized sql for database design and mockaroo for realistic data generation. 
the database was designed to support cybersecurity operations and was presented 
to our class as a comprehensive threat detection solution.

tech: sql, mockaroo, database design, cybersecurity, threat detection`);
    
    // Certifications
    addLine('will@portfolio:~/projects$ cd ../certifications', 'terminal-line terminal-prompt-line');
    addLine('will@portfolio:~/certifications$ ls', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('aws/  comptia/  palantir/');
    addLine('');
    
    addLine('will@portfolio:~/certifications$ ls aws/', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('data-engineer.txt  developer.txt  ml-engineer.txt  sysops.txt  ai-practitioner.txt  solutions-architect.txt  cloud-practitioner.txt');
    addLine('');
    
    addSection('certifications/aws/data-engineer.txt', 'aws certified data engineer - associate\namazon web services (aws)\naug 2025 - aug 2028\n\nadvanced certification in data engineering on aws, covering data privacy, data science, databases, and comprehensive aws data services.');
    addSection('certifications/aws/developer.txt', 'aws certified developer - associate\namazon web services (aws)\njul 2025 - jul 2028\n\nprofessional certification in developing and maintaining applications on aws platform, covering infrastructure as code, lambda, and api gateways.');
    addSection('certifications/aws/ml-engineer.txt', 'aws certified machine learning engineer - associate\namazon web services (aws)\njul 2025 - jul 2028\n\nspecialized certification in machine learning engineering on aws, covering ai, large language models, and advanced ml services.');
    addSection('certifications/aws/sysops.txt', 'aws certified sysops administrator - associate\namazon web services (aws)\nmay 2025 - may 2028\n\nsystems operations certification covering deployment, management, and operations of scalable, highly available systems on aws.');
    addSection('certifications/aws/ai-practitioner.txt', 'aws certified ai practitioner\namazon web services (aws)\nmar 2025 - mar 2028\n\nfoundational ai certification covering artificial intelligence concepts, large language models, and cloud computing applications.');
    addSection('certifications/aws/solutions-architect.txt', 'aws certified solutions architect - associate\namazon web services (aws)\njul 2024 - jul 2027\n\nsolutions architecture certification covering designing distributed systems and applications on aws platform.');
    addSection('certifications/aws/cloud-practitioner.txt', 'aws certified cloud practitioner\namazon web services (aws)\njun 2024 - jun 2027\n\nfoundational cloud certification covering aws cloud concepts, services, security, architecture, pricing, and support.');
    
    addLine('will@portfolio:~/certifications$ ls comptia/', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('cysa+.txt  csap.txt  csis.txt  security+.txt  cios.txt  network+.txt  a+.txt  it-fundamentals+.txt');
    addLine('');
    
    addSection('certifications/comptia/cysa+.txt', 'comptia cybersecurity analyst (cysa+)\ncomptia\nfeb 2025 - feb 2028\n\nadvanced cybersecurity certification covering threat detection, analysis, and response using behavioral analytics and security tools.');
    addSection('certifications/comptia/csap.txt', 'comptia security analytics practitioner (csap)\ncomptia\nfeb 2025 - feb 2028\n\nspecialized certification in security analytics, covering advanced threat detection and security data analysis techniques.');
    addSection('certifications/comptia/csis.txt', 'comptia secure infrastructure specialist (csis)\ncomptia\njun 2024 - feb 2028\n\ncomprehensive security infrastructure certification covering network security, system security, and secure infrastructure design.');
    addSection('certifications/comptia/security+.txt', 'comptia security+\ncomptia\njun 2024 - feb 2028\n\nfoundational cybersecurity certification covering core security functions, risk management, and security operations.');
    addSection('certifications/comptia/cios.txt', 'comptia it operations specialist (cios)\ncomptia\napr 2024 - feb 2028\n\nit operations certification covering system administration, troubleshooting, and operational security practices.');
    addSection('certifications/comptia/network+.txt', 'comptia network+\ncomptia\napr 2024 - feb 2028\n\nnetwork administration certification covering network design, implementation, troubleshooting, and security.');
    addSection('certifications/comptia/a+.txt', 'comptia a+\ncomptia\nfeb 2024 - feb 2028\n\nfoundational it certification covering hardware, software, troubleshooting, and operational procedures.');
    addSection('certifications/comptia/it-fundamentals+.txt', 'comptia it fundamentals+\ncomptia\nmay 2023 - may 2026\n\nentry-level it certification covering basic it concepts, terminology, and fundamental skills.');
    
    addLine('will@portfolio:~/certifications$ ls palantir/', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('foundry-aware.txt  scoping.txt  builder-foundations.txt');
    addLine('');
    
    addSection('certifications/palantir/foundry-aware.txt', 'certified palantir foundry aware professional\npalantir technologies\nsep 2025 - sep 2027\ncredential id: d5t97obr7p42\n\nfoundry certification exam for foundry aware 2025, covering databases, data privacy, and data science in the palantir foundry platform.');
    addSection('certifications/palantir/scoping.txt', 'scoping use cases in foundry & aip\npalantir technologies\noct 2025\ncredential id: 9dmvmq43i33a\n\nspecialized certification covering scoping use cases in palantir foundry and aip platforms, including data privacy, data science, and database management.');
    addSection('certifications/palantir/builder-foundations.txt', 'foundry & aip builder foundations\npalantir technologies\nsep 2025\ncredential id: iunn5grp5bah\n\nfoundational certification covering foundry & aip builder foundations, including databases, data science, and data privacy.');
    
    // Education
    addLine('will@portfolio:~/certifications$ cd ../education', 'terminal-line terminal-prompt-line');
    addLine('will@portfolio:~/education$ ls', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('jmu.txt  coursework/');
    addLine('');
    
    addSection('education/jmu.txt', `james madison university
b.s. information technology
valedictorian candidate (3.984/4.000 gpa)

ranked #1 in b.s. it program at james madison university. consistently on president's list every semester, 
demonstrating exceptional academic excellence in information technology and computer science.`);
    
    addLine('will@portfolio:~/education$ ls coursework/', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('core-it.txt  networking.txt  data-science.txt  cs-foundations.txt  capstone.txt');
    addLine('');
    
    addSection('education/coursework/core-it.txt', 'core information technology courses:\nit-101, it-203, it-215, it-240, it-301, it-302, it-311, it-313');
    addSection('education/coursework/networking.txt', 'advanced networking & cybersecurity:\nit-333, it-460, it-480');
    addSection('education/coursework/data-science.txt', 'data science & artificial intelligence:\nit-340, it-347');
    addSection('education/coursework/cs-foundations.txt', 'computer science foundations:\ncs-149, it-160e, it-201e, it-212');
    addSection('education/coursework/capstone.txt', 'capstone & professional development:\nit-444, it-445, it-433');
    
    // Leadership
    addLine('will@portfolio:~/education$ cd ../leadership', 'terminal-line terminal-prompt-line');
    addLine('will@portfolio:~/leadership$ ls', 'terminal-line terminal-prompt-line');
    addLine('');
    addLine('it-ambassador.txt  cyber-defense.txt  consulting-club.txt  teaching-assistant.txt');
    addLine('');
    
    addSection('leadership/it-ambassador.txt', 'founding & lead it ambassador\ninformation technology department (2023-present)\n\nled it major to become one of jmu\'s fastest-growing programs as top-ranked ambassador by hours contributed.');
    addSection('leadership/cyber-defense.txt', 'executive officer, cyber defense club\n2025-present\n\nthe cyber defense club achieved first place at the virginia military institute cyber competition, demonstrating exceptional cybersecurity excellence.');
    addSection('leadership/consulting-club.txt', 'internal vice president, madison consulting club\n2025-present\n\none of the biggest clubs in jmu\'s college of business. driving strategic initiatives and fostering professional development.');
    addSection('leadership/teaching-assistant.txt', 'teaching assistant\nit-201 computational structures and logic (2024-2025)\n\nmentored students in discrete mathematics, logic, and computational theory fundamentals.');
    
    // Contact
    addLine('will@portfolio:~/leadership$ cd ~', 'terminal-line terminal-prompt-line');
    addSection('contact.txt', `contact information

primary email: william@altuvo.info
alternate: will.jedrzejczak@gmail.com

other emails:
- wjedrzejczak@palantir.com
- wjd@amazon.com
- william.jedrzejczak@blueskyinnovators.com
- wjedrzejc@rockingham.k12.va.us
- will.jedrzejczak@mantech.com
- william.jedrzejczak@solvitursystems.com`);
    
    // Final prompt
    addLine('will@portfolio:~$', 'terminal-line terminal-prompt-line');
});
