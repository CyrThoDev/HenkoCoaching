import { useRef } from "react";

import PlanningHenkoMobile from "@images/PlanningHenkoMobile.webp";
import ButtonOrange from "@/components/ButtonOrange";
import ButtonBlack from "./ButtonBlack";
import Image from "next/image";
import salle from "../../public/images/salle3.jpg";
import Heure from "@images/Heure.webp";

function Planning({ planning, page }) {
  const dialogRef = useRef(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  if (!planning) return null;

  const {
    details = [],
    imageDesktop,
    imageMobile,
    imageCoaching,
    imageLibreAcces,
    ctaButtons = [],
  } = planning;

  // Fallback : si jamais l'image spécifique n'est pas fournie, on retombe sur l'image desktop
  const imagePage =
    (page === "coaching" ? imageCoaching : imageLibreAcces) ?? imageDesktop;

  const filteredDetails =
    page === "coaching"
      ? details.filter((item) => item.type !== "libre")
      : details.filter((item) => item.type !== "coaching");

  return (
    <div>
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-4 ">
          {/* ROW DESKTOP : 2 colonnes même hauteur (hauteur dictée par l'image de gauche) */}
          <div className="lg:flex lg:flex-row lg:gap-20 lg:pt-10 lg:items-stretch">
            {/* GAUCHE : planning desktop (référence, jamais crop) */}
            <div className="hidden md:flex md:flex-col lg:w-1/2">
              {imageDesktop?.asset?.url && (
                <Image
                  src={imageDesktop.asset.url}
                  alt={`Illustration page ${page}`}
                  width={600}
                  height={400}
                  onClick={openDialog}
                  className="rounded-md  z-10 w-full h-auto object-contain"
                />
              )}
            </div>

            {/* PLANNING MOBILE */}
            {imageMobile?.asset?.url && (
              <Image
                src={imageMobile.asset.url}
                alt="Planning Henko"
                width={500}
                height={500}
                onClick={openDialog}
                className="md:hidden"
              />
            )}

            {/* DIALOG */}
            <dialog ref={dialogRef} className="bg-white rounded-lg p-6">
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={closeDialog}
              >
                &times;
              </button>

              <div className="flex justify-center items-center">
                {imageDesktop?.asset?.url && (
                  <Image
                    src={imageDesktop.asset.url}
                    alt={`Illustration page ${page}`}
                    width={600}
                    height={400}
                    className="hidden md:block rounded-md shadow-md z-10"
                  />
                )}

                {imageMobile?.asset?.url && (
                  <Image
                    src={imageMobile.asset.url}
                    alt="Planning Henko"
                    width={500}
                    height={500}
                    className="block md:hidden rounded-md shadow-md"
                  />
                )}
              </div>
            </dialog>

            {/* DROITE : s’adapte à la hauteur de la colonne gauche (pas de crop) */}
            <div className="hidden lg:flex lg:w-1/2">
              <div className="relative w-full rounded-sm shadow-perso shadow-darkorange overflow-hidden flex">
                {imagePage?.asset?.url && (
                  <Image
                    src={imagePage.asset.url}
                    alt="Salle de sport"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col gap-2 ">
            {filteredDetails.map((detail, index) => (
              <div key={index} className="flex flex-col lg:flex-row">
                <p className="font-semibold">{detail.title}</p>
                {detail.description && (
                  <p className="pl-2">{detail.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTONS */}
        {ctaButtons?.length > 0 && (
          <div className="flex flex-col lg:flex-row lg:px-40 gap-8 lg:gap-20">
            {ctaButtons
              .filter((btn) => btn.page === "both" || btn.page === page)
              .map((btn, index) => {
                const ButtonComponent =
                  btn.style === "black" ? ButtonBlack : ButtonOrange;

                return (
                  <div key={index} className="flex flex-col gap-2 lg:w-1/2">
                    <ButtonComponent
                      title={btn.title}
                      link={btn.url}
                      target="_blank"
                      width="w-[18rem]"
                    />
                    {btn.note && <p className="italic">{btn.note}</p>}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Planning;

