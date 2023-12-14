import { useParams } from "react-router-dom";

const Nextvedio = () => {
    const {id}=useParams()
    const embedurl="https://www.youtube.com/embed/"
  return (
    <div >
      <iframe
        className="v-u"
        width="560"
        height="315"
        src={embedurl+id}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Nextvedio;
