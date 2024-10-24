import Image from "next/image";

export default function home(){
return(
    <>
<div className="p-10">
    <h1 className="text-2xl font-bold text-center hidden md:block">Welcome to NXT GEN CREATION</h1>
    <p className="ml-20 mr-20 mt-3 hidden md:block">
    At NextGen Creations, I showcase my journey through the world of web development, highlighting innovative projects crafted using the latest technologies like HTML, CSS, Java, and TypeScript. My portfolio reflects my dedication to creating efficient, responsive, and visually captivating websites and applications. Whether you're here to explore my past projects or to learn more about my development approach, I invite you to dive into the future of web design with me.
    </p>
    <Image className="rounded-full ml-96 mt-5 hidden md:block " src="/homeimage.jpeg" alt="homeimage" height={300} width={300} />

</div>

<div className="p-5">
    <h1 className="text-2xl font-bold text-center lg:hidden -mt-10">Welcome to NXT GEN CREATION</h1>
    <p className="ml-2 mr-2 mt-3 lg:hidden">
    At NextGen Creations, I showcase my journey through the world of web development, highlighting innovative projects crafted using the latest technologies like HTML, CSS, Java, and TypeScript. My portfolio reflects my dedication to creating efficient, responsive, and visually captivating websites and applications. Whether you're here to explore my past projects or to learn more about my development approach, I invite you to dive into the future of web design with me.
    </p>
    <Image className="rounded-full  mt-5 lg:hidden ml-3" src="/homeimage.jpeg" alt="homeimage" height={300} width={300} />

</div>
</>


)
}