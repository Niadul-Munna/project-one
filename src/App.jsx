import React from "react";
import "./index.css";

function App() {
  return (
    <>
      <div className="ovderflow-hidden">
        <div className="p-4 bg-gradient-to-l from-pink-200 to-yellow-200 flex flex-col justify-center items-center text-black">
          <h1 className="text-2xl text-center font-medium">
            প্রতিদিন{" "}
            <span className="font-semibold underline text-rose-600">
              মাত্র ১৯ মিনিট
            </span>{" "}
            সময় দিয়ে <span className="font-semibold underline">১৯ দিনের</span>{" "}
            মধ্যেই সন্তানের হাতের লেখা সুন্দর করে তুলুন।
          </h1>
          <p className="text-center font-medium mt-2">
            ক্লাস ১ থেকে ইউনিভার্সিটির স্টুডেন্ট ও আমাদের এই প্রোগ্রামের যুক্ত
            আছে।
          </p>
          <div className="border  transition duration-700 animate-bounce  w-full lg:w-1/2  font-semibold text-emerald-600 border-black rounded-tl-2xl rounded-br-2xl text-center p-2 mt-4">
            বিস্তারিত জানতে ভিডিওটি দেখুন 👇
          </div>
        </div>
        <div className="flex flex-col justify-center w-screen  items-center">
          <iframe
            className="w-4/5 lg:w-1/2 aspect-video"
            src="https://www.youtube.com/embed/AygeiVSM6fQ?si=V_zOZb5EecLlDU7L"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <a href="https://forms.gle/xcLiNy16LLc6dp9GA" target="_blank">
            <button className="w-4/5 lg:w-full mb-20 shadow-2xl bg-rose-500 text-rose-100 rounded-tr-lg rounded-bl-lg px-10 cursor-pointer hover:bg-rose-600 active:translate-y-[2px] transition-all duration-300  py-1 font-semibold  hover:text-[18px] mt-2">
              অর্ডার করতে Click করুন
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
