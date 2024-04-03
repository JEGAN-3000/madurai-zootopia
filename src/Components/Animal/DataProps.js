const DataProps = (props) => {
  return (
    <div className="propsDiv" >
      <div className="py-2 md:p-10 md:mx-20 w-full"  data-aos="flip-up" data-aos-duration="3000">
        <div className="relative">
          <img
            src={props.image}
            className="card-img w-full md:w-4/6 object-contain rounded hover:blur-sm"
            alt=""
          />
          <div className="md:w-2/3 card-body opacity-0 hover:opacity-100 duration-700 absolute left-0 right-0 bottom-0 text-white   top-0 bg-[#02894B] cursor-pointer">
            <h2 className="border-b-2 sriracha text-2xl card-title md:text-4xl mb-[-80px] md:p-10 text-center">
              {props.name}
            </h2>
            <h5 className="delius text-1xl card-info w-[400px] overflow-hidden mx-auto  md:w-[1000px] md:text-5xl text-justify md:mx-auto">
              {props.info}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProps;
