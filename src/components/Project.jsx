import ProjectCard from './ProjectCard';

const Project = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'This is a brief description of project one.',
      image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of project two.',
      image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
    },
    {
      title: 'Project Three',
      description: 'This is a brief description of project three.',
      image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
    }
  ];

  return (
    <div className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center ">
        {projects.map((project, index) => (
          <div key={index} className="px-4 py-2">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Project;
