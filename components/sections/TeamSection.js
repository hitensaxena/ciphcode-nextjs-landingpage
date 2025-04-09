import Image from 'next/image';
import { Linkedin, Twitter, Github } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const teamMembers = [
  {
    image: "https://placehold.co/120x120/e8e8ed/101c2b?text=T1",
    name: "Member Name",
    role: "Lead Designer",
    social: [
      { icon: <Linkedin />, url: "#" },
      { icon: <Twitter />, url: "#" }
    ]
  },
  {
    image: "https://placehold.co/120x120/e8e8ed/101c2b?text=T2",
    name: "Another Name",
    role: "Senior Developer",
    social: [
      { icon: <Linkedin />, url: "#" },
      { icon: <Github />, url: "#" }
    ]
  },
  {
    image: "https://placehold.co/120x120/e8e8ed/101c2b?text=T3",
    name: "Third Person",
    role: "Project Manager",
    social: [
      { icon: <Linkedin />, url: "#" }
    ]
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="bg-background section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Team</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="content-card-light">
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-white shadow-md"
              />
              <h4 className="text-base font-semibold mb-0.5">{member.name}</h4>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-3">
                {member.social.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;