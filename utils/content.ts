// content.ts

type Experience = {
  period: string;
  company: string;
  role: string;
};

type Education = {
  period: string;
  school: string;
  course: string;
};

type ResumeSection = {
  experience: [string, string, string, Experience[]];
  education: [string, string, string, Education[]];
  skills: [string, string, string];
  about: [string, string, string, string, string, string, string, string, string, string, string, string, string];
};

type Content = {
  nav: {
    pt: string[];
    en: string[];
  };
  home: {
    pt: string[];
    en: string[];
  };
  services: {
    pt: string[];
    en: string[];
  };
  resume: {
    pt: ResumeSection[];
    en: ResumeSection[];
  };
  work: {
    pt: { title: string; description: string }[];
    en: { title: string; description: string }[];
  };
};

const content: Content = {
  nav: {
    pt: [
      "Início",
      "Serviços",
      "CV",
      "Trabalhos",
      "Contatos",
      "Entre em contato"
    ],
    en: ["Home", "Services", "Resume", "Work", "Contact", "Hire me"]
  },
  home: {
    pt: [
      "Desenvolvedor de Software",
      "Olá! Sou",
      "Sou excelente na criação de experiências digitais elegantes. Possuo quatro anos de experiência em desenvolvimento de software e um compromisso com a excelência em cada projeto.",
      "Anos de Experiência",
      "Projetos entregues",
      "Tecnologias Utilizadas",
      "Commits realizados",
      "Pull requests"
    ],
    en: [
      "Software Developer",
      "Hello I'm",
      "I excel in creating elegant digital experiences. I have four years of experience in software development and a commitment to excellence in every project.",
      "Years of experience",
      "Projects completed",
      "Tecnologies mastered",
      "Code commits",
      "Pull requests"
    ]
  },
  services: {
    pt: [
      "Desenvolvimento Web",
      "Ofereço serviços especializados em desenvolvimento web, criando sites, landing pages, e-commerce, dashboards, games, entre outros. Busco utilizar as melhores ferramentas disponíveis no mercado, como as melhores frameworks front-end, para garantir soluções de alta qualidade.",
      "Desenvolvimento Back-end",
      "Ofereço serviços especializados em desenvolvimento back-end, onde posso construir APIs e microserviços do zero para consumir dados de qualquer banco de dados. Auxilio na criação de bancos de dados e na arquitetura do back-end, promovendo código de fácil manutenção e seguindo boas práticas de programação, como o princípio de código limpo.",
      "Desenvolvimento de APP Movél",
      "Desenvolvo aplicativos utilizando JavaScript como linguagem principal, incorporando funcionalidades nativas para oferecer uma experiência completa e otimizada em diversas plataformas, incluindo aplicativos web e móveis.",
      "Automocação de Processos",
      "Desenvolvo soluções especializadas em automação de processos, utilizando JavaScript para criar sistemas que automatizam fluxos de trabalho, integram sistemas, geram relatórios automatizados, gerenciam documentos eletrônicos, automatizam atendimento ao cliente, otimizam processos financeiros e desenvolvem sistemas de monitoramento automatizado."
    ],
    en: [
      "Web Development",
      "I offer specialized services in web development, creating websites, landing pages, e-commerce platforms, dashboards, games, among others. I strive to use the best tools available in the market, including top-tier front-end frameworks, to ensure high-quality solutions.",
      "Back-end Development",
      "I provide specialized services in back-end development, where I can build APIs and microservices from scratch to consume data from any database. I assist in database creation and back-end architecture, promoting easily maintainable code and adhering to best programming practices, such as clean code principles.",
      "Mobile App Development",
      "I develop applications using JavaScript as the primary language, incorporating native functionalities to deliver a comprehensive and optimized experience across various platforms, including web and mobile applications.",
      "Process Automation",
      "I specialize in developing tailored solutions for process automation, leveraging JavaScript to create systems that automate workflows, integrate systems, generate automated reports, manage electronic documents, automate customer service, optimize financial processes, and develop automated monitoring systems."
    ]
  },
  resume: {
    pt: [
      {
        experience: [
          "Experiência",
          "Minhas experiências",
          "Desenvolvedor de software com 4 anos de experiência em diversas tecnologias e setores, especializado em criação de soluções inovadoras e eficientes. Profundo conhecimento em desenvolvimento front-end e back-end, com forte ênfase em práticas de codificação limpas e metodologias ágeis.",
          [
            {
              period: "01/2024 - 06/2024",
              company: "Korz Work",
              role: "Desenvolvedor Back-end II"
            },
            {
              period: "10/2022 - 01/2024",
              company: "Eludico Soluções Gamificadas",
              role: "Desenvolvedor Front-end I"
            },
            {
              period: "02/2020 - 09/2023",
              company: "Stout Software",
              role: "Desenvolvedor Full-stack I"
            }
          ]
        ],
        education: [
          "Educação",
          "Minha educação",
          "Graduado em Desenvolvimento de Sistemas pela renomada ETEC Centro Paula Souza, em São Paulo, onde desenvolvi uma sólida base técnica. Possuo certificações avançadas em JavaScript e TypeScript, e conhecimento em design patterns.",
          [
            {
              period: "2017 - 2018",
              school: "ETEC SP Centro Paula Souza",
              course: "Análise e Desenvolvimento de Sistemas"
            },
            {
              period: "2024 - 5 hours",
              school: "Online Course Nest Plataform",
              course: "NestJs Fundamentals Course"
            },
            {
              period: "2022 - 9 hours",
              school: "Online Course Udemy Plataform",
              course: "Vue JS 3: Composition API (with Pinia, Vite e Firebase)"
            },
            {
              period: "2021 - 43 hours",
              school: "Online Course Udemy Plataform",
              course: "Vue JS 2 (Incl. Vue Router & Vuex)"
            },
            {
              period: "2021 - 18 hours",
              school: "Online Course Udemy Plataform",
              course: "Oracle Developer SQL e PL/SQL"
            },
            {
              period: "2024 - 97 hours",
              school: "Online Course Udemy Plataform",
              course: "Complete Modern Web Course with Javascript + Projects"
            }
          ]
        ],
        skills: [
          "Skills",
          "Minhas skills",
          "Possuo um domínio avançado em JavaScript, TypeScript, Oracle e frameworks como Node.js e Nest.js, respaldado por certificações que comprovam minha experiência. Tenho paixão por utilizar diversos frameworks para criar soluções inteligentes e eficientes. Tenho habilidade em resolver problemas complexos e estou sempre em busca de aprendizado contínuo"
        ],
        about: [
          "Sobre mim",
          "Sou um desenvolvedor apaixonado por desafios, pois vejo neles oportunidades de crescimento e aprimoramento contínuo. Meu compromisso é sempre buscar a melhor solução para os produtos em que trabalho, através de uma profunda compreensão das necessidades do projeto e colaboração integrada com equipes. Me comprometo a alcançar o sucesso do projeto tanto em parceria com equipes quanto de forma autônoma, buscando constantemente superar expectativas e impulsionar resultados excepcionais nas minhas metodologias de desenvolvimento",
          "Nome",
          "Telefone",
          "Experiência",
          "Years",
          "Nacionalidade",
          "brasileiro",
          "Email",
          "Freelance",
          "Disponível",
          "Language",
          "Português, Inglês"
        ]
      }
    ],
    en: [
      {
        experience: [
          "Experience",
          "My experiences",
          "Software developer with 4 years of experience in various technologies and sectors, specialized in creating innovative and efficient solutions. Deep knowledge in front-end and back-end development, with a strong emphasis on clean coding practices and agile methodologies.",
          [
            {
              period: "01/2024 - 06/2024",
              company: "Korz Work",
              role: "Backend Developer II"
            },
            {
              period: "10/2022 - 01/2024",
              company: "Eludico Gamified Solutions",
              role: "Front-end Developer I"
            },
            {
              period: "02/2020 - 09/2023",
              company: "Stout Software",
              role: "Full-stack Developer I"
            }
          ]
        ],
        education: [
          "Education",
          "My education",
          "Graduated in Systems Development from the renowned ETEC Centro Paula Souza in São Paulo, where I developed a solid technical foundation.",
          [
            {
              period: "2017 - 2018",
              school: "ETEC SP Centro Paula Souza",
              course: "Systems Analysis and Development"
            },
            {
              period: "2024 - 5 hours",
              school: "Online Course Nest Platform",
              course: "NestJs Fundamentals Course"
            },
            {
              period: "2022 - 9 hours",
              school: "Online Course Udemy Platform",
              course: "Vue JS 3: Composition API (with Pinia, Vite, and Firebase)"
            },
            {
              period: "2021 - 43 hours",
              school: "Online Course Udemy Platform",
              course: "Vue JS 2 (Incl. Vue Router & Vuex)"
            },
            {
              period: "2021 - 18 hours",
              school: "Online Course Udemy Platform",
              course: "Oracle Developer SQL and PL/SQL"
            },
            {
              period: "2024 - 97 hours",
              school: "Online Course Udemy Platform",
              course: "Complete Modern Web Course with JavaScript + Projects"
            }
          ]
        ],
        skills: [
          "Skills",
          "My skills",
          "I have advanced proficiency in JavaScript, TypeScript, Oracle, and frameworks like Node.js and Nest.js, supported by certifications that validate my experience. I am passionate about leveraging various frameworks to create smart and efficient solutions. I excel in solving complex problems and am always pursuing continuous learning."
        ],
        about: [
          "About me",
          "I am a passionate developer who thrives on challenges as opportunities for growth and continuous improvement. My commitment is to always seek the best solution for the products I work on, through a deep understanding of project needs and integrated collaboration with teams. I am dedicated to achieving project success both in partnership with teams and independently, constantly striving to exceed expectations and drive exceptional results in my development methodologies.",
          "Name",
          "Phone",
          "Experience",
          "Years",
          "Nationality",
          "Brazilian",
          "Email",
          "Freelance",
          "Available",
          "Language",
          "Portuguese, English"
        ]
      }
    ]
  },
  work: {
    pt: [
      {
        title: "Front-end Project NB Web Site",
        description: "O site notabrasil.com.br é uma plataforma online que oferece informações e serviços relacionados ao contexto brasileiro. Ela foi desenvolvida utilizando as tecnologias Nuxt.js e Tailwind CSS. Nuxt.js é um framework Vue.js que permite a criação de aplicações web modernas com suporte a renderização server-side e geração estática, garantindo um site rápido e eficiente. Tailwind CSS, por sua vez, é um framework de CSS utilitário que possibilitou a estilização detalhada e personalizada do site, sem a necessidade de escrever CSS tradicional."
      },
      {
        title: "Front-end Project Elúdico Web Site",
        description: "Desenvolvi o projeto eludico.com.br, uma plataforma que utiliza as tecnologias Astro e Vue.js para oferecer uma experiência online envolvente. Astro é uma tecnologia que combina renderização estática e carregamento de página sob demanda, proporcionando um desempenho excepcional e uma navegação suave. Vue.js, por sua vez, é um framework JavaScript progressivo usado para construir interfaces de usuário interativas. Essas tecnologias permitiram a criação de um site rápido, eficiente e dinâmico, oferecendo uma experiência de usuário aprimorada para os visitantes do site."
      },
      {
        title: "Front-end Project Lucas Leite Web Site",
        description: "Desenvolvi um website que serve como meu portfólio digital, onde apresento meus serviços, projetos e um pouco sobre mim. Utilizei o framework Nuxt.js com geração estática para garantir um desempenho excepcional e uma experiência de usuário fluida. Configurei o deploy automatizado utilizando GitHub Actions para o Firebase, assegurando atualizações rápidas e eficientes do site. "
      }
    ],
    en: [
      {
        title: "Front-end Project NB Web Site",
        description: "O site notabrasil.com.br é uma plataforma online que oferece informações e serviços relacionados ao contexto brasileiro. Ela foi desenvolvida utilizando as tecnologias Nuxt.js e Tailwind CSS. Nuxt.js é um framework Vue.js que permite a criação de aplicações web modernas com suporte a renderização server-side e geração estática, garantindo um site rápido e eficiente. Tailwind CSS, por sua vez, é um framework de CSS utilitário que possibilitou a estilização detalhada e personalizada do site, sem a necessidade de escrever CSS tradicional."
      },
      {
        title: "Front-end Project NB Web Site",
        description: "Desenvolvi o projeto eludico.com.br, uma plataforma que utiliza as tecnologias Astro e Vue.js para oferecer uma experiência online envolvente. Astro é uma tecnologia que combina renderização estática e carregamento de página sob demanda, proporcionando um desempenho excepcional e uma navegação suave. Vue.js, por sua vez, é um framework JavaScript progressivo usado para construir interfaces de usuário interativas. Essas tecnologias permitiram a criação de um site rápido, eficiente e dinâmico, oferecendo uma experiência de usuário aprimorada para os visitantes do site."
      },
      {
        title: "Front-end Project Lucas Leite Web Site",
        description: "Desenvolvi um website que serve como meu portfólio digital, onde apresento meus serviços, projetos e um pouco sobre mim. Utilizei o framework Nuxt.js com geração estática para garantir um desempenho excepcional e uma experiência de usuário fluida. Configurei o deploy automatizado utilizando GitHub Actions para o Firebase, assegurando atualizações rápidas e eficientes do site. "
      }
    ]
  }
};

export default content;
