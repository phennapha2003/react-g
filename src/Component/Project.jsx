import React from 'react';
import ProjectCard from './ProjectCard'; // Adjust the path if your file structure is different

// Import your actual images here.
// For demonstration, I'm using placeholder image paths.
// In a real project, you would typically place images in 'public' folder or import them
// if you're using a bundler like Webpack (e.g., import GParkingImage1 from '../assets/g-parking-1.jpg';)
import GParkingImage1 from '../assets/g-parking-1.jpg'; // Example: Adjust path to your image
import GParkingImage2 from '../assets/g-parking-2.jpg'; // Example: Adjust path to your image
import OrderManagementSystemImage from '../assets/order-management-system.jpg'; // Example: Adjust path to your image

const Projects = () => {
  const projectsData = [
    {
      imageSrc: GParkingImage1, // Use the imported image
      title: "G-Parking",
      category: "Creating Innovative and User-Friendly Websites",
      description: null, // No specific description text provided in the screenshot for this part
    },
    {
      imageSrc: GParkingImage2, // Use the imported image
      title: "G-Parking",
      category: "Creating Innovative and User-Friendly Websites",
      description: null, // No specific description text provided in the screenshot for this part
    },
    {
      imageSrc: OrderManagementSystemImage, // Use the imported image
      title: "Order Management System",
      category: "Gennex Solution",
      description: null, // No specific description text provided in the screenshot for this part
    },
    // Add more project data objects as needed
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 ml-4 md:ml-0">All Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index} // Use a more stable unique ID if available from your data
              imageSrc={project.imageSrc}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;