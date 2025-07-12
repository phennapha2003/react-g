import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import LanguageIcon from "@mui/icons-material/Language";
import WifiIcon from "@mui/icons-material/Wifi";
import SecurityIcon from "@mui/icons-material/Security";

const Oursolution = () => {
  return (
     <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-left mb-12">
            Our Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* G-Parking Card */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-between items-center">
                {/* Image Placeholder */}
                <div className="flex gap-2">
                  <div className="w-12 h-20 bg-gray-200 rounded"></div>
                  <div className="w-12 h-20 bg-gray-200 rounded"></div>
                  <div className="w-12 h-20 bg-gray-200 rounded"></div>
                  <div className="w-12 h-20 bg-gray-200 rounded"></div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold">G-Parking</h3>
              <p className="mt-2 text-sm text-gray-600">
                ກິດຈະກໍາຮູບແບບການຈອດລົດອັດຕະໂນມັດ ດ້ວຍແອບພິເຄຊັນສະເພາະ
                ສໍາລັບການຈັດການລົດຢ່າງມີປະສິດທິພາບ
              </p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white text-sm">
                Read More
              </button>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  Icon: <MobileScreenShareIcon className="text-white" />,
                  title: "Mobile Development",
                  desc: "Building seamless apps for iOS and Android.",
                  bg: "bg-blue-500",
                },
                {
                  Icon: <LanguageIcon className="text-white" />,
                  title: "Website Development",
                  desc: "Creating responsive and engaging sites.",
                  bg: "bg-green-500",
                },
                {
                  Icon: <WifiIcon className="text-white" />,
                  title: "Network Solutions",
                  desc: "Implementing robust and secure networks.",
                  bg: "bg-purple-500",
                },
                {
                  Icon: <SecurityIcon className="text-white" />,
                  title: "Cybersecurity Service",
                  desc: "Protecting your business with advanced security.",
                  bg: "bg-red-500",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 shadow rounded-lg">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full mb-3 ${item.bg}`}
                  >
                    {item.Icon}
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm mt-1 text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
export default Oursolution