import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-background-gray flex flex-col items-center text-center xl:pt-24 xl:space-y-4 lg:pt-10 lg:space-y-3 md:pt-8 pt-6 md:space-y-2">
      <h1 className="lg:text-[34px] font-bold text-word-gray md:text-3xl text-2xl">
        Our Events
      </h1>
      <p className="text-gray xl:w-[40rem] md:text-[15px] md:w-[32rem] w-[24rem] capitalize">
        Discover some of the unforgettable moments we’ve created. From weddings
        to corporate gatherings, each event is tailored to bring your vision to
        life.
      </p>

      {/* LOADING MESSAGE */}
      {loading && <p>Loading projects...</p>}

      {/* ERROR MESSAGE */}
      {error && (
        <p className="text-red-500">
          OOPS!... There is an error fetching projects
        </p>
      )}

      {!loading && !error && (
        // PROJECTS  CONTAINNER
        <div className="flex flex-wrap justify-evenly px-10 py-2 h-fit w-fit">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-light-gray rounded-2xl shadow-project-card bg-base-white text-left xl:h-[28rem] xl:w-[24rem] xl:my-4 my-2 lg:h-[28rem] lg:w-[21rem] lg:my-3 md:w-[18rem] md:my-2"
            >
              <img
                className="xl:h-64 lg:h-60 rounded-t-lg overflow-hidden"
                src={`https://picsum.photos/id/${project.id}/2000/1200`}
                alt={project.title}
              />
              <p className="xl:text-base lg:text-[1.2rem] md:text-[1rem] font-semibold mt-4 ml-3">
                {project.title}
              </p>
              <p className="xl:text-sm lg:text-[0.9rem] md:text-[0.8rem] text-gray mt-1 ml-3 mr-2">
                {project.content}
              </p>
              <div className="flex flex-wrap mx-3 my-1">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="m-1 bg-slate-300 rounded-full px-4 py-1 xl:text-[0.7rem] md:text-[0.7rem] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
