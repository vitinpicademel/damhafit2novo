const ConstructionStatus = () => {
  const statusItems = [
    { label: 'Acesso', value: 99 },
    { label: 'Portaria', value: 80 },
    { label: 'Abertura de ruas', value: 95 },
    { label: 'Paisagismo', value: 8 },
    { label: 'Drenagem', value: 0 },
    { label: 'Rede de água', value: 0 },
    { label: 'Rede Elétrica', value: 0 },
    { label: 'Terraplanagem', value: 0 },
    { label: 'Pavimentação', value: 0 },
    { label: 'Clube', value: 0 },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Status da Obra</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Status Geral */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Status geral</h3>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-green-600"
                style={{ width: '21%' }}
              />
            </div>
            <p className="mt-2 text-lg font-semibold">21% concluído</p>
          </div>

          {/* Grid de Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statusItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-3">{item.label}</h4>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-green-600"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
                <p className="mt-2 text-sm font-medium">{item.value}%</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-600">Atualizado em: 18/03/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionStatus; 