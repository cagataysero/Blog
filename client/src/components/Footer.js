import React from "react";
const Footer = ()=> {
    return (
        <footer className="flex justify-center  text-center ">
            <div className="flex justify-between text-center navbarWidth bg-firstBackground  p-6 centerText">
                <div className="w-16 ml-4 bg-firstBackground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </div>
                <div className=""> Made with React.JS & Created by Çağatay</div>
            </div>

        </footer>
    )
}


export default Footer;