import React, { useState, useEffect } from 'react';

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const labelDesign = 'text-left block font-medium';
  const inputDesign =
    'block py-5 md:px-4 px-2 my-4 md:text-lg text-base rounded-md bg-background-gray text-gray outline-none';

  const showForm = () => setIsFormVisible(true);
  const hideForm = () => setIsFormVisible(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:3000/skills');
        if (!response.ok) {
          throw new Error('Failed to fetch Recommendation');
        }
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const [formData, setFormData] = useState({
    domain: '',
    skills: [
      { name: '', level: '' },
      { name: '', level: '' },
      { name: '', level: '' },
      { name: '', level: '' },
      { name: '', level: '' },
    ],
  });

  const handleChange = (index, field, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index][field] = value;
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleDomainChange = (e) => {
    setFormData({ ...formData, domain: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.domain.trim()) {
      errors.domain = 'Domain is required';
    }

    const validSkills = formData.skills.filter(
      (skill) => skill.name.trim() && skill.level.trim()
    );

    if (validSkills.length === 0) {
      errors.skills = 'At least one skill with a proficiency level is required';
    }

    formData.skills.forEach((skill, index) => {
      if (skill.name.trim() && (!skill.level.trim() || isNaN(skill.level))) {
        errors[`level_${index}`] = `Skill ${index + 1} proficiency must be a number between 0 and 100`;
      } else if (skill.level.trim() && (skill.level < 0 || skill.level > 100)) {
        errors[`level_${index}`] = `Skill ${index + 1} proficiency must be a number between 0 and 100`;
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formattedData = {
      name: formData.domain,
      list: formData.skills.filter(
        (skill) => skill.name.trim() && skill.level.trim()
      ).map((skill) => ({
        name: skill.name,
        level: parseInt(skill.level) || 0,
      })),
    };

    try {
      const response = await fetch('http://localhost:3000/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Error in submitting form');
      }

      // Clear the form
      setFormData({
        domain: '',
        skills: [
          { name: '', level: '' },
          { name: '', level: '' },
          { name: '', level: '' },
          { name: '', level: '' },
          { name: '', level: '' },
        ],
      });

      window.location.reload();
      setFormErrors({});
      hideForm();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-background-gray relative h-fit xl:mt-36 mt-14 py-14 flex flex-col space-y-6 items-center w-full">
      <h1 className="text-2xl xl:text-4xl font-bold text-word-gray md:text-3xl text-center">
        Skills & Languages
      </h1>
      <p className="text-gray lg:w-[30rem] md:text-sm md:w-[30rem] w-[90%] text-center capitalize">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>

      {loading && <p>Loading projects...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-wrap justify-center px-4 xl:px-20">
        {skills.length > 0 &&
          skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-base-white xl:h-[20rem] xl:w-[24rem] lg:w-[20rem] md:w-[20rem] sm:w-[18rem] w-full shadow-project-card text-left px-12 py-6 my-4 mx-4"
            >
              <h1 className="text-lg capitalize font-medium">{skill.name}</h1>
              {skill.list &&
                skill.list.map(
                  (e) =>
                    e.level > 0 && (
                      <div key={e.id} className="my-4 text-gray">
                        <div className="flex justify-between">
                          <span>{e.name}</span>
                          <span>{e.level}%</span>
                        </div>

                        <div className="border-[1px] border-yellow w-full h-[5px] rounded-full">
                          <div
                            className="bg-yellow h-full rounded-full"
                            style={{ width: `${e.level}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                )}
            </div>
          ))}
      </div>

      <button
        onClick={showForm}
        className="bg-yellow px-8 py-4 text-sm font-semibold rounded-lg mt-4"
      >
        ADD SKILLS
      </button>


      {/* FORM START HERE      */}
      {isFormVisible && (
        <div className="py-10 px-10 absolute z-50 shadow-project-card h-fit w-full md:w-[52rem] bg-base-white rounded-xl text-center">
          <h1 className="md:text-5xl text-3xl font-semibold">Add Skill</h1>

          <form>
            <label className={`${labelDesign} md:text-2xl text-lg`}>
              Domain
              <input
                className={`${inputDesign} w-full`}
                type="text"
                value={formData.domain}
                onChange={handleDomainChange}
                placeholder="Front End Developer"
              />
              {formErrors.domain && (
                <p className="text-red-500">{formErrors.domain}</p>
              )}
            </label>

            <h1 className={`${labelDesign} md:text-2xl text-lg`}>Skills</h1>

            <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mt-6">
              <label className="md:w-2/3 text-lg text-left w-full">
                Skill
                {formData.skills.map((skill, index) => (
                  <div key={skill.id}>
                    <input
                      className={`${inputDesign} w-full`}
                      type="text"
                      value={skill.name}
                      onChange={(e) =>
                        handleChange(index, 'name', e.target.value)
                      }
                    />
                    {formErrors[`name_${index}`] && (
                      <p className="text-red-500">
                        {formErrors[`name_${index}`]}
                      </p>
                    )}
                  </div>
                ))}
              </label>

              <label className="md:w-1/3 text-lg text-right w-full mt-4 md:mt-0">
                Proficiency (%)
                {formData.skills.map((skill, index) => (
                  <div key={index}>
                    <input
                      className={`${inputDesign} w-full`}
                      type="text"
                      value={skill.level}
                      onChange={(e) =>
                        handleChange(index, 'level', e.target.value)
                      }
                    />
                    {formErrors[`level_${index}`] && (
                      <p className="text-red-500">
                        {formErrors[`level_${index}`]}
                      </p>
                    )}
                  </div>
                ))}
              </label>
            </div>

            {formErrors.skills && (
              <p className="text-red-500 text-left mt-4">{formErrors.skills}</p>
            )}

            <div className="flex justify-end mt-4">
              <button
                type="submit"
                onClick={submitForm}
                className="mx-2 py-4 px-8 bg-yellow text-lg font-semibold rounded-md text-black"
              >
                Submit
              </button>

              <button
                onClick={hideForm}
                className="mx-2 py-4 px-8 border-2 border-red-600 text-lg font-semibold rounded-md text-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SkillsPage;
