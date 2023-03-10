import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";


const stripePromise: any | null = loadStripe(process.env.REACT_APP_STRIPE_PK ?? '');
console.log(stripePromise)


const Payment = () => {
	interface IBook {
		title: string;
		_id: string;
		price: string | boolean;
		detail: string;
		duration: string;
		btn: string;
		plan: string;

	}
	const bookings: any = useLoaderData();
	const booking: IBook = bookings[0]

	return (
		<div className="w-96 lg:w-[440px] p-10 my-10 rounded-lg dark:shadow-white dark:shadow-sm shadow-xl mx-auto dark:bg-white ">
			<h3 className="text-3xl font-semibold">Payment for {booking.title}</h3>
			<p className="text-xl mt-4 text-violet-400">
				Please pay <strong>${booking.price}</strong> for get {booking.title}{" "}
			</p>
			<div className="md:w-96 my-12">
				{" "}
				<Elements stripe={stripePromise}>
					<CheckOutForm booking={booking} />
				</Elements>
			</div>
		</div>
	);
};

export default Payment;
