interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
}

export async function getRepoStats(repo: string) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`);
    if (!response.ok) {
      console.error(`Failed to fetch GitHub stats: ${response.statusText}`);
      return { stars: 'N/A', forks: 'N/A' };
    }
    
    const data: GitHubRepo = await response.json();
    
    const stars = data.stargazers_count > 1000 
      ? `${Math.floor(data.stargazers_count / 1000)}K+` 
      : String(data.stargazers_count);
      
    const forks = data.forks_count > 100 
      ? `${Math.floor(data.forks_count / 100) * 100}+` 
      : String(data.forks_count);

    return { stars, forks };

  } catch (error) {
    console.error("Failed to fetch GitHub stats", error);
    return { stars: 'N/A', forks: 'N/A' };
  }
} 