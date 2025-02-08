"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const destination = {
	lat: 44.213891100957106,
	lng: -1.2919671088411526,
};

const mapStyles = [
	{
		featureType: "all",
		elementType: "all",
		stylers: [{ saturation: -100 }, { lightness: -10 }],
	},
];

const MapsGoogle = () => {
	const [origin, setOrigin] = useState(null);

	useEffect(() => {
		// Vérifier si la localisation est déjà enregistrée
		const savedLocation = sessionStorage.getItem("userLocation");

		if (savedLocation) {
			setOrigin(JSON.parse(savedLocation)); // Charger depuis sessionStorage
		} else {
			navigator.permissions.query({ name: "geolocation" }).then((result) => {
				if (result.state === "granted" || result.state === "prompt") {
					navigator.geolocation.getCurrentPosition(
						(position) => {
							const location = {
								lat: position.coords.latitude,
								lng: position.coords.longitude,
							};
							setOrigin(location);
							sessionStorage.setItem("userLocation", JSON.stringify(location)); // Sauvegarder pour éviter la demande répétée
						},
						(error) => {
							console.error("Error getting location: ", error);
						},
					);
				} else {
					console.warn("L'utilisateur a refusé la géolocalisation.");
				}
			});
		}
	}, []);

	// Construire l'URL Google Maps
	const mapsUrl = origin
		? `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&travelmode=driving`
		: `https://www.google.com/maps/dir/?api=1&destination=${destination.lat},${destination.lng}&travelmode=driving`;

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
			<Link href={mapsUrl} passHref target="_blank" rel="noopener noreferrer">
				<div style={{ cursor: "pointer" }}>
					<GoogleMap
						mapContainerClassName="flex items-center lg:w-full min-h-[300px] lg:min-h-[500px] rounded-sm"
						center={destination}
						zoom={13}
						options={{
							styles: mapStyles,
						}}
					>
						<Marker position={destination} />
					</GoogleMap>
				</div>
			</Link>
		</LoadScript>
	);
};

export default MapsGoogle;
