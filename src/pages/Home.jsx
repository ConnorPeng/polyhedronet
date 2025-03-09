function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          PartNet: A Large-scale Benchmark for Fine-grained and Hierarchical
          Part-level 3D Object Understanding
        </h1>
        <div className="text-xl text-gray-600">
          <p>Authors List</p>
          <p className="mt-2">
            Conference on Computer Vision and Pattern Recognition (CVPR) 2019
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Latest Updates</h2>
          <div className="bg-blue-50 p-4 rounded">
            <p className="font-bold">NEW [March 3, 2021]</p>
            <p>We've updated the web-based data visualization links</p>
          </div>
          {/* Add more updates */}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Paper (High Res)
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Code (Github)
            </button>
            {/* Add more links */}
          </div>
        </div>
      </section>

      <section className="prose max-w-none">
        <h2>Abstract</h2>
        <p>
          We present PartNet: a consistent, large-scale dataset of 3D objects
          annotated with fine-grained, instance-level, and hierarchical 3D part
          information...
        </p>
      </section>
    </div>
  );
}

export default Home;
