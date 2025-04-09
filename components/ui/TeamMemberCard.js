import Image from 'next/image';

const TeamMemberCard = ({ name, role, image, socialLinks }) => {
  return (
    <div className="content-card-light">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-white shadow-md"
      />
      <h4 className="text-base font-semibold mb-0.5">{name}</h4>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
      <div className="flex justify-center space-x-3">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-gray-400 hover:text-primary transition-colors duration-200"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCard;