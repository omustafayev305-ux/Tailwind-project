import Navbar from "./Navbar";
import Tomato from "../assets/Tomato.png";
import Onion from "../assets/Onion.png";
import Ginger from "../assets/Ginger.png";

function Basket() {
  return (
    <>
      <Navbar />

      <main className="px-4 md:px-10 lg:px-20 py-10">
        <div className="max-w-6xl mx-auto">
        
        
          <div className="flex items-end gap-5 border-b pb-6">
            <h1 className="text-5xl font-serif">
              Basket
            </h1>

            <p className="text-gray-600 mb-1">
              3 items
            </p>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mt-8">

         
            <div className="flex flex-col gap-6">

        
              <div className="flex bg-[#faf9f4] border rounded-2xl overflow-hidden">
                <div className="w-32 bg-gray-100 flex items-center justify-center">
                  <img
                    src={Tomato}
                    alt="Tomato"
                    className="w-24 h-24 object-contain"
                  />
                </div>

                <div className="flex-1 p-5 flex justify-between">
                  <div>
                    <h2 className="font-bold text-lg">
                      Heirloom tomato
                    </h2>

                    <p className="text-green-700 font-semibold">
                      $5.99 / lb
                    </p>

                    <div className="mt-4 border rounded-full px-4 py-1 inline-block">
                      1 lb
                    </div>
                  </div>

                  <p className="font-bold text-lg">
                    $5.99
                  </p>
                </div>
              </div>

      
              <div className="flex bg-[#faf9f4] border rounded-2xl overflow-hidden">
                <div className="w-32 bg-gray-100 flex items-center justify-center">
                  <img
                    src={Ginger}
                    alt="Ginger"
                    className="w-24 h-24 object-contain"
                  />
                </div>

                <div className="flex-1 p-5 flex justify-between">
                  <div>
                    <h2 className="font-bold text-lg">
                      Organic ginger
                    </h2>

                    <p className="text-green-700 font-semibold">
                      $12.99 / lb
                    </p>

                    <div className="mt-4 border rounded-full px-4 py-1 inline-block">
                      0.5 lb
                    </div>
                  </div>

                  <p className="font-bold text-lg">
                    $6.50
                  </p>
                </div>
              </div>

                   <div className="flex bg-[#faf9f4] border rounded-2xl overflow-hidden">
                <div className="w-32 bg-gray-100 flex items-center justify-center">
                  <img
                    src={Onion}
                    alt="Onion"
                    className="w-24 h-24 object-contain"
                  />
                </div>

                <div className="flex-1 p-5 flex justify-between">
                  <div>
                    <h2 className="font-bold text-lg">
                      Sweet Onion
                    </h2>

                    <p className="text-green-700 font-semibold">
                      $2.99 / lb
                    </p>

                    <div className="mt-4 border rounded-full px-4 py-1 inline-block">
                      5 lb
                    </div>
                  </div>

                  <p className="font-bold text-lg">
                    $14.95
                  </p>
                </div>
              </div>

            </div>

         
            <div className="bg-[#faf9f4] border rounded-2xl p-6 h-fit">
              <h2 className="font-bold text-xl mb-6">
                Order summary
              </h2>

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>$27.44</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span>$3.99</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Tax</span>
                <span>$2.00</span>
              </div>

              <div className="flex justify-between font-bold mb-6">
                <span>Total</span>
                <span>$33.43</span>
              </div>

              <button className="w-full bg-green-700 text-white py-3 rounded-md font-semibold">
                Continue to payment →
              </button>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default Basket;