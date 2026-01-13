function AcceslibreTarifs({ tarifs }) {
	
	return (
		<div>
			<div className=" text-black p-10">
				<div className="  ">
					{tarifs
						.sort((a, b) => a.id - b.id)
						.map((item, index) => {
							const isLast = index === tarifs.length - 1;
							return (
								<div
									key={item.id}
									className={`flex justify-between py-4 ${
										!isLast ? "border-b border-white/50 " : ""
									}`}
								>
									<p className="font-semibold">{item.label}</p>
									<p className="font-semibold">{item.price}</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default AcceslibreTarifs;