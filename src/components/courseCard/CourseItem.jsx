import { FaRegSmile, FaUsers } from "react-icons/fa";
import "./CourseItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/slices/cart";
import toast, { Toaster } from "react-hot-toast";
import { fetchCourseById } from "../../Redux/slices/course";

function CourseItem({ id, image, teacher, price, title, studentCount }) {
  const { theme } = useSelector((store) => store.global);
  const { data } = useSelector((store) => store.courses);
  const { addedProducts } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const getCourseInfoHandler = ()=>{
    dispatch(fetchCourseById(id))
  }
  const clickHandler = () => {
    if (isProductExistInCart()) {
      toast.error("این دوره قبلا به سبد خرید شما اضافه شده!");
    } else {
      toast.success("دوره با موفقیت به سبد خرید اضافه شد!");
      const courseInfo = data.find((course) => course.id === id);
      dispatch(addToCart(courseInfo));
    }
  };
  const isProductExistInCart = () => {
    return addedProducts.some((product) => product.id === id);
  };
  return (
    <>
      <Toaster position="top" />
      <div className={`courseCard ${theme}`}>
        <div className="cardHeader">
          <img src={image} onClick={getCourseInfoHandler} />
        </div>
        <div className="cardBody">
          <h4 className="courseTitle">{title}</h4>
          <p className="courseDesc">
            متن تستی کوتاه برای توضیحات مختصر در مورد دوره آموزشی
          </p>
          <div className="courseInfo">
            <div className="courseTeacher">
              <span>
                <FaRegSmile />
              </span>
              <p>{teacher}</p>
            </div>
            <div className="courseStudent">
              <p>{studentCount}</p>
              <span>
                <FaUsers />
              </span>
            </div>
          </div>
        </div>
        <div className="cardFooter">
          <button onClick={clickHandler}>ثبت نام</button>
          <span className="price">{price.toLocaleString()}</span>
        </div>
      </div>
    </>
  );
}

export default CourseItem;
