import "react-pro-sidebar/dist/css/styles.css";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from "react-pro-sidebar";
import { FaGem, FaHome } from "react-icons/fa";
import sidebarBg from "../../assets/images/bg2.jpg";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ collapsed, toggled, handleToggleSidebar }) => {
  return (
    <>
      <ProSidebar image={sidebarBg} collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <DiReact size={"3em"} />
            <span>DiepIT</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<MdDashboard />}>
              Dashboard <Link to={"/admin"} />
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Features">
              <MenuItem>
                Quản lý user
                <Link to={"/admin/manage-user"} />
              </MenuItem>
              <MenuItem>
                Quản lý quiz
                <Link to={"/admin/manage-quiz"} />
              </MenuItem>
              <MenuItem>
                Quản lý câu hỏi
                <Link to={"/admin/manage-question"} />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <Link to="/" className="sidebar-btn" rel="noopener noreferrer">
              <FaHome />
            </Link>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};
export default Sidebar;
