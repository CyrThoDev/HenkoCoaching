import {
	PiNumberCircleOneLight,
	PiNumberCircleTwoLight,
	PiNumberCircleThreeLight,
} from "react-icons/pi";

const plans = [
	{
		icone: (
			<PiNumberCircleOneLight className=" text-3xl md:text-4xl lg:text-3xl  text-darkorange" />
		),
		name: "1 séance / semaine",
		options: [
			{ type: "Sans engagement", price: "200€/mois", perSession: "50€/séance" },
			{
				type: "Avec engagement 4 mois",
				price: "140€/mois",
				perSession: "35€/séance",
			},
			{
				type: "Avec engagement 6 mois",
				price: "120€/mois",
				perSession: "30€/séance",
			},
		],
	},
	{
		icone: (
			<PiNumberCircleTwoLight className=" text-3xl md:text-4xl lg:text-3xl  text-darkorange" />
		),
		name: "2 séances / semaine",
		options: [
			{ type: "Sans engagement", price: "360€/mois", perSession: "45€/séance" },
			{
				type: "Avec engagement 4 mois",
				price: "240€/mois",
				perSession: "30€/séance",
			},
			{
				type: "Avec engagement 6 mois",
				price: "200€/mois",
				perSession: "25€/séance",
			},
		],
	},
	{
		icone: (
			<PiNumberCircleThreeLight className=" text-3xl md:text-4xl lg:text-3xl  text-darkorange" />
		),
		name: "3 séances / semaine",
		options: [
			{ type: "Sans engagement", price: "480€/mois", perSession: "40€/séance" },
			{
				type: "Avec engagement 4 mois",
				price: "300€/mois",
				perSession: "25€/séance",
			},
			{
				type: "Avec engagement 6 mois",
				price: "240€/mois",
				perSession: "20€/séance",
			},
		],
	},
];

function Formules() {
	return (
		<div className="flex flex-col gap-10 relative z-10 py-10">
			<h2 className="relative flex flex-col text-lg md:text-2xl font-tanker px-10 lg:px-20">
				<span className="text-3xl z-10">LES FORMULES</span>
				<div className="w-[8rem] h-3 bg-darkorange -mt-3 -z-1" />
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-darkorange py-10  px-10 lg:px-20">
				{plans.map((plan) => (
					<div
						key={plan.name}
						className="border  rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 bg-white"
					>
						<div className="flex flex-col gap-2 text-darkorange font-tanker items-center justify-center mb-8">
							<p>{plan.icone}</p>
							<h3>{plan.name}</h3>
						</div>

						<ul className="space-y-4">
							{plan.options.map((option) => (
								<li
									key={`${option.type}-${option.perSession}`}
									className={`flex flex-col md:flex-row gap-4 justify-between items-center p-3 rounded-lg  ${
										option.price === "140€/mois" || option.price === "240€/mois"
											? "shadow-xl "
											: ""
									}`}
								>
									<div>
										<p
											className={` text-gray-800 ${
												option.price === "140€/mois" ||
												option.price === "240€/mois"
													? "font-semibold"
													: ""
											}`}
										>
											{option.type}
										</p>
										<p className="text-sm text-gray-500">{option.perSession}</p>
									</div>
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

export default Formules;
