import Image from 'next/image';

const ProjectCard = ({ image, title, category, onClick }) => {
  return (
    <div 
      className="content-card group cursor-pointer" 
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-52 object-cover mb-0 rounded-b-none"
      />
      <div className="p-4">
        <h3 className="text-md font-semibold mb-1 text-white">{title}</h3>
        <p className="text-sm text-on-surface-variant">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;