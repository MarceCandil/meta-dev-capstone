import MyButton from 'components/Button/Button';
import { Navigate, useNavigate } from "react-router-dom";
import './Confirmation.css';
import { useLocalStorage } from 'hooks/useLocalStorage';

function ConfirmationPage() {
  const navigate = useNavigate()
  const [data] = useLocalStorage("booking-data");
  if (!data) { return <Navigate to="/" replace={true} />}

  const { firstName, guests, date, time } = data[data.length - 1];

  return (
    <section className="confirmation__wrapper wrapper">
        <h1>Hi {firstName}</h1><br /><br />
        <p>
          Your booking is confirmed. <br /> <br />
          A table for <strong>{guests}</strong> on <strong>{date}</strong> at <strong>{time}</strong>
        </p>
        <MyButton mt={30} onClick={() => navigate("/")} name='Home' variant='default'/>
    </section>
  );
}

export default ConfirmationPage;