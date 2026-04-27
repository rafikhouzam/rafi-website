const experience = {
  experience: [
    {
      company: 'Aneri Jewels',
      role: 'Software Engineer',
      dates: 'Apr 2025 – Apr 2026',
      points: [
        'Architected an automated data pipeline powering a custom Streamlit BI suite: SQL stored procedures trigger updates, Python/SQLAlchemy processes and writes to SharePoint, FastAPI serves the data layer, and Streamlit renders live dashboards - all deployed on EC2 with systemd and scheduled via cron',
        'Built inventory, sales, and memo dashboards across 60k+ SKUs, replacing manual reporting with a fully self-updating BI system',
        'Eliminated legacy Excel workflows with a Python ETL pipeline, reducing manual data overhead by ~80%',
        'Implemented CLIP-powered semantic image search over 18k+ product photos, backed by S3 and FAISS vector indexing'
      ]
    },
    {
      company: 'Outlier',
      role: 'Prompt Engineer',
      dates: 'Jan 2024 – Jul 2024',
      points: [
        'Evaluated and refined LLM outputs across diverse prompting tasks, improving response quality, alignment, and consistency'
      ]
    },
    {
      company: 'RTI Snacks',
      role: 'Software Engineer Intern',
      dates: 'Jun 2023 – Aug 2023',
      points: [
        'Built an inventory management system with Roadrunner API integration for automated spot quoting and shipment tracking'
      ]
    }
  ],
  skills: [
    'Python', 'Pandas', 'SQL', 'Streamlit', 'FAISS', 'CLIP', 'AWS (S3, EC2)', 'Git', 'Data Modeling'
  ],
  education: {
    school: 'Boston College',
    degree: 'B.A. in Computer Science',
    when: 'Class of 2024'
  }
}

export default experience