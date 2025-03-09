function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p>Email: contact@partnet-dataset.org</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Paper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Citation</h3>
            <p className="text-sm">
              If you use this dataset, please cite our CVPR 2019 paper.
            </p>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; 2024 PartNet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
