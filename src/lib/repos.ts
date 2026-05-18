export interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
  archived: boolean;
  fork: boolean;
}

const PINNED_NAMES = [
  'Penetration-Testing',
  'Incident-Response-Risk-Management',
  'Intrusion-Detection',
];

const EXCLUDE_NAMES = new Set([
  'gabie-uy',
  'gabie-uy.github.io',
  'my-site',
]);

const SECURITY_TOPICS = new Set([
  'intrusion-detection',
  'intrusion-prevention',
  'incident-response',
  'risk-management',
  'penetration-testing',
  'cloud-security',
  'exploitation',
  'osint',
  'phishing',
  'vulnerability-assessment',
  'security',
  'cybersecurity',
  'detection',
  'forensics',
  'malware',
  'reverse-engineering',
  'threat-hunting',
  'blue-team',
  'red-team',
]);

export function isSecurityTopic(topic: string): boolean {
  return SECURITY_TOPICS.has(topic);
}

export async function getRepos(
  username = 'gabie-uy'
): Promise<{ pinned: Repo[]; other: Repo[] }> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      { headers }
    );
    if (!res.ok) {
      console.warn(`GitHub API ${res.status}: ${res.statusText}`);
      return { pinned: [], other: [] };
    }
    const all = (await res.json()) as Repo[];
    const visible = all.filter(
      (r) => !r.fork && !r.archived && !EXCLUDE_NAMES.has(r.name)
    );

    const pinned = PINNED_NAMES
      .map((name) => visible.find((r) => r.name === name))
      .filter((r): r is Repo => !!r);
    const pinnedNames = new Set(pinned.map((r) => r.name));
    const other = visible
      .filter((r) => !pinnedNames.has(r.name))
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );

    return { pinned, other };
  } catch (err) {
    console.warn('Failed to fetch repos:', err);
    return { pinned: [], other: [] };
  }
}
