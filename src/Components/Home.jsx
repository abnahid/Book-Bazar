import Banner from "../assets/pngegg.png";
import Books from "./Main/Books";

const Home = () => {
  return (
    <div>
      <section className="hero bg-gray-900 bg-opacity-5 rounded-3xl min-h-screen my-12">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-6xl font-bold  leading-tight mb-10">
              Books to freshen up your bookshelf
            </h2>
            <button className="bg-custom-green text-white font-bold font-Worsens py-3 px-6 rounded hover:bg-white hover:text-custom-green">
              View The List
            </button>
          </div>
          <img src={Banner} className="size-1/4 rounded-xl" />
        </div>
      </section>
      <Books></Books>
    </div>
  );
};

export default Home;
