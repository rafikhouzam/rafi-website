export type Project = {
slug: string
title: string
summary: string
problem: string
solution: string
impact: string[]
stack: string[]
tags?: string[]
links?: { github?: string; demo?: string }
}


const projects: Project[] = [
{
slug: 'image-search',
title: 'Streamlit Image Search (CLIP + FAISS)',
summary: 'Visual + text search across 18K+ product images with filters and S3-backed assets.',
problem: 'Teams couldn\'t browse by appearance; text lookups missed similar/alternate styles.',
solution: 'Built a Streamlit app using CLIP embeddings + FAISS for cosine similarity, with metadata filters and instant grid UI.',
impact: [
'18K products fully searchable by image + text',
'Cut manual lookup time by ~80%',
'Foundation for customer-facing discovery'
],
stack: ['Python', 'Streamlit', 'OpenAI CLIP', 'FAISS', 'Pandas', 'AWS S3', 'EC2'],
tags: ['Data Eng', 'ML', 'Internal Tools'],
links: { github: 'https://github.com/rafikhouzam/StreamlitDashboard' }
},
{
slug: 'barcode-scanner',
title: 'Barcode Scanner App (Offline)',
summary: 'Local Streamlit tool for scanning barcodes, parquet lookup, dedupe, and CSV export.',
problem: 'Sales needed a fast offline logger with metadata and standardized exports.',
solution: 'Packaged a Streamlit app with .bat launcher, session save/resume, dedupe, and CSV export using a local parquet master.',
impact: [
'Used daily by sales/product teams',
'Replaced manual Excel logging',
'Works 100% offline with standardized outputs'
],
stack: ['Python', 'Streamlit', 'Pandas', 'Parquet', 'Windows'],
tags: ['Internal Tools'],
links: { github: 'https://github.com/rafikhouzam/barcode-scanner-app' }
},
{
slug: 'slow-memo-analysis',
title: 'Slow Moving Memo Analysis',
summary: 'Heuristic risk model + Streamlit dashboard to flag memo inventory risk.',
problem: 'No standardized way to flag at-risk memoed pieces; follow-ups were manual and inconsistent.',
solution: 'Heuristic tiers (High/Medium/Low) using days out, retailer history, category, and inventory, surfaced in a Streamlit dashboard.',
impact: [
'Prioritized weekly ops reviews for 2,000+ active memos',
'Accelerated recovery of at-risk inventory',
'Interpretability-first for frontline teams'
],
stack: ['Python', 'Pandas', 'Streamlit', 'Excel'],
tags: ['Analytics', 'Dashboards']
}
]


export default projects