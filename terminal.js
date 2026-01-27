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
deployment strategist @ palantir technologies (nyse: $pltr)

it all started with youtube videos about computer viruses. what began as childhood curiosity 
turned into a self-taught journey through cybersecurity, leading me to jmu where i became 
valedictorian of my major while racking up 5 internships. then palantir called at the start 
of my junior year asking if i'd be willing to drop out after may 2026. naturally, i said yes.

when i'm not building secure ai/ml solutions for the government, you'll find me lifting weights, 
discovering new music, or outperforming the market by a mile on my fidelity account. ultimately, 
i'm just extremely passionate about building things that help other people.`
                },
                'experience': {
                    type: 'directory',
                    contents: {
                        'palantir.txt': {
                            type: 'file',
                            content: `deployment strategist (usg)
palantir technologies
sep 2025 - present

us government + business development. offered full-time role starting may 2026 before degree conferral. 
palantir provides configurable solutions to confront the most complex defense challenges, from building 
ai-enabled ground stations to supporting distributed multi-domain operations at the edge.

tech: AI/ML, Defense Technology, Government Solutions, Business Development`
                        },
                        'aws.txt': {
                            type: 'file',
                            content: `professional services national security cloud engineer
amazon web services (aws)
may 2025 - sep 2025

analytics + application development for amazon dedicated cloud. doubled project scope and tripled 
certification requirements. aws cloud provides secure, scalable solutions for u.s. federal government 
across civilian agencies, intelligence community, and department of defense.

tech: AWS Lambda, Amazon S3, AWS CloudFormation, Amazon Cognito, Machine Learning, Infrastructure as Code, Large Language Models`
                        },
                        'mantech.txt': {
                            type: 'file',
                            content: `technical engineer & subject matter expert (ii+)
mantech
nov 2024 - may 2025

supporting the cio, worked across iam, ad, and virtualization. received two promotions in less 
than a year. mantech proudly safeguards the country's most sensitive national security missions.

tech: Identity and Access Management, Active Directory, Virtualization, IT Management, Cybersecurity`
                        },
                        'bluesky.txt': {
                            type: 'file',
                            content: `artificial intelligence engineer
blue sky innovators
sep 2025 - present

r&d team; built an ml-driven cybersecurity agent with opensearch queries. blue sky innovators 
supports government and commercial customers in the definition and delivery of advanced technologies 
to solve the toughest challenges.

tech: Machine Learning, OpenSearch, Cybersecurity, R&D`
                        },
                        'rockingham.txt': {
                            type: 'file',
                            content: `network engineer
rockingham county public schools
aug 2025 - present

pii, data migration, and infrastructure challenges for 11,500+ students. supporting the division's 
mission to deliver exceptional learning experiences to students through comprehensive technology solutions.

tech: Network Infrastructure, Data Migration, PII Management, Educational Technology`
                        }
                    }
                },
                'projects': {
                    type: 'directory',
                    contents: {
                        'jmu-advising-bot.txt': {
                            type: 'file',
                            content: `jmu it advising bot
james madison university
oct 2025 - dec 2026

fully built-out jmu it/cs advisor created with aws cdk infrastructure as code. 
leverages amazon bedrock for ai capabilities, claude haiku for natural language processing, 
dynamodb for scalable data storage, and s3 for document management. provides personalized 
academic advising and course recommendations for information technology and computer science students.

tech: aws cdk, amazon bedrock, claude haiku, dynamodb, amazon s3, infrastructure as code, ai/ml`
                        },
                        'musiccpr.txt': {
                            type: 'file',
                            content: `musiccpr
james madison university
dec 2023 - may 2024

educational website aimed at enhancing music education, developed as a niche learning management system 
similar to canvas. collaborated with music teachers to design and implement this web application, 
which was enthusiastically received by students and teachers during the pandemic.

tech: javascript, react, html, css, web development`
                        },
                        'dukessat.txt': {
                            type: 'file',
                            content: `jmu dukessat (meshsat)
james madison university
feb 2024 - mar 2024

supported the development of meshsat, a satellite project at james madison university. 
contributed to the technical development and implementation of this innovative satellite 
communication system using ai/ml and python technologies.

tech: python, ai/ml, satellite tech, research`
                        },
                        'cybersecdb.txt': {
                            type: 'file',
                            content: `cybersecdb
james madison university
academic project

cybersecurity database built collaboratively with friends to help threat detection. 
utilized sql for database design and mockaroo for realistic data generation. 
the database was designed to support cybersecurity operations and was presented 
to our class as a comprehensive threat detection solution.

tech: sql, mockaroo, database design, cybersecurity, threat detection`
                        }
                    }
                },
                'certifications': {
                    type: 'directory',
                    contents: {
                        'aws': {
                            type: 'directory',
                            contents: {
                                'data-engineer.txt': { type: 'file', content: 'aws certified data engineer - associate\namazon web services (aws)\naug 2025 - aug 2028\n\nadvanced certification in data engineering on aws, covering data privacy, data science, databases, and comprehensive aws data services.' },
                                'developer.txt': { type: 'file', content: 'aws certified developer - associate\namazon web services (aws)\njul 2025 - jul 2028\n\nprofessional certification in developing and maintaining applications on aws platform, covering infrastructure as code, lambda, and api gateways.' },
                                'ml-engineer.txt': { type: 'file', content: 'aws certified machine learning engineer - associate\namazon web services (aws)\njul 2025 - jul 2028\n\nspecialized certification in machine learning engineering on aws, covering ai, large language models, and advanced ml services.' },
                                'sysops.txt': { type: 'file', content: 'aws certified sysops administrator - associate\namazon web services (aws)\nmay 2025 - may 2028\n\nsystems operations certification covering deployment, management, and operations of scalable, highly available systems on aws.' },
                                'ai-practitioner.txt': { type: 'file', content: 'aws certified ai practitioner\namazon web services (aws)\nmar 2025 - mar 2028\n\nfoundational ai certification covering artificial intelligence concepts, large language models, and cloud computing applications.' },
                                'solutions-architect.txt': { type: 'file', content: 'aws certified solutions architect - associate\namazon web services (aws)\njul 2024 - jul 2027\n\nsolutions architecture certification covering designing distributed systems and applications on aws platform.' },
                                'cloud-practitioner.txt': { type: 'file', content: 'aws certified cloud practitioner\namazon web services (aws)\njun 2024 - jun 2027\n\nfoundational cloud certification covering aws cloud concepts, services, security, architecture, pricing, and support.' }
                            }
                        },
                        'comptia': {
                            type: 'directory',
                            contents: {
                                'cysa+.txt': { type: 'file', content: 'comptia cybersecurity analyst (cysa+)\ncomptia\nfeb 2025 - feb 2028\n\nadvanced cybersecurity certification covering threat detection, analysis, and response using behavioral analytics and security tools.' },
                                'csap.txt': { type: 'file', content: 'comptia security analytics practitioner (csap)\ncomptia\nfeb 2025 - feb 2028\n\nspecialized certification in security analytics, covering advanced threat detection and security data analysis techniques.' },
                                'csis.txt': { type: 'file', content: 'comptia secure infrastructure specialist (csis)\ncomptia\njun 2024 - feb 2028\n\ncomprehensive security infrastructure certification covering network security, system security, and secure infrastructure design.' },
                                'security+.txt': { type: 'file', content: 'comptia security+\ncomptia\njun 2024 - feb 2028\n\nfoundational cybersecurity certification covering core security functions, risk management, and security operations.' },
                                'cios.txt': { type: 'file', content: 'comptia it operations specialist (cios)\ncomptia\napr 2024 - feb 2028\n\nit operations certification covering system administration, troubleshooting, and operational security practices.' },
                                'network+.txt': { type: 'file', content: 'comptia network+\ncomptia\napr 2024 - feb 2028\n\nnetwork administration certification covering network design, implementation, troubleshooting, and security.' },
                                'a+.txt': { type: 'file', content: 'comptia a+\ncomptia\nfeb 2024 - feb 2028\n\nfoundational it certification covering hardware, software, troubleshooting, and operational procedures.' },
                                'it-fundamentals+.txt': { type: 'file', content: 'comptia it fundamentals+\ncomptia\nmay 2023 - may 2026\n\nentry-level it certification covering basic it concepts, terminology, and fundamental skills.' }
                            }
                        },
                        'palantir': {
                            type: 'directory',
                            contents: {
                                'foundry-aware.txt': { type: 'file', content: 'certified palantir foundry aware professional\npalantir technologies\nsep 2025 - sep 2027\ncredential id: d5t97obr7p42\n\nfoundry certification exam for foundry aware 2025, covering databases, data privacy, and data science in the palantir foundry platform.' },
                                'scoping.txt': { type: 'file', content: 'scoping use cases in foundry & aip\npalantir technologies\noct 2025\ncredential id: 9dmvmq43i33a\n\nspecialized certification covering scoping use cases in palantir foundry and aip platforms, including data privacy, data science, and database management.' },
                                'builder-foundations.txt': { type: 'file', content: 'foundry & aip builder foundations\npalantir technologies\nsep 2025\ncredential id: iunn5grp5bah\n\nfoundational certification covering foundry & aip builder foundations, including databases, data science, and data privacy.' }
                            }
                        }
                    }
                },
                'education': {
                    type: 'directory',
                    contents: {
                        'jmu.txt': {
                            type: 'file',
                            content: `james madison university
b.s. information technology
valedictorian candidate (3.984/4.000 gpa)

ranked #1 in b.s. it program at james madison university. consistently on president's list every semester, 
demonstrating exceptional academic excellence in information technology and computer science.`
                        },
                        'coursework': {
                            type: 'directory',
                            contents: {
                                'core-it.txt': { type: 'file', content: 'core information technology courses:\nit-101, it-203, it-215, it-240, it-301, it-302, it-311, it-313' },
                                'networking.txt': { type: 'file', content: 'advanced networking & cybersecurity:\nit-333, it-460, it-480' },
                                'data-science.txt': { type: 'file', content: 'data science & artificial intelligence:\nit-340, it-347' },
                                'cs-foundations.txt': { type: 'file', content: 'computer science foundations:\ncs-149, it-160e, it-201e, it-212' },
                                'capstone.txt': { type: 'file', content: 'capstone & professional development:\nit-444, it-445, it-433' }
                            }
                        }
                    }
                },
                'leadership': {
                    type: 'directory',
                    contents: {
                        'it-ambassador.txt': { type: 'file', content: 'founding & lead it ambassador\ninformation technology department (2023-present)\n\nled it major to become one of jmu\'s fastest-growing programs as top-ranked ambassador by hours contributed.' },
                        'cyber-defense.txt': { type: 'file', content: 'executive officer, cyber defense club\n2025-present\n\nthe cyber defense club achieved first place at the virginia military institute cyber competition, demonstrating exceptional cybersecurity excellence.' },
                        'consulting-club.txt': { type: 'file', content: 'internal vice president, madison consulting club\n2025-present\n\none of the biggest clubs in jmu\'s college of business. driving strategic initiatives and fostering professional development.' },
                        'teaching-assistant.txt': { type: 'file', content: 'teaching assistant\nit-201 computational structures and logic (2024-2025)\n\nmentored students in discrete mathematics, logic, and computational theory fundamentals.' }
                    }
                },
                'contact.txt': {
                    type: 'file',
                    content: `contact information

primary email: william@altuvo.info
alternate: will.jedrzejczak@gmail.com

other emails:
- wjedrzejczak@palantir.com
- wjd@amazon.com
- william.jedrzejczak@blueskyinnovators.com
- wjedrzejc@rockingham.k12.va.us
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
