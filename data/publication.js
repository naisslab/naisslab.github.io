const publicationsData = [
    // =================================================================
    // ========================== Preprints ============================
    // =================================================================
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems'],
        title: 'ServeFlow: A Fast-Slow Model Architecture for Network Traffic Analysis',
        authors: 'Shinan Liu, Ted Shaowang, Gerry Wan, Jeewon Chae, Jonatas Marques, Sanjay Krishnan, and Nick Feamster',
        venue: 'In Submission',
        links: { pdf: '#' }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['security', 'cps'],
        title: 'Towards Scalable Defenses Against Intimate Partner Infiltrations',
        authors: 'Weisi Yang, Shinan Liu, Feng Xiao, Nick Feamster, and Stephen Xia',
        venue: 'In Submission',
        links: { pdf: '#' }
    },
    // =================================================================
    // ========================= Conference ============================
    // =================================================================
    {
        year: 2025,
        type: 'Conference',
        area: ['security', 'cps'],
        title: 'Distributed Multi-Antenna GPS Spoofing Attack using Off-the-shelf Devices',
        authors: 'Xiang Cheng, Hanchao Yang, Shinan Liu, and Yaling Yang',
        venue: 'ACM WiSec 2025',
        award: 'Best Full Paper Award',
        links: { pdf: '#', award: '#' }
    },
    {
        year: 2025,
        type: 'Conference',
        area: ['ml-for-systems'],
        title: 'CATO: End-to-End Optimization of ML-based Traffic Analysis Pipelines',
        authors: 'Gerry Wan, Shinan Liu, Francesco Bronzino, Nick Feamster, and Zakir Durumeric',
        venue: 'USENIX NSDI 2025',
        links: { pdf: '#' }
    },
    {
        year: 2024,
        type: 'Conference',
        area: ['ml-for-systems'],
        title: 'NetDiffusion: Network Data Augmentation Through Protocol-Constrained Traffic Generation',
        authors: 'Xi Jiang, Shinan Liu, Aaron Gember-Jacobson, Arjun Nitin Bhagoji, Paul Schmitt, Francesco Bronzino, and Nick Feamster',
        venue: 'ACM SIGMETRICS 2024',
        links: { pdf: '#' }
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['ml-for-systems'],
        title: 'LEAF: Navigating Concept Drift in Cellular Networks',
        authors: 'Shinan Liu, Francesco Bronzino, Paul Schmitt, Arjun Nitin Bhagoji, Nick Feamster, Hector Garcia Crespo, Timothy Coyle, and Brian Ward',
        venue: 'ACM CoNEXT 2023',
        links: { pdf: '#' }
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['cps', 'ml-for-systems'],
        title: 'AMIR: Active Multimodal Interaction Recognition from Video and Network Traffic in Connected Environments',
        authors: 'Shinan Liu, Tarun Mangla, Ted Shaowang, Jinjin Zhao, John Paparrizos, Sanjay Krishnan, and Nick Feamster',
        venue: 'ACM IMWUT/UbiComp 2023',
        links: { pdf: '#' }
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['cps', 'security'],
        title: 'Toward Identifying Home Privacy Leaks using Augmented Reality',
        authors: 'Stefany Cruz, Logan Danek, Shinan Liu, Christopher Kraemer, Zixin Wang, Nick Feamster, Danny Yuxing Huang, Yaxing Yao, and Josiah Hester',
        venue: 'NDSS USEC 2023',
        links: { pdf: '#' }
    },
    {
        year: 2021,
        type: 'Conference',
        area: ['security', 'cps'],
        title: 'Stars Can Tell: A Robust Method to Defend Against GPS Spoofing Attacks using Off-the-shelf Chipset',
        authors: 'Shinan Liu*, Xiang Cheng*, Hanchao Yang, Yuanchao Shu, Xiaoran Weng, Ping Guo, Kexiong Curtis Zeng, Gang Wang, and Yaling Yang',
        venue: 'USENIX Security 2021',
        links: { 
            pdf: '#', 
            website: '#', 
            code: '#', 
            media: 'https://www.example.com/media-coverage',
            slides: '#',
            video: '#'
        }
    },
    {
        year: 2021,
        type: 'Conference',
        area: ['cps'],
        title: 'Characterizing Service Provider Response to the COVID-19 Pandemic in the United States',
        authors: 'Shinan Liu, Paul Schmitt, Francesco Bronzino, and Nick Feamster',
        venue: 'PAM 2021',
        links: { pdf: '#' }
    },
    {
        year: 2021,
        type: 'Conference',
        area: ['cps'],
        title: 'Mapping the Digital Divide: Before, During, and After COVID-19',
        authors: 'Francesco Bronzino, Nick Feamster, Shinan Liu, James Saxon, and Paul Schmitt',
        venue: 'TPRC 2021',
        links: { pdf: '#' }
    },
    {
        year: 2018,
        type: 'Conference',
        area: ['security', 'cps'],
        title: 'All Your GPS Are Belong to Us: Towards Stealthy Manipulation of Road Navigation Systems',
        authors: 'Kexiong Curtis Zeng, Shinan Liu, Yuanchao Shu, Dong Wang, Haoyu Li, Yanzhi Dou, Gang Wang, and Yaling Yang',
        venue: 'USENIX Security 2018',
        links: { pdf: '#' }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems', 'cps'],
        title: 'Algorithmic Data Minimization for Machine Learning over Internet-of-Things Data Streams',
        authors: 'Ted Shaowang, Shinan Liu, Jonatas Marques, Nick Feamster, and Sanjay Krishnan',
        venue: 'In Submission',
        links: { pdf: '#' }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems'],
        title: 'NetSSM: Multi-Flow and State-Aware Network Trace Generation using State-Space Models',
        authors: 'Andrew Chu, Xi Jiang, Shinan Liu, Arjun Bhagoji, Francesco Bronzino, Paul Schmitt, and Nick Feamster',
        venue: 'In Submission',
        links: { pdf: '#' }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems', 'security'],
        title: 'Generative Active Adaptation for Drifting and Imbalanced Network Intrusion Detection',
        authors: 'Ragini Gupta, Shinan Liu, Ruixiao Zhang, Xinyue Hu, Pranav Kommaraju, Xiaoyang Wang, Hadjer Benkraouda, Nick Feamster, and Klara Nahrstedt',
        venue: 'In Submission',
        links: { pdf: '#' }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems'],
        title: 'AC-DC: Adaptive Ensemble Classification for Network Traffic Identification',
        authors: 'Xi Jiang, Shinan Liu, Saloua Naama, Francesco Bronzino, Paul Schmitt, and Nick Feamster',
        venue: 'In Submission',
        links: { pdf: '#' }
    },
    // =================================================================
    // =========================== Workshop ============================
    // =================================================================
    {
        year: 2025,
        type: 'Workshop',
        area: ['ml-for-systems'],
        title: 'Tackling Long-Term Network Trace Retention Challenges Using Deep Generative Compression',
        authors: 'Fenghao Dong, Yucheng Yin, Shinan Liu, Giulia Fanti, and Vyas Sekar',
        venue: 'NDSS WOSOC 2025',
        links: { pdf: '#' }
    },
    {
        year: 2024,
        type: 'Workshop',
        area: ['ml-for-systems'],
        title: 'Feasibility of State Space Models for Network Traffic Generation',
        authors: 'Andrew Chu, Xi Jiang, Shinan Liu, Arjun Bhagoji, Francesco Bronzino, Paul Schmitt, and Nick Feamster',
        venue: 'SIGCOMM NAIC 2024',
        links: { pdf: '#' }
    },
    {
        year: 2023,
        type: 'Workshop',
        area: ['ml-for-systems'],
        title: 'Generative, High-Fidelity Network Traces',
        authors: 'Xi Jiang*, Shinan Liu*, Aaron Gember-Jacobson, Paul Schmitt, Francesco Bronzino, and Nick Feamster',
        venue: 'ACM HotNets 2023',
        links: { pdf: '#' }
    },
    {
        year: 2022,
        type: 'Workshop',
        area: ['ml-for-systems'],
        title: 'Understanding Model Drift in a Large Cellular Network',
        authors: 'Shinan Liu, Francesco Bronzino, Paul Schmitt, Nick Feamster, Ricardo Borges, Hector Garcia Crespo, and Brian Ward',
        venue: 'MLSys PACMI 2022',
        links: { pdf: '#' }
    },
    {
        year: 2022,
        type: 'Workshop',
        area: ['ml-for-systems'],
        title: 'Towards Designing Robust and Efficient Classifiers for Encrypted Traffic in the Modern Internet',
        authors: 'Xi Jiang, Shinan Liu, Saloua Naama, Francesco Bronzino, Paul Schmitt, and Nick Feamster',
        venue: 'M-TEN 2022',
        links: { pdf: '#' }
    },
    {
        year: 2021,
        type: 'Workshop',
        area: ['cps'],
        title: 'Interconnection Changes in the United States',
        authors: 'Francesco Bronzino, Elizabeth Cully, Nick Feamster, Shinan Liu, Jason Livingood, and Paul Schmitt',
        venue: 'IAB COVID-19 Workshop 2021',
        links: { pdf: '#' }
    },
    {
        year: 2017,
        type: 'Workshop',
        area: ['security', 'cps'],
        title: 'A Practical GPS Location Spoofing Attack in Road Navigation Scenario',
        authors: 'Kexiong Curtis Zeng, Yuanchao Shu, Shinan Liu, Yanzhi Dou, and Yaling Yang',
        venue: 'ACM HotMobile 2017',
        links: { pdf: '#' }
    },
    // =================================================================
    // ============================ Poster =============================
    // =================================================================
    {
        year: 2019,
        type: 'Poster',
        area: ['security', 'cps'],
        title: 'Poster: Security Analysis of Multi-Sensor Fusion Based Localization in Autonomous Vehicles',
        authors: 'Junjie Shen, Jun Yeon Won, Shinan Liu, Qi Alfred Chen, and Alexander Veidenbaum',
        venue: 'NDSS 2019',
        award: 'Best Poster Presentation Award',
        links: { pdf: '#', award: '#' }
    }
];