function Tarifs({ tarifs }) {
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
									<span>{item.label}</span>
									<span className="font-semibold">{item.price}</span>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default Tarifs;
