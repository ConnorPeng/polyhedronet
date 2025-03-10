function Home() {
  console.log("Home component is rendering");
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
            PolyhedronNet: Representation Learning for Polyhedra with
            Surface-Attributed Graph
          </h1>
          <div className="text-xl text-gray-600 max-w-3xl mx-auto">
            <p className="font-medium">Dazhou Yu, Genpei Zhang, Liang Zhao</p>
            <p className="mt-2">
              Department of Computer Science, Emory University
            </p>
            <p className="mt-2">
              Published as a conference paper at{" "}
              <span className="font-semibold">ICLR 2025</span>
            </p>
            <p className="mt-1 text-blue-700">
              arXiv:2502.01814v2 [cs.CV] 19 Feb 2025
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
              Paper Information
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="mb-3">
                <span className="font-bold text-blue-700">Publication:</span>{" "}
                International Conference on Learning Representations (ICLR) 2025
              </p>
              <p className="mb-3">
                <span className="font-bold text-blue-700">Research Area:</span>{" "}
                Computer Vision, 3D Representation Learning
              </p>
              <p className="mb-3">
                <span className="font-bold text-blue-700">Keywords:</span>{" "}
                Polyhedra, Representation Learning, Graph Neural Networks, 3D
                Objects
              </p>
              <p>
                <span className="font-bold text-blue-700">Code & Data:</span>{" "}
                <a
                  href="https://github.com/dyu62/3D_polyhedron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                >
                  github.com/dyu62/3D_polyhedron
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="https://arxiv.org/pdf/2502.01814v2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors flex flex-col items-center justify-center text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                View PDF
              </a>
              <a
                href="https://arxiv.org/abs/2502.01814"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors flex flex-col items-center justify-center text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 015.656 0l4 4a4 4 0 01-5.656 5.656l-1.102-1.101"
                  />
                </svg>
                arXiv Page
              </a>
              <a
                href="https://github.com/dyu62/3D_polyhedron"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-md hover:bg-green-700 transition-colors flex flex-col items-center justify-center text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Code & Data
              </a>
            </div>
            <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="text-sm font-medium text-gray-700">
                  Classification Accuracy
                </div>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: "85.8%" }}
                ></div>
              </div>
              <div className="text-right text-sm font-medium text-gray-600 mt-1">
                85.8%
              </div>

              <div className="flex items-center mb-4 mt-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <div className="text-sm font-medium text-gray-700">
                  Retrieval NDCG
                </div>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "94.5%" }}
                ></div>
              </div>
              <div className="text-right text-sm font-medium text-gray-600 mt-1">
                94.5%
              </div>
            </div>
          </div>
        </section>

        <section className="prose prose-lg max-w-none mb-16 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
            Abstract
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ubiquitous geometric objects can be precisely and efficiently
            represented as polyhedra. The transformation of a polyhedron into a
            vector, known as polyhedra representation learning, is crucial for
            manipulating these shapes with mathematical and statistical tools
            for tasks like classification, clustering, and generation. Recent
            years have witnessed significant strides in this domain, yet most
            efforts focus on the vertex sequence of a polyhedron, neglecting the
            complex surface modeling crucial in real-world polyhedral objects.
            This study proposes PolyhedronNet, a general framework tailored for
            learning representations of 3D polyhedral objects. We propose the
            concept of the surface-attributed graph to seamlessly model the
            vertices, edges, faces, and their geometric interrelationships
            within a polyhedron. To effectively learn the representation of the
            entire surface-attributed graph, we first propose to break it down
            into local rigid representations to effectively learn each local
            region's relative positions against the remaining regions without
            geometric information loss. Subsequently, we propose PolyhedronGNN
            to hierarchically aggregate the local rigid representation via
            intra-face and inter-face geometric message passing modules, to
            obtain a global representation that minimizes information loss while
            maintaining rotation and translation invariance. Our experimental
            evaluations on four distinct datasets, encompassing both
            classification and retrieval tasks, substantiate PolyhedronNet's
            efficacy in capturing comprehensive and informative representations
            of 3D polyhedral objects.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block mb-8">
            Paper Viewer
          </h2>
          <div className="aspect-[16/9] w-full bg-white p-2 rounded-xl shadow-lg">
            <iframe
              src="https://arxiv.org/pdf/2502.01814v2.pdf"
              className="w-full h-full border-0 rounded-lg"
              title="PolyhedronNet: Representation Learning for Polyhedra with Surface-Attributed Graph"
            ></iframe>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block mb-8">
            Key Contributions
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Technical Innovations
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li>
                    Introduction of Surface-Attributed Graph (SAG) to model
                    polyhedra
                  </li>
                  <li>
                    Development of local rigid representations for rotation and
                    translation invariance
                  </li>
                  <li>
                    Creation of PolyhedronGNN with intra-face and inter-face
                    geometric message passing
                  </li>
                  <li>
                    Maintaining complete geometric and semantic information of
                    3D objects
                  </li>
                  <li>
                    Theoretical guarantees on information preservation and
                    invariance properties
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Experimental Results
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li>
                    State-of-the-art performance on four datasets (MNIST-C,
                    Building, ShapeNet-P, ModelNet-P)
                  </li>
                  <li>
                    Significant improvements in both classification and
                    retrieval tasks
                  </li>
                  <li>
                    Demonstrated importance of face attributes for geometric
                    understanding
                  </li>
                  <li>
                    Robust performance across diverse 3D object categories
                  </li>
                  <li>
                    Effectiveness in both simple and complex polyhedra
                    representation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 inline-block mb-8">
            Model Architecture
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-4xl">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg text-center mb-8">
                  <h3 className="text-2xl font-bold text-indigo-800">
                    PolyhedronNet Framework
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-6 rounded-lg relative border border-blue-200">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3 mt-1">
                      Surface-Attributed Graph
                    </h4>
                    <p className="text-gray-600 text-sm">
                      A unified data structure for polyhedra that captures
                      vertices, edges, faces, and their geometric relationships.
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg relative border border-indigo-200">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <h4 className="text-lg font-semibold text-indigo-800 mb-3 mt-1">
                      Local Rigid Representation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Decomposes the SAG into a set of local rigid
                      representations for each 2-hop path within a polyhedron.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg relative border border-purple-200">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-purple-600 rounded-full text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <h4 className="text-lg font-semibold text-purple-800 mb-3 mt-1">
                      PolyhedronGNN
                    </h4>
                    <p className="text-gray-600 text-sm">
                      A novel graph neural network that hierarchically
                      aggregates the local rigid representations into a global
                      representation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              The PolyhedronNet framework consists of three main components that
              work together to create a comprehensive representation learning
              approach for 3D polyhedra:
            </p>
            <ol className="list-decimal pl-8 space-y-6">
              <li className="text-lg">
                <span className="font-semibold text-blue-800">
                  Surface-Attributed Graph (SAG):
                </span>
                <p className="text-gray-700 mt-2">
                  A unified data structure for polyhedra that captures vertices,
                  edges, faces, and their geometric relationships. This
                  transformation is invertible, maintaining all original
                  polyhedron information.
                </p>
              </li>
              <li className="text-lg">
                <span className="font-semibold text-indigo-800">
                  Local Rigid Representation:
                </span>
                <p className="text-gray-700 mt-2">
                  Decomposes the SAG into a set of local rigid representations
                  for each 2-hop path within a polyhedron. This preserves the
                  original graph structure while achieving rotation and
                  translation invariance.
                </p>
              </li>
              <li className="text-lg">
                <span className="font-semibold text-purple-800">
                  PolyhedronGNN:
                </span>
                <p className="text-gray-700 mt-2">
                  A novel graph neural network that hierarchically aggregates
                  the local rigid representations into a global representation
                  through specialized intra-face and inter-face geometric
                  message passing modules.
                </p>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
