function Tarifs({ tarifs, description }) {
	return (
		<div>
			<div className="bg-darkorange lg:px-10 mx-auto text-black p-10">
				<div className="  ">
					{tarifs.map((item, index) => {
						const isLast = index === tarifs.length - 1;
						return (
							<div
								key={index}
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
				<p className="pt-10 ">{description}</p>
			</div>
		</div>
	);
}

export default Tarifs;
