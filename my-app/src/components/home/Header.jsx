import { NAVIGATIONS } from "@/constants/header";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import SidebarMenuMobile from "./SidebarMenuMobile";
import styles from "@/styles/home/header.module.scss";

const customStyles = {
  content: {
    top: "80px",
    left: "0",
    right: "auto",
    bottom: "auto",
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    borderRadius: "0",
  },
};

const LANGUAGES = [
  {
    id: "en",
    name: "English",
  },
  {
    id: "vi",
    name: "Tiếng Việt",
  },
];
const Header = () => {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img className={styles.logo} src="/images/logo.svg" alt="logo" />
            <div className={styles.desktop}>
              <div className={styles.navigation}>
                {NAVIGATIONS.map((item) => (
                  <Link key={item.id} href={item.link}>
                    <div
                      className={
                        router.asPath === item.link ? styles.active : ""
                      }
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.mobile}>
              <SidebarMenuMobile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
