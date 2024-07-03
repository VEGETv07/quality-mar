
export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="flex justify-between px-40  pb-10">
        <div className="w-1/3">
          <img src="" alt="logo" />
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-1/3">
          <ul>
            <li>NOS PRODUITS</li>
            <li>NOTRE STATION</li>
            <li>NOS MARQUES</li>
            <li>NOS MARCHES</li>
            <li>QUALITE</li>
          </ul>
        </div>
        <div className="w-1/3">
          <ul>
            <li>QUI SOMME NOUS</li>
            <li>CONTACTEZ-NOUS</li>
          </ul>
        </div>
      </div>

      <div className="text-center font-light border-t border-gray-500 p-2 ">
        <p>Tous les droits sont reserves 2024</p>
      </div>
    </footer>
  );
}
