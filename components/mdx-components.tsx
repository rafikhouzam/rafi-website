import type { MDXComponents } from "mdx/types"
import React from "react"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: (props: any) => <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-3xl font-semibold mt-6 mb-3" {...props} />,
    h3: (props: any) => <h3 className="text-2xl font-semibold mt-5 mb-2" {...props} />,
    h4: (props: any) => <h4 className="text-xl font-medium mt-4 mb-2" {...props} />,
    h5: (props: any) => <h5 className="text-lg font-medium mt-3 mb-1" {...props} />,
    h6: (props: any) => <h6 className="text-base font-medium mt-2 mb-1" {...props} />,

    // Paragraph
    p: (props: any) => <p className="leading-relaxed mb-4" {...props} />,

    // Blockquote
    blockquote: (props: any) => (
      <blockquote
        className="border-l-4 pl-4 italic text-gray-600 dark:text-gray-400"
        {...props}
      />
    ),

    // Inline code
    code: (props: any) => (
      <code
        className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm"
        {...props}
      />
    ),

    ...components,
  }
}
