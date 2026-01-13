function Tarifs({ tarifs }) {
  const footerNote = tarifs[0]?.footerText;

  return (
    <div className="text-black p-10 md:p-10 max-w-7xl mx-auto">
      {/* Grille principale : 1 colonne sur mobile, 3 sur grand écran */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
        {tarifs.map((section, index) => (
          <div key={index} className="flex flex-col h-full">
            {/* Titre de la colonne */}
            <h2 className="text-xl font-bold uppercase tracking-tighter mb-6 border-b-2 border-black pb-2">
              {section.sectionTitle}
            </h2>

            <div className="flex flex-col space-y-1">
              {section.items?.map((item, idx) => {
                const isLast = idx === section.items.length - 1;
                return (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-4 ${
                      !isLast ? "border-b border-black/10" : ""
                    } ${item.isPromoted ? "bg-black/5 -mx-2 px-2 rounded" : ""}`}
                  >
                    <div className="flex flex-col pr-4">
                      <p className={` text-base leading-tight ${item.isPromoted ? "text-[#B35638]" : ""}`}>
                        {item.label}
                      </p>
                      {item.mention && (
                        <span className="text-xs font-medium italic opacity-70 mt-1">
                          {item.mention}
                        </span>
                      )}
                    </div>
                    
                    <p className="font-bold text-base whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Note de bas de page qui prend toute la largeur en dessous */}
      {footerNote && (
        <div className="mt-20 pt-8 border-t border-black/20 max-w-7xl mx-auto ">
          <p className="text-sm leading-relaxed text-justify opacity-90 whitespace-pre-line max-w-4xl">
            {footerNote}
          </p>
        </div>
      )}
    </div>
  );
}

export default Tarifs;