import Football from "../../assets/Football_Stadium.jpg";

function Page_1_body() {
  const handleScheduleClick = () => {
    window.location.href = "/schedule";
  };
  return (
    <>
      <div className="Page1_text">
        <div>
          <p className="Paragraph_page1">
            Welcome to the World Championships in Football
          </p>
        </div>
        <div className="div_buttons">
          <button className="Button_Page1_high"> Get Ticket</button>
          <button className="Button_Page1_high" onClick={handleScheduleClick}>
            Schedule
          </button>
        </div>
        <div className="ImageStadium">
          <img src={Football} alt="картинка стадіону"></img>
        </div>
      </div>
    </>
  );
}

export default Page_1_body;
