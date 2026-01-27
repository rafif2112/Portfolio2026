/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from "framer-motion";
import HeaderSection from '@/components/header-section';

export default function GithubSection() {
  const [stats, setStats] = useState({
    total: 0,
    thisWeek: 0,
    bestDay: 0,
    average: 0,
  });

  const explicitTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: [
      '#292929',
      '#0e4429',
      '#006d32',
      '#26a641',
      '#39d353',
    ],
  };

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const username = "rafif2112";
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const data = await res.json();

        const total = Object.values(data.total).reduce((a: any, b: any) => a + b, 0) as number;

        const contributions = data.contributions;
        const last7Days = contributions.slice(-7);
        const thisWeek = last7Days.reduce((sum: number, day: any) => sum + day.count, 0);

        const bestDay = Math.max(...contributions.map((day: any) => day.count));

        const average = Math.round(total / contributions.length);

        setStats({ total, thisWeek, bestDay, average });
      } catch (error) {
        console.error("Error fetching github data:", error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section className="py-20 px-4 flex text-center">
      <motion.div 
        className="w-full mx-auto flex flex-col gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        
        <HeaderSection title='Github Contributions' text='My Coding activity over the last year' />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <StatCard label="Total" value={stats.total} />
          <StatCard label="This Week" value={stats.thisWeek} />
          <StatCard label="Best Day" value={stats.bestDay} />
          <StatCard label="Average" value={`${stats.average}/day`} />
        </div>

        <div className="bg-[#151414] border border-[#2e2a2a] p-6 sm:p-8 rounded-lg transition-colors shadow-lg w-full flex justify-center items-center">
          <div className="overflow-x-auto w-full flex justify-center">
            <GitHubCalendar 
              username="rafif2112" 
              blockSize={16}
              blockMargin={4}
              fontSize={14}
              theme={explicitTheme}
              colorScheme="dark"
              showWeekdayLabels={true}
              style={{
                color: '#9ca3af',
                width: '100%',
              }}
            />
          </div>
        </div>

      </motion.div>
    </section>
  );
}

function StatCard({ label, value }: { label: string, value: string | number }) {
  return (
    <div className="bg-[#151414] border border-[#2e2a2a] p-4 rounded-lg flex flex-col items-start justify-center shadow-md hover:border-[#383333] transition-colors">
      <span className="text-gray-400 text-sm font-medium mb-1">{label}</span>
      <span className="text-[#0090FF] text-2xl sm:text-3xl font-bold">{value}</span>
    </div>
  );
}