

function Reviews(props){

    const { reviews } = props;

    
    return(
        <div className="Reviews">
            <div className="Reviews_section_3">
                <div className="Reviews_header">
                    <p className="Reviews_header_text_1">Hear From Our Fans</p>
                    <p className="Reviews_header_text_2">Our dedicated fans are always excited about their experiences with us. Hear what they have to say. </p>
                </div>
                <div className="Review">
                    {reviews.map((review, index) => (
                    <div key={index} className="Review_item">
                    <p className="Review_text">{review.text}</p>
                    <p className="Review_author">{review.author}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews
