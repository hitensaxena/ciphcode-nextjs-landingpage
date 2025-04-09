const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="p-6">
      <span className="text-3xl mb-4 inline-block">{icon}</span>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;