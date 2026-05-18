export type ParentRepo =
  | 'Penetration-Testing'
  | 'Intrusion-Detection'
  | 'Incident-Response-Risk-Management'
  | 'Web-Development'
  | 'Python'
  | 'Other-Languages';

export interface Project {
  number: number;
  title: string;
  description: string;
  url: string;
  repo: ParentRepo;
}

export const projects: Project[] = [
  {
    number: 1,
    title: 'Cloud Security Exploitation',
    description:
      'An exploration of cloud infrastructure security vulnerabilities and misconfigurations. The project examines risks including exposed storage buckets, overly permissive IAM policies, and insecure API configurations across AWS, Azure, and Google Cloud.',
    url: 'https://github.com/gabie-uy/Penetration-Testing/blob/main/Lab%206/06_CloudSecurity.md',
    repo: 'Penetration-Testing',
  },
  {
    number: 2,
    title: 'Simple Payload Exploitation',
    description:
      'A technical demonstration of payload creation and exploitation techniques using Python. Covers payload encoding, obfuscation, delivery mechanisms, and exploitation frameworks demonstrating code execution and system compromise mechanics.',
    url: 'https://github.com/gabie-uy/Penetration-Testing/blob/main/Lab%203/03_PayloadExploitation.py',
    repo: 'Penetration-Testing',
  },
  {
    number: 3,
    title: 'Recon Automation Using Beautiful Soup',
    description:
      "A web scraping project utilizing Python's BeautifulSoup library for automated data extraction. Demonstrates programmatic parsing of HTML and XML for reconnaissance, OSINT gathering, and automated intelligence collection during security assessments.",
    url: 'https://github.com/gabie-uy/Penetration-Testing/blob/main/Lab%201/02_ReconAutomation.py',
    repo: 'Penetration-Testing',
  },
  {
    number: 4,
    title: 'Active Information Gathering',
    description:
      'An exploration of active reconnaissance techniques used to enumerate live targets and network infrastructure. Demonstrates port scanning, service enumeration, banner grabbing, and network mapping involving direct target system interaction.',
    url: 'https://github.com/gabie-uy/Penetration-Testing/blob/main/Lab%202/02_ActiveInfoGather.md',
    repo: 'Penetration-Testing',
  },
  {
    number: 5,
    title: 'Static Code Analysis',
    description:
      'An examination of source code security through static analysis techniques. Demonstrates identifying vulnerabilities and security weaknesses by analyzing code without execution, covering automated scanning tools and manual review methodologies.',
    url: 'https://github.com/gabie-uy/Penetration-Testing/blob/main/Lab%202/02_StaticCodeAnalysis.md',
    repo: 'Penetration-Testing',
  },
  {
    number: 6,
    title: 'Open-Source Intelligence',
    description:
      'A comprehensive phishing campaign simulation demonstrating social engineering attack vectors and reconnaissance techniques. Documents the complete phishing lifecycle from OSINT gathering through whaling attacks, including landing page creation and credential harvesting.',
    url: 'https://github.com/gabie-uy/Penetration-Testing/blob/main/Lab%201/01_OSINT.md',
    repo: 'Penetration-Testing',
  },
  {
    number: 7,
    title: 'Client-Side Exploitation',
    description:
      'An investigation into attack vectors that target end-user systems through client-side vulnerabilities. Explores browser weaknesses, malicious documents, drive-by downloads, and social engineering techniques with evasion methods for security control bypass.',
    url: 'https://github.com/gabie-uy/Penetration-Testing/blob/main/Lab%204/04_ClientSideExploitation.md',
    repo: 'Penetration-Testing',
  },
  {
    number: 8,
    title: 'Web Application Exploitation',
    description:
      'A practical examination of web application vulnerabilities and exploitation techniques. Demonstrates identifying and exploiting injection attacks, broken authentication, insecure object references, and cross-site scripting flaws.',
    url: 'https://github.com/gabie-uy/Penetration-Testing/blob/main/Lab%205/05_WebAppExploitation.md',
    repo: 'Penetration-Testing',
  },
  {
    number: 9,
    title: 'Investigating Web Application Attacks',
    description:
      'An analysis of common web application attack vectors and exploitation techniques. Examines SQL injection, cross-site scripting, and authentication bypass vulnerabilities with detection methods and response strategies.',
    url: 'https://github.com/gabie-uy/Intrusion-Detection/blob/main/01_InvestigatingWebAppAttacks.md',
    repo: 'Intrusion-Detection',
  },
  {
    number: 10,
    title: 'Investigating Network Attacks',
    description:
      'A comprehensive investigation into network-layer security incidents and attack methodologies. Covers reconnaissance, protocol exploitation, lateral movement, packet analysis, intrusion detection patterns, and forensic techniques.',
    url: 'https://github.com/gabie-uy/Intrusion-Detection/blob/main/02_InvestgatingNetworkAttacks.md',
    repo: 'Intrusion-Detection',
  },
  {
    number: 11,
    title: 'Network Vulnerability Discovery',
    description:
      'A systematic approach to identifying security weaknesses in network infrastructure. Showcases vulnerability scanning, network mapping, and security assessment methodologies with remediation recommendations and risk prioritization.',
    url: 'https://github.com/gabie-uy/Intrusion-Detection/blob/main/03_NetworkVulnerabilityDiscovery.md',
    repo: 'Intrusion-Detection',
  },
  {
    number: 12,
    title: 'Investigating Compromised Endpoints',
    description:
      'Analysis of Windows Event Logs to detect suspicious activity including log clearing, privilege escalation, and Kerberos authentication anomalies.',
    url: 'https://github.com/gabie-uy/Intrusion-Detection/blob/main/04_InvestigatingEndpointVulnerability.md',
    repo: 'Intrusion-Detection',
  },
  {
    number: 13,
    title: 'Malware Investigation',
    description:
      'A deep dive into malware analysis and reverse engineering techniques. Documents examining malicious software behavior, capabilities, and indicators of compromise using static and dynamic analysis methods.',
    url: 'https://github.com/gabie-uy/Intrusion-Detection/blob/main/05_MalwareInvestigation.md',
    repo: 'Intrusion-Detection',
  },
  {
    number: 14,
    title: 'Investigating Endpoint Vulnerability',
    description:
      'An examination of endpoint security weaknesses and compromise indicators on individual systems. Demonstrates vulnerability assessment, misconfigurations, exploitation indicators, host-based analysis, and endpoint hardening practices.',
    url: 'https://github.com/gabie-uy/Intrusion-Detection/blob/main/04_InvestigatingEndpointVulnerability.md',
    repo: 'Intrusion-Detection',
  },
  {
    number: 15,
    title: 'Cloud Security Monitoring',
    description:
      'An exploration of security monitoring strategies for cloud environments. Addresses detecting threats including misconfigurations, unauthorized access, and data exfiltration with logging and alerting strategies for major cloud platforms.',
    url: 'https://github.com/gabie-uy/Intrusion-Detection/blob/main/06_CloudSecurityMonitoring.md',
    repo: 'Intrusion-Detection',
  },
  {
    number: 16,
    title: 'User Security Monitoring',
    description:
      'A study of user behavior analytics and insider threat detection. Focuses on monitoring activities to identify anomalous behavior, credential abuse, and potential violations with baseline establishment and privacy-conscious approaches.',
    url: 'https://github.com/gabie-uy/Intrusion-Detection/blob/main/07_UserSecurityMonitoring.md',
    repo: 'Intrusion-Detection',
  },
  {
    number: 17,
    title: 'Raccoon Stealer',
    description:
      "An analysis of the Raccoon Stealer malware family. Examines this information-stealing trojan's infection chain, credential harvesting capabilities, evasion techniques, threat intelligence, and defensive countermeasures.",
    url: 'https://github.com/gabie-uy/Intrusion-Detection/blob/main/08_RaccoonStealer.md',
    repo: 'Intrusion-Detection',
  },
  {
    number: 18,
    title: 'Deconstructing a Cybersecurity Event',
    description:
      'A methodical breakdown of a complete security incident from initial compromise to resolution. Walks through incident lifecycle phases including detection, analysis, containment, eradication, and recovery with evidence piecing and timeline establishment.',
    url: 'https://github.com/gabie-uy/Incident-Response-Risk-Management/blob/main/01_DeconstructingaCybersecurityEvent.md',
    repo: 'Incident-Response-Risk-Management',
  },
  {
    number: 19,
    title: 'SAP',
    description:
      'A security assessment of SAP enterprise systems and their unique vulnerabilities. Explores authorization flaws, transport management weaknesses, custom code vulnerabilities, SAP-specific attack techniques, and configuration best practices.',
    url: 'https://github.com/gabie-uy/Incident-Response-Risk-Management/blob/main/02_SAP.md',
    repo: 'Incident-Response-Risk-Management',
  },
  {
    number: 20,
    title: 'Device Forensics',
    description:
      'A hands-on investigation into digital forensics techniques for various computing devices. Demonstrates evidence acquisition, preservation, and analysis with file system analysis, artifact recovery, timeline reconstruction, and chain of custody maintenance.',
    url: 'https://github.com/gabie-uy/Incident-Response-Risk-Management/blob/main/03_DeviceForensics.md',
    repo: 'Incident-Response-Risk-Management',
  },
  {
    number: 21,
    title: 'Learning React',
    description:
      'A React learning project — components, hooks, props, and state management.',
    url: 'https://github.com/gabie-uy/Learning-React',
    repo: 'Web-Development',
  },
  {
    number: 22,
    title: 'Learning JavaScript',
    description:
      'JavaScript practice and exercises covering core language fundamentals.',
    url: 'https://github.com/gabie-uy/Learning-Javascript',
    repo: 'Web-Development',
  },
  {
    number: 23,
    title: 'Relearning SQL',
    description: 'Learning SQL using Codédex.',
    url: 'https://github.com/gabie-uy/Relearning-SQL',
    repo: 'Other-Languages',
  },
  {
    number: 24,
    title: 'The Origins of JavaScript',
    description: 'Notes, references, and activities to learn JavaScript.',
    url: 'https://github.com/gabie-uy/The-Origins-of-Javascript',
    repo: 'Web-Development',
  },
  {
    number: 25,
    title: 'The Origins of CSS',
    description: 'Activities and references used while I learned about CSS.',
    url: 'https://github.com/gabie-uy/The-Origins-of-CSS',
    repo: 'Web-Development',
  },
  {
    number: 26,
    title: 'Python Exercises',
    description: 'Practicing Python.',
    url: 'https://github.com/gabie-uy/Python-Exercises',
    repo: 'Python',
  },
  {
    number: 27,
    title: 'The Origins of HTML',
    description:
      'All my notes, resources, and the activities I made to learn HTML from Codédex.',
    url: 'https://github.com/gabie-uy/The-Origins-of-HTML',
    repo: 'Web-Development',
  },
  {
    number: 28,
    title: 'Intermediate Python',
    description:
      'All the resources I used and made to learn Python from Codédex.',
    url: 'https://github.com/gabie-uy/Intermediate-Python',
    repo: 'Python',
  },
  {
    number: 29,
    title: 'Bella the Gif',
    description:
      'Python GIF project for The Legend of Python by Codédex — featuring Bella, my cat.',
    url: 'https://github.com/gabie-uy/Bella-the-Gif',
    repo: 'Python',
  },
  {
    number: 30,
    title: 'The Legend of Python',
    description:
      'All the resources I used and made to learn Python from Codédex.',
    url: 'https://github.com/gabie-uy/The-Legend-of-Python',
    repo: 'Python',
  },
  {
    number: 31,
    title: "Benny's Bao",
    description: 'Project for The Origins of HTML I from Codédex.',
    url: 'https://github.com/gabie-uy/Bennys-Bao',
    repo: 'Web-Development',
  },
  {
    number: 32,
    title: 'Hackathon Stoop Sale',
    description: 'Codédex Summer Hackathon 2024 project.',
    url: 'https://github.com/gabie-uy/Hackathon-Stoop-Sale',
    repo: 'Web-Development',
  },
  {
    number: 33,
    title: 'C++ Review',
    description: 'Reviewing C++.',
    url: 'https://github.com/gabie-uy/C-Plus',
    repo: 'Other-Languages',
  },
];

export const ALL_REPOS: ParentRepo[] = [
  'Penetration-Testing',
  'Intrusion-Detection',
  'Incident-Response-Risk-Management',
  'Web-Development',
  'Python',
  'Other-Languages',
];

export function repoLabel(repo: ParentRepo): string {
  return repo.replace(/-/g, ' ').toLowerCase();
}
