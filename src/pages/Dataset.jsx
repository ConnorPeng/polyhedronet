function Dataset() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Dataset Overview</h1>
        <p className="text-gray-600">
          PartNet provides a large-scale dataset of 3D objects with
          fine-grained, hierarchical part annotations.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Dataset Statistics</h2>
          <ul className="space-y-2">
            <li>• 573,585 part instances</li>
            <li>• 26,671 3D models</li>
            <li>• 24 object categories</li>
            <li>• 573 consistent part semantics</li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <div className="grid grid-cols-2 gap-2">
            <div>• Bottle</div>
            <div>• Chair</div>
            <div>• Table</div>
            <div>• Lamp</div>
            <div>• Vase</div>
            <div>• More...</div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Download</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2">
            Download Dataset
          </button>
          <p className="text-sm text-gray-600">
            Please read our license terms before downloading.
          </p>
        </div>
      </section>

      <section className="prose max-w-none">
        <h2>Data Format</h2>
        <p>Each 3D model in our dataset comes with:</p>
        <ul>
          <li>Hierarchical part instance segmentation</li>
          <li>Fine-grained part semantics</li>
          <li>Consistent part annotation across instances</li>
          <li>Rich textual descriptions</li>
        </ul>
      </section>
    </div>
  );
}

export default Dataset;
