const SectionHeading = ({ children, light }) => {
  return (
    <h2 className={`text-sm font-bold ${light ? 'text-on-surface-light' : 'text-primary'} mb-6 text-center uppercase tracking-wider`}>
      {children}
    </h2>
  );
};

export default SectionHeading;