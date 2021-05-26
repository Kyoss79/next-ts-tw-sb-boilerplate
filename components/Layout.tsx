import {FunctionComponent} from "react";
import {Footer} from "@components/Footer";
import {Header} from "@components/Header";
import styles from "@styles/Layout.module.scss"

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <main className="container mx-auto my-8">{children}</main>
        <Footer />
      </div>
    </>
  )
}
