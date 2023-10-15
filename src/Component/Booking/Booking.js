// import Book from "./Book";
import "./Booking.css";
import header_gif from "../../img/gif.gif";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import Loading from "../../Pages/Shared/Loading";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Navbar from "../../Pages/Shared/Navbar";
import Footer from "../../Pages/Shared/Footer";


const Booking = ({ order,setOrder, date, setDate}) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots, fees } = order;
  const formattedDate = format(date, 'PP');
  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
        serviceId: _id,
        serviceBooking: name,
        date: formattedDate,
        slot,
        fees,
        customerEmail: user.email,
        customerName: user.displayName,
        phone: event.target.phone.value
    }

    fetch('https://home-service-4vkz.onrender.com/booking', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                toast(`Service is booking at  ${formattedDate}`)
            }
            else{
                toast.error(`Already have an service on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            
            setOrder(null);
        });
}
  return (
    <section>
      <Navbar/>
      <div className="booking_header flex w-100 max-w-7xl mx-auto px-12 mb-28">
        <div className="w-2/5 flex items-center justify-center">
          <div className="">
                    <DayPicker className="pr-14"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
        </div>

        <div className="w-3/5">
          <img src={header_gif} alt="" />
        </div>
      </div>
      <div>
      <h4 className='text-4xl font-bold text-secondary text-center my-12 ' style={{color: '#0060E0'}}>Book {order.name} on {format(date, 'PP')}</h4>
      </div>
      <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2 mb-28' to ='/'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name"  value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn text-white bg-gradient-to-r from-secondary to-primary border-none w-full max-w-xs" />
                    </form>

                    <Footer/>
    </section>
  );
};

export default Booking;
