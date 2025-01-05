const SkillsSection = () => {
    return (
      <section id="about" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Skills & Expertise</h2>
          <div className="space-y-6">
            <div className="flex justify-between">
              <span>AWS</span>
              <div className="w-2/3 bg-gray-300 rounded-full">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '80%' }}>80%</div>
              </div>
            </div>
            <div className="flex justify-between">
              <span>React</span>
              <div className="w-2/3 bg-gray-300 rounded-full">
                <div className="bg-teal-500 text-xs font-medium text-teal-100 text-center p-0.5 leading-none rounded-full" style={{ width: '70%' }}>70%</div>
              </div>
            </div>
            {/* Add more skill bars here */}
          </div>
        </div>
      </section>
    );
  }
  
  export default SkillsSection;
  