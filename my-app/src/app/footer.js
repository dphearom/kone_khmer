const Navigation = () => { 
    return ( 
      <nav className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"> 
        <a href="/" className="box-border relative shrink-0 my-auto mr-auto h-auto text-center"> Home </a> 
        <a href="/about" className="box-border relative shrink-0 my-auto mr-auto h-auto text-center"> About </a> 
        <a href="/resources" className="box-border relative shrink-0 my-auto mr-auto h-auto text-center"> Resources </a> 
      </nav> 
    ); 
  }; 
    
  const SocialFollow = () => { 
    return ( 
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"> 
        <p className="box-border relative shrink-0 my-auto h-auto text-center"> Follow Us on&nbsp; 
        </p> 
      </div> 
    ); 
  }; 
    
  const Header = () => { 
    return ( 
      <header className="box-border flex relative flex-col shrink-0 mt-5 border-t-4 border-t-[#FF204E]"> 
        <div className=" pt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-5 max-md:flex-col max-md:gap-0 text-white"> 
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full"> 
            <div className="box-border flex relative flex-col shrink-0"> 
              <div className="flex gap-5 max-md:flex-col max-md:gap-0"> 
                <figure className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"> 
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a" alt="KoneKhmer" className="box-border object-cover overflow-hidden shrink-0 my-auto ml-1.5 w-full aspect-[1.42] min-h-[20px] min-w-[20px]" /> 
                </figure> 
                <figcaption className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"> 
                  <div className="box-border relative shrink-0 my-auto h-auto text-2xl"> KoneKhmer </div> 
                </figcaption> 
              </div> 
            </div> 
          </div> 
          <Navigation /> 
          <SocialFollow /> 
        </div> 
      </header> 
    ); 
  }; 
    
  function MyComponent() { 
    return ( 
      <main> 
        <Header /> 
      </main> 
    ); 
  } 
    
  export default MyComponent;