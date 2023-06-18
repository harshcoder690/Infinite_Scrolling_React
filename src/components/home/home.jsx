import React, { useState, useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthAction } from '../../actions/AuthAction';
import AuthContext from '../../contexts/AuthContext';
export const Home = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isloading, setLoading] = useState(true);
  const navigate = useNavigate();

  const {IsAuthenticated, dispatchIsAuthenticated} = useContext(AuthContext);

  const getData = async () => {
    fetch(`https://randomuser.me/api/?results=10&page=${page}`).then((result) => {
      result.json().then((arr) => {
        setData((prev) => [...prev, ...arr.results])
        setLoading(false);
      })
    }).catch((e) => {
      console.log(e);
    });
  }

  useEffect(() => {
    getData();
  }, [page])

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const lg = () => {
    dispatchIsAuthenticated(AuthAction(!IsAuthenticated));
    navigate("/login");
  }

  return (
    <div className="Home">
      <div>
          <button className="bg-blue-500 items-end p-2 rounded" onClick={lg}>
            LogOut
          </button>
      </div> 
      {data.map((item) => (
        <div className="grid w-1/2 m-auto mt-1 gap-5 shadow-stone-200 border-slate-300 border-2 round" key={item.index}>
          <div className="flex w-49 justify-around items-center m-1 md:m-0">
            <h3 className="text-xs md:text-xl w-3/5 md:w-1/2">
              {item.name.title} {item.name.first} {item.name.last}
            </h3>
            <img className="object-scale-down w-1/2 h-1/2 md:object-none md:w-1/2" src={item.picture.large} alt="img" />
          </div>
        </div>
      ))}
      {isloading && (
        <img
          style={{
            margin: "auto",
            width: "100px",
            backgroundColor: "none",
            marginTop: "20px",
          }}
          src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif"
        />
      )}
    </div>
    )
}
