import styles from './LookingFor.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function LookingFor() {
    const [reviews, setReviews] = useState([]);
    


    useEffect(() => {  
        const config = {
            method: 'get',
            url: 'http://localhost:27017',
            headers: {  }
        };
        
        axios(config)
        .then(function (response) {
            setReviews(response.data);
            console.log(response)    
        })
        .catch(function (error) {
          console.log(error);
        });

    //    axios.get("http://localhost:3005").then((res) => {
    //      setReviews(res.reviews);
    //      console.log(res);
    //    });
    }, []);


    //useEffect(() => {
    //const mockReviews = async (req, res) => {
    //    try {
    //        const result = await fetch('http://localhost:3005');
    //        setReviews(res.result);
    //        console.log(result)
    //    } catch (e){
    //      console.log(e)
    //    }
    //  };
    //  
    //});

    return(
    <div>
        <div className={styles.MainTitle}>
            <h1>Tell us what you are looking for!!</h1>
        </div>

        {/*Information Box Section */}
        <div className={styles.InfoAlignBox}>
            <div className={styles.InfoBoxes}>
                <img src='' alt='Appraisal' className={styles.Icons}></img>
                <h3>Property Appraisal</h3>
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
                    
                    {reviews.map((reviews) => (
                        <p>{reviews.customer}<br />
                        {reviews.review}</p>
                    ))}

                </div>
            </div>  
        </div>
    </div>
    )
}