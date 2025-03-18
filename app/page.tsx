import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, FileText, Download, ExternalLink, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <h1 className="text-lg font-bold">PolyhedronNet</h1>
            </div>
            <nav aria-label="Main Navigation">
              <ul className="flex space-x-4 text-sm">
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-blue-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#abstract" className="text-gray-600 hover:text-blue-600">
                    Abstract
                  </Link>
                </li>
                <li>
                  <Link href="#method" className="text-gray-600 hover:text-blue-600">
                    Method
                  </Link>
                </li>
                <li>
                  <Link href="#results" className="text-gray-600 hover:text-blue-600">
                    Results
                  </Link>
                </li>
                <li>
                  <Link href="#code" className="text-gray-600 hover:text-blue-600">
                    Code
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-600 hover:text-blue-600">
                    FAQ
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-3">
              PolyhedronNet: The Ultimate Framework for 3D Polyhedron Representation Learning
            </h1>
            <p className="text-xl mb-4 text-gray-700">
              Transforming polyhedra into powerful vector representations for 3D shape analysis
            </p>
            <div className="mb-4 text-gray-600">
              <p>Dazhou Yu, Genpei Zhang, Liang Zhao</p>
              <p>Department of Computer Science, Emory University</p>
              <p className="mt-1">Published as a conference paper at ICLR 2025</p>
            </div>
            <div className="flex justify-center space-x-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a
                  href="https://arxiv.org/pdf/2502.01814"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download PolyhedronNet research paper PDF from arXiv"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Paper PDF
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/dyu62/3D_polyhedron"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View PolyhedronNet source code on GitHub"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - New */}
      <section id="about" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What is PolyhedronNet?</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                <strong>PolyhedronNet</strong> is a groundbreaking framework designed specifically for learning
                representations of 3D polyhedron objects. As the first dedicated solution for polyhedron representation
                learning, PolyhedronNet addresses the unique challenges of working with these complex geometric
                structures.
              </p>
              <p>
                A <strong>polyhedron</strong> (plural: polyhedra) is a 3D geometric shape with flat polygonal faces,
                straight edges, and sharp vertices. Common examples include cubes, pyramids, and more complex shapes
                like dodecahedrons. Polyhedra are fundamental building blocks in 3D modeling, computer graphics,
                architecture, and many scientific disciplines.
              </p>
              <p>
                Our innovative approach transforms polyhedra into comprehensive vector representations that capture both
                structural and geometric properties, enabling advanced analysis, classification, and retrieval of 3D
                shapes with unprecedented accuracy.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="text-xl font-bold mb-3">Why Polyhedron Representation Matters</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Enables efficient 3D shape analysis and comparison</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Powers applications in computer graphics and CAD</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Facilitates architectural and engineering design</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Supports 3D printing and manufacturing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="text-xl font-bold mb-3">PolyhedronNet Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Surface-attributed graph representation captures complete polyhedron structure</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Rotation and translation invariant for consistent analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>State-of-the-art performance on polyhedron classification and retrieval</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Open-source implementation for research and applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section id="abstract" className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Abstract</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Ubiquitous geometric objects can be precisely and efficiently represented as <strong>polyhedra</strong>.
                The transformation of a <strong>polyhedron</strong> into a vector, known as{" "}
                <strong>polyhedra representation learning</strong>, is crucial for manipulating these shapes with
                mathematical and statistical tools for tasks like classification, clustering, and generation.
              </p>
              <p>
                This study proposes <strong>PolyhedronNet</strong>, a general framework tailored for learning
                representations of 3D <strong>polyhedral</strong> objects. We introduce the concept of the{" "}
                <strong>surface-attributed graph</strong> to model vertices, edges, faces, and their geometric
                interrelationships within a <strong>polyhedron</strong>, achieving{" "}
                <strong>rotation and translation invariance</strong> while preserving discriminative power.
              </p>
              <p>
                Our experimental evaluations on four distinct datasets (MNIST-C, Building, ShapeNet-P, and ModelNet-P),
                encompassing both
                <strong> 3D polyhedral object classification</strong> and <strong>3D shape retrieval</strong> tasks,
                substantiate <strong>PolyhedronNet's</strong> efficacy in capturing comprehensive and informative
                representations of 3D <strong>polyhedral</strong> objects. Code and data are available at{" "}
                <a
                  href="https://github.com/dyu62/3D_polyhedron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/dyu62/3D_polyhedron
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">PolyhedronNet Methodology</h2>
            <p className="text-lg text-center mb-8 text-gray-700">
              Our innovative approach to polyhedron representation learning
            </p>

            <div className="mb-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-09%20at%2013.54.40-Hl3NLzlAhSR57rrf4DiLcUQWEiMcDf.png"
                  alt="PolyhedronNet Framework showing the three main components: Surface-attributed Graph transformation, Local Rigid Representation, and PolyhedronGNN architecture for polyhedron representation learning"
                  width={800}
                  height={400}
                  className="w-full object-contain"
                  priority
                />
                <div className="p-4 text-sm text-gray-600">
                  <p>
                    <strong>Figure:</strong> The PolyhedronNet framework for polyhedron representation learning consists
                    of three main components:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Transforming a polyhedron into a Surface-attributed Graph (SAG)</li>
                    <li>Computing Local Rigid Representation with geometric relationships</li>
                    <li>PolyhedronGNN for learning representations through message passing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="pt-4 px-4 pb-4">
                  <h3 className="text-xl font-bold mb-2">Surface-Attributed Graph</h3>
                  <p className="text-sm text-gray-600">
                    A novel graph representation that captures vertices, edges, faces, and their relationships in a
                    polyhedron through face-hyperedges, enabling comprehensive polyhedral graph transformation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 px-4 pb-4">
                  <h3 className="text-xl font-bold mb-2">Local Rigid Representation</h3>
                  <p className="text-sm text-gray-600">
                    A five-tuple geometric representation that preserves structural information while achieving rotation
                    and translation invariance in 3D polyhedra, crucial for consistent polyhedron representation
                    learning.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 px-4 pb-4">
                  <h3 className="text-xl font-bold mb-2">PolyhedronGNN</h3>
                  <p className="text-sm text-gray-600">
                    A specialized graph neural network for 3D polyhedra that aggregates local representations through
                    intra-face and inter-face message passing, enabling effective polyhedron representation learning.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Technical Innovation in Polyhedron Representation</h3>
              <p className="mb-4">
                PolyhedronNet introduces several key innovations in the field of polyhedron representation learning:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>
                    <strong>Face-centric representation:</strong> Unlike previous methods that focus only on vertices or
                    edges, PolyhedronNet explicitly models faces as first-class entities in the polyhedron
                    representation.
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>
                    <strong>Heterogeneous message passing:</strong> Our approach enables information flow between
                    different structural elements of a polyhedron (vertices, edges, and faces).
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>
                    <strong>Invariant geometric features:</strong> PolyhedronNet computes local geometric features that
                    are invariant to rotation and translation, ensuring consistent polyhedron representation regardless
                    of orientation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Polyhedron Analysis Results</h2>
            <p className="text-lg text-center mb-8 text-gray-700">
              Benchmark performance on polyhedron classification and retrieval tasks
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">Polyhedra Datasets</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-4 px-4 pb-4">
                    <div className="flex justify-between">
                      <h4 className="font-bold">MNIST-C Polyhedra</h4>
                      <span className="text-sm text-gray-500">13,742 samples</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      3D digit polyhedra with color-coded faces for rotation invariance testing in polyhedron
                      classification
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4 px-4 pb-4">
                    <div className="flex justify-between">
                      <h4 className="font-bold">Building Polyhedra</h4>
                      <span className="text-sm text-gray-500">5,000 samples</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      3D building polyhedra from OpenStreetMap for architectural polyhedron shape analysis
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4 px-4 pb-4">
                    <div className="flex justify-between">
                      <h4 className="font-bold">ShapeNet-P Dataset</h4>
                      <span className="text-sm text-gray-500">2,122 samples</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      15 object categories from ShapeNetCore converted to polyhedra for diverse 3D object classification
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-4 px-4 pb-4">
                    <div className="flex justify-between">
                      <h4 className="font-bold">ModelNet-P Dataset</h4>
                      <span className="text-sm text-gray-500">1,303 samples</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      14 object categories from ModelNet40 converted to polyhedra for 3D shape retrieval evaluation
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Tabs defaultValue="classification" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="classification">Polyhedron Classification</TabsTrigger>
                <TabsTrigger value="retrieval">Polyhedron Retrieval</TabsTrigger>
              </TabsList>
              <TabsContent value="classification" className="mt-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4">
                    <p className="text-sm mb-3">
                      PolyhedronNet outperforms all comparison methods in 3D polyhedron classification:
                    </p>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          <strong>MNIST-C:</strong> 85.8% accuracy (vs. 43.5% for next best method) in polyhedron digit
                          classification
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          <strong>Building:</strong> 98.0% accuracy with perfect AUC of 1.0 in architectural polyhedron
                          classification
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          <strong>ShapeNet-P:</strong> 62.7% accuracy with 93.6% AUC in diverse polyhedron object
                          classification
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          <strong>ModelNet-P:</strong> 43.5% accuracy with 82.4% AUC in challenging polyhedron
                          classification
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="retrieval" className="mt-4">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4">
                    <p className="text-sm mb-3">PolyhedronNet shows superior polyhedron retrieval performance:</p>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          <strong>MNIST-C:</strong> 71.3% precision, 84.2% MAP in polyhedron digit retrieval
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          <strong>Building:</strong> 83.8% precision, 92.3% MAP in architectural polyhedron retrieval
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          <strong>ShapeNet-P:</strong> 32.2% precision, 48.6% MAP in diverse polyhedron object retrieval
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          <strong>ModelNet-P:</strong> 24.0% precision, 42.1% MAP in challenging polyhedron shape
                          retrieval tasks
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-3">Key Research Findings in Polyhedron Analysis</h3>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <ul className="text-sm space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      Face attributes significantly improve performance in polyhedra representation learning (up to
                      49.8% accuracy gain)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      Heterogeneous message passing in PolyhedronGNN is crucial for capturing complex geometric
                      relationships in polyhedra
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      Optimal performance achieved with 4 GNN layers and 256 hidden dimensions for 3D polyhedron
                      representation learning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      PolyhedronNet effectively handles ambiguity in rotated polyhedra, demonstrating rotation and
                      translation invariance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section id="code" className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">PolyhedronNet Code & Resources</h2>
            <p className="text-lg text-center mb-8 text-gray-700">
              Open-source implementation for polyhedron representation learning
            </p>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Github className="h-8 w-8 text-gray-700" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">GitHub Repository</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our implementation of PolyhedronNet is available on GitHub, including code, documentation, and
                    instructions for reproducing our experiments on 3D polyhedron classification and polyhedron shape
                    retrieval.
                  </p>
                  <Button asChild>
                    <a
                      href="https://github.com/dyu62/3D_polyhedron"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                      aria-label="Access PolyhedronNet source code on GitHub"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      github.com/dyu62/3D_polyhedron
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-4 px-4 pb-4">
                  <h3 className="text-xl font-bold mb-2">Polyhedra Datasets</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Access to MNIST-C, Building, ShapeNet-P, and ModelNet-P datasets for 3D polyhedra research and
                    benchmarking.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a
                      href="https://github.com/dyu62/3D_polyhedron"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download polyhedra datasets for 3D object representation learning"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Polyhedra Datasets
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4 px-4 pb-4">
                  <h3 className="text-xl font-bold mb-2">Research Paper</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Access our paper on PolyhedronNet published at ICLR 2025 and supplementary materials on polyhedron
                    representation learning.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a
                      href="https://arxiv.org/pdf/2502.01814"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download PolyhedronNet research paper PDF from arXiv"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Download PolyhedronNet Paper
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - New */}
      <section id="faq" className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="text-xl font-bold mb-2">What is PolyhedronNet?</h3>
                <p>
                  PolyhedronNet is a novel framework for learning representations of 3D polyhedral objects. It
                  introduces the concept of surface-attributed graphs to model vertices, edges, faces, and their
                  geometric interrelationships within a polyhedron.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="text-xl font-bold mb-2">How does PolyhedronNet represent polyhedra?</h3>
                <p>
                  PolyhedronNet represents polyhedra using a three-step process: 1) Transforming a polyhedron into a
                  Surface-attributed Graph (SAG), 2) Computing Local Rigid Representation with geometric relationships,
                  and 3) Using PolyhedronGNN for learning representations through message passing.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="text-xl font-bold mb-2">
                  What are the applications of polyhedron representation learning?
                </h3>
                <p>
                  Polyhedron representation learning is crucial for manipulating 3D shapes with mathematical and
                  statistical tools for tasks like 3D object classification, clustering, retrieval, and generation. It
                  has applications in computer graphics, CAD, architecture, and 3D modeling.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="text-xl font-bold mb-2">How does PolyhedronNet perform in polyhedron classification?</h3>
                <p>
                  PolyhedronNet outperforms all comparison methods in 3D polyhedron classification, achieving 85.8%
                  accuracy on MNIST-C, 98.0% accuracy on Building dataset, 62.7% accuracy on ShapeNet-P, and 43.5%
                  accuracy on ModelNet-P.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="text-xl font-bold mb-2">
                  What makes polyhedron representation different from other 3D shape representations?
                </h3>
                <p>
                  Polyhedron representation specifically focuses on 3D shapes with flat polygonal faces, straight edges,
                  and sharp vertices. Unlike point clouds or voxels, polyhedra preserve exact geometric information and
                  topological structure, making them ideal for precise 3D shape analysis and manipulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-bold">PolyhedronNet</h3>
                <p className="text-sm text-gray-400">ICLR 2025 Conference Paper</p>
                <p className="text-sm text-gray-400">Emory University Computer Science</p>
                <p className="text-sm text-gray-400">Polyhedron Representation Learning</p>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-sm text-gray-400">
                  Contact:{" "}
                  <a href="mailto:dyu62@emory.edu" className="text-blue-400 hover:underline">
                    dyu62@emory.edu
                  </a>
                </p>
                <p className="text-sm text-gray-400">© 2025 Emory University</p>
                <div className="mt-2">
                  <a href="#about" className="text-sm text-gray-400 hover:text-white mr-3">
                    About
                  </a>
                  <a href="#method" className="text-sm text-gray-400 hover:text-white mr-3">
                    Method
                  </a>
                  <a href="#results" className="text-sm text-gray-400 hover:text-white">
                    Results
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

