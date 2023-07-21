import io from "socket.io-client";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const socket = io('http://localhost:3333');

    socket.on('new:strategy', (data) => {
      console.log(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Conteúdo</div>;
};

export default Home;
