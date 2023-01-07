import styles from './LookingFor.module.css'

export default function LookingFor() {
    return(<>
    <div>
        <div className={styles.MainTitle}>
            <h1>Tell us what you are looking for!!</h1>
        </div>

        {/*Information Box Section */}
        <div className={styles.InfoAlignBox}>
            <div className={styles.InfoBoxes}>
                <img src='' alt='Appraisal' className={styles.Icons}></img>
                <h3>Property Jeff Appraisal</h3>
                <p>
                    We conduct a thorough appraisal of<br /> 
                    your property that you want to<br /> 
                    put up for rent based on the<br />
                    current rent market at that moment
                </p>
            </div>
            <div className={styles.InfoBoxes}>
                <img src='' alt='Tailored' className={styles.Icons}></img>
                <h3>Tailored Service</h3>
                <p>
                As point of difference we offer<br /> 
                specialized tailored services. Selling<br /> 
                a tenanted property can be a frustrating<br />
                time for vendors, agent and tenant.
                
                </p>
            </div>
            <div className={styles.InfoBoxes}>
            <img src='' alt='Listing' className={styles.Icons}></img>
                <h3>Property Listing</h3>
                <p>
                If you are a landlord, this will give<br />
                you a good indication of the quality<br /> 
                of properties that we are currently<br /> 
                under management with.
                </p>
            </div>
        </div>
        <div className={styles.ChangeToAlignBox}>
            <div className={styles.ChangeToBox}>
                <img src='' alt='ChangeTo' className={styles.Icons}></img>
                <h3>Change to Metro NZ Property<br /> Management Auckland</h3>
                <p>
                    Changing to Metro NZ Property management is<br />
                    easy. We collect the required information from<br />
                    you
                </p>
            </div>
        </div>

        {/*Customer Review Section */}
        <div className={styles.ReviewTitle}>
            <h2>See what our customers are saying about us</h2>
        </div>
        <div className={styles.ReviewBox}>
            <div className={styles.ReviewImageBox}>
                <img src='' alt='Review' className={styles.ReviewImage}></img>
            </div>
            <div className={styles.ReviewTextBox}>  
                <div className={styles.ReviewText}>
                    <h3>Customer Review</h3>
                    <p>
                        "Something something I really like this house because it has this<br />
                        feature and these curtains and has a layout that really appeals<br /> 
                        to my lifestyle blah blah blah"
                    </p>
                    <p>- Jeff Jefferson</p>
                </div>
            </div>  
        </div>
    </div>
    </>)
}