// Interactive Terminal - Click to navigate
document.addEventListener('DOMContentLoaded', () => {
    const terminalOutput = document.querySelector('.terminal-output');
    let currentPath = '~';
    
    const filesystem = {
        '~': {
            type: 'directory',
            contents: {
                'about.txt': {
                    type: 'file',
                    content: `will j. jedrzejczak

incoming masters student at gt. got into computers as a kid after seeing how malware could take 
over systems. that curiosity turned into an obsession with tackling problems most people write off 
as impossible. it led to seven internships, early graduation, and the highest gpa in my major 
(3.99/4.00, valedictorian). i've worked across sysadmin, cloud, development, and consulting, 
driven by speed, ownership, and high standards. when i'm not building secure ai/ml solutions for 
the government, you'll find me lifting weights, discovering new music, or outperforming the market 
by a mile on my fidelity account. ultimately, i'm just extremely passionate about building things 
that help other people.`
                },
                'clearance.txt': {
                    type: 'file',
                    content: `active top secret clearance`
                },
                'education': {
                    type: 'directory',
                    contents: {
                        'gatech.txt': {
                            type: 'file',
                            content: `georgia institute of technology
master of science - ms, computer science, artificial intelligence
jan 2026 - may 2028

pursuing advanced studies in artificial intelligence and computer science at georgia tech, one of 
the nation's top programs for ai research and development. focusing on large language models, 
machine learning, and cutting-edge ai technologies.

skills: computer science, programming, artificial intelligence (ai), large language models (llm), information technology`
                        },
                        'jmu.txt': {
                            type: 'file',
                            content: `james madison university
bachelor of science - bs, information technology, honors interdisciplinary studies
aug 2023 - may 2026 · senior

gpa: 3.99/4.00 (valedictorian of major, summa cum laude)
ranked #1 in b.s. it program at james madison university. consistently on president's list every 
semester, demonstrating exceptional academic excellence in information technology and computer science.

activities: founding & lead ambassador, information technology department (2023-2026), internal 
vice president, madison consulting club (2025-2026), executive officer, cyber defense club (2025-2025), 
teaching assistant (2024-2025), student leader & innovator, stem corps (2024-2024)

conferences: shmoocon, cyberwarcon, capwic, ieee, nchc

skills: large language models (llm), leadership, programming, problem solving, computer science, 
cybersecurity, information technology, cyber, artificial intelligence (ai)`
                        },
                        'coursework': {
                            type: 'directory',
                            contents: {
                                'core-it.txt': { type: 'file', content: 'core information technology courses:\nit-101 introduction to information technology\nit-203 information security and privacy [honors]\nit-215 introduction to telecommunications, networking and security\nit-240 database administration\nit-301 web technologies\nit-302 societal and ethical issues in it\nit-311 operating systems\nit-313 community projects' },
                                'networking.txt': { type: 'file', content: 'advanced networking & cybersecurity:\nit-333 advanced telecommunications & networking\nit-460 advanced cybersecurity\nit-480 cloud computing in private networks' },
                                'data-science.txt': { type: 'file', content: 'data science & artificial intelligence:\nit-340 data science & machine learning\nit-347 human-computer interaction' },
                                'cs-foundations.txt': { type: 'file', content: 'computer science foundations:\ncs-149 introduction to programming\nit-160e data structures and advanced programming for it\nit-201e computational structures and logic\nit-212 digital electronics' },
                                'capstone.txt': { type: 'file', content: 'capstone & professional development:\nit-444 capstone design\nit-445 capstone implementation\nit-433 internship in information technology' },
                                'honors.txt': { type: 'file', content: 'honors interdisciplinary studies:\nisat-160h problem solving in science and technology [honors]' }
                            }
                        }
                    }
                },
                'experience': {
                    type: 'directory',
                    contents: {
                        'palantir.txt': {
                            type: 'file',
                            content: `incoming deployment strategist (usg)
palantir technologies
oct 2025 - present · full-time
washington, dc · on-site

defense programs, fte august 2026. us government + business development. palantir provides 
configurable solutions to confront the most complex defense challenges, from building one of 
the first ai-enabled ground stations to supporting distributed multi-domain operations at the edge.

tech: consulting, artificial intelligence (ai), large language models (llm), defense technology, 
government solutions, business development`
                        },
                        'hiddenlayer.txt': {
                            type: 'file',
                            content: `federal solutions architect
hiddenlayer
dec 2025 - present · internship
washington, dc · hybrid

agentic security for mission-critical systems. hiddenlayer provides security for ai, protecting 
models from inference, bypass, extraction attacks, and model theft while analyzing behavior of 
in-production models with cloud-based software and light-touch consulting.

tech: artificial intelligence (ai), machine learning, cybersecurity`
                        },
                        'bluesky.txt': {
                            type: 'file',
                            content: `artificial intelligence engineer
blue sky innovators
aug 2025 - present · contract
reston, virginia · hybrid

ai r&d; applied ml and opensearch to detect threats, extended following successful delivery. 
blue sky innovators supports government and commercial customers in the definition and delivery 
of advanced technologies to solve the toughest challenges.

tech: python, artificial intelligence (ai), large language models (llm), opensearch, machine learning, r&d`
                        },
                        'aws.txt': {
                            type: 'file',
                            content: `national security cloud engineer
amazon web services (aws)
may 2025 - aug 2025 · internship
crystal city, virginia · on-site

data analytics + application development for amazon dedicated cloud. doubled project scope, 
tripled certification requirements, and received a return offer. aws cloud provides secure, 
scalable solutions for u.s. federal government across civilian agencies, intelligence community, 
and department of defense.

tech: machine learning, amazon cognito, infrastructure as code (iac), git, aws lambda, consulting, 
artificial intelligence (ai), large language models (llm), amazon s3, aws cloudformation, amazon web services (aws)`
                        },
                        'mantech.txt': {
                            type: 'file',
                            content: `technical engineer & subject matter expert (ii+)
mantech
nov 2024 - may 2025 · part-time
herndon, virginia · hybrid

supporting the cio, worked across iam, ad, and virtualization. received two promotions in less 
than a year. mantech proudly safeguards the country's most sensitive national security missions.

tech: information technology, cyber, communication, it management, cybersecurity, identity and access management (iam)`
                        },
                        'mantech-software.txt': {
                            type: 'file',
                            content: `software engineer (ii)
mantech
mar 2024 - nov 2024 · internship
herndon, virginia · hybrid

development for an $850m dod contract; only freshman on the team. mantech's innovation and 
capabilities organization (ico) develops and delivers game-changing technology solutions to 
address our client's toughest challenges at the speed of mission.

tech: machine learning, react.js, cyber, teamwork, python, leadership, programming`
                        },
                        'csfi.txt': {
                            type: 'file',
                            content: `cyber threat intelligence analyst
cyber security forum initiative
jan 2025 - apr 2025 · internship
washington, dc · remote

cybercom + intelligence collection. the cyber security forum initiative (csfi) is a non-profit 
organization with a mission to provide cyber warfare awareness, guidance, and security solutions 
through collaboration, education, volunteer work, and training.

tech: cyber, cybersecurity`
                        },
                        'solvitur.txt': {
                            type: 'file',
                            content: `cybersecurity analyst
solvitur systems llc
sep 2024 - dec 2024 · contract
leesburg, virginia · remote

user experience design + web security testing. solvitur systems protects businesses from cyber 
threats and helps navigate the complex world of technology with expertise in regulatory compliance, 
security assessments, and cybersecurity modernization.

tech: it projects, cyber`
                        },
                        'deloitte.txt': {
                            type: 'file',
                            content: `leadership, allyship & mentorship scholar
deloitte
mar 2024 - nov 2024 · apprenticeship
washington dc-baltimore area · remote

selected twice + youngest summer 2024 member for cohort. ai & engineering focus. deloitte works 
with leaders around the world to help them build better futures, with a workforce made up of the 
industry's greatest minds.

tech: consulting, leadership, ai & engineering`
                        },
                        'jmu-research.txt': {
                            type: 'file',
                            content: `first-year researcher & developer
jmu computer science
dec 2023 - may 2024 · part-time
harrisonburg, virginia · on-site

musiccpr (create, perform, respond) project. collaborated in the development of musiccpr, an 
educational website aimed at enhancing music education, utilizing javascript, react, html, and css.

tech: it projects, scholarly research, computer science, programming`
                        }
                    }
                },
                'projects': {
                    type: 'directory',
                    contents: {
                        'rottd.txt': {
                            type: 'file',
                            content: `rottd
jan 2026 - present
associated with jmu computer science

led automation-heavy comms project as distinguished engineer; built complex twilio flows via n8n, 
html templates, and a2p regulatory logic. rottd is the news, but make it chronically online - a 
daily newsletter that explains what's happening in the world like your terminally online friend 
would. short. funny. weirdly informative.

tech: automation, html, twilio, n8n`
                        },
                        'jmu-advising-bot.txt': {
                            type: 'file',
                            content: `jmu it advising bot
james madison university
oct 2025 - dec 2026

fully built-out jmu it/cs advisor created with aws cdk infrastructure as code. leverages amazon 
bedrock for ai capabilities, claude haiku for natural language processing, dynamodb for scalable 
data storage, and s3 for document management. provides personalized academic advising and course 
recommendations for information technology and computer science students.

tech: aws cdk, amazon bedrock, claude haiku, dynamodb, amazon s3, infrastructure as code, ai/ml`
                        },
                        'musiccpr.txt': {
                            type: 'file',
                            content: `musiccpr
james madison university
dec 2023 - may 2024

collaborated in the development of musiccpr, an educational website aimed at enhancing music 
education, developed as a niche learning management system similar to canvas. collaborated with 
music teachers to design and implement this web application, which was enthusiastically received 
by students and teachers during the pandemic.

tech: artificial intelligence (ai), computer science, html, cascading style sheets (css), react.js, 
javascript, project planning`
                        },
                        'dukessat.txt': {
                            type: 'file',
                            content: `jmu dukessat (meshsat)
james madison university
feb 2024 - mar 2024

supported the meshsat development. the global small satellite market is projected to grow from 
usd 2.8 billion in 2020 to usd 7.1 billion by 2025. contributed to the technical development and 
implementation of this innovative satellite communication system.

tech: artificial intelligence (ai), python, information technology, computer science`
                        }
                    }
                },
                'leadership': {
                    type: 'directory',
                    contents: {
                        'it-ambassador.txt': { type: 'file', content: 'founding & lead it ambassador\ninformation technology department (2023-2026)\n\nled it major to become one of jmu\'s fastest-growing programs as top-ranked ambassador by hours contributed.' },
                        'consulting-club.txt': { type: 'file', content: 'internal vice president, madison consulting club\n2025-2026\n\none of the biggest clubs in jmu\'s college of business. driving strategic initiatives and fostering professional development.' },
                        'cyber-defense.txt': { type: 'file', content: 'executive officer, cyber defense club\n2025\n\nthe cyber defense club achieved first place at the virginia military institute cyber competition, demonstrating exceptional cybersecurity excellence.' },
                        'teaching-assistant.txt': { type: 'file', content: 'teaching assistant\nit-201 computational structures and logic (2024-2025)\n\nmentored students in discrete mathematics, logic, and computational theory fundamentals.' },
                        'stem-corps.txt': { type: 'file', content: 'student leader & innovator, stem corps\n2024\n\ncontributed to stem education and outreach initiatives.' }
                    }
                },
                'certifications': {
                    type: 'directory',
                    contents: {
                        'aws': {
                            type: 'directory',
                            contents: {
                                'data-engineer.txt': { type: 'file', content: 'aws certified data engineer - associate\namazon web services (aws)\naug 2025 - aug 2028\ncredential id: 4edbd9cb-c225-4590-b076-0fb86d05ba6c\n\nadvanced certification in data engineering on aws, covering data privacy, data science, databases, large language models (llm), and comprehensive aws data services.' },
                                'developer.txt': { type: 'file', content: 'aws certified developer - associate\namazon web services (aws)\njul 2025 - jul 2028\ncredential id: 018c67ec-9e09-4eff-a31e-6a9e9047367d\n\nprofessional certification in developing and maintaining applications on aws platform, covering infrastructure as code, lambda, api gateways, and amazon web services (aws).' },
                                'ml-engineer.txt': { type: 'file', content: 'aws certified machine learning engineer - associate\namazon web services (aws)\njul 2025 - jul 2028\ncredential id: 1499bc01-1615-4910-bc9d-ba61afe65344\n\nspecialized certification in machine learning engineering on aws, covering ai, large language models, and advanced ml services.' },
                                'sysops.txt': { type: 'file', content: 'aws certified sysops administrator - associate\namazon web services (aws)\nmay 2025 - may 2028\ncredential id: c592234d-a959-4e88-96bb-6de8c2fd6767\n\nsystems operations certification covering deployment, management, and operations of scalable, highly available systems on aws, including cloud computing.' },
                                'ai-practitioner.txt': { type: 'file', content: 'aws certified ai practitioner\namazon web services (aws)\nmar 2025 - mar 2028\ncredential id: 5d7bf28d-e08c-435f-a54d-0cbef1aa8be7\n\nfoundational ai certification covering artificial intelligence concepts, large language models, and cloud computing applications.' },
                                'solutions-architect.txt': { type: 'file', content: 'aws certified solutions architect - associate\namazon web services (aws)\njul 2024 - jul 2027\ncredential id: 23fc2a7d-54d5-41fd-94ca-2c01a9b92a14\n\nsolutions architecture certification covering designing distributed systems and applications on aws platform, including cloud computing.' },
                                'cloud-practitioner.txt': { type: 'file', content: 'aws certified cloud practitioner\namazon web services (aws)\njun 2024 - jun 2027\n\nfoundational cloud certification covering aws cloud concepts, services, security, architecture, pricing, and support. includes large language models (llm), cyber, and cloud computing.' }
                            }
                        },
                        'comptia': {
                            type: 'directory',
                            contents: {
                                'cysa+.txt': { type: 'file', content: 'comptia cybersecurity analyst (cysa+)\ncomptia\nfeb 2025 - feb 2028\n\nadvanced cybersecurity certification covering threat detection, analysis, and response using behavioral analytics and security tools. includes data privacy, cyber, and cybersecurity.' },
                                'csap.txt': { type: 'file', content: 'comptia security analytics practitioner (csap)\ncomptia\nfeb 2025 - feb 2028\n\nspecialized certification in security analytics, covering advanced threat detection and security data analysis techniques.' },
                                'csis.txt': { type: 'file', content: 'comptia secure infrastructure specialist (csis)\ncomptia\njun 2024 - feb 2028\n\ncomprehensive security infrastructure certification covering network security, system security, and secure infrastructure design. includes cyber and comptia.' },
                                'security+.txt': { type: 'file', content: 'comptia security+\ncomptia\njun 2024 - feb 2028\ncredential id: v2wz1x8z31141tkj\n\nfoundational cybersecurity certification covering core security functions, risk management, and security operations. includes cyber and comptia.' },
                                'cios.txt': { type: 'file', content: 'comptia it operations specialist (cios)\ncomptia\napr 2024 - feb 2028\n\nit operations certification covering system administration, troubleshooting, and operational security practices. includes cyber and comptia.' },
                                'network+.txt': { type: 'file', content: 'comptia network+\ncomptia\napr 2024 - feb 2028\ncredential id: nyxnpwztdnv1qqcq\n\nnetwork administration certification covering network design, implementation, troubleshooting, and security. includes cyber and comptia.' },
                                'a+.txt': { type: 'file', content: 'comptia a+\ncomptia\nfeb 2024 - feb 2028\ncredential id: qh4gvk2rbjbq1dw3\n\nfoundational it certification covering hardware, software, troubleshooting, and operational procedures. includes cyber and comptia.' },
                                'it-fundamentals+.txt': { type: 'file', content: 'comptia it fundamentals+\ncomptia\nmay 2023 - may 2026\ncredential id: nj9w2f1shf4q1p5y\n\nentry-level it certification covering basic it concepts, terminology, and fundamental skills. includes information technology and comptia.' }
                            }
                        },
                        'palantir': {
                            type: 'directory',
                            contents: {
                                'scoping.txt': { type: 'file', content: 'scoping use cases in foundry & aip\npalantir technologies\noct 2025\ncredential id: 9dmvmq43i33a\n\nspecialized certification covering scoping use cases in palantir foundry and aip platforms, including data privacy, data science, and database management.' },
                                'foundry-aware.txt': { type: 'file', content: 'certified palantir foundry aware professional\npalantir technologies\nsep 2025 - sep 2027\ncredential id: d5t97obr7p42\n\nfoundry certification exam for foundry aware 2025, covering databases, data privacy, and data science in the palantir foundry platform.' },
                                'builder-foundations.txt': { type: 'file', content: 'foundry & aip builder foundations\npalantir technologies\nsep 2025\ncredential id: iunn5grp5bah\n\nfoundational certification covering foundry & aip builder foundations, including databases, data science, and data privacy.' }
                            }
                        },
                        'other': {
                            type: 'directory',
                            contents: {
                                'dod-cyber-awareness.txt': { type: 'file', content: 'cyber awareness challenge 2025\nunited states department of defense\nnov 2024\ncredential id: hdq75a1wlz\n\ncyber awareness challenge certificate covering cyber and u.s. department of defense security protocols.' },
                                'microsoft-serverless.txt': { type: 'file', content: 'create serverless applications\nmicrosoft\naug 2024\n\nmicrosoft certification covering serverless application development using microsoft azure.' },
                                'cisco-network.txt': { type: 'file', content: 'network technician career path\ncisco\naug 2024\n\ncisco certification covering networking fundamentals and network technician career path.' }
                            }
                        }
                    }
                },
                'contact.txt': {
                    type: 'file',
                    content: `contact information

primary email: will.jedrzejczak@gmail.com

other emails:
- william@altuvo.info
- wjedrzejczak@palantir.com
- wjedrzejczak@hiddenlayer.com
- wjd@amazon.com
- william.jedrzejczak@blueskyinnovators.com
- will.jedrzejczak@mantech.com
- william.jedrzejczak@solvitursystems.com`
                }
            }
        }
    };
    
    const getPromptString = () => {
        const path = currentPath === '~' ? '~' : currentPath;
        return `will@portfolio:${path}$`;
    };
    
    const getDirectoryAtPath = (path) => {
        if (path === '~') return filesystem['~'];
        const parts = path.replace('~/', '').split('/');
        let current = filesystem['~'];
        for (const part of parts) {
            if (current.contents && current.contents[part]) {
                current = current.contents[part];
            } else {
                return null;
            }
        }
        return current;
    };
    
    const addLine = (text, className = 'terminal-line') => {
        const line = document.createElement('div');
        line.className = className;
        line.textContent = text;
        terminalOutput.appendChild(line);
        scrollToBottom();
    };
    
    const scrollToBottom = () => {
        const terminal = document.getElementById('terminal');
        // Only scroll if user is near the bottom (within 100px)
        const isNearBottom = terminal.scrollHeight - terminal.scrollTop - terminal.clientHeight < 100;
        if (isNearBottom) {
            terminal.scrollTop = terminal.scrollHeight;
        }
    };
    
    let lastDirectoryOutput = null;
    let lastDirectoryPath = null;
    let lastPromptLines = [];
    let isNavigating = false;
    
    const showDirectory = () => {
        const dir = getDirectoryAtPath(currentPath);
        if (!dir || dir.type !== 'directory') {
            addLine(`cd: ${currentPath}: No such file or directory`, 'terminal-line');
            return;
        }
        
        // Don't show duplicate directory listing if we're already showing it for this path
        if (lastDirectoryOutput && lastDirectoryPath === currentPath && lastDirectoryOutput.parentNode) {
            return;
        }
        
        // Remove previous directory listing if it exists
        if (lastDirectoryOutput && lastDirectoryOutput.parentNode) {
            lastDirectoryOutput.parentNode.removeChild(lastDirectoryOutput);
        }
        
        // Remove previous prompt lines if they exist
        lastPromptLines.forEach(line => {
            if (line && line.parentNode) {
                line.parentNode.removeChild(line);
            }
        });
        lastPromptLines = [];
        
        const items = Object.keys(dir.contents || {}).sort();
        const files = items.filter(item => dir.contents[item].type === 'file');
        const dirs = items.filter(item => dir.contents[item].type === 'directory');
        
        // Create clickable output
        const outputLine = document.createElement('div');
        outputLine.className = 'terminal-line terminal-ls-output';
        outputLine.style.cursor = 'default';
        
        // Add ".." option if not at root
        if (currentPath !== '~') {
            const backSpan = document.createElement('span');
            backSpan.className = 'terminal-dir';
            backSpan.textContent = '../';
            backSpan.style.cursor = 'pointer';
            backSpan.style.textDecoration = 'underline';
            backSpan.style.marginRight = '10px';
            backSpan.style.color = 'var(--terminal-cyan)';
            
            backSpan.addEventListener('click', () => {
                navigateUp();
            });
            
            outputLine.appendChild(backSpan);
        }
        
        items.forEach((item, index) => {
            const isDir = dir.contents[item].type === 'directory';
            const span = document.createElement('span');
            span.className = isDir ? 'terminal-dir' : 'terminal-file';
            span.textContent = item + (isDir ? '/' : '');
            span.style.cursor = 'pointer';
            span.style.textDecoration = 'underline';
            span.style.marginRight = '10px';
            
            span.addEventListener('click', () => {
                if (isDir) {
                    navigateTo(item);
                } else {
                    showFile(item);
                }
            });
            
            outputLine.appendChild(span);
        });
        
        terminalOutput.appendChild(outputLine);
        lastDirectoryOutput = outputLine;
        lastDirectoryPath = currentPath;
        scrollToBottom();
    };
    
    const navigateTo = (dirName) => {
        // Don't navigate if we're already in this directory or if navigation is in progress
        const newPath = currentPath === '~' ? `~/${dirName}` : `${currentPath}/${dirName}`;
        if (newPath === currentPath || isNavigating) {
            return;
        }
        
        isNavigating = true;
        
        // Clear any displayed file content when navigating
        if (lastFileContainer && lastFileContainer.parentNode) {
            lastFileContainer.parentNode.removeChild(lastFileContainer);
            lastFileContainer = null;
        }
        
        currentPath = newPath;
        
        const prompt1 = document.createElement('div');
        prompt1.className = 'terminal-line terminal-prompt-line';
        prompt1.textContent = `${getPromptString()} cd ${dirName}`;
        terminalOutput.appendChild(prompt1);
        lastPromptLines.push(prompt1);
        
        const empty1 = document.createElement('div');
        empty1.className = 'terminal-line';
        empty1.textContent = '';
        terminalOutput.appendChild(empty1);
        lastPromptLines.push(empty1);
        
        const prompt2 = document.createElement('div');
        prompt2.className = 'terminal-line terminal-prompt-line';
        prompt2.textContent = `${getPromptString()} ls`;
        terminalOutput.appendChild(prompt2);
        lastPromptLines.push(prompt2);
        
        const empty2 = document.createElement('div');
        empty2.className = 'terminal-line';
        empty2.textContent = '';
        terminalOutput.appendChild(empty2);
        lastPromptLines.push(empty2);
        
        showDirectory();
        isNavigating = false;
    };
    
    const navigateUp = () => {
        if (currentPath === '~' || isNavigating) return;
        
        isNavigating = true;
        
        // Clear any displayed file content when navigating up
        if (lastFileContainer && lastFileContainer.parentNode) {
            lastFileContainer.parentNode.removeChild(lastFileContainer);
            lastFileContainer = null;
        }
        
        const parts = currentPath.replace('~/', '').split('/');
        parts.pop();
        currentPath = parts.length === 0 ? '~' : `~/${parts.join('/')}`;
        
        const prompt1 = document.createElement('div');
        prompt1.className = 'terminal-line terminal-prompt-line';
        prompt1.textContent = `${getPromptString()} cd ..`;
        terminalOutput.appendChild(prompt1);
        lastPromptLines.push(prompt1);
        
        const empty1 = document.createElement('div');
        empty1.className = 'terminal-line';
        empty1.textContent = '';
        terminalOutput.appendChild(empty1);
        lastPromptLines.push(empty1);
        
        const prompt2 = document.createElement('div');
        prompt2.className = 'terminal-line terminal-prompt-line';
        prompt2.textContent = `${getPromptString()} ls`;
        terminalOutput.appendChild(prompt2);
        lastPromptLines.push(prompt2);
        
        const empty2 = document.createElement('div');
        empty2.className = 'terminal-line';
        empty2.textContent = '';
        terminalOutput.appendChild(empty2);
        lastPromptLines.push(empty2);
        
        showDirectory();
        isNavigating = false;
    };
    
    let lastFileContainer = null;
    
    const showFile = (fileName) => {
        const dir = getDirectoryAtPath(currentPath);
        if (!dir || !dir.contents[fileName] || dir.contents[fileName].type !== 'file') {
            addLine(`cat: ${fileName}: No such file or directory`, 'terminal-line');
            return;
        }
        
        // Remove previous file content container if it exists
        if (lastFileContainer && lastFileContainer.parentNode) {
            lastFileContainer.parentNode.removeChild(lastFileContainer);
        }
        
        // Create container for file content (prompt + empty line + content + empty line)
        lastFileContainer = document.createElement('div');
        lastFileContainer.style.marginBottom = '0';
        
        const promptLine = document.createElement('div');
        promptLine.className = 'terminal-line terminal-prompt-line';
        promptLine.textContent = `${getPromptString()} cat ${fileName}`;
        lastFileContainer.appendChild(promptLine);
        
        const emptyLine1 = document.createElement('div');
        emptyLine1.className = 'terminal-line';
        emptyLine1.textContent = '';
        lastFileContainer.appendChild(emptyLine1);
        
        const contentLine = document.createElement('div');
        contentLine.className = 'terminal-line';
        contentLine.textContent = dir.contents[fileName].content;
        lastFileContainer.appendChild(contentLine);
        
        const emptyLine2 = document.createElement('div');
        emptyLine2.className = 'terminal-line';
        emptyLine2.textContent = '';
        lastFileContainer.appendChild(emptyLine2);
        
        terminalOutput.appendChild(lastFileContainer);
        
        // Scroll to show the file content smoothly, but don't force to absolute bottom
        requestAnimationFrame(() => {
            lastFileContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    };
    
    // Initial display
    addLine(`${getPromptString()} ls`, 'terminal-line terminal-prompt-line');
    addLine('');
    showDirectory();
    
    // Add back button functionality
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && e.ctrlKey) {
            e.preventDefault();
            navigateUp();
        }
    });
});
