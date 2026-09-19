// data/research.js
const researchData = [
    {
        id: 'ml-for-systems',
        title: 'ML for Systems, Systems for ML',
        icon: '🧠',
        description: 'Building foundational ML systems and techniques for the networked world.',
        subtopics: [
            {
                title: 'Synthetic Data for Networked Systems',
                featuredPublications: [
                    { id: 'netdiffusion', label: "[SIGMETRICS'24] NetDiffusion" },
                    { id: 'netssm', label: "[CoNEXT'26] NetSSM" },
                    { id: 'generative-active-adaptation', label: "[CoNEXT'26] Generative Active Adaptation" },
                    { id: 'tracecodec', label: "[Preprint'26] TraceCodec" },
                    { id: 'tabquerybench', label: "[Preprint'26] TabQueryBench" }
                ]
            },
            {
                title: 'High-performance ML-based Network Traffic Analysis',
                featuredPublications: [
                    { id: 'flowwise', label: "[SoCC'26] FlowWise" },
                    { id: 'jiti', label: "[CoNEXT'25] JITI" },
                    { id: 'cato', label: "[NSDI'25] CATO" },
                    { id: 'leaf', label: "[CoNEXT'23] LEAF" }
                ]
            },
            {
                title: 'Compound Model/Agent Networks',
                featuredPublications: [
                    { id: 'flowwise', label: "[SoCC'26] FlowWise" },
                    { id: 'safecoop', label: "[Preprint'25] SafeCoop" }
                ]
            }
        ]
    },
    {
        id: 'security',
        title: 'Network Security and Privacy',
        icon: '🛡️',
        description: 'Applying our tools to solve critical security and privacy challenges.',
        subtopics: [
            {
                title: 'Privacy of Synthetic Data',
                featuredPublications: [
                    { id: 'synthetic-traffic-privacy', label: "[IMC'26] Synthetic Traffic Privacy" }
                ]
            },
            {
                title: 'Security and Privacy in Smart Homes and Mobile Systems',
                featuredPublications: [
                    { id: 'wifinger', label: "[NDSS'26] WiFinger" },
                    { id: 'on-device-evidence', label: "[UbiComp'26] On-Device Evidence Gathering" },
                    { id: 'iot-data-minimization', label: "[VLDB'26] IoT Data Minimization" }
                ]
            },
            {
                title: 'Wireless Attacks and Defenses in Driving Systems',
                featuredPublications: [
                    { id: 'gps-spoofing', label: "[WiSec'25] 🏆 Multi-Antenna GPS Spoofing" },
                    { id: 'stars-can-tell', label: "[USENIX Security'21] Stars Can Tell" },
                    { id: 'all-your-gps', label: "[USENIX Security'18] All Your GPS Are Belong to Us" }
                ]
            },
            {
                title: 'Security of ML Systems and LLM Agent Networks',
                featuredPublications: [
                    { id: 'ghostaccess', label: "[MICRO'26] GhostAccess" },
                    { id: 'spliceleak', label: "[Preprint'26] SpliceLeak" }
                ]
            }
        ]
    },
    {
        id: 'cps',
        title: 'Cyber-physical Intelligence',
        icon: '🤖',
        description: 'Improving interactions with the cyber-physical world.',
        subtopics: [
            {
                title: 'Augmentation and Management of Internet of Things',
                featuredPublications: [
                    { id: 'iot-data-minimization', label: "[VLDB'26] IoT Data Minimization" }
                ]
            },
            {
                title: 'Activity Recognition and Sensing for Human Well-being',
                featuredPublications: [
                    { id: 'on-device-evidence', label: "[UbiComp'26] On-Device Evidence Gathering" },
                    { id: 'amir', label: "[UbiComp'23] AMIR" }
                ]
            },
            {
                title: 'Agentic Inference for Smarter Environments',
                featuredPublications: [
                    { id: 'hillinfer', label: "[Preprint'26] HillInfer" },
                    { id: 'pacc', label: "[Preprint'26] PACC" }
                ]
            }
        ]
    }
];
