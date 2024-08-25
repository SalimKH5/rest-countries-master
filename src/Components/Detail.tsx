
import data from "../assets/data.json"
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Detail = () => {

  const path = useParams();
  console.log({path});
  const Countries: ICountry[] | undefined = data;

  const country = Countries.find((country: ICountry) => path.name === country.name)
  const navigate = useNavigate();




  return (
    <div className="w-full h-full min-h-[100vh] flex items-center flex-col dark:text-white   ">
      <div className=" w-full h-full flex items-center flex-col max-w-xs sm:max-w-xl lg:max-w-5xl xl:max-w-6xl">
      <div className="w-full py-6">
              <button onClick={()=>{
                 navigate("/");
              }} className="px-4 py-2 flex items-center gap-3 border rounded-lg  hover:text-[#f3f3f3e4] hover:bg-[#202c37]  hover:dark:text-[#202c37] hover:dark:bg-white"><FaArrowLeft/> <span className="font-bold">Back</span></button>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row gap-10 justify-between  ">
        <div className="flex-[0.5] flex items-center">
          <img src={country?.flag} alt="" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="flex-[0.5] gap-4 flex flex-col py-2">
          <h1 className="text-3xl font-bold">{country?.name}</h1>
          <div className="w-full h-full flex flex-col sm:flex-row gap-3 justify-between">
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 text-sm"><span>Native Name:</span><span>{country?.nativeName}</span></p>
              <p className="flex items-center gap-2 text-sm"><span>Population:</span><span>{country?.population}</span></p>
              <p className="flex items-center gap-2 text-sm"><span>Region:</span><span>{country?.region}</span></p>
              <p className="flex items-center gap-2 text-sm"><span>Sub Region:</span><span>{country?.subregion}</span></p>
              <p className="flex items-center gap-2 text-sm"><span>Capital:</span><span>{country?.capital}</span></p>
              <div className="flex  gap-2 text-sm">
                <span>Border Countries</span>
                <div className="w-full h-full max-w-sm gap-3 flex flex-wrap ">
                  {
                    country?.borders?.map((value: string|undefined, index: number)=>(

                     <div key={index} className="p-2 backdrop-blur-sm bg-black/30 dark:bg-white/30 rounded-lg">
                           {value}
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 text-sm"><span>Top Level Domain:</span><span>{country?.topLevelDomain}</span></p>
              <p className="flex items-center gap-2 text-sm">
                <span>Currencies:</span>
                <span>{country?.currencies?.[0]?.name || ""}</span>
              </p>
              <p className="flex items-center gap-2"><span>Native Name:</span><span>{country?.nativeName}</span></p>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default Detail