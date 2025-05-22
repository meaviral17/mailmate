const Benefits = () => {
  return (
    <div className="benefit-cover min-h-[50vh] relative flex items-center justify-center">
      <div className="w-[70%] md:h-[350px] bg-[#F7F5FF] border-[2px] rounded border-purple-500 p-4 overflow-hidden">
        <h3 className="font-clashDisplay uppercase text-2xl md:text-4xl lg:text-6xl text-center w-full mb-4 leading-tight">
          All the tools you need to{" "}
          <span className="font-style">grow your audience.</span> 
          <br /><br />all in one powerful,
          easy-to-use platform.
        </h3>
        <br />
        <p className="text-lg md:text-xl lg:text-2xl text-center leading-snug">
                🔗 Seamlessly integrate with your existing website. 
          <br />⚡No clunky plug-ins. No coding headaches.
        </p>
      </div>
    </div>
  );
};

export default Benefits;