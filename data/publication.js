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
        links: { pdf: 'https://arxiv.org/abs/2402.03694' }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems'],
        title: 'NetSSM: Multi-Flow and State-Aware Network Trace Generation using State-Space Models',
        authors: 'Andrew Chu, Xi Jiang, Shinan Liu, Arjun Bhagoji, Francesco Bronzino, Paul Schmitt, and Nick Feamster',
        venue: 'In Submission',
        links: { pdf: 'https://arxiv.org/pdf/2503.22663' }
    },
    // =================================================================
    // ========================= Conference ============================
    // =================================================================
    {
        year: 2026,
        type: 'Conference',
        area: ['ml-for-systems', 'security', 'cps'],
        title: 'Algorithmic Data Minimization for Machine Learning over Internet-of-Things Data Streams',
        authors: 'Ted Shaowang, Shinan Liu, Jonatas Marques, Nick Feamster, and Sanjay Krishnan',
        venue: 'VLDB 2026',
        links: { pdf: 'https://arxiv.org/pdf/2503.05675?' }
    },
    {
        year: 2025,
        type: 'Conference',
        area: ['ml-for-systems'],
        title: 'JITI: Dynamic Model Serving for Just-in-Time Traffic Inference',
        authors: 'Xi Jiang, Shinan Liu, Saloua Naama, Francesco Bronzino, Paul Schmitt, and Nick Feamster',
        venue: 'CoNEXT 2025',
        links: { pdf: 'https://arxiv.org/pdf/2302.11718' }
    },
    {
        year: 2025,
        type: 'Conference',
        area: ['security', 'cps'],
        title: 'Distributed Multi-Antenna GPS Spoofing Attack using Off-the-shelf Devices',
        authors: 'Xiang Cheng, Hanchao Yang, Shinan Liu, and Yaling Yang',
        venue: 'ACM WiSec 2025',
        award: 'Best Full Paper Award',
        links: { pdf: 'https://dl.acm.org/doi/abs/10.1145/3734477.3734706', award: '#' }
    },
    {
        year: 2025,
        type: 'Conference',
        area: ['ml-for-systems'],
        title: 'CATO: End-to-End Optimization of ML-based Traffic Analysis Pipelines',
        authors: 'Gerry Wan, Shinan Liu, Francesco Bronzino, Nick Feamster, and Zakir Durumeric',
        venue: 'USENIX NSDI 2025',
        links: {
            pdf: 'https://www.usenix.org/system/files/nsdi25-wan-gerry.pdf',
            slides: 'https://www.usenix.org/system/files/nsdi25_slides-wan-gerry.pdf',
            video: 'https://www.youtube.com/watch?v=k5y62PEV-S8'
        }
    },
    {
        year: 2024,
        type: 'Conference',
        area: ['ml-for-systems'],
        title: 'NetDiffusion: Network Data Augmentation Through Protocol-Constrained Traffic Generation',
        authors: 'Xi Jiang, Shinan Liu, Aaron Gember-Jacobson, Arjun Nitin Bhagoji, Paul Schmitt, Francesco Bronzino, and Nick Feamster',
        venue: 'ACM SIGMETRICS 2024',
        links: {
            pdf: 'https://dl.acm.org/doi/pdf/10.1145/3639037',
            website: 'https://netml.io/blog/2024/netdiffusion/',
            code: 'https://github.com/noise-lab/NetDiffusion_Generator',
            media: 'https://cs.uchicago.edu/news/university-of-chicago-researchers-revolutionize-network-traffic-generation-with-ai-breakthrough/'
        }
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['ml-for-systems'],
        title: 'LEAF: Navigating Concept Drift in Cellular Networks',
        authors: 'Shinan Liu, Francesco Bronzino, Paul Schmitt, Arjun Nitin Bhagoji, Nick Feamster, Hector Garcia Crespo, Timothy Coyle, and Brian Ward',
        venue: 'ACM CoNEXT 2023',
        links: {
            pdf: 'https://www.shinan.info/wp-content/uploads/2023/09/liu-conext23.pdf',
            data: 'https://forms.gle/g5pbB5qRHeBsEmZJ6'
        }
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['cps', 'ml-for-systems'],
        title: 'AMIR: Active Multimodal Interaction Recognition from Video and Network Traffic in Connected Environments',
        authors: 'Shinan Liu, Tarun Mangla, Ted Shaowang, Jinjin Zhao, John Paparrizos, Sanjay Krishnan, and Nick Feamster',
        venue: 'ACM IMWUT/UbiComp 2023',
        links: {
            pdf: 'https://www.shinan.info/wp-content/uploads/2023/03/liu-imwut23.pdf',
            website: 'http://amir-vidnet.github.io/',
            data: 'https://drive.google.com/drive/folders/1RGZQHSV3SbmfYFF6rQzN_9sI_rRtETpM'
        }
    },
    {
        year: 2023,
        type: 'Conference',
        area: ['cps', 'security'],
        title: 'Toward Identifying Home Privacy Leaks using Augmented Reality',
        authors: 'Stefany Cruz, Logan Danek, Shinan Liu, Christopher Kraemer, Zixin Wang, Nick Feamster, Danny Yuxing Huang, Yaxing Yao, and Josiah Hester',
        venue: 'NDSS USEC 2023',
        links: { pdf: '#https://www.ndss-symposium.org/wp-content/uploads/2023/02/usec2023-238930-paper.pdf' }
    },
    {
        year: 2021,
        type: 'Conference',
        area: ['security', 'cps'],
        title: 'Stars Can Tell: A Robust Method to Defend Against GPS Spoofing Attacks using Off-the-shelf Chipset',
        authors: 'Shinan Liu*, Xiang Cheng*, Hanchao Yang, Yuanchao Shu, Xiaoran Weng, Ping Guo, Kexiong Curtis Zeng, Gang Wang, and Yaling Yang',
        venue: 'USENIX Security 2021',
        links: {
            pdf: 'https://www.usenix.org/system/files/sec21-liu-shinan.pdf',
            website: 'https://sites.google.com/uchicago.edu/starscantell',
            code: 'https://drive.google.com/file/d/1RhmQq9n_O9Hz-jSJGpsEcN_ix-6T7ycJ/view?usp=sharing',
            slides: 'https://www.usenix.org/system/files/sec21_slides_liu-shinan.pdf',
            video: 'https://www.youtube.com/watch?v=FIhlBOD01pk',
            data: 'https://drive.google.com/drive/folders/1LlvrtDNnt_MIO7oNHhA9LEjyiPK8U2oT?usp=sharing'
        }
    },
    {
        year: 2021,
        type: 'Conference',
        area: ['cps'],
        title: 'Characterizing Service Provider Response to the COVID-19 Pandemic in the United States',
        authors: 'Shinan Liu, Paul Schmitt, Francesco Bronzino, and Nick Feamster',
        venue: 'PAM 2021',
        links: {
            pdf: 'https://arxiv.org/pdf/2011.00419.pdf',
            video: 'https://www.youtube.com/watch?v=7CVRgFoHINA'
        }
    },
    {
        year: 2021,
        type: 'Conference',
        area: ['cps'],
        title: 'Mapping the Digital Divide: Before, During, and After COVID-19',
        authors: 'Francesco Bronzino, Nick Feamster, Shinan Liu, James Saxon, and Paul Schmitt',
        venue: 'TPRC 2021',
        links: { pdf: 'http://dx.doi.org/10.2139/ssrn.3786158' }
    },
    {
        year: 2018,
        type: 'Conference',
        area: ['security', 'cps'],
        title: 'All Your GPS Are Belong to Us: Towards Stealthy Manipulation of Road Navigation Systems',
        authors: 'Kexiong Curtis Zeng, Shinan Liu, Yuanchao Shu, Dong Wang, Haoyu Li, Yanzhi Dou, Gang Wang, and Yaling Yang',
        venue: 'USENIX Security 2018',
        links: {
            pdf: 'https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-zeng.pdf',
            slides: 'https://www.usenix.org/sites/default/files/conference/protected-files/security18_slides_zeng.pdf',
            video: 'https://www.youtube.com/watch?v=IduM2rtlbj8',
            media: 'https://www.forbes.com/sites/thomasbrewster/2018/07/12/google-maps-gps-hack-takes-victims-to-ghost-locations/'
        }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems', 'security'],
        title: 'Generative Active Adaptation for Drifting and Imbalanced Network Intrusion Detection',
        authors: 'Ragini Gupta, Shinan Liu, Ruixiao Zhang, Xinyue Hu, Pranav Kommaraju, Xiaoyang Wang, Hadjer Benkraouda, Nick Feamster, and Klara Nahrstedt',
        venue: 'In Submission',
        links: { pdf: 'https://arxiv.org/pdf/2503.03022' }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['security', 'cps'],
        title: 'Towards Scalable Defenses Against Intimate Partner Infiltrations',
        authors: 'Weisi Yang, Shinan Liu, Feng Xiao, Nick Feamster, and Stephen Xia',
        venue: 'In Submission',
        links: { pdf: 'https://arxiv.org/abs/2502.03682' }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems', 'cps'],
        title: 'Digital Phenotyping via Passive Network Traffic Monitoring: Feasibility and Acceptability in University Students',
        authors: 'Rameen Mahmood, Donghan Hu, Annabelle David, Zachary Beattie, Jeffrey Kaye, Nabil Alshurafa, Lou Haux, Josiah Hester, Andrew Kiselica, Shinan Liu, Chenxi Qiu, Chao-Yi Wu, Danny Yuxing Huang',
        venue: 'In Submission',
        links: { pdf: 'https://preprints.jmir.org/preprint/84618' }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['security', 'cps'],
        title: 'WiFinger: Fingerprinting Noisy IoT Event Traffic Using Packet-level Sequence Matching',
        authors: 'Ronghua Li, Shinan Liu, Haibo Hu, Qingqing Ye, Nick Feamster',
        venue: 'In Submission',
        links: {
            pdf: 'https://arxiv.org/pdf/2508.03151'
        }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems', 'security', 'cps'],
        title: 'SafeCoop: Unravelling Full Stack Safety in Agentic Collaborative Driving',
        authors: 'Xiangbo Gao, Tzu-Hsiang Lin, Ruojing Song, Yuheng Wu, Kuan-Ru Huang, Zicheng Jin, Fangzhou Lin, Shinan Liu, Zhengzhong Tu',
        venue: 'In Submission',
        links: {
            pdf: 'https://www.arxiv.org/pdf/2510.18123',
            code: 'https://github.com/taco-group/SafeCoop',
            website: 'https://xiangbogaobarry.github.io/SafeCoop/'
        }
    },
    {
        year: 2025,
        type: 'Preprint',
        area: ['ml-for-systems'],
        title: 'λ-GRPO: Unifying the GRPO Frameworks with Learnable Token Preferences',
        authors: 'Yining Wang*, Jinman Zhao*, Chuangxin Zhao, Shuhao Guan, Gerald Penn, Shinan Liu',
        venue: 'In Submission',
        links: { pdf: 'https://arxiv.org/pdf/2510.06870' }
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
        links: { pdf: 'https://www.ndss-symposium.org/wp-content/uploads/wosoc25-final18.pdf' }
    },
    {
        year: 2024,
        type: 'Workshop',
        area: ['ml-for-systems'],
        title: 'Feasibility of State Space Models for Network Traffic Generation',
        authors: 'Andrew Chu, Xi Jiang, Shinan Liu, Arjun Bhagoji, Francesco Bronzino, Paul Schmitt, and Nick Feamster',
        venue: 'SIGCOMM NAIC 2024',
        links: { pdf: 'https://arxiv.org/abs/2406.02784' }
    },
    {
        year: 2023,
        type: 'Workshop',
        area: ['ml-for-systems'],
        title: 'Generative, High-Fidelity Network Traces',
        authors: 'Xi Jiang*, Shinan Liu*, Aaron Gember-Jacobson, Paul Schmitt, Francesco Bronzino, and Nick Feamster',
        venue: 'ACM HotNets 2023',
        links: { pdf: 'https://conferences.sigcomm.org/hotnets/2023/papers/hotnets23_jiang.pdf' }
    },
    {
        year: 2022,
        type: 'Workshop',
        area: ['ml-for-systems'],
        title: 'Understanding Model Drift in a Large Cellular Network',
        authors: 'Shinan Liu, Francesco Bronzino, Paul Schmitt, Nick Feamster, Ricardo Borges, Hector Garcia Crespo, and Brian Ward',
        venue: 'MLSys PACMI 2022',
        links: { pdf: 'https://www.shinan.info/wp-content/uploads/2022/05/pacmi.pdf' }
    },
    {
        year: 2022,
        type: 'Workshop',
        area: ['ml-for-systems'],
        title: 'Towards Designing Robust and Efficient Classifiers for Encrypted Traffic in the Modern Internet',
        authors: 'Xi Jiang, Shinan Liu, Saloua Naama, Francesco Bronzino, Paul Schmitt, and Nick Feamster',
        venue: 'M-TEN 2022',
        links: { pdf: 'https://fbronzino.com/assets/pdf/iab22.pdf' }
    },
    {
        year: 2021,
        type: 'Workshop',
        area: ['cps'],
        title: 'Interconnection Changes in the United States',
        authors: 'Francesco Bronzino, Elizabeth Cully, Nick Feamster, Shinan Liu, Jason Livingood, and Paul Schmitt',
        venue: 'IAB COVID-19 Workshop 2021',
        links: { pdf: 'https://par.nsf.gov/servlets/purl/10226157' }
    },
    {
        year: 2017,
        type: 'Workshop',
        area: ['security', 'cps'],
        title: 'A Practical GPS Location Spoofing Attack in Road Navigation Scenario',
        authors: 'Kexiong Curtis Zeng, Yuanchao Shu, Shinan Liu, Yanzhi Dou, and Yaling Yang',
        venue: 'ACM HotMobile 2017',
        links: {
            pdf: 'https://www.shinan.info/wp-content/uploads/2018/05/HotMobile-17.pdf',
            video: 'https://www.youtube.com/watch?v=6UhT3gjTXp8'
        }
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
        links: { pdf: 'https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019posters_paper_12.pdf', award: '#' }
    }
];