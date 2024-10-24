import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <div className="hidden md:block">
        <h1 className="font-extrabold text-center mt-11 text-2xl">Contact Me</h1>

        <div className="ml-24 mr-24 mt-2 ">
          <p>
            Have a project in mind or want to learn more about my work? Feel free to reach out to me through the following contact details:
          </p>
        </div>

        <div className="text-xl ">
          <p className="ml-20 mt-11">
            <b>Email: </b>
            <a href="https://mail.google.com/mail/u/0/#search/bakarabumuhammad78%40gmail.com?compose=new" id="my-link" className="hover:text-blue-400 hover:underline  decoration-red-500">
              bakarabumuhammad78@gmail.com
            </a>
          </p>
          <p className="ml-20">
            <b>Phone: </b> +92 3282513267
          </p>
        </div>
        <div className="links mt-16 mb-3">
        <div className="flex justify-center items-center space-x-6 mt-8">
  <a href="https://www.facebook.com/share/Ywx3boEJx8oAi7u2/">
    <Image src="/fb.jpg" alt="Facebook logo" height={30} width={30} className="rounded-xl" />
  </a>
  <a href="https://www.instagram.com/baka.r7002/profilecard/?igsh=ZTN0M3RuNnUycG8w">
    <Image src="/insta.jpg" alt="Instagram logo" height={30} width={30} className="rounded-xl" />
  </a>
  <a href="https://www.linkedin.com/in/abu-bakar-0404022b4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
    <Image src="/linkdn.png" alt="LinkedIn logo" height={30} width={30} className="rounded-xl" />
  </a>
</div>

        </div>
      </div>
{/* for mobile*/ }
<div className="lg:hidden">
        <h1 className="font-extrabold text-center mt-8 mb-7 -ml-36 text-2xl">Contact Me</h1>

        <div className="ml-16 mr-24 mt-2 text-xl ">
          <p>
            Have a project in mind or want to learn more about my work? Feel free to reach out to me through the following contact details:
          </p>
        </div>

        <div className="text-xl -ml-5">
          <p className="ml-20 mt-11">
            <b>Email: </b>
            <a href="https://mail.google.com/mail/u/0/#search/bakarabumuhammad78%40gmail.com?compose=new" id="my-link" className="hover:text-blue-400 hover:underline  decoration-red-500">
              bakarabumuhammad78@gmail.com
            </a>
          </p>
          <p className="ml-20">
            <b>Phone: </b> +92 3282513267
          </p>
        </div>


        

        <div className="links mt-16 mb-3">
        <div className="flex justify-center items-center space-x-6 mt-8">
  <a href="https://www.facebook.com/share/Ywx3boEJx8oAi7u2/">
    <Image src="/fb.jpg" alt="Facebook logo" height={30} width={30} className="rounded-xl" />
  </a>
  <a href="https://www.instagram.com/baka.r7002/profilecard/?igsh=ZTN0M3RuNnUycG8w">
    <Image src="/insta.jpg" alt="Instagram logo" height={30} width={30} className="rounded-xl" />
  </a>
  <a href="https://www.linkedin.com/in/abu-bakar-0404022b4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
    <Image src="/linkdn.png" alt="LinkedIn logo" height={30} width={30} className="rounded-xl" />
  </a>
</div>

        </div>
      </div>


    </>
  );
};

export default ContactPage;
