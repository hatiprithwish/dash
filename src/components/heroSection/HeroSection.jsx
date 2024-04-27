import Button from "../shared/Button";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row pt-16 w-full">
      <div className="flex flex-1 flex-col items-center md:gap-8 md:w-1/2">
        <div className="flex flex-col justify-center gap-1 mt-8 md:mt-0 md:min-h-[200px]">
          <h1 className="head1 md:text-start md:mt-8 lg:mt-16">
            Crazy Deals
            <br />
            <span className="text-my-orange">40-80% Off</span>
          </h1>
          <p className="font-light text-xs text-center md:text-start sm:text-base text-my-gray mt-3 md:max-w-[80%]">
            A world of limitless possibilities awaits you - Flat ₹300 off + Free
            Shipping on Your First Order
          </p>
        </div>
        <div className="flex justify-center md:justify-start w-full mt-6 md:mt-0 lg:ml-2">
          <Button
            label="Shop now"
            bgColor="bg-button"
            shadowColor="shadow-dark-orange"
            handleBtnClick={() => navigate("/store")}
          />
        </div>
      </div>

      {/* 👉🏻 Right side */}
      <div className="md:w-1/2">
        <img
          src="/hero.svg"
          className="w-full h-auto scale-x-[-1] max-h-[450px] md:max-h-[550px] -z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
