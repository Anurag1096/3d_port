import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { format } from "date-fns";

const token = import.meta.env.VITE_GITHUB_TOKEN;

interface GitHubRepo {
  name: string;
}

interface GitHubCommit {
  commit: { author: { date: string } };
}

export default function GitHubHeatMap() {
  const username = "Anurag1096";
  const [heatmapData, setHeatmapData] = useState<
    { date: string; count: number }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const repoRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        }
      );

      const repos: GitHubRepo[] = await repoRes.json();
      const commits: { date: string }[] = [];

      for (const repo of repos) {
        const res = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=100`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!res.ok) continue;
        const data: GitHubCommit[] = await res.json();

        data.forEach((c) => {
          const date = c.commit?.author?.date;
          if (date) commits.push({ date });
        });
      }

      // Count commits per day
      const map: Record<string, number> = {};
      commits.forEach((c) => {
        const d = c.date.split("T")[0];
        map[d] = (map[d] || 0) + 1;
      });

      const result = Object.entries(map).map(([date, count]) => ({
        date,
        count,
      }));

      setHeatmapData(result);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Define today and a year ago
  const today = new Date();
  const startDate = new Date();
  startDate.setFullYear(today.getFullYear() - 1);

  return (
    <div className="max-w-4xl flex flex-col items-center">
      {loading && <p className="text-gray-400 mb-2">Loading commits Heatmap...</p>}

      {heatmapData.length > 0 ? (
        <CalendarHeatmap
          startDate={startDate}
          
          endDate={today}
          values={heatmapData}
          classForValue={(value) => {
            if (!value) return "color-empty";
            if (value.count > 10) return "color-scale-4";
            if (value.count > 5) return "color-scale-3";
            if (value.count > 2) return "color-scale-2";
            return "color-scale-1";
          }}
          tooltipDataAttrs={(value) => ({
            "data-tip": value?.date
              ? `${format(new Date(value.date), "MMM d, yyyy")}: ${
                  value.count
                } commits`
              : "",
          })}
         
        />
      ) : (
        !loading && <p className="text-gray-400">No commit data available.</p>
      )}
    </div>
  );
}
