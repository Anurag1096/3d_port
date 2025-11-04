// components/HackerRankBadge.jsx
import React from "react";

interface BadgeProps{
    username:string;
   
}
interface BadgeProps2{
username:string;
 badgeUrl:string;
  badgeName:string; 
  stars:number[];
}
export  function HackerRankBadge({ username }:BadgeProps) {
  if (!username) return null;
  const src = `https://hackerrank-badges.vercel.app/${encodeURIComponent(username)}`;
 
  return (
    <a
      href={`https://www.hackerrank.com/${encodeURIComponent(username)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`HackerRank profile of ${username}`}
    >
      <img
        src={src}
        alt={`HackerRank badges for ${username}`}
        style={{ width:"full", height: "auto", display: "block"  }}
      />
    </a>
  );
}
export  function HackerRankBadge2({ username, badgeUrl, badgeName ,stars}:BadgeProps2) {
  return (
    <a
      href={`https://www.hackerrank.com/${encodeURIComponent(username)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 border-y-2  p-2 border-solid    rounded-xl shadow-xl "
    >
      <img
        src={badgeUrl}
        alt={`${badgeName} badge`}
        className="w-16 h-16 object-contain border-1"
        loading="lazy"
      />
         <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="24"
        className="flex justify-center"
        viewBox="0 0 100 24"
        fill="#FFD700"
      >
        {[...stars].map((i) => (
          <polygon
            key={i}
            transform={`translate(${i * 26}, 2)`}
            points="10,0 12.9,6.5 20,7.5 14.5,12 16,19 10,15.5 4,19 5.5,12 0,7.5 7.1,6.5"
          />
        ))}
      </svg>
      <span className="text-sm font-semibold">{badgeName}</span>
    </a>
  );
}