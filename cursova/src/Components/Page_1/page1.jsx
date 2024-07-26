import Footer from "./Footer";
import Header from "./header"
import Page_1_body from "./page_1_body";
import Section_2 from "./section2";
import Reviews from "./section3";
function Page1(){

    const sampleReviews = [
        { text: 'Great experience! Highly recommend.', author: 'John Doe' },
        { text: 'Awesome service and fantastic atmosphere.', author: 'Jane Smith' },
        // Add more reviews as needed
      ];

    return(
        <div className="body_page1">
            <Header/>
            <Page_1_body/>
            <Section_2/>
            <Reviews reviews={sampleReviews}/>
            <Footer/>
        </div>
    );
}

export default Page1