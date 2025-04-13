'use client'
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { NavbarItemCustom } from "./NavbarItemCustom";
import { signOut, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function App() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Interview", href: "/interview" },
    { name: "History", href: "/history" },
  ];

  return (
    <Navbar
     onMenuOpenChange={setIsMenuOpen}
     maxWidth="2xl"
     height="64px"
   className="bg-black text-cyan-300 shadow-lg  my-4 mx-auto px-4 sm:px-8"
   >
     <NavbarBrand>
       <span className="font-bold text-xl sm:text-2xl tracking-wide text-cyan-300">
         MockMate
       </span>
     </NavbarBrand>


     <NavbarMenuToggle className="sm:hidden" />


     <NavbarContent className="hidden sm:flex gap-6" justify="center">
       {menuItems.map((item) => {
         const isActive = pathname === item.href;
         return (
           <Link
             key={item.href}
             href={item.href}
             className={`transition-colors ${
               isActive
                 ? "text-cyan-300 font-semibold underline underline-offset-4"
                 : "text-gray-400 hover:text-cyan-300"
             }`}
           >
             {item.name}
           </Link>
         );
       })}
     </NavbarContent>

      <NavbarContent as="div" className="items-center relative" justify="end">
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						{/* <Avatar
							as="button"
							className="transition-transform"
							color="secondary"
							name="User Avatar"
							size="md"
							src={session?.user?.image || "https://i.pravatar.cc/150?u=a042581f4e29026704d"}
						/> */}
						<Image
							as="button"
							alt="User Avatar"
							className="transition-transform cursor-pointer rounded-full border-2 border-zinc-500"
							color="secondary"
							name="User Avatar"
							size="md"
							src={session?.user?.image || "https://i.pinimg.com/736x/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.jpg"}
							width={42}
							height={42}
						/>
					</DropdownTrigger>

					{
						session?.user ? <DropdownMenu className="text-dark" aria-label="Profile Actions" variant="flat">
							<DropdownItem href={"/user"} key="profile" className="h-14 gap-2" as={Link}>
								<p className="font-semibold">Signed in as</p>
								<p className="font-semibold">{session.user.email}</p>
							</DropdownItem>
							{/* {session?.user?.role == "admin" && <DropdownItem href="/councelling" key="admin" as={Link}>Councelling</DropdownItem>} */}
							<DropdownItem onClick={async (e) => {
								e.preventDefault()
								await signOut({ redirect: false })
								toast.success('Logout Successful!');
							}} key="logout" color="danger">Log Out</DropdownItem>
						</DropdownMenu> : <DropdownMenu aria-label="Profile Actions" variant="flat">
							<DropdownItem href={"/login?next=" + pathname} key="login" as={Link}>Log In</DropdownItem>
						</DropdownMenu>
					}

				</Dropdown>
			</NavbarContent>

      <NavbarMenu className="pt-[5rem] bg-black text-cyan-300">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.href} className="w-full" onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
