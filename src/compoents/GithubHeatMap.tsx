import { useEffect,useState } from 'react';
import { Heatmap, HeatmapData } from 'react-github-heatmap';
const token = import.meta.env.VITE_GITHUB_TOKEN;
const GitHubHeatMap=()=>{
    const [commits, setCommits] = useState([]);
    const username = "Anurag1096";
    async function  getData () {
        
        try{
           const result= await fetch(`https://api.github.com/users/${username}/repos?per_page=100`,{
            headers:{
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github+json",
            }
           })
           const repos= await result.json()
            const commitPromises = repos.map(async (repo) => {
          const commitsRes = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=3`,
              {headers:{
              Authorization: `Bearer ${token}`
            }}
          );
          const commitsData = await commitsRes.json();

          return commitsData.map((c:unknown) => ({
            repo: repo.name,
            message: c.commit.message,
            author: c.commit.author.name,
            date: c.commit.author.date,
            url: c.html_url,
          }));
        });

        // 3️⃣ Combine results
        const allCommits = (await Promise.all(commitPromises)).flat();
        // 4️⃣ Sort by date (newest first)
        allCommits.sort((a, b) => new Date(b.date) - new Date(a.date));
        setCommits(allCommits.slice(0, 20)); // keep latest 20 commits

        }catch(err){
            throw new Error("Error occoured when fetching data")
        }finally{
             console.log("Request completed")
        }
    }
useEffect(()=>{
    getData()
},[])

    return(
        <div className="w-full h-auto">

        </div>
    )
}

export default GitHubHeatMap;