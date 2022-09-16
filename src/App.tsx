import "./styles/main.css";
import logoImg from "./assets/logo-nlwesports.svg";
import { FiZoomIn } from "react-icons/fi";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo do NLW eSports" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-gradientDuo text-transparent bg-clip-text">duo</span> está aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a className="relative rounded-lg overflow-hidden" href="">
          <img className="" src="/game1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0  left-0 right-0">
            <strong className="text-white font-bold block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img className="" src="/game2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0  left-0 right-0">
            <strong className="text-white font-bold block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img className="" src="/game3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0  left-0 right-0">
            <strong className="text-white font-bold block">Counter Strike</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img className="" src="/game4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0  left-0 right-0">
            <strong className="text-white font-bold block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img className="" src="/game5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0  left-0 right-0">
            <strong className="text-white font-bold block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
        <a className="relative rounded-lg overflow-hidden" href="">
          <img className="" src="/game6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gradientGame absolute bottom-0  left-0 right-0">
            <strong className="text-white font-bold block">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>
        </a>
      </div>
      <div className="self-stretch mt-8 pt-1 bg-gradientDuo rounded-lg rounded-b-lg overflow-hidden">
        <div className="bg-[#2A2634] justify-between flex flex-row py-6 px-8 ">
          <div>
            <h2 className="font-black text-2xl text-white">Não encontrou seu duo?</h2>
            <p className="text-zinc-400">Publique um anúncio para encontrar novos players!</p>
          </div>
          <button className="text-white flex items-center justify-center px-4 py-3 bg-violet-500 hover:bg-violet-600 rounded-md gap-3">
            <FiZoomIn size={24} />
            <span>Publicar anúncio</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { App };
