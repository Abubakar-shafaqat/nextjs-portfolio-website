// src/app/project/page.tsx
import Link from 'next/link';

const Project = () => {
  return (
    <div className="p-8">
      <div className="text-center font-bold text-3xl mb-6">
        <h1>My Projects</h1>
      </div>
      
      {/* Project containers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Project 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Number game</h2>
          <p className="text-gray-600 mb-4">
          A Number Guessing Game involves guessing a randomly chosen number with hints if it's too high or too low.

          </p>
          <a
  href="https://numdergame.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:underline"
>
  View Project
</a>

        </div>

        {/*  Project 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Student managment system</h2>
          <p className="text-gray-600 mb-4">
           
A Student Management System helps manage student data, academic records, and administrative tasks for educational institutions.
          </p>
          <a
            href="https://student-eight-omega.vercel.app/"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>

        {/* Example Project 3 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Currency Converter</h2>
          <p className="text-gray-600 mb-4">
          A Currency Converter converts values between different currencies using up-to-date exchange rates.
          </p>
          <a
            href="https://converter--five.vercel.app/"
            className="text-blue-500 hover:underline"
          > View Project
          </a>
        </div>
         {/*project4*/} 
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>Word Counter</h2>
          <p className="text-gray-600 mb-4">
          A **Word Counter** is a tool that counts the words, characters, and sentences in a text, assisting users in managing their writing efficiently.
          </p>
          <a href="https://converter-blue-eta.vercel.app/" className='text-blue-500 hover:underline'> View Project </a>
        </div>
            {/*project5*/}
            <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>Quiz</h2>
          <p className="text-gray-600 mb-4">
          A **Quiz** is a short assessment used to evaluate knowledge or skills on a specific topic through a series of questions.
          </p>
          <a href="https://quize--seven.vercel.app/" className='text-blue-500 hover:underline'> View Project </a>
        </div>
          {/*project6*/}
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>My Bank</h2>
          <p className="text-gray-600 mb-4">
          **My Bank** is a finance app that helps users track accounts, transactions, and budgets for better money management.
          </p>
          <a href="https://mybank-five.vercel.app/" className='text-blue-500 hover:underline'> View Project </a>
        </div>
      {/*project7*/}
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>ATM</h2>
          <p className="text-gray-600 mb-4">
          An **ATM (Automated Teller Machine)** allows users to perform banking transactions like withdrawing cash and checking account balances without a teller.
          </p>
          <a href="https://atm-v.vercel.app/" className='text-blue-500 hover:underline'> View Project </a>
        </div>
          {/*project8*/}
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>To-do list</h2>
          <p className="text-gray-600 mb-4">
          A **To-Do List** is a tool for organizing tasks and activities, helping users prioritize and track their progress on what needs to be accomplished.
          </p>
          <a href="https://todolist-two-ecru.vercel.app/" className='text-blue-500 hover:underline'> View Project </a>
        </div>

          {/*project9*/}
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>count down Timer</h2>
          <p className="text-gray-600 mb-4">
          A **Countdown Timer** is a tool that counts down from a specified time to zero, often used to track time remaining for an event or deadline.
          </p>
          <a href="https://countdowntimer-phi.vercel.app/" className='text-blue-500 hover:underline'> View Project </a>
        </div>
             

             {/*project10*/}
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>Calculator</h2>
          <p className="text-gray-600 mb-4">
          A **Calculator** is a device or software that performs mathematical operations, such as addition, subtraction, multiplication, and division, to solve numerical problems.
          </p>
          <a href="https://calculator--rho.vercel.app/" className='text-blue-500 hover:underline'> View Project </a>
        </div>
               

               {/*project11*/}
        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>Resume builder</h2>
          <p className="text-gray-600 mb-4">
          A **Resume Builder** is a tool that helps users create professional resumes using templates and prompts to highlight their skills and experience.
          </p>
          <a href="https://copy-link-pdf-resume.vercel.app/" className='text-blue-500 hover:underline'> View Project </a>
        </div>

        <div className='bg-white shadow-md rounded-lg p-6'>
          <h2 className='text-xl font-semibold mb-4'>My Resume</h2>
          <p className="text-gray-600 mb-4">**My Resume** is a document that summarizes my skills, experience, education, and accomplishments, showcasing my qualifications for potential job opportunities.</p>
          <a href="https://cv-five-zeta-78.vercel.app/" className='text-blue-500 hover:underline'> View Project </a>
        </div>
      </div>
    </div>
  );
};

export default Project