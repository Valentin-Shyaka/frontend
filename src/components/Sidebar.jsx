

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export function SidebarComponent() {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="h-screen  ">
      <Sidebar.Logo>
      <div className='w-full flex justify-center p-6'>
            <img src={'/images.png'} width={100} height={100} alt="empty" className='justify-center'/>
          </div>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/books" icon={HiInbox}>
            Books
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/profile" icon={HiUser}>
            Profile
          </Sidebar.Item>
         
          
          <Sidebar.Item href="/dashboard/profile" icon={HiTable}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup >
        <Sidebar.ItemGroup className="mt-24">
         
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}