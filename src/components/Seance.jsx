function Seance() {
	return (
		<div className="relative flex flex-col items-center gap-4">
			{/* Ligne verticale au milieu */}
			<div className="absolute inset-y-0 left-1/2 w-1 rounded-sm bg-darkorange" />

			{/* Contenu */}
			<div className="grid grid-cols-3 gap-10 items-center">
				<p>coucou</p>
				<p>image</p>
				<span />
			</div>
			<div className="grid grid-cols-3 gap-10 items-center">
				<span />
				<p>image</p>
				<p>coucou</p>
			</div>
			<div className="grid grid-cols-3 gap-10 items-center">
				<p>coucou</p>
				<p>image</p>
				<span />
			</div>
		</div>
	);
}

export default Seance;
