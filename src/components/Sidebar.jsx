

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export function SidebarComponent() {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className="h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/employee" icon={HiViewBoards}>
            Manage employees
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/category" icon={HiInbox}>
            Category
          </Sidebar.Item>
          <Sidebar.Item href="/dashboard/profile" icon={HiUser}>
            Profile
          </Sidebar.Item>
         
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup >
        <Sidebar.ItemGroup className="mt-24">
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}