const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-2">
          Silva <span className="text-accent">Manutenção e Montagem</span>
        </h3>
        <p className="text-gray-400 mb-4">
          Manutenção e Montagem de Móveis Corporativos
        </p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Silva Manutenção e Montagem. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
