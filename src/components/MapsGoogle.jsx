"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const destination = {
	lat: 44.213891100957106,
	lng: -1.2919671088411526,
};

const MapsGoogle = () => {
	const [origin, setOrigin] = useState(null);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setOrigin({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				(error) => {
					console.error("Error getting location: ", error);
					alert("Merci d'autoriser le service de localisation");
				},
			);
		} else {
			alert("La géolocalisation n'est pas supportée par votre navigateur");
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
						mapContainerClassName=" flex items-center lg:w-full min-h-[300px] lg:min-h-[500px] rounded-sm"
						center={destination}
						zoom={13}
					>
						<Marker position={destination} />
					</GoogleMap>
				</div>
			</Link>
		</LoadScript>
	);
};

export default MapsGoogle;
