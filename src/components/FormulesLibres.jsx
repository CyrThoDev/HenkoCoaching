const plans = [
	{
		name: "À l’année",
		options: [
			{ type: "Sans engagement", price: "49,99€/mois" },
			{ type: "Avec engagement 3 mois", price: "45€/mois" },
			{ type: "Avec engagement 6 mois", price: "42,50€/mois" },
			{ type: "Avec engagement 12 mois", price: "39,99€/mois" },
		],
	},
	{
		name: "Vacances",
		options: [
			{ type: "1 semaine", price: "70€" },
			{ type: "2 semaines", price: "110€" },
			{ type: "3 semaines", price: "130€" },
		],
	},
];

function FormulesLibres() {
	return (
		<div className="flex flex-col gap-10 px-10 lg:px-40  ">
			<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker">
				<span className="text-3xl z-10">LES FORMULES</span>
				<div className="w-[8rem] h-3 bg-darkorange -mt-3 -z-1" />
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{plans.map((plan) => (
					<div
						key={plan.name}
						className=" rounded-lg shadow-md p-6 bg-white  transition-shadow"
					>
						<h3 className="text-3xl font-semibold text-center mb-4 font-pinyon">
							{plan.name}
						</h3>
						<ul className="space-y-4">
							{plan.options.map((option, index) => (
								<li
									key={index}
									className={`flex justify-between items-center p-3 rounded-lg hover:shadow-lg ${
										option.price === "45€/mois"
											? "border border-darkorange"
											: ""
									}`}
								>
									<p className="font-medium text-gray-800">{option.type}</p>
									<p className="text-lg font-bold text-darkorange">
										{option.price}
									</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default FormulesLibres;
