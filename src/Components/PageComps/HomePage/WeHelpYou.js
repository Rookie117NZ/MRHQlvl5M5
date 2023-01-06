import styles from './WeHelpYou.module.css'

export default function WeHelpYou() {
    return(<>
    <div className={styles.WeHelpMainBox}>
        <div className={styles.WeHelpTextBox}>
            <div className={styles.WeHelpText}>
                <h1>We help you find<br /> the best solution</h1>
                <p className={styles.WeHelpP}>
                    Metro NZ is one of the top Auckland property<br />
                    management companies. All of our staff are property<br/>
                    investors who hafve expert knowledge of the property<br />
                    market and your best interest in mind at all times. Check<br />
                    out our tailored services we offer as an Auckland<br />
                    property management company.
                </p>
            </div>
            <div className={styles.WeHelpButtonsBox}>
                <div className={styles.WeHelpButtons}>Property Owner</div>
                <div className={styles.WeHelpButtons}>Rent a Home</div>
            </div>
            </div>
            <div className={styles.WeHelpImageBox}>
                <img src='' alt="Webpage pic Here" className={styles.WeHelpImage}></img>
            </div>
    </div>
    </>)
}