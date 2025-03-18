import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PolyhedronNet | Advanced 3D Polyhedron Representation Learning Framework",
  description:
    "PolyhedronNet: The leading framework for 3D polyhedron representation learning using surface-attributed graphs. Research from Emory University on polyhedron classification and retrieval.",
  keywords:
    "PolyhedronNet, polyhedron, polyhedra, 3D polyhedron, polyhedron representation, polyhedron learning, polyhedron classification, polyhedron retrieval, 3D shape analysis, geometric deep learning, surface-attributed graph",
  authors: [
    { name: "Dazhou Yu", url: "mailto:dyu62@emory.edu" },
    { name: "Genpei Zhang", url: "mailto:genpeizhang2024@gmail.com" },
    { name: "Liang Zhao", url: "mailto:liang.zhao@emory.edu" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://polyhedronnet.emory.edu",
    title: "PolyhedronNet: Advanced 3D Polyhedron Representation Learning",
    description:
      "The definitive framework for 3D polyhedron representation learning. Discover how PolyhedronNet transforms polyhedra into powerful vector representations.",
    siteName: "PolyhedronNet",
  },
  twitter: {
    card: "summary_large_image",
    title: "PolyhedronNet: 3D Polyhedron Representation Learning",
    description:
      "The definitive framework for 3D polyhedron representation learning. Discover how PolyhedronNet transforms polyhedra into powerful vector representations.",
    creator: "@EmoryUniversity",
  },
  alternates: {
    canonical: "https://polyhedronnet.emory.edu",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>

        {/* Structured Data for Research Paper */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ScholarlyArticle",
              "headline": "PolyhedronNet: Representation Learning for Polyhedra with Surface-Attributed Graph",
              "name": "PolyhedronNet",
              "author": [
                {
                  "@type": "Person",
                  "name": "Dazhou Yu",
                  "affiliation": {
                    "@type": "Organization",
                    "name": "Department of Computer Science, Emory University"
                  }
                },
                {
                  "@type": "Person",
                  "name": "Genpei Zhang",
                  "affiliation": {
                    "@type": "Organization",
                    "name": "Department of Computer Science, Emory University"
                  }
                },
                {
                  "@type": "Person",
                  "name": "Liang Zhao",
                  "affiliation": {
                    "@type": "Organization",
                    "name": "Department of Computer Science, Emory University"
                  }
                }
              ],
              "datePublished": "2025",
              "isAccessibleForFree": true,
              "publisher": {
                "@type": "Organization",
                "name": "ICLR"
              },
              "description": "A novel framework for 3D polyhedron representation learning using surface-attributed graphs and graph neural networks.",
              "keywords": "PolyhedronNet, Polyhedron, Polyhedra Representation Learning, Surface-attributed Graph, 3D Polyhedral Object Classification, PolyhedronGNN",
              "url": "https://arxiv.org/pdf/2502.01814"
            }
          `}
        </Script>

        {/* FAQ Structured Data */}
        <Script id="faq-structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is PolyhedronNet?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PolyhedronNet is a novel framework for learning representations of 3D polyhedral objects. It introduces the concept of surface-attributed graphs to model vertices, edges, faces, and their geometric interrelationships within a polyhedron."
                }
              }, {
                "@type": "Question",
                "name": "How does PolyhedronNet represent polyhedra?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PolyhedronNet represents polyhedra using a three-step process: 1) Transforming a polyhedron into a Surface-attributed Graph (SAG), 2) Computing Local Rigid Representation with geometric relationships, and 3) Using PolyhedronGNN for learning representations through message passing."
                }
              }, {
                "@type": "Question",
                "name": "What are the applications of polyhedron representation learning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Polyhedron representation learning is crucial for manipulating 3D shapes with mathematical and statistical tools for tasks like 3D object classification, clustering, retrieval, and generation. It has applications in computer graphics, CAD, architecture, and 3D modeling."
                }
              }, {
                "@type": "Question",
                "name": "How does PolyhedronNet perform in polyhedron classification?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PolyhedronNet outperforms all comparison methods in 3D polyhedron classification, achieving 85.8% accuracy on MNIST-C, 98.0% accuracy on Building dataset, 62.7% accuracy on ShapeNet-P, and 43.5% accuracy on ModelNet-P."
                }
              }]
            }
          `}
        </Script>

        {/* Website Structured Data */}
        <Script id="website-structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PolyhedronNet",
              "url": "https://polyhedronnet.emory.edu",
              "description": "The official website for PolyhedronNet, a framework for 3D polyhedron representation learning",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://polyhedronnet.emory.edu/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'