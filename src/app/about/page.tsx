import Image from "next/image";

export default function About(){
return(<>
<div className="p-10 hidden md:block" >
<h1 className="ml-72 mt-10 text-2xl font-bold ">About Me</h1>
<p className="ml-72 mr-10 mt-5">
Hi, I’m Abubakar, a web developer focused on front-end technologies. I create responsive websites and dynamic web applications using Java, TypeScript, HTML, and CSS. My work reflects my passion for coding and commitment to delivering functional, visually appealing solutions. I’m always learning and open to new challenges and collaborations!
</p>
<Image className="rounded-full -mt-44" src="/myselfe.jpeg" alt="picture" height={250} width={250} />
</div>

<div className="p-2 lg:hidden">
<h1 className=" -scroll-mt-2 text-2xl font-bold text-center ">About Me</h1>
<p className="ml-2 mr-2 mt-5">
Hi, I’m Abubakar, a web developer focused on front-end technologies. I create responsive websites and dynamic web applications using Java, TypeScript, HTML, and CSS. My work reflects my passion for coding and commitment to delivering functional, visually appealing solutions. I’m always learning and open to new challenges and collaborations!
</p>
<Image className="rounded-full mt-2 ml-14" src="/myselfe.jpeg" alt="picture" height={250} width={250} />
</div>
</>
)
}