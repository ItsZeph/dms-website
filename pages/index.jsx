import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="/img/DMS.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          MusicMaker
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       DMS is a first-of-its-kind Discord Bot, designed for your ER:LC Departments. 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/oauth2/authorize?client_id=1338977160425246791&permissions=8&integration_type=0&scope=bot"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Invite DMS
              </a>
              </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Department Management Systems" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Add DMS to make the most advanced Department today!" }}/>
            <a href="https://discord.com/oauth2/authorize?client_id=1338977160425246791&permissions=8&integration_type=0&scope=bot" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite DMS
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Advanced Setup</p>
                  <p className="text-gray-500 line-clamp-4">With DMS' advanced Setup System, you can customize every aspect of DMS for your Department.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Staff Management</p>
                  <p className="text-gray-500 line-clamp-4">With our Staff Management module, you can issue infractions and promotions to your Department Staff, and keep track with our logging system.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-clock text-2xl text-amber-500`} /> Shifts</p>
                  <p className="text-gray-500 line-clamp-4">With our Shift Management module, you can keep track of your Department Staff's shifts and enforce quota.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Support</p>
                  <p className="text-gray-500 line-clamp-4">With our Support Server, we can help you with any aspect of DMS!</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://cdn.discordapp.com/attachments/1338974843374145556/1338989304231362630/DMS.png?ex=67ad1677&is=67abc4f7&hm=8b491c1bee2c101254573c6b781892a76f46b598dd52adf8a2490a4884a861cf&" />
                  <p className="text-3xl text-white font-semibold">Add DMS Today</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">Are you ready to take your Department to the next level? Add DMS Today!</p>
                </div>
                <img src="https://cdn.discordapp.com/attachments/1338974843374145556/1338989304231362630/DMS.png?ex=67ad1677&is=67abc4f7&hm=8b491c1bee2c101254573c6b781892a76f46b598dd52adf8a2490a4884a861cf&" />
              </>
      
        </div>

      </>
  )
}
