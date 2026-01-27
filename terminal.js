// Terminal Emulator for Portfolio Website
class Terminal {
    constructor(container) {
        this.container = container;
        this.history = [];
        this.historyIndex = -1;
        this.currentPath = '~';
        this.commands = {};
        this.filesystem = this.buildFilesystem();
        this.init();
    }

    buildFilesystem() {
        return {
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
                    },
                    'help.txt': {
                        type: 'file',
                        content: `available commands:

  cd [directory]     - change directory
  ls [path]          - list directory contents
  cat [file]         - display file contents
  pwd                - print working directory
  clear              - clear terminal screen
  whoami             - display current user
  help               - show this help message
  history            - show command history
  echo [text]        - echo text to terminal
  date               - show current date and time
  exit               - exit terminal (reloads page)

navigation examples:
  cd experience      - navigate to experience directory
  ls                 - list current directory
  cat about.txt      - view about file
  cd ..              - go to parent directory
  cd ~               - go to home directory
  cat experience/palantir.txt  - view specific file

keyboard shortcuts:
  ↑/↓                - navigate command history
  Tab                - auto-complete file/directory names
  Enter              - execute command`
                    }
                }
            }
        };
    }

    init() {
        this.registerCommands();
        this.printWelcome();
        this.createPrompt();
        this.setupEventListeners();
    }

    registerCommands() {
        this.commands = {
            'cd': (args) => this.cd(args),
            'ls': (args) => this.ls(args),
            'cat': (args) => this.cat(args),
            'pwd': () => this.pwd(),
            'clear': () => this.clear(),
            'whoami': () => this.whoami(),
            'help': () => this.help(),
            'history': () => this.showHistory(),
            'exit': () => this.exit(),
            'echo': (args) => this.echo(args),
            'date': () => this.date()
        };
    }
    
    echo(args) {
        return args.join(' ');
    }
    
    date() {
        return new Date().toString();
    }

    getCurrentDirectory() {
        const pathParts = this.currentPath === '~' ? ['~'] : this.currentPath.split('/').filter(p => p);
        let current = this.filesystem['~'];
        
        for (let i = 1; i < pathParts.length; i++) {
            const part = pathParts[i];
            if (current.contents && current.contents[part]) {
                current = current.contents[part];
            } else {
                return null;
            }
        }
        return current;
    }

    resolvePath(path) {
        if (!path || path === '~' || path === '') return '~';
        if (path.startsWith('~/')) path = path.substring(2);
        
        const parts = path.split('/').filter(p => p);
        let current = this.filesystem['~'];
        let currentPath = '~';
        
        for (const part of parts) {
            if (part === '..') {
                if (currentPath !== '~') {
                    const pathParts = currentPath.split('/').filter(p => p);
                    pathParts.pop();
                    currentPath = pathParts.length > 0 ? '~/' + pathParts.join('/') : '~';
                    current = this.filesystem['~'];
                    for (let i = 1; i < pathParts.length; i++) {
                        if (current.contents && current.contents[pathParts[i]]) {
                            current = current.contents[pathParts[i]];
                        }
                    }
                }
            } else if (part === '.') {
                continue;
            } else {
                if (current.contents && current.contents[part]) {
                    current = current.contents[part];
                    currentPath = currentPath === '~' ? `~/${part}` : `${currentPath}/${part}`;
                } else {
                    return null;
                }
            }
        }
        
        return currentPath;
    }

    cd(args) {
        if (!args || args.length === 0) {
            this.currentPath = '~';
            return '';
        }
        
        const targetPath = args.join(' ');
        const resolvedPath = this.resolvePath(targetPath);
        
        if (resolvedPath === null) {
            return `cd: no such file or directory: ${targetPath}`;
        }
        
        const dir = this.getDirectoryAtPath(resolvedPath);
        if (!dir || dir.type !== 'directory') {
            return `cd: not a directory: ${targetPath}`;
        }
        
        this.currentPath = resolvedPath;
        return '';
    }

    getDirectoryAtPath(path) {
        if (path === '~') return this.filesystem['~'];
        
        const parts = path.substring(2).split('/').filter(p => p);
        let current = this.filesystem['~'];
        
        for (const part of parts) {
            if (current.contents && current.contents[part]) {
                current = current.contents[part];
            } else {
                return null;
            }
        }
        return current;
    }

    ls(args) {
        const targetPath = args && args.length > 0 ? this.resolvePath(args.join(' ')) : this.currentPath;
        
        if (targetPath === null) {
            return `ls: cannot access '${args.join(' ')}': No such file or directory`;
        }
        
        const dir = this.getDirectoryAtPath(targetPath);
        if (!dir || dir.type !== 'directory') {
            return `ls: cannot access '${args.join(' ')}': Not a directory`;
        }
        
        if (!dir.contents || Object.keys(dir.contents).length === 0) {
            return '';
        }
        
        const items = Object.keys(dir.contents).sort();
        const output = [];
        
        items.forEach(item => {
            const obj = dir.contents[item];
            const type = obj.type === 'directory' ? 'd' : '-';
            const name = obj.type === 'directory' ? `${item}/` : item;
            output.push(name);
        });
        
        return output.join('  ');
    }

    cat(args) {
        if (!args || args.length === 0) {
            return 'cat: missing file operand';
        }
        
        const filename = args.join(' ');
        const currentDir = this.getCurrentDirectory();
        
        if (!currentDir || !currentDir.contents || !currentDir.contents[filename]) {
            return `cat: ${filename}: No such file or directory`;
        }
        
        const file = currentDir.contents[filename];
        if (file.type !== 'file') {
            return `cat: ${filename}: Is a directory`;
        }
        
        return file.content;
    }

    pwd() {
        return this.currentPath;
    }

    clear() {
        const terminalOutput = this.container.querySelector('.terminal-output');
        terminalOutput.innerHTML = '';
        return '';
    }

    whoami() {
        return 'will.jedrzejczak';
    }

    help() {
        const helpFile = this.filesystem['~'].contents['help.txt'];
        return helpFile ? helpFile.content : 'help command not available';
    }

    showHistory() {
        if (this.history.length === 0) {
            return 'No command history';
        }
        return this.history.map((cmd, idx) => `${idx + 1}  ${cmd}`).join('\n');
    }

    exit() {
        window.location.reload();
        return '';
    }

    printWelcome() {
        const welcome = `Welcome to will j. jedrzejczak's portfolio terminal

Type 'help' to see available commands.
Type 'cat help.txt' for detailed help.
Type 'cat about.txt' to learn more about me.

`;
        this.appendOutput(welcome, 'system');
    }

    createPrompt() {
        const prompt = document.createElement('div');
        prompt.className = 'terminal-line';
        prompt.innerHTML = `
            <span class="terminal-prompt">${this.getPromptString()}</span>
            <span class="terminal-input" contenteditable="true" spellcheck="false"></span>
            <span class="terminal-cursor">█</span>
        `;
        
        const terminalOutput = this.container.querySelector('.terminal-output');
        terminalOutput.appendChild(prompt);
        
        const input = prompt.querySelector('.terminal-input');
        input.focus();
        
        this.setupInputEvents(input, prompt);
    }

    getPromptString() {
        const user = 'will@portfolio';
        const path = this.currentPath === '~' ? '~' : this.currentPath;
        return `${user}:${path}$ `;
    }

    setupInputEvents(input, promptLine) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.executeCommand(input.textContent.trim(), promptLine);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory(-1, input);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory(1, input);
            } else if (e.key === 'Tab') {
                e.preventDefault();
                this.handleTabCompletion(input);
            }
        });
        
        input.addEventListener('input', () => {
            this.updateCursor(promptLine);
        });
    }

    navigateHistory(direction, input) {
        if (direction === -1) {
            if (this.historyIndex === -1) {
                this.historyIndex = this.history.length - 1;
            } else if (this.historyIndex > 0) {
                this.historyIndex--;
            }
        } else {
            if (this.historyIndex < this.history.length - 1) {
                this.historyIndex++;
            } else {
                this.historyIndex = -1;
                input.textContent = '';
                return;
            }
        }
        
        if (this.historyIndex >= 0 && this.historyIndex < this.history.length) {
            input.textContent = this.history[this.historyIndex];
            this.updateCursor(input.closest('.terminal-line'));
        }
    }

    handleTabCompletion(input) {
        const text = input.textContent.trim();
        const parts = text.split(' ').filter(p => p);
        const command = parts[0];
        const args = parts.slice(1);
        
        if (command === 'cd' || command === 'ls' || command === 'cat') {
            const currentDir = this.getCurrentDirectory();
            if (currentDir && currentDir.contents) {
                const items = Object.keys(currentDir.contents);
                const lastArg = args.length > 0 ? args[args.length - 1] : '';
                const matches = items.filter(item => item.startsWith(lastArg));
                
                if (matches.length === 1) {
                    args[args.length - 1] = matches[0];
                    const newText = command + (args.length > 0 ? ' ' + args.join(' ') : '');
                    input.textContent = newText;
                    // Move cursor to end
                    const range = document.createRange();
                    const sel = window.getSelection();
                    range.selectNodeContents(input);
                    range.collapse(false);
                    sel.removeAllRanges();
                    sel.addRange(range);
                    this.updateCursor(input.closest('.terminal-line'));
                } else if (matches.length > 1) {
                    // Show all matches
                    this.appendOutput(matches.join('  '), 'output');
                    this.createPrompt();
                }
            }
        }
    }

    executeCommand(commandText, promptLine) {
        if (!commandText) {
            this.createPrompt();
            return;
        }
        
        this.history.push(commandText);
        this.historyIndex = -1;
        
        const parts = commandText.split(' ').filter(p => p);
        const command = parts[0].toLowerCase();
        const args = parts.slice(1);
        
        const inputEl = promptLine.querySelector('.terminal-input');
        const cursorEl = promptLine.querySelector('.terminal-cursor');
        
        if (inputEl) inputEl.contentEditable = 'false';
        if (cursorEl) cursorEl.style.display = 'none';
        
        let output = '';
        
        if (this.commands[command]) {
            try {
                output = this.commands[command](args);
            } catch (error) {
                output = `error: ${error.message}`;
            }
        } else {
            output = `command not found: ${command}. Type 'help' for available commands.`;
        }
        
        if (output) {
            this.appendOutput(output, 'output');
        }
        
        if (command !== 'clear') {
            this.createPrompt();
        }
    }

    appendOutput(text, type = 'output') {
        const terminalOutput = this.container.querySelector('.terminal-output');
        const outputLine = document.createElement('div');
        outputLine.className = `terminal-line terminal-${type}`;
        
        // Check if output contains error messages
        if (text.includes('not found') || text.includes('cannot access') || text.includes('error:')) {
            outputLine.style.color = 'var(--terminal-red)';
        }
        
        outputLine.textContent = text;
        terminalOutput.appendChild(outputLine);
        this.scrollToBottom();
    }

    updateCursor(promptLine) {
        const cursor = promptLine.querySelector('.terminal-cursor');
        if (cursor) {
            cursor.style.animation = 'none';
            setTimeout(() => {
                cursor.style.animation = '';
            }, 10);
        }
    }

    scrollToBottom() {
        this.container.scrollTop = this.container.scrollHeight;
    }

    setupEventListeners() {
        this.container.addEventListener('click', () => {
            const activeInput = this.container.querySelector('.terminal-input[contenteditable="true"]');
            if (activeInput) {
                activeInput.focus();
            }
        });
    }
}

// Initialize terminal when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const terminalContainer = document.getElementById('terminal');
    if (terminalContainer) {
        new Terminal(terminalContainer);
    }
});
