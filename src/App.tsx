import Sidebar from './Components/Sidebar';

// Path to your background image
const backgroundImageUrl = 'https://media.istockphoto.com/id/1464462569/photo/happy-family-resting-under-air-conditioner-on-beige-wall-at-home.jpg?s=612x612&w=0&k=20&c=DDjRPWVmxJrJpahEbROcSAd08-hYBQ29ppl01vTKM5g=';

//     // Main content
const App = () => {
  return (
    <div
      className="flex h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <Sidebar />
      <main className="flex-1 p-4 bg-opacity-70 bg-white">
      <div className="flex flex-col sm:flex-row gap-4">
  <div className="flex-1 p-4 bg-white rounded-lg shadow-lg">  
    <h1 className="text-6xl font-bold">Velcomen to CoolBreezet</h1>
    <p className="mt-3 text-lg ml-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quas a. Autem minima unde suscipit qui eveniet mollitia nam illo saepe excepturi ducimus culpa temporibus at, vero corrupti quaerat sapiente.</p>
  </div>
  <div className="flex-1 p-2 bg-white rounded-lg shadow-lg"> 
    <h1 className="text-6xl font-bold">Specs:</h1> 
    <p className="mt-3 text-lg ml-3">
    CoolBreezet er tænkt som et airconditonanlæg. Med denne model får du en god driftsøkonomi når du skal køle dit hus ned de varme sommerdage. Udover at være effektiv til køling, hjælper CoolBreezet også med at varme om foråret og efteråret, med en minimums udendørstemperatur ned til -10 °C. CoolBreezet har en maks. ydelse ved køledrift på 2,9kW som gør den kan køle op til 58m2, i en velisoleret bolig.
    </p>
  </div>
</div>
      </main>
    </div>
  );
};

export default App;