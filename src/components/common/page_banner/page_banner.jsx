import CustomContainer from "@/components/ui/custom_container/custom_container";
import styles from "./page_banner.module.scss";
import Link from "next/link";
import { ChevronRight, HouseFill } from "react-bootstrap-icons";

const PageBanner = ({ title, image }) => {
    return <section className={styles.PageBanner}
        style={{
            backgroundImage: `url('${image}')`
        }}
    >
        <div className={styles.overlay} />

        <CustomContainer>
            <div className={styles.cont}>
                <div className={styles.crumbs} data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <Link href="/"><HouseFill /> Home</Link>
                    <span><ChevronRight /></span>
                    <span>{title}</span>
                </div>
                <h1 data-aos="fade-up">{title}</h1>
            </div>
        </CustomContainer>


    </section>
}

export default PageBanner;