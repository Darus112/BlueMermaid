import CartContainer from "../components/CartContainer";
import Bounce from "react-reveal/Bounce";

export default function Orders() {
  return (
    <>
      <Bounce>
        <div className="flex items-center justify-center my-12">
          <CartContainer />
        </div>
      </Bounce>
    </>
  );
}
