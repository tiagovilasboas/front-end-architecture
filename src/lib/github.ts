export interface GitHubRepoStats {
  stars: number;
  forks: number;
  openIssues: number;
}

export async function getRepoStats(repo: string): Promise<GitHubRepoStats> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch repo data: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      openIssues: data.open_issues_count,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    // Return zeroed stats on error to prevent build failure
    return {
      stars: 0,
      forks: 0,
      openIssues: 0,
    };
  }
} 