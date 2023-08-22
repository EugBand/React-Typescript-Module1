import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "./components/Logo/Logo";
import {Button} from "../../common/Button";


export const Header = () => (
    <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
        <Logo />
        <Button buttonClass={'bg-blue-400 border py-2 px-4'}>Login</Button>
        <span className="font-bold">EPAM TypeScript/React/Redux 2022</span>
        <span>
        <Link to="/" className="mr-2">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
);