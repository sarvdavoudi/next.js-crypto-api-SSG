import React from "react";
import numeral from "numeral";   // add this import for numeral library


const CoinList = ({ cryptoCurrenctys }) => {
  
  return (
    <div>
      <div class="mx-auto max-w-7xl">
        <h1 class="text-3xl font-bold mb-4">Online Cryptocurrency</h1>
        <table class="table-fixed w-full">
          <thead class="bg-gray-500">
            <tr>
              <th class="w-1/3 text-left px-4 py-2">Name</th>
              <th class="w-1/3 text-left px-4 py-2">symbol</th>
              <th class="w-1/3 text-left px-4 py-2">current_price</th>
              <th class="w-1/3 text-left px-4 py-2">total_volume</th>
              <th class="w-1/3 text-left px-4 py-2">price_change</th>
              <th class="w-1/3 text-left px-4 py-2">marketCap</th>
            </tr>
          </thead>
          <tbody>
            {cryptoCurrenctys.map((item) => (
              <tr key={item.id} class="hover:bg-gray-500">
                <td class="text-left px-4 py-2">
                  <div className="flex justify-normal">
                    {" "}
                    <div>
                      <img className="w-5 h-5 mr-4" src={item.image} alt="" />
                    </div>
                    <div>{item.name}</div>
                  </div>
                </td>
                <td class="text-left px-4 py-2">{item.symbol}</td>
                <td class="text-left px-4 py-2">{numeral(item.current_price).format("$0,0.00")}</td>
                <td class="text-left px-4 py-2">{numeral(item.total_volume).format("$0,0.00")}</td>

                {item.price_change_percentage_24 < 0 ? (
                  <td className="text-left px-4 py-2 text-red-500">{item.price_change_percentage_24h}%</td>
                ) : (
                  <td className="text-left px-4 py-2 text-green-500">{item.price_change_percentage_24h}%</td>
                )}
                <td class="text-left px-4 py-2">{numeral(item.market_cap).format("$0,0.00")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinList;
